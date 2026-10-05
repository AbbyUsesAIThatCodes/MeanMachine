import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { extractBaseline, sourceAtBaseline } from '../scripts/content/extract-baseline.mjs';
import { DEFAULT_CONTENT, getContent, importContent, restoreDefaults, message } from '../src/content-runtime.js';
import { parseContent } from '../src/content-validation.js';
import * as math from '../src/math-state.js';
const candidate = () => structuredClone(DEFAULT_CONTENT);
test.afterEach(() => restoreDefaults());

test('canonical defaults are extracted from accepted source: all data, order, copy and reference paragraphs', async () => {
  assert.deepEqual(DEFAULT_CONTENT, extractBaseline().pack);
  assert.deepEqual(JSON.parse(await readFile('content/adapter-contract.json')), extractBaseline().contract);
  for (const f of ['gear-families.js', 'style.css', 'drag-plane.js', 'pallet-layout.js', 'piece-layout.js', 'gear-presentation.js']) assert.equal((await readFile(`src/${f}`, 'utf8')).replaceAll('\r\n', '\n'), sourceAtBaseline(`src/${f}`).replaceAll('\r\n', '\n'), `${f} is unchanged`);
});

test('whole, half and every fixed scenario have exactly the old state, IDs, goals, answers and replay behavior', async () => {
  const dir = path.resolve('.build/baseline-state'); await mkdir(dir, { recursive: true });
  for (const f of ['math-state.js', 'gear-families.js']) await writeFile(path.join(dir, f), sourceAtBaseline(`src/${f}`));
  const old = await import(pathToFileURL(path.join(dir, 'math-state.js')).href);
  assert.deepEqual(math.SHIPMENTS, old.SHIPMENTS);
  const scenarios = [...DEFAULT_CONTENT.lessons.map(l => [l.id, null]), ...DEFAULT_CONTENT.scenarios.map(s => [s.shipmentId, s.values])];
  for (const [key, values] of scenarios) {
    let current = math.createState(key, values), baseline = old.createState(key, values);
    const equal = () => assert.deepEqual(current, baseline);
    const run = (fn, ...args) => { current = math[fn](current, ...args); baseline = old[fn](baseline, ...args); equal(); };
    equal(); run('predict', '99');
    assert.deepEqual(math.dispatch(current), old.dispatch(baseline));
    run('split', current.pallets.length - 1); run('settle'); run('merge', current.pallets.length - 1); run('settle'); run('undo'); run('reset');
    const target = math.total(current) / current.originals.length;
    for (let n = 0; n < 100; n++) {
      const loads = math.loads(current);
      if (loads.every(v => v === target)) break;
      const a = loads.findIndex(v => v > target), b = loads.findIndex(v => v < target);
      if (current.pallets[a].at(-1).halves === 2 && Math.min(loads[a] - target, target - loads[b]) === 1) { run('split', a); run('settle'); }
      run('move', a, b); run('settle');
    }
    assert.equal(math.dispatch(current).success, true);
    assert.deepEqual(math.dispatch(current), old.dispatch(baseline));
    current = math.dispatch(current).state; baseline = old.dispatch(baseline).state;
    const total = math.total(current) / 2, count = current.originals.length;
    for (const answers of [{ total: 'wrong', count, mean: total / count }, { total, count: 99, mean: total / count }, { total, count, mean: 'wrong' }, { total, count, mean: `${total}/${count}` }]) assert.deepEqual(math.checkCalculation(current, answers), old.checkCalculation(baseline, answers));
    current = math.checkCalculation(current, {total,count,mean:total/count}).state; baseline = old.checkCalculation(baseline, {total,count,mean:total/count}).state;
    run('explain', 'Same observations, conserved total.'); run('reset'); run('replay');
  }
  for (const input of ['', ' ', '-1', '0', '4', '3.5', '3½', '3 1/2', '7/2', '1/0', 'NaN', 'Infinity', '1001', '2e3']) assert.ok(Object.is(math.numericAnswer(input), old.numericAnswer(input)), input);
});

test('invalid JSON, schema, broken references, unsupported mechanics and unsafe markup preserve last good content', () => {
  const good = candidate(); good.contentRevision = 'test-good'; good.lessons[0].values[0] = 5;
  importContent(JSON.stringify(good)); const lastGood = getContent();
  const invalid = ['{', JSON.stringify({}), 'x'.repeat(262145)];
  for (const mutate of [p => p.schemaVersion = '2.0.0', p => p.lessons[0].mechanic = 'execute-js', p => p.lessons[0].encyclopediaRefs = ['missing-entry'], p => p.lessons[0].values[0] = 1.5, p => p.lessons[0].values[0] = 999, p => p.lessons[0].values = [2,4,8], p => p.lessons.reverse(), p => p.lessons[0].answerKey = 5, p => p.messages[Object.keys(p.messages)[0]] = '<img src=x onerror=alert(1)>', p => p.scenarios[2].palletCount = 4, p => p.encyclopedia[0].id = 'mean', p => p.lessons[0].halves = true]) { const pack = candidate(); mutate(pack); invalid.push(JSON.stringify(pack)); }
  for (const text of invalid) { assert.throws(() => importContent(text), /Content was not applied/); assert.equal(getContent(), lastGood); }
  const template = Object.keys(good.messages).find(id => good.messages[id].includes('{{v0}}'));
  const badToken = candidate(); badToken.messages[template] += '{{unknown}}'; assert.throws(() => importContent(JSON.stringify(badToken)), /runtime tokens/); assert.equal(getContent(), lastGood);
});

test('edit one numeric value in an isolated fixture, derive the new answers, then restore exact defaults', () => {
  const fixture = candidate(); fixture.lessons[0].values[0] = 5;
  importContent(JSON.stringify(fixture)); const state = math.createState();
  assert.deepEqual(state.originals, [5,4,9]); assert.equal(math.total(state) / 2, 18);
  assert.equal(math.calculationRequirement(state, {total:18,count:3,mean:6}), null);
  assert.equal(math.calculationRequirement(state, {total:15,count:3,mean:5}).field, 'total');
  restoreDefaults(); assert.deepEqual(math.createState().originals, [2,4,9]); assert.equal(getContent(), DEFAULT_CONTENT);
});

test('no persisted learner save targets or script execution are introduced', async () => {
  const files = ['main.js','math-state.js','content-runtime.js','content-validation.js','content-ui.js'];
  for (const file of files) assert.doesNotMatch(await readFile(`src/${file}`,'utf8'), /\beval\s*\(|new Function|localStorage|sessionStorage|indexedDB|\bfetch\s*\(/);
  for (const file of ['main.js','math-state.js']) assert.doesNotMatch(sourceAtBaseline(`src/${file}`), /localStorage|sessionStorage|indexedDB/);
  assert.equal(parseContent(JSON.stringify(DEFAULT_CONTENT)).contentRevision, '018.1');
  assert.throws(() => message('missing'), /Unknown content message/);
  for (const value of Object.values(DEFAULT_CONTENT.messages)) assert.ok(!['(prefers-reduced-motion: reduce)', ' is-translucent', 'Mean Machine Observations', 'Quantity Tag'].includes(value), 'Media queries, CSS classes and object identity stay code-owned.');
});
