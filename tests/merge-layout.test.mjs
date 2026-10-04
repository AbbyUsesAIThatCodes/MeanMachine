import test from 'node:test';
import assert from 'node:assert/strict';
import * as math from '../src/math-state.js';
import { palletLayout } from '../src/pallet-layout.js';
import { LAYOUT_REVIEWS } from '../src/layout-review.js';
const ready = (key = 'whole', values) => math.predict(math.createState(key, values), '4');
const transfer = (state, source, destination) => math.settle(math.move(state, source, destination));

test('splitting and merging either sibling restores exact identity and quantity in both original lessons', () => {
  for (const key of ['whole', 'halves']) {
    const original = ready(key), source = original.pallets.length - 1;
    const divided = math.settle(math.split(original, source));
    const pair = divided.pallets[source].slice(-2);
    for (const half of pair) {
      const action = math.pieceAction(divided, half.id);
      assert.equal(action.type, 'merge'); assert.deepEqual(action.pieceIds, pair.map(p => p.id));
      const merged = math.settle(math.actOnPiece(divided, half.id));
      assert.deepEqual(merged.pallets, original.pallets);
      assert.deepEqual(merged.originals, original.originals);
      assert.deepEqual(math.undo(merged).pallets, divided.pallets);
      assert.ok(math.assertConserved(merged));
    }
  }
});

test('remote, incompatible, and covered halves cannot be merged or transformed', () => {
  const divided = math.settle(math.split(ready('halves'), 1));
  const pair = divided.pallets[1].slice(-2);
  const separated = transfer(divided, 1, 0);
  const before = JSON.stringify(separated);
  for (const source of [0, 1]) assert.throws(() => math.merge(separated, source), /same pallet/);
  for (const half of pair) assert.equal(math.pieceAction(separated, half.id), null);
  assert.equal(JSON.stringify(separated), before);
  const covered = transfer(divided, 0, 1);
  for (const half of pair) assert.equal(math.pieceAction(covered, half.id), null);
  assert.throws(() => math.merge(covered, 1));
  const returned = transfer(separated, 0, 1);
  assert.ok(math.compatibleTopHalves(returned, 1));
  assert.ok(math.assertConserved(math.settle(math.merge(returned, 1))));
  let incompatible = math.settle(math.split(divided, 0));
  incompatible = transfer(incompatible, 0, 1);
  assert.equal(math.compatibleTopHalves(incompatible, 1), null);
  assert.throws(() => math.merge(incompatible, 1));
});

test('pending transformations and every non-sharing phase reject repeated cargo operations', () => {
  const sharing = ready('halves');
  const split = math.split(sharing, 1);
  const merged = math.merge(math.settle(split), 1);
  for (const state of [split, merged]) {
    for (const action of [() => math.move(state, 1, 0), () => math.split(state, 1), () => math.merge(state, 1), () => math.actOnPiece(state, state.pallets[1].at(-1).id), () => math.undo(state), () => math.reset(state), () => math.replay(state), () => math.dispatch(state)]) assert.throws(action, /settle/);
  }
  const predicted = ready('whole', [1, 1]);
  const calculation = math.dispatch(predicted).state;
  const explanation = math.checkCalculation(calculation, { total: '2', count: '2', mean: '1' }).state;
  const complete = math.explain(explanation, 'One gear per pallet.');
  for (const state of [math.createState(), calculation, explanation, complete]) {
    const id = state.pallets[0].at(-1).id;
    assert.equal(math.pieceAction(state, id), null);
    for (const action of [() => math.move(state, 0, 1), () => math.split(state, 0), () => math.merge(state, 0), () => math.actOnPiece(state, id)]) assert.throws(action);
  }
});

test('counts one through six preserve original records across moves, halves, merge, reset and replay', () => {
  for (let count = 1; count <= 6; count++) {
    const values = Array.from({ length: count }, () => 3);
    const original = ready('halves', values);
    let state = math.settle(math.split(original, count - 1));
    state = math.settle(math.merge(state, count - 1));
    if (count > 1) state = transfer(state, count - 1, 0);
    assert.ok(math.assertConserved(state));
    assert.deepEqual(state.originals, values);
    assert.deepEqual(math.reset(state).pallets, original.pallets);
    assert.deepEqual(math.replay(state).originals, values);
    assert.equal(math.replay(state).stage, 'prediction');
    assert.equal(math.ORIGINS[count - 1].glyph.length > 0, true);
  }
  assert.throws(() => math.createState('whole', [1, 1, 1, 1, 1, 1, 1]), /six/);
  assert.throws(() => math.createState('whole', [1, 1, 1, 2]), /half gears/);
  assert.deepEqual(math.loads(math.createState('whole', [0, 0])), [0, 0]);
});

test('larger fixed layout fixtures can be solved without changing quantities or lesson order', () => {
  for (const values of Object.values(LAYOUT_REVIEWS)) {
    let state = ready('halves', values);
    const target = math.total(state) / state.pallets.length;
    for (let guard = 0; guard < 100 && !math.loads(state).every(q => q === target); guard++) {
      const quantities = math.loads(state), source = quantities.findIndex(q => q > target), destination = quantities.findIndex(q => q < target);
      const piece = state.pallets[source].at(-1);
      if (piece.halves === 2 && (quantities[source] - target === 1 || target - quantities[destination] === 1)) state = math.settle(math.split(state, source));
      state = transfer(state, source, destination);
    }
    assert.deepEqual(math.loads(state), values.map(() => target));
    const dispatched = math.dispatch(state);
    assert.equal(dispatched.success, true); assert.equal(dispatched.state.stage, 'calculation');
    assert.deepEqual(dispatched.state.originals, values);
  }
});

test('two and three pallet positions remain unchanged; larger rows use half-pitch staggering', () => {
  assert.deepEqual(palletLayout(3).map(p => [p.x, p.z]), [[-16.7, -7.1], [-14, -7.1], [-11.3, -7.1]]);
  assert.deepEqual(palletLayout(2).map(p => [p.x, p.z]), [[-15.35, -7.1], [-12.65, -7.1]]);
  for (const count of [4, 5, 6]) {
    const layout = palletLayout(count), front = layout.filter(p => p.row === 0), back = layout.filter(p => p.row === 1);
    assert.equal(front.length, Math.ceil(count / 2)); assert.equal(back.length, Math.floor(count / 2));
    assert.equal(new Set(layout.map(p => p.z)).size, 2);
    for (let i = 0; i < back.length; i++) assert.ok(Math.abs(back[i].x - front[i].x - 1.65) < 1e-10);
    assert.ok(front[0].z > back[0].z);
    assert.ok(Math.abs((Math.min(...layout.map(p => p.x)) + Math.max(...layout.map(p => p.x))) / 2 + 14) < 1e-10);
  }
});
