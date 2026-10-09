import defaults from '../content/default.json' with { type: 'json' };
import { parseContent, validateContent } from './content-validation.js';
const freeze = value => { if (value && typeof value === 'object') { Object.values(value).forEach(freeze); Object.freeze(value); } return value; };
export const DEFAULT_CONTENT = freeze(validateContent(defaults));
let active = DEFAULT_CONTENT;
export let SHIPMENTS;
export let LAYOUT_CONTENT;
function activate(pack) {
  active = freeze(pack);
  SHIPMENTS = freeze(Object.fromEntries(active.lessons.map(({ id, code, title, values, halves }) => [id, { code, title, values, halves }])));
  LAYOUT_CONTENT = freeze(Object.fromEntries(active.scenarios.map(s => [s.palletCount, s.values])));
  return active;
}
activate(active);
export const getContent = () => active;
export function importContent(text) { const next = parseContent(text); return activate(next); }
export function restoreDefaults() { return activate(DEFAULT_CONTENT); }
export function message(id, values = {}) {
  if (!Object.hasOwn(active.messages, id)) throw new Error(`Unknown content message: ${id}`);
  return active.messages[id].replace(/\{\{(v\d+)\}\}/g, (_, key) => {
    if (!Object.hasOwn(values, key)) throw new Error(`Missing content token: ${id}.${key}`);
    return String(values[key]);
  });
}
