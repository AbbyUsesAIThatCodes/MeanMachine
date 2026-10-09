import test from 'node:test';
import assert from 'node:assert/strict';
import { GEAR_FAMILIES } from '../src/gear-families.js';
import { createGearGeometry } from '../src/gear-presentation.js';
import { RING_THICKNESS } from '../src/shared/cargo.js';

test('every gear family has the same whole height and exact half height with unchanged footprint', () => {
  const profiles = new Set();
  for (const family of GEAR_FAMILIES) {
    const whole = createGearGeometry(family), half = createGearGeometry(family, 0.5);
    whole.computeBoundingBox(); half.computeBoundingBox();
    const height = geometry => geometry.boundingBox.max.y - geometry.boundingBox.min.y;
    assert.ok(Math.abs(height(whole) - RING_THICKNESS) < 1e-6);
    assert.ok(Math.abs(height(half) * 2 - height(whole)) < 1e-6);
    assert.equal(whole.boundingBox.min.x, half.boundingBox.min.x);
    assert.equal(whole.boundingBox.max.z, half.boundingBox.max.z);
    assert.ok([...whole.attributes.position.array].every(Number.isFinite));
    profiles.add(`${whole.attributes.position.count}:${whole.boundingBox.min.x}:${whole.boundingBox.max.z}`);
    whole.dispose(); half.dispose();
  }
  assert.ok(profiles.size >= 6, 'Families have distinct silhouettes and/or window patterns.');
});
