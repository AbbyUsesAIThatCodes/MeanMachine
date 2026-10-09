// Read only the accepted commit, never another worker's working files.
import { execFileSync } from 'node:child_process';
import { parseAst } from 'rollup/parseAst';
export const BASELINE = '8d61b0f653e74553a6fb0ded7bb64f148dcb7c93';
export const sourceAtBaseline = file => execFileSync('git', ['show', `${BASELINE}:${file}`], { encoding: 'utf8', windowsHide: true });
const slug = text => text.replace(/<[^>]*>/g, ' ').replace(/\{\{v\d+\}\}/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 64).replace(/-$/, '');
function readConstant(file, name) {
  const ast = parseAst(sourceAtBaseline(file));
  const declaration = ast.body.flatMap(n => (n.declaration || n).declarations || []).find(d => d.id.name === name);
  function literal(node) {
    if (node.type === 'Literal') return node.value;
    if (node.type === 'ArrayExpression') return node.elements.map(literal);
    if (node.type === 'ObjectExpression') return Object.fromEntries(node.properties.map(p => [p.key.name ?? p.key.value, literal(p.value)]));
    if (node.type === 'CallExpression' && node.callee.object?.name === 'Object' && node.callee.property.name === 'freeze') return literal(node.arguments[0]);
    throw new Error(`Unsupported literal extraction in ${file}:${name}`);
  }
  return literal(declaration.init);
}
export function extractBaseline() {
  const messages = {}, locations = {}, transformed = {}, contract = {};
  function record(prefix, value, location) {
    let base = `${prefix}.${slug(value) || 'text'}`, id = base, n = 2;
    while (Object.hasOwn(messages, id) && messages[id] !== value) id = `${base}-${n++}`;
    messages[id] = value;
    (locations[id] ||= []).push(location);
    contract[id] = { tokens: [...value.matchAll(/\{\{(v\d+)\}\}/g)].map(m => m[1]).sort(), markup: [...value.matchAll(/<[^>]*>/g)].map(m => m[0]) };
    return id;
  }
  for (const file of ['main', 'math-state', 'scene', 'answer-cues']) {
    let source = sourceAtBaseline(`src/${file}.js`);
    if (file === 'math-state') source = source.replace(/export const SHIPMENTS = Object\.freeze\(\{[\s\S]*?\n\}\);/, 'export { SHIPMENTS } from "./content-runtime.js";\nimport { SHIPMENTS } from "./content-runtime.js";');
    const ast = parseAst(source);
    function transform(node, parents = []) {
      const raw = source.slice(node.start, node.end);
      // All copy is extracted; selectors, build provenance, SVG and logic keys stay code.
      const line = source.slice(source.lastIndexOf('\n', node.start) + 1, source.indexOf('\n', node.end) < 0 ? source.length : source.indexOf('\n', node.end));
      const ignored = /manifest\.|build-provenance|compact-build|#build-id|particle\.innerHTML/.test(line) || parents.some(p => p.type === 'ImportDeclaration');
      const value = node.type === 'Literal' && typeof node.value === 'string' ? node.value : node.type === 'TemplateLiteral' ? node.quasis.map((q, i) => q.value.cooked + (i < node.expressions.length ? `{{v${i}}}` : '')).join('') : null;
      const isCopy = value !== null && /[A-Za-z]/.test(value) && /\s/.test(value) && !/^[#.\[]/.test(value) && !['button, input, select, textarea', 'button[type="submit"], button:not([type]), input[type="submit"]', '(prefers-reduced-motion: reduce)', ' is-translucent', 'Mean Machine Observations', 'Quantity Tag'].includes(value);
      if (!ignored && isCopy) {
        const id = record(file, value, `src/${file}.js:${source.slice(0, node.start).split('\n').length}`);
        const args = node.type === 'TemplateLiteral' ? node.expressions.map((e, i) => `v${i}: ${transform(e, [...parents, node])}`).join(', ') : '';
        return `contentMessage(${JSON.stringify(id)}${args ? `, { ${args} }` : ''})`;
      }
      const children = Object.values(node).flatMap(v => Array.isArray(v) ? v : [v]).filter(v => v && typeof v === 'object' && typeof v.type === 'string' && Number.isInteger(v.start));
      let result = raw;
      for (const child of children.sort((a, b) => b.start - a.start)) result = result.slice(0, child.start - node.start) + transform(child, [...parents, node]) + result.slice(child.end - node.start);
      return result;
    }
    transformed[`src/${file}.js`] = `import { message as contentMessage } from './content-runtime.js';\n` + transform(ast);
  }
  const html = sourceAtBaseline('index.html');
  const encyclopediaHtml = html.match(/      <ul>([\s\S]*?)<\/ul>\r?\n      <p class="small">/)[0].replace(/\r?\n      <p class="small">$/, '').trim();
  const encyclopedia = [...encyclopediaHtml.matchAll(/<li><strong>(.*?)<\/strong><ul>(.*?)<\/ul><\/li>/g)].map((m, index) => ({ id: ['pallets', 'gear-quantity', 'mean', 'median'][index], title: m[1], paragraphs: [...m[2].matchAll(/<li>(.*?)<\/li>/g)].map(p => p[1]) }));
  // Preserve exact DOM scaffold; data-content bindings only touch existing text nodes.
  let htmlWithoutReference = html.replace(encyclopediaHtml, '<ul id="encyclopedia-entries"></ul>');
  let htmlCounter = 0;
  const shellBindings = [];
  htmlWithoutReference = htmlWithoutReference.replace(/>([^<>]+)</g, (whole, value, offset) => {
    if (!/[A-Za-z]/.test(value)) return whole;
    const id = record('shell', value, `index.html:${html.slice(0, offset).split('\n').length}`);
    shellBindings.push(id); htmlCounter++;
    return `><!--content:${id}-->${value}<`;
  });
  transformed['index.html'] = htmlWithoutReference;
  const shipments = readConstant('src/math-state.js', 'SHIPMENTS');
  const layouts = readConstant('src/layout-review.js', 'LAYOUT_REVIEWS');
  const pack = {
    schemaVersion: '1.0.0', contentRevision: '018.1', packId: 'mean-machine-018', adapter: 'mean-sharing-v1',
    lessons: Object.entries(shipments).map(([id, s]) => ({ id, ...s, mechanic: 'equal-share-half-units', stageOrder: ['prediction', 'sharing', 'calculation', 'explanation', 'complete'], encyclopediaRefs: ['pallets', 'gear-quantity', 'mean'] })),
    scenarios: Object.entries(layouts).map(([count, values]) => ({ id: `layout-${count}`, palletCount: Number(count), shipmentId: 'halves', values, mechanic: 'equal-share-half-units', encyclopediaRefs: ['pallets', 'gear-quantity', 'mean'] })),
    encyclopedia, messages,
  };
  return { pack, contract: { baseline: BASELINE, messages: contract, locations, shellBindings }, transformed };
}
