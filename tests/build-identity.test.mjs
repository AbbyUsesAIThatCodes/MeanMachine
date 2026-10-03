import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { allocateOrdinal } from '../scripts/build-identity.mjs';
test('durable allocator reserves distinct increasing ordinals under concurrent calls', async () => {
  const folder = await mkdtemp(path.join(tmpdir(), 'mean-build-test-'));
  const values = await Promise.all(Array.from({ length: 8 }, () => allocateOrdinal(folder, 'local-test')));
  assert.deepEqual(values.sort((a, b) => a - b), [1, 2, 3, 4, 5, 6, 7, 8]);
  assert.equal(await allocateOrdinal(folder, 'local-test'), 9);
  assert.equal(await allocateOrdinal(folder, 'local-other'), 1);
  const rows = (await readFile(path.join(folder, 'ledger.jsonl'), 'utf8')).trim().split('\n');
  assert.equal(rows.length, 10);
});
