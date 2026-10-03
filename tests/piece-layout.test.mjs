import test from 'node:test';
import assert from 'node:assert/strict';
import { stackLayout } from '../src/piece-layout.js';
import * as math from '../src/math-state.js';

test('two half-layers occupy exactly one whole-ring height without piece-count gaps', () => {
  const whole = stackLayout([{ id: 'whole', origin: 0, halves: 2 }], 0.26, 0.29);
  const halves = stackLayout([{ id: 'a', origin: 0, halves: 1 }, { id: 'b', origin: 0, halves: 1 }], 0.26, 0.29);
  assert.equal(halves[0].height + halves[1].height, whole[0].height);
  assert.equal(halves[1].y, halves[0].y + halves[0].height);
  assert.equal(halves[1].y + halves[1].height, whole[0].y + whole[0].height);
});

test('equal quantities have equal top heights even when one pallet has more physical pieces', () => {
  const first = [{ id: 'a', origin: 0, halves: 2 }, { id: 'b', origin: 0, halves: 2 }];
  const second = [{ id: 'c', origin: 1, halves: 2 }, { id: 'd', origin: 1, halves: 1 }, { id: 'e', origin: 1, halves: 1 }];
  const top = pieces => { const last = stackLayout(pieces, 0.26).at(-1); return last.y + last.height; };
  assert.equal(top(first), top(second));
  assert.deepEqual(stackLayout([], 0.26), []);
});

test('solved fractional layout preserves piece identity and quantity-scaled thickness', () => {
  let state = math.predict(math.createState('halves'), '3');
  state = math.settle(math.move(state, 1, 0));
  state = math.settle(math.split(state, 1));
  state = math.settle(math.move(state, 1, 0));
  const layouts = state.pallets.map(pieces => stackLayout(pieces, 0.26));
  for (let index = 0; index < layouts.length; index++) {
    assert.deepEqual(layouts[index].map(p => p.id), state.pallets[index].map(p => p.id));
    assert.deepEqual(layouts[index].map(p => p.origin), state.pallets[index].map(p => p.origin));
    assert.equal(layouts[index].at(-1).fraction, 0.5);
  }
  assert.equal(layouts[0].at(-1).y, layouts[1].at(-1).y);
});
