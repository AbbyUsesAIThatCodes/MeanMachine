import { test, expect } from '@playwright/test';
import { EXTERIOR_POSE } from '../src/shared/camera.js';

const snapshot = page => page.evaluate(() => window.__meanScene.snapshot());
async function open(page) { await page.goto('/'); await page.waitForFunction(() => window.__meanScene); }
async function enter(page) { await page.getByRole('button', { name: 'Skip Intro' }).click(); }
async function predict(page) { await page.locator('#prediction').fill('4'); await page.getByRole('button', { name: 'Record Prediction' }).click(); }
async function transfer(page, source, destination) {
  await page.locator('#source').selectOption(String(source)); await page.locator('#destination').selectOption(String(destination));
  await page.locator('#move').click(); await expect(page.locator('#dispatch')).toBeEnabled();
}

test('the exact shared exterior precedes Mean factory entry, and skip preserves original observations', async ({ page }) => {
  await open(page);
  const start = await snapshot(page);
  expect(start.camera.position).toEqual(EXTERIOR_POSE.position);
  expect(start.camera.target).toEqual(EXTERIOR_POSE.target);
  expect(start.camera.fov).toBe(EXTERIOR_POSE.fov);
  expect(start.camera.view?.enabled || false).toBe(false);
  expect(start.shellVisible).toBe(true);
  await expect(page.locator('#app')).toBeHidden();
  await page.locator('#enter-factory').click();
  await expect(page.locator('#scene')).toHaveAttribute('data-phase', 'entering');
  await enter(page);
  const end = await snapshot(page);
  expect(end.phase).toBe('teaching'); expect(end.shellVisible).toBe(false);
  expect(end.pallets.map(p => p.quantity)).toEqual([2, 4, 9]); expect(end.rings).toHaveLength(15);
  await expect(page.locator('#stage-title')).toBeFocused();
  await expect(page.locator('#prediction-record')).toBeHidden();
});

test('animated arrival and reduced motion reach the same fitted endpoint as skip', async ({ page }) => {
  test.setTimeout(45000);
  await open(page); await enter(page); const skipped = await snapshot(page);
  await open(page); await page.locator('#enter-factory').click();
  await expect(page.locator('#scene')).toHaveAttribute('data-phase', 'teaching', { timeout: 15000 });
  const animated = await snapshot(page);
  expect(animated.camera).toEqual(skipped.camera);
  await open(page); await page.locator('#reduce-motion').check(); await page.locator('#enter-factory').click();
  const reduced = await snapshot(page); expect(reduced.camera).toEqual(skipped.camera);
  expect(reduced.pallets).toEqual(skipped.pallets);
});

test('3D canvas hit testing moves one identified ring and keeps all source appearances', async ({ page }) => {
  await open(page); await enter(page); await page.locator('#reduce-motion').check(); await predict(page);
  const before = await snapshot(page);
  const hit = before.pickPoints;
  await page.mouse.click(hit[2].x, hit[2].y);
  await expect(page.locator('#source')).toHaveValue('2');
  await expect(page.locator('[data-pallet="2"]')).toHaveAttribute('aria-pressed', 'true');
  await page.mouse.click(hit[0].x, hit[0].y);
  await expect(page.locator('.load .value')).toHaveText(['3', '4', '8']);
  const after = await snapshot(page);
  expect(after.rings).toHaveLength(15);
  for (const original of before.rings) {
    const moved = after.rings.find(ring => ring.identity === original.identity);
    for (const field of ['color', 'pattern', 'symbol', 'origin', 'fraction']) expect(moved[field]).toBe(original[field]);
  }
});

test('bouncy horizontal halves conserve seven units and reduced motion settles exact geometry', async ({ page }) => {
  await open(page); await enter(page); await page.locator('#reduce-motion').check();
  await page.locator('#next').click(); await predict(page); await transfer(page, 1, 0);
  const before = await snapshot(page); const parent = before.rings.filter(r => r.palletIndex === 1).sort((a, b) => b.position[1] - a.position[1])[0];
  await page.locator('#reduce-motion').uncheck(); await page.locator('#split').click();
  await expect(page.locator('#dispatch')).toBeDisabled(); await expect(page.locator('#front-view')).toBeDisabled();
  await page.waitForFunction(() => window.__meanScene.snapshot().rings.filter(r => r.fraction === 0.5).length === 2);
  const mid = await snapshot(page); expect(mid.rings.reduce((sum, ring) => sum + ring.fraction, 0)).toBe(7);
  expect(mid.rings.some(ring => ring.scale[1] !== 1)).toBe(true);
  await page.locator('#reduce-motion').check(); await expect(page.locator('#dispatch')).toBeEnabled();
  await transfer(page, 1, 0);
  const end = await snapshot(page); expect(end.pallets.map(p => p.quantity)).toEqual([3.5, 3.5]);
  expect(end.rings).toHaveLength(8); expect(end.rings.reduce((sum, ring) => sum + ring.fraction, 0)).toBe(7);
  const halves = end.rings.filter(r => r.fraction === 0.5);
  for (const half of halves) { expect(half.color).toBe(parent.color); expect(half.pattern).toBe(parent.pattern); expect(half.symbol).toBe(parent.symbol); expect(half.root).toBe(parent.root); }
  expect(halves[0].position[1]).toBe(halves[1].position[1]);
  expect(end.rings.every(r => r.scale.every(value => value === 1))).toBe(true);
  await page.locator('#replay').click(); expect((await snapshot(page)).phase).toBe('teaching');
  await expect(page.locator('#intro')).toBeHidden();
});

test('resize and context loss settle safely without changing observations', async ({ page }) => {
  await open(page); await page.locator('#enter-factory').click(); await page.setViewportSize({ width: 1024, height: 768 });
  await page.evaluate(() => document.querySelector('#scene canvas').dispatchEvent(new Event('webglcontextlost', { cancelable: true })));
  await expect(page.getByRole('heading', { name: 'What Is Your Prediction?' })).toBeVisible();
  expect((await snapshot(page)).pallets.map(p => p.quantity)).toEqual([2, 4, 9]);
  await page.locator('#reduce-motion').check(); await predict(page); await transfer(page, 2, 0);
  await expect(page.locator('.load .value')).toHaveText(['3', '4', '8']);
});
