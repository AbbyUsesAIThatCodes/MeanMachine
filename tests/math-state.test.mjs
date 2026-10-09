import test from 'node:test';
import assert from 'node:assert/strict';
import * as math from '../src/math-state.js';
const ready = key => math.predict(math.createState(key), '4');
const transfer = (state, a, b) => math.settle(math.move(state, a, b));
function wholeSolved() {
  let state = ready('whole');
  for (let n = 0; n < 3; n++) state = transfer(state, 2, 0);
  return transfer(state, 2, 1);
}
test('prediction gates sharing and preserves a wrong prediction without grading it', () => {
  assert.throws(() => math.move(math.createState(), 2, 0), /prediction/);
  assert.throws(() => math.predict(math.createState(), ''), /quantity/);
  const state = math.predict(math.createState(), '99');
  assert.equal(state.prediction, 99);
  assert.equal(state.stage, 'sharing');
  assert.throws(() => math.predict(state, '5'), /already/);
});
test('2,4,9 becomes 5,5,5 while originals and every origin quantity remain intact', () => {
  const state = wholeSolved();
  assert.deepEqual(math.loads(state), [10, 10, 10]);
  assert.deepEqual(state.originals, [2, 4, 9]);
  assert.equal(math.total(state), 30);
  assert.equal(state.pallets.length, 3);
  assert.ok(math.assertConserved(state));
  assert.equal(math.dispatch(state).state.stage, 'calculation');
});
test('2,5 reaches exact 3.5 shares with two half-layers retaining origin and root', () => {
  let state = transfer(ready('halves'), 1, 0);
  const parent = state.pallets[1].at(-1);
  state = math.settle(math.split(state, 1));
  const halves = state.pallets[1].slice(-2);
  assert.deepEqual(halves.map(piece => piece.halves), [1, 1]);
  assert.ok(halves.every(piece => piece.origin === parent.origin && piece.root === parent.root));
  assert.equal(state.pallets.flat().length, 8);
  state = transfer(state, 1, 0);
  assert.deepEqual(math.loads(state), [7, 7]);
  assert.equal(state.pallets.length, 2);
  assert.equal(math.total(state), 14);
  assert.equal(math.dispatch(state).success, true);
});
test('in-transit lock prevents moves, dispatch, undo, reset, and replay', () => {
  const state = math.move(ready('whole'), 2, 0);
  for (const action of [() => math.move(state, 2, 1), () => math.dispatch(state), () => math.undo(state), () => math.reset(state), () => math.replay(state)]) assert.throws(action, /settle/);
});
test('invalid moves and half splitting do not mutate the original state', () => {
  let state = ready('halves');
  const before = JSON.stringify(state);
  assert.throws(() => math.move(state, 0, 0));
  assert.throws(() => math.move(state, -1, 1));
  assert.equal(JSON.stringify(state), before);
  state = math.settle(math.split(state, 0));
  assert.throws(() => math.split(state, 0), /whole top/);
});
test('undo reverses a split; reset keeps the first prediction; replay clears it', () => {
  const state = ready('halves');
  assert.deepEqual(math.undo(math.settle(math.split(state, 1))).pallets, state.pallets);
  const moved = transfer(state, 1, 0);
  assert.deepEqual(math.undo(moved).pallets, state.pallets);
  assert.deepEqual(math.reset(moved), state);
  assert.equal(math.replay(moved).prediction, null);
});
test('dispatch compares quantity rather than rounded loads or piece count', () => {
  const state = ready('halves');
  assert.equal(math.dispatch(state).success, false);
  const forged = { ...state, pallets: [state.pallets[0], state.pallets[1].slice(1)] };
  assert.throws(() => math.dispatch(forged), /conserved/);
});
test('calculation distinguishes total, observation count and quotient errors', () => {
  const state = math.dispatch(wholeSolved()).state;
  assert.match(math.checkCalculation(state, { total: '14', count: '3', mean: '5' }).message, /total/);
  assert.match(math.checkCalculation(state, { total: '15', count: '15', mean: '5' }).message, /pallets/);
  assert.match(math.checkCalculation(state, { total: '15', count: '3', mean: '4' }).message, /Divide/);
  const result = math.checkCalculation(state, { total: '15', count: '3', mean: '5' });
  assert.equal(result.state.stage, 'explanation');
  assert.throws(() => math.explain(result.state, ''), /explanation/);
  assert.equal(math.explain(result.state, 'We kept 15 units and shared among 3 observations.').stage, 'complete');
});
test('fraction inputs accept 3.5, 3½, 3 1/2 and 7/2; empty and nonnumeric values fail', () => {
  for (const value of ['3.5', '3½', '3 1/2', '7/2']) assert.equal(math.numericAnswer(value), 3.5);
  for (const value of ['', ' ', 'NaN', 'Infinity', '1/0', '-1']) assert.ok(Number.isNaN(math.numericAnswer(value)));
});
test('many legal moves and undo operations conserve each original quantity', () => {
  let state = ready('halves');
  for (let n = 0; n < 200; n++) {
    const source = state.pallets[n % 2].length ? n % 2 : 1 - n % 2;
    if (n % 7 === 0 && state.pallets[source].at(-1).halves === 2) state = math.settle(math.split(state, source));
    else state = transfer(state, source, 1 - source);
    assert.ok(math.assertConserved(state));
    if (n % 5 === 0) state = math.undo(state);
    assert.ok(math.assertConserved(state));
  }
});
