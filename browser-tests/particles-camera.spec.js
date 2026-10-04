import { test, expect } from '@playwright/test';
const scene = page => page.evaluate(() => window.__meanScene.snapshot());
async function enter(page, count = 3, reduce = true) {
  await page.goto('/'); await page.locator('#reduce-motion').setChecked(reduce); await page.locator('#skip-intro').click();
  if (count === 2) await page.locator('#next').click();
  else if (count === 6) await page.locator('#six-pallet-example').click();
  else if (count > 3) {
    await page.locator('#reference-button').click(); await page.getByText('Larger Layout Review', { exact: true }).click();
    await page.locator('#review-pallet-count').selectOption(String(count)); await page.locator('#open-layout-review').click();
  }
}
async function ready(page, count, reduce = true) { await enter(page, count, reduce); await page.locator('#prediction').fill('3'); await page.getByRole('button', { name: 'Record Prediction' }).click(); }

test('gold triangles travel clockwise along all four field borders, retain translucency, and stop on engagement', async ({ page }) => {
  await enter(page, 3, false);
  const particles = page.locator('#prediction').locator('..').locator('.answer-particle');
  await expect(particles).toHaveCount(3);
  const styles = await particles.evaluateAll(elements => elements.map(e => ({
    animation: getComputedStyle(e).animationName, duration: getComputedStyle(e).animationDuration, iterations: getComputedStyle(e).animationIterationCount,
    fill: getComputedStyle(e.querySelector('path')).fill, stroke: getComputedStyle(e.querySelector('path')).stroke, fillOpacity: getComputedStyle(e.querySelector('path')).fillOpacity,
  })));
  expect(styles.every(s => s.animation === 'answer-orbit' && s.duration === '8s' && s.iterations === 'infinite')).toBe(true);
  expect(styles.map(s => s.fill)).toEqual(Array(3).fill('rgb(255, 224, 121)'));
  expect(styles.map(s => s.stroke)).toEqual(Array(3).fill('rgb(191, 137, 16)'));
  expect(styles.map(s => Number(s.fillOpacity))).toEqual([1, 0.3, 1]);
  const points = [];
  // Sample the real rendered animation, not a separate mathematical path.
  for (const fraction of [0.19, 0.44, 0.69, 0.94]) {
    const point = await particles.first().evaluate(async (particle, fraction) => {
      const animation = particle.getAnimations()[0]; animation.pause(); animation.currentTime = fraction * 8000;
      await new Promise(requestAnimationFrame);
      const p = particle.getBoundingClientRect(), field = particle.closest('.answer-field').querySelector('input').getBoundingClientRect();
      return { x: p.x + p.width / 2 - field.x, y: p.y + p.height / 2 - field.y, width: field.width, height: field.height };
    }, fraction);
    points.push(point);
  }
  expect(points[0].y).toBeCloseTo(1, 0); expect(points[0].x).toBeGreaterThan(20);
  expect(points[1].x).toBeCloseTo(points[1].width - 1, 0); expect(points[1].y).toBeGreaterThan(10);
  expect(points[2].y).toBeCloseTo(points[2].height - 1, 0); expect(points[2].x).toBeLessThan(points[1].x);
  expect(points[3].x).toBeCloseTo(1, 0); expect(points[3].y).toBeGreaterThan(10);
  await particles.first().evaluate(e => e.getAnimations()[0].play());
  await page.screenshot({ path: 'test-results/clockwise-gold-particles.png' });
  await page.locator('#prediction').click();
  expect(await particles.first().evaluate(e => e.getAnimations().length)).toBe(0);
  await expect(page.locator('.answer-particles')).toBeHidden();
  await page.locator('#replay').click();
  expect(await page.locator('.answer-particle').first().evaluate(e => e.getAnimations().length)).toBe(1);
  await page.locator('#reduce-motion').check();
  await expect(page.locator('.answer-particles')).toBeHidden();
  expect(await page.locator('.answer-particle').first().evaluate(e => getComputedStyle(e).animationName)).toBe('none');
});

for (const count of [2, 3, 4, 5, 6]) test(`${count} pallets preserve the chosen camera across moves, split/merge, undo and reset`, async ({ page }) => {
  await ready(page, count, count !== 6);
  for (const view of ['overview', 'front-view']) {
    await page.locator(`#${view}`).click(); const chosen = (await scene(page)).camera;
    const loads = (await scene(page)).pallets.map(p => p.quantity), highest = loads.indexOf(Math.max(...loads));
    const destination = highest === 0 ? count - 1 : 0;
    const transfers = [[highest, destination], [destination, highest], [count - 1, 0], [0, count - 1]];
    for (const [source, destination] of [...transfers, ...transfers]) {
      await page.locator('#source').selectOption(String(source)); await page.locator('#destination').selectOption(String(destination));
      await page.locator('#move').click(); expect((await scene(page)).camera).toEqual(chosen);
      await page.waitForFunction(() => !window.__meanScene.snapshot().pending); expect((await scene(page)).camera).toEqual(chosen);
    }
    await page.locator('#source').selectOption(String(count - 1)); await page.locator('#split').click();
    expect((await scene(page)).camera).toEqual(chosen); await page.waitForFunction(() => !window.__meanScene.snapshot().pending);
    await page.locator('#merge').click(); expect((await scene(page)).camera).toEqual(chosen);
    await page.waitForFunction(() => !window.__meanScene.snapshot().pending);
    await page.locator('#undo').click(); expect((await scene(page)).camera).toEqual(chosen);
    await page.locator('#reset').click(); expect((await scene(page)).camera).toEqual(chosen);
    await expect(page.locator(`#${view}`)).toHaveAttribute('aria-pressed', 'true');
  }
  const front = (await scene(page)).camera;
  await page.locator('#overview').click(); expect((await scene(page)).camera.position).not.toEqual(front.position);
  await page.locator('#replay').click(); expect((await scene(page)).camera).not.toEqual(front);
});

for (const width of [1366, 1024]) test(`six pallets retain original camera angles with fixed visible framing at ${width}px`, async ({ page }) => {
  await page.setViewportSize({ width, height: 768 }); await enter(page);
  const overview = (await scene(page)).camera;
  await page.locator('#front-view').click(); const front = (await scene(page)).camera;
  await page.locator('#six-pallet-example').click();
  for (const [view, original] of [['front-view', front], ['overview', overview]]) {
    await page.locator(`#${view}`).click(); const six = await scene(page);
    const direction = camera => { const delta = camera.position.map((value, i) => value - camera.target[i]), length = Math.hypot(...delta); return delta.map(value => value / length); };
    direction(six.camera).forEach((value, i) => expect(value).toBeCloseTo(direction(original)[i], 12));
    expect(six.camera.fov).toBe(original.fov);
    for (const point of [...six.topPickPoints, ...six.pickPoints, ...six.palletLabelBounds.flatMap(label => label.points)]) {
      expect(await page.evaluate(({ x, y }) => document.elementFromPoint(x, y) === document.querySelector('#scene canvas'), point)).toBe(true);
    }
    await page.screenshot({ path: `test-results/fixed-six-${width}-${view}.png` });
  }
  const chosen = (await scene(page)).camera;
  await page.locator('#prediction').fill('3'); await page.getByRole('button', { name: 'Record Prediction' }).click();
  await page.locator('#source').selectOption('1'); await page.locator('#destination').selectOption('0'); await page.locator('#move').click();
  await page.waitForFunction(() => !window.__meanScene.snapshot().pending);
  await page.locator('#front-view').click(); await page.locator('#overview').click();
  expect((await scene(page)).camera).toEqual(chosen);
});
