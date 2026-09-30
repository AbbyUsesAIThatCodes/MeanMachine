import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { EXTERIOR_POSE, INTRO_DURATION_MS, sampleIntro } from '../src/shared/camera.js';
import { createRingGeometry, RING_THICKNESS } from '../src/shared/cargo.js';
import { PATTERNS } from '../src/shared/palette.js';

test('frozen shared files and retained license exactly match the consumer lock', async () => {
  const lock = JSON.parse(await readFile('docs/shared-assets/CONSUMER-LOCK.json', 'utf8'));
  assert.equal(lock.sourceRevision, '871ca3d2e5d605524cd846db13de3e22a1ea9658');
  for (const [file, hash] of Object.entries(lock.files)) {
    const local = file === 'CONSUMER-INSTRUCTIONS.md' ? `docs/shared-assets/${file}` : file === 'three-LICENSE.txt' ? `public/licenses/${file}` : file;
    assert.equal(createHash('sha256').update(await readFile(local)).digest('hex'), hash, file);
  }
});
test('Mean route begins at the shared exact exterior and finishes at the consumer endpoint', () => {
  const endpoint = { position: [-14, 9, 8], target: [-14, 1.2, -7.1], roll: 0 };
  const start = sampleIntro('mean', 0, endpoint);
  assert.deepEqual(start.position, EXTERIOR_POSE.position);
  assert.deepEqual(start.target, EXTERIOR_POSE.target);
  assert.equal(start.roll, 0);
  assert.equal(EXTERIOR_POSE.fov, 35);
  const end = sampleIntro('mean', INTRO_DURATION_MS, endpoint);
  end.position.forEach((value, index) => assert.ok(Math.abs(value - endpoint.position[index]) < 1e-12));
  assert.equal(end.complete, true);
});
test('every canonical relief preserves the full footprint and halves the layer thickness', () => {
  for (const pattern of PATTERNS) {
    const whole = createRingGeometry(pattern, 1), half = createRingGeometry(pattern, 0.5);
    whole.computeBoundingBox(); half.computeBoundingBox();
    assert.equal(whole.boundingBox.min.x, half.boundingBox.min.x);
    assert.equal(whole.boundingBox.max.z, half.boundingBox.max.z);
    assert.ok(Math.abs(half.boundingBox.max.y - half.boundingBox.min.y - RING_THICKNESS / 2) < 1e-7);
    whole.dispose(); half.dispose();
  }
});
