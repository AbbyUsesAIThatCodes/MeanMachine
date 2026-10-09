import schema from '../content/schema.json' with { type: 'json' };
import contract from '../content/adapter-contract.json' with { type: 'json' };
export const MAX_CONTENT_BYTES = 256 * 1024;
export class ContentError extends Error {
  constructor(errors) { super(`Content was not applied:\n${errors.join('\n')}`); this.name = 'ContentError'; this.errors = errors; }
}
// Deliberately small interpreter for the checked-in schema vocabulary.
// Extending schema vocabulary requires a matching implementation here.
export function validateContent(pack) {
  const errors = [];
  const error = (path, message) => { if (errors.length < 30) errors.push(`${path}: ${message}`); };
  function visit(value, rule, path) {
    if (rule.const !== undefined && JSON.stringify(value) !== JSON.stringify(rule.const)) error(path, `must equal ${JSON.stringify(rule.const)} (adapter contract).`);
    if (rule.enum && !rule.enum.includes(value)) error(path, `must be one of ${rule.enum.join(', ')}.`);
    const kind = Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value;
    if (rule.type && (rule.type === 'integer' ? !Number.isSafeInteger(value) : kind !== rule.type)) { error(path, `expected ${rule.type}, received ${kind}.`); return; }
    if (typeof value === 'string') {
      if (value.length < (rule.minLength ?? 0) || value.length > (rule.maxLength ?? Infinity)) error(path, `length must be ${rule.minLength ?? 0}–${rule.maxLength ?? 'unlimited'} characters.`);
      if (rule.pattern && !new RegExp(rule.pattern).test(value)) error(path, 'contains unsupported characters; use plain text without angle brackets, straight double quotes, or control characters.');
    }
    if (typeof value === 'number' && (!Number.isFinite(value) || value < (rule.minimum ?? -Infinity) || value > (rule.maximum ?? Infinity))) error(path, `must be ${rule.minimum}–${rule.maximum}.`);
    if (Array.isArray(value)) {
      if (value.length < (rule.minItems ?? 0) || value.length > (rule.maxItems ?? Infinity)) error(path, `expected ${rule.minItems}–${rule.maxItems} items.`);
      if (rule.uniqueItems && new Set(value.map(v => JSON.stringify(v))).size !== value.length) error(path, 'items must be unique.');
      if (rule.items) value.forEach((item, i) => visit(item, rule.items, `${path}[${i}]`));
    } else if (kind === 'object' && rule.properties) {
      for (const key of rule.required || []) if (!Object.hasOwn(value, key)) error(`${path}.${key}`, 'required field is missing.');
      for (const [key, item] of Object.entries(value)) {
        if (!Object.hasOwn(rule.properties, key)) { if (rule.additionalProperties === false) error(`${path}.${key}`, 'unsupported field.'); }
        else visit(item, rule.properties[key], `${path}.${key}`);
      }
    }
  }
  visit(pack, schema, '$');
  if (errors.length) throw new ContentError(errors);
  const ids = (items, expected, path) => { if (items.map(x => x.id).join('|') !== expected.join('|')) error(path, `IDs and order must remain ${expected.join(', ')} in this adapter version.`); };
  ids(pack.lessons, ['whole', 'halves'], '$.lessons');
  ids(pack.scenarios, ['layout-4', 'layout-5', 'layout-6'], '$.scenarios');
  ids(pack.encyclopedia, ['pallets', 'gear-quantity', 'mean', 'median'], '$.encyclopedia');
  for (const [group, activities] of [['lessons', pack.lessons], ['scenarios', pack.scenarios]]) activities.forEach((activity, i) => {
    const path = `$.${group}[${i}]`, sum = activity.values.reduce((a, b) => a + b, 0);
    if (sum * 2 % activity.values.length) error(`${path}.values`, 'total must divide into exact whole or half gears across the original pallets.');
    if (group === 'lessons' && activity.values.length !== (i === 0 ? 3 : 2)) error(`${path}.values`, `this lesson slot requires ${i === 0 ? 3 : 2} pallets.`);
    if (group === 'scenarios' && (activity.palletCount !== i + 4 || activity.values.length !== activity.palletCount)) error(`${path}.values`, `layout-${i + 4} requires exactly ${i + 4} values and matching palletCount.`);
    if (group === 'lessons' && activity.halves !== (i === 1)) error(`${path}.halves`, 'legacy metadata must remain false for whole, true for halves; it does not enable or disable splitting.');
    for (const id of activity.encyclopediaRefs) if (!pack.encyclopedia.some(entry => entry.id === id)) error(`${path}.encyclopediaRefs`, `broken reference ${id}.`);
  });
  for (const [id, value] of Object.entries(pack.messages)) {
    const path = `$.messages.${id}`, expected = contract.messages[id];
    const tokens = [...value.matchAll(/\{\{([^{}]+)\}\}/g)].map(m => m[1]).sort();
    if (JSON.stringify(tokens) !== JSON.stringify(expected.tokens) || /\{\{|\}\}/.test(value.replace(/\{\{v\d+\}\}/g, ''))) error(path, `keep exactly these runtime tokens: ${expected.tokens.join(', ') || '(none)'}.`);
    const markup = [...value.matchAll(/<[^>]*>/g)].map(m => m[0]);
    if (JSON.stringify(markup) !== JSON.stringify(expected.markup) || /[<>]/.test(value.replace(/<[^>]*>/g, ''))) error(path, 'HTML structure and attributes are fixed by the adapter; edit only the text between tags.');
    // Some plain fragments occur inside double-quoted accessible labels. Prevent
    // an edited fragment from escaping its original HTML context.
    if (!expected.markup.length && /"/.test(value)) error(path, 'use curly quotation marks instead of straight double quotes.');
    if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)) error(path, 'control characters are unsupported.');
  }
  if (errors.length) throw new ContentError(errors);
  return pack;
}
export function parseContent(text) {
  if (new TextEncoder().encode(text).length > MAX_CONTENT_BYTES) throw new ContentError(['$: file exceeds 256 KiB.']);
  let value;
  try { value = JSON.parse(text); } catch (error) { throw new ContentError([`$: invalid JSON (${error.message}).`]); }
  return validateContent(value);
}
