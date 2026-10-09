import test from 'node:test';
import assert from 'node:assert/strict';
import { GEAR_FAMILIES, familyFor } from '../src/gear-families.js';
import * as math from '../src/math-state.js';
const ready = key => math.predict(math.createState(key), '4');
const move = (state, source, destination) => math.settle(math.move(state, source, destination));

test('starting piles mix stable families without initial adjacent duplicates', () => {
  const seen = new Set();
  for (const key of ['whole', 'halves']) {
    const state = math.createState(key);
    for (const pile of state.pallets) for (let i = 0; i < pile.length; i++) {
      seen.add(pile[i].family); assert.equal(familyFor(pile[i]), GEAR_FAMILIES[pile[i].family]);
      if (i) assert.notEqual(pile[i].family, pile[i - 1].family);
    }
    assert.deepEqual(math.replay(state).pallets, state.pallets);
  }
  assert.equal(seen.size, 8);
  assert.equal(new Set(GEAR_FAMILIES.map(family => family.color)).size, 8);
});

test('family identity survives moves, splitting, undo, reset and matching neighbors', () => {
  let state = ready('halves'); const original = state.pallets;
  state = move(state, 1, 0); const parent = state.pallets[1].at(-1);
  state = math.settle(math.split(state, 1));
  assert.ok(state.pallets[1].slice(-2).every(piece => piece.family === parent.family && piece.root === parent.root));
  state = move(state, 1, 0); assert.ok(math.assertConserved(state));
  state = math.undo(state); assert.equal(state.pallets[1].at(-1).family, parent.family);
  assert.deepEqual(math.reset(state).pallets, original);
  // Split halves are identical neighbors, which must remain legal after play.
  assert.equal(state.pallets[1].at(-1).family, state.pallets[1].at(-2).family);
  let whole = ready('whole');
  const destinationFamily = whole.pallets[0].at(-1).family;
  while (whole.pallets[2].at(-1).family !== destinationFamily) whole = move(whole, 2, 1);
  whole = move(whole, 2, 0);
  assert.equal(whole.pallets[0].at(-1).family, whole.pallets[0].at(-2).family);
  assert.ok(math.assertConserved(whole));
});
