import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import JSZip from 'jszip';
import { chromium } from '@playwright/test';

const latest = JSON.parse(await readFile('.build/latest.json', 'utf8'));
const evidence = path.resolve(process.env.MEAN_EVIDENCE_DIR || '.build/portable-review');
const output = path.join(evidence, latest.id);
const screenshots = path.join(evidence, `${latest.id}-screenshots`);
await mkdir(output, { recursive: true }); await mkdir(screenshots, { recursive: true });
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const zipPath = path.resolve(`${latest.artifact}.zip`), zipBytes = await readFile(zipPath);
const archive = await JSZip.loadAsync(zipBytes, { checkCRC32: true });
const extractedFiles = [];
for (const entry of Object.values(archive.files)) {
  if (entry.dir) continue;
  assert.ok(entry.name.startsWith(`${latest.id}/`), 'Canonical archive directory.');
  const relative = entry.name.slice(latest.id.length + 1), target = path.resolve(output, relative);
  assert.ok(target.startsWith(output + path.sep), 'Extraction remains inside this build directory.');
  const bytes = await entry.async('nodebuffer');
  assert.equal(sha256(bytes), sha256(await readFile(path.resolve(latest.artifact, relative))), `ZIP byte parity: ${relative}`);
  await mkdir(path.dirname(target), { recursive: true });
  const existing = await readFile(target).catch(error => { if (error.code === 'ENOENT') return null; throw error; });
  if (existing) assert.equal(sha256(existing), sha256(bytes), 'Existing extracted evidence is immutable.');
  else await writeFile(target, bytes, { flag: 'wx' });
  extractedFiles.push({ file: relative, bytes: bytes.length, sha256: sha256(bytes) });
}
const manifest = JSON.parse(await readFile(path.join(output, 'build-manifest.json'), 'utf8'));
const { artifact, ...expectedManifest } = latest;
assert.deepEqual(manifest, expectedManifest);

const normalize = snapshot => ({
  phase: snapshot.phase, stage: snapshot.stage, originals: snapshot.originals,
  camera: snapshot.camera, pallets: snapshot.pallets,
  rings: snapshot.rings.map(ring => Object.fromEntries(
    ['identity', 'family', 'root', 'origin', 'fraction', 'color', 'pattern', 'symbol', 'palletIndex', 'position', 'scale', 'rotation']
      .map(key => [key, ring[key]])
  )).sort((a, b) => a.identity.localeCompare(b.identity)),
});
const browser = await chromium.launch({ channel: process.env.MEAN_BROWSER_CHANNEL || 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
async function exercise(name, url, offline = false) {
  const context = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  const page = await context.newPage(), pageErrors = [], consoleErrors = [], externalRequests = [], states = {}, completed = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
  page.on('request', request => { if (/^https?:/.test(request.url()) && (offline || !request.url().startsWith(new URL(url).origin + '/'))) externalRequests.push(request.url()); });
  if (offline) await context.setOffline(true);
  const snapshot = () => page.evaluate(() => window.__meanScene.snapshot());
  const settled = () => page.waitForFunction(() => !window.__meanScene.snapshot().pending);
  async function open(kind) {
    await page.goto(url); await page.waitForFunction(() => window.__meanScene);
    await page.locator('#reduce-motion').check(); await page.locator('#skip-intro').click();
    if (kind === 'halves') await page.locator('#next').click();
    if (typeof kind === 'number') {
      await page.locator('#reference-button').click(); await page.getByText('Larger Layout Review', { exact: true }).click();
      await page.locator('#review-pallet-count').selectOption(String(kind)); await page.locator('#open-layout-review').click();
    }
    assert.equal((await snapshot()).stage, 'prediction');
    assert.equal(await page.locator('#prediction').getAttribute('data-answer-state'), 'required');
    if (offline && kind === 'whole') await page.screenshot({ path: path.join(screenshots, 'Golden-Required-Answer.png') });
    await page.locator('#prediction').fill('4'); await page.getByRole('button', { name: 'Record Prediction' }).click();
    assert.equal((await snapshot()).stage, 'sharing');
  }
  async function move(source, destination) {
    await page.locator('#source').selectOption(String(source)); await page.locator('#destination').selectOption(String(destination));
    await page.locator('#move').click(); await settled();
  }
  async function finish(total, count, mean) {
    await page.locator('#dispatch').click(); assert.equal((await snapshot()).stage, 'calculation');
    await page.getByLabel('Total Gears', { exact: true }).fill(String(total));
    await page.getByLabel('Number Of Pallets', { exact: true }).fill(String(count));
    await page.getByLabel('Mean: Gears Per Pallet', { exact: true }).fill(String(mean));
    await page.getByRole('button', { name: 'Check Calculation' }).click();
    assert.equal((await snapshot()).stage, 'explanation');
    await page.locator('#explanation').fill('The total gears stay the same. Dividing by the original pallet count gives the visible equal share.');
    await page.getByRole('button', { name: 'Finish Shipment' }).click();
    assert.equal((await snapshot()).stage, 'complete');
    assert.equal(await page.getByRole('heading', { name: 'Shipment Complete' }).isVisible(), true);
  }
  try {
    await open('whole'); states.wholeStart = normalize(await snapshot());
    for (let index = 0; index < 3; index++) await move(2, 0); await move(2, 1);
    states.wholeShared = normalize(await snapshot()); assert.deepEqual(states.wholeShared.pallets.map(p => p.quantity), [5, 5, 5]);
    await finish(15, 3, 5); completed.push('whole');
    await open('halves'); states.halfStart = normalize(await snapshot());
    await move(1, 0); await page.locator('#split').click(); await settled(); await move(1, 0);
    states.halfShared = normalize(await snapshot()); assert.deepEqual(states.halfShared.pallets.map(p => p.quantity), [3.5, 3.5]);
    await finish(7, 2, 3.5); completed.push('halves');
    if (offline) await page.screenshot({ path: path.join(screenshots, 'Original-Half-Lesson-Complete.png') });
    for (const count of [4, 5, 6]) {
      await open(count); const original = await snapshot(); states[`layout${count}Start`] = normalize(original);
      const top = original.topPickPoints[count - 1];
      await page.mouse.dblclick(top.x, top.y); await settled();
      assert.equal((await snapshot()).rings.length, original.rings.length + 1);
      const upper = (await snapshot()).topPickPoints[count - 1];
      await page.mouse.move(upper.x, upper.y);
      assert.equal((await snapshot()).interaction.actionPreview.pieceIds.length, 2);
      await page.mouse.dblclick(upper.x, upper.y); await settled();
      assert.deepEqual(normalize(await snapshot()), normalize(original));
      if (offline && count === 6) await page.screenshot({ path: path.join(screenshots, 'Six-Pallet-Staggered-Layout.png') });
      for (let guard = 0; guard < 40; guard++) {
        const current = await snapshot(), quantities = current.pallets.map(p => p.quantity);
        if (quantities.every(q => q === 3)) break;
        const source = quantities.findIndex(q => q > 3), destination = quantities.findIndex(q => q < 3);
        assert.ok(source >= 0 && destination >= 0); await move(source, destination);
      }
      states[`layout${count}Shared`] = normalize(await snapshot());
      assert.deepEqual(states[`layout${count}Shared`].pallets.map(p => p.quantity), Array(count).fill(3));
      assert.deepEqual((await snapshot()).originals, original.originals);
      await finish(count * 3, count, 3); completed.push(`${count}-pallet layout`);
    }
    const footer = await page.locator('#build-id').textContent();
    if (name !== 'source') assert.ok(footer.includes(latest.id));
    assert.deepEqual(pageErrors, [], `${name}: page exceptions`);
    assert.deepEqual(consoleErrors, [], `${name}: console errors`);
    assert.deepEqual(externalRequests, [], `${name}: external requests`);
    return { completed, footer, states, pageErrors, consoleErrors, externalRequests, offline };
  } finally { await context.close(); }
}

const results = {};
try {
  const productionUrl = process.env.MEAN_BASE_URL || 'http://127.0.0.1:4175/';
  if (process.env.MEAN_SOURCE_URL) results.source = await exercise('source', process.env.MEAN_SOURCE_URL);
  results.production = await exercise('production', productionUrl);
  results.extractedOffline = await exercise('extractedOffline', pathToFileURL(path.join(output, 'Start-Mean-Machine.html')).href, true);
  if (results.source) assert.deepEqual(results.source.states, results.production.states, 'Development source / production scene parity.');
  assert.deepEqual(results.production.states, results.extractedOffline.states, 'Served production / extracted offline scene parity.');
} finally { await browser.close(); }
const report = {
  checkedAt: new Date().toISOString(), manifest,
  zip: { path: zipPath, bytes: zipBytes.length, sha256: sha256(zipBytes), fileCount: extractedFiles.length, crcPassed: true, allEntriesMatchBuiltFiles: true },
  extractedDirectory: output, extractedFiles, screenshots,
  parity: { sourceCompared: Boolean(results.source), productionVersusExtractedOffline: true, ...results },
};
const reportPath = path.join(evidence, 'verification.json');
await writeFile(reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ reportPath, buildId: latest.id, zip: report.zip, completedOffline: results.extractedOffline.completed, comparedStates: Object.keys(results.production.states).length, externalRequests: 0, pageErrors: 0, consoleErrors: 0 }, null, 2));
