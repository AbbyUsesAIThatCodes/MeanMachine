import { test, expect } from '@playwright/test';
const scene = page => page.evaluate(() => window.__meanScene.snapshot());
const quantities = snapshot => snapshot.pallets.map(p => p.quantity);
const pieces = snapshot => snapshot.rings.map(r => ({ id: r.identity, root: r.root, origin: r.origin, family: r.family, fraction: r.fraction })).sort((a, b) => a.id.localeCompare(b.id));
async function enter(page, { halves = false, count = null, reduce = true } = {}) {
  await page.goto('/'); await page.locator('#reduce-motion').setChecked(reduce); await page.locator('#skip-intro').click();
  if (halves) await page.locator('#next').click();
  if (count) {
    await page.locator('#reference-button').click(); await page.getByText('Larger Layout Review', { exact: true }).click();
    await page.locator('#review-pallet-count').selectOption(String(count)); await page.locator('#open-layout-review').click();
  }
}
async function ready(page, options) {
  await enter(page, options); await page.locator('#prediction').fill('4'); await page.getByRole('button', { name: 'Record Prediction' }).click();
}
async function settle(page) { await page.waitForFunction(() => !window.__meanScene.snapshot().pending); }
async function move(page, source, destination) {
  await page.locator('#source').selectOption(String(source)); await page.locator('#destination').selectOption(String(destination));
  await page.locator('#move').click(); await settle(page);
}
async function splitByMouse(page, source) {
  const before = await scene(page), point = before.topPickPoints[source];
  await page.mouse.move(point.x, point.y);
  expect((await scene(page)).interaction.actionPreview).toMatchObject({ type: 'split', source, pieceIds: [point.identity] });
  await expect(page.locator('#gear-hint')).toContainText('Double-click to split');
  await page.mouse.dblclick(point.x, point.y); await settle(page);
  expect((await scene(page)).rings).toHaveLength(before.rings.length + 1);
  return point.identity;
}

test('golden required-answer cues explain the existing lock and clear when each step is satisfied', async ({ page }) => {
  await enter(page, { reduce: false });
  await expect(page.getByRole('heading', { name: 'What Is Your Prediction?' })).toBeVisible();
  await expect(page.locator('#prediction')).toHaveAttribute('data-answer-state', 'required');
  await expect(page.locator('#answer-guidance')).toContainText('paused until you record your prediction');
  const initial = await scene(page), point = initial.topPickPoints[2];
  await page.mouse.dblclick(point.x, point.y);
  expect(pieces(await scene(page))).toEqual(pieces(initial));
  await expect(page.locator('#prediction')).toBeFocused();
  expect(await page.locator('#prediction').evaluate(e => getComputedStyle(e.parentElement, '::after').animationIterationCount)).toBe('infinite');
  await page.screenshot({ path: 'test-results/golden-prediction.png' });
  await page.locator('#prediction').fill('4');
  await expect(page.locator('#prediction')).toHaveAttribute('data-answer-state', 'ready');
  await expect(page.locator('#answer-guidance')).toContainText('Record Prediction to unlock');
  await page.getByRole('button', { name: 'Record Prediction' }).click(); await page.locator('#reduce-motion').check();
  for (let n = 0; n < 3; n++) await move(page, 2, 0); await move(page, 2, 1);
  await page.locator('#dispatch').click();
  await expect(page.getByLabel('Total Gears', { exact: true })).toHaveAttribute('data-answer-state', 'required');
  await page.locator('#total').fill('15'); await page.locator('#count').fill('15');
  await page.getByRole('button', { name: 'Check Calculation' }).click();
  await expect(page.locator('#count')).toBeFocused(); await expect(page.locator('#count')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.getByRole('status')).toContainText('Count the labeled pallets');
  await page.locator('#count').fill('3'); await expect(page.locator('#mean')).toHaveAttribute('data-answer-state', 'required');
  await page.locator('#mean').fill('5'); await expect(page.locator('#answer-guidance')).toContainText('All three answers are ready');
  const equal = await scene(page); await page.mouse.dblclick(equal.topPickPoints[0].x, equal.topPickPoints[0].y);
  expect(pieces(await scene(page))).toEqual(pieces(equal));
  await page.getByRole('button', { name: 'Check Calculation' }).click();
  await expect(page.locator('#explanation')).toHaveAttribute('data-answer-state', 'required');
  await page.locator('#explanation').fill('Fifteen gears shared across three pallets gives five each.');
  await expect(page.locator('#answer-guidance')).toContainText('explanation is ready');
  await page.getByRole('button', { name: 'Finish Shipment' }).click();
  await expect(page.getByRole('heading', { name: 'Shipment Complete' })).toBeVisible();
});

test('OS and explicit reduced motion keep a static golden border without sparkle', async ({ browser, page }) => {
  const context = await browser.newContext({ reducedMotion: 'reduce' }), reducedPage = await context.newPage();
  await reducedPage.goto('/'); await reducedPage.locator('#skip-intro').click();
  await expect(reducedPage.locator('#reduce-motion')).toBeChecked();
  expect(await reducedPage.locator('#prediction').evaluate(e => getComputedStyle(e.parentElement, '::after').animationName)).toBe('none');
  expect(await reducedPage.locator('#prediction').evaluate(e => getComputedStyle(e).boxShadow)).not.toBe('none');
  await context.close();
  await enter(page); expect(await page.locator('#prediction').evaluate(e => getComputedStyle(e.parentElement, '::after').animationName)).toBe('none');
});

for (const halves of [false, true]) test(`double-click split and either adjacent half merge preserve the ${halves ? 'half' : 'whole'} lesson`, async ({ page }) => {
  for (const which of ['lower', 'upper']) {
    await ready(page, { halves }); const before = await scene(page), source = before.pallets.length - 1;
    // An unrelated selected source must not turn the first click into a transfer.
    await page.locator('#source').selectOption('0');
    const root = await splitByMouse(page, source), split = await scene(page);
    const id = `${root}-${which === 'lower' ? 'a' : 'b'}`;
    const point = which === 'upper' ? split.topPickPoints[source] : split.ringSurfacePoints.find(p => p.identity === id);
    await page.mouse.move(point.x, point.y);
    const preview = (await scene(page)).interaction;
    expect(preview.hovered).toBe(id); expect(preview.actionPreview).toMatchObject({ type: 'merge', source, pieceIds: [`${root}-a`, `${root}-b`] });
    await expect(page.locator('#gear-hint')).toContainText('either highlighted half');
    await page.mouse.dblclick(point.x, point.y); await settle(page);
    expect(pieces(await scene(page))).toEqual(pieces(before)); expect(quantities(await scene(page))).toEqual(quantities(before));
    await page.locator('#undo').click(); expect((await scene(page)).rings).toHaveLength(before.rings.length + 1);
    await page.locator('#source').selectOption(String(source)); await page.locator('#merge').press('Enter'); await settle(page);
    expect(pieces(await scene(page))).toEqual(pieces(before));
  }
});

test('dragging invalidates a pending click and never performs an accidental split or merge', async ({ page }) => {
  await ready(page); const before = await scene(page), from = before.topPickPoints[2], to = before.pickPoints[0];
  await page.mouse.click(from.x, from.y);
  await page.mouse.move(from.x, from.y); await page.mouse.down(); await page.mouse.move(to.x, to.y, { steps: 10 }); await page.mouse.up(); await settle(page);
  expect(quantities(await scene(page))).toEqual([3, 4, 8]); expect(pieces(await scene(page))).toEqual(pieces(before));
  const after = await scene(page), top = after.topPickPoints[0];
  await page.mouse.click(top.x, top.y); await page.waitForTimeout(550);
  expect(pieces(await scene(page))).toEqual(pieces(before)); expect(quantities(await scene(page))).toEqual([3, 4, 8]);
  await page.mouse.dblclick(top.x, top.y); await settle(page);
  expect((await scene(page)).rings).toHaveLength(before.rings.length + 1);
  expect(quantities(await scene(page))).toEqual([3, 4, 8]);
});

test('double-clicking separated or incompatible halves never finds a hidden merge partner', async ({ page }) => {
  await ready(page, { halves: true }); await page.locator('#source').selectOption('1');
  await page.locator('#split').click(); await settle(page); await move(page, 1, 0);
  const separated = await scene(page);
  for (const source of [0, 1]) {
    const point = separated.topPickPoints[source]; await page.mouse.move(point.x, point.y);
    expect((await scene(page)).interaction.actionPreview).toBe(null);
    await page.mouse.dblclick(point.x, point.y);
    expect(pieces(await scene(page))).toEqual(pieces(separated));
    expect(quantities(await scene(page))).toEqual(quantities(separated));
  }
  await move(page, 0, 1); await page.locator('#source').selectOption('0');
  await page.locator('#split').click(); await settle(page); await move(page, 0, 1);
  const incompatible = await scene(page), point = incompatible.topPickPoints[1];
  await page.locator('#source').selectOption('1'); await expect(page.locator('#merge')).toBeDisabled();
  await page.mouse.move(point.x, point.y); expect((await scene(page)).interaction.actionPreview).toBe(null);
  await page.mouse.dblclick(point.x, point.y);
  expect(pieces(await scene(page))).toEqual(pieces(incompatible));
  expect(quantities(await scene(page))).toEqual(quantities(incompatible));
});

test('Escape, pointer cancellation, resize and blur cancel deferred clicks without later actions', async ({ page }) => {
  await ready(page); const before = await scene(page);
  for (const cancel of ['escape', 'cancel', 'resize', 'blur']) {
    const point = (await scene(page)).topPickPoints[2]; await page.mouse.click(point.x, point.y);
    if (cancel === 'escape') await page.keyboard.press('Escape');
    if (cancel === 'cancel') await page.evaluate(() => document.querySelector('#scene canvas').dispatchEvent(new PointerEvent('pointercancel', { pointerId: 1 })));
    if (cancel === 'resize') await page.setViewportSize({ width: 1280, height: 720 });
    if (cancel === 'blur') await page.evaluate(() => window.dispatchEvent(new Event('blur')));
    await page.waitForTimeout(550);
    expect((await scene(page)).interaction.pendingSingleClick).toBe(false);
    expect(pieces(await scene(page))).toEqual(pieces(before)); expect(quantities(await scene(page))).toEqual(quantities(before));
    await expect(page.locator('[data-pallet="2"]')).toHaveAttribute('aria-pressed', 'false');
  }
});

test('split and merge animations lock repeated actions and settle on interruption or reduced motion', async ({ page }) => {
  await ready(page, { halves: true, reduce: false }); const before = await scene(page), point = before.topPickPoints[1];
  await page.mouse.dblclick(point.x, point.y); await expect(page.locator('#dispatch')).toBeDisabled();
  await page.mouse.dblclick(point.x, point.y); await page.evaluate(() => window.dispatchEvent(new Event('blur'))); await settle(page);
  expect((await scene(page)).rings).toHaveLength(before.rings.length + 1);
  await page.locator('#source').selectOption('1'); await page.locator('#merge').click();
  await expect(page.locator('#move')).toBeDisabled(); await page.locator('#reduce-motion').check(); await settle(page);
  const merged = await scene(page); expect(pieces(merged)).toEqual(pieces(before));
  expect(merged.rings.every(r => r.scale.every(v => v === 1) && r.rotation.every(v => v === 0))).toBe(true);
  await page.locator('#reduce-motion').uncheck(); await page.locator('#split').click();
  await page.evaluate(() => document.querySelector('#scene canvas').dispatchEvent(new Event('webglcontextlost', { cancelable: true }))); await settle(page);
  await page.locator('#merge').click(); await settle(page); expect(pieces(await scene(page))).toEqual(pieces(before));
});

for (const count of [4, 5, 6]) for (const viewport of [{ width: 1366, height: 768 }, { width: 1024, height: 768 }]) {
  test(`${count} staggered pallets remain visible, reachable and transformable at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport); await ready(page, { count }); const before = await scene(page);
    expect(before.pallets).toHaveLength(count); expect(new Set(before.pallets.map(p => p.position[2])).size).toBe(2);
    for (let index = 0; index < count; index++) {
      const point = before.topPickPoints[index];
      expect(await page.evaluate(({ x, y }) => document.elementFromPoint(x, y) === document.querySelector('#scene canvas'), point)).toBe(true);
      await page.mouse.move(point.x, point.y); expect((await scene(page)).interaction.hovered).toBe(point.identity);
      const target = before.pickPoints[index];
      expect(await page.evaluate(({ x, y }) => document.elementFromPoint(x, y) === document.querySelector('#scene canvas'), target)).toBe(true);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
    await page.mouse.move(5, 5); await page.screenshot({ path: `test-results/layout-${count}-${viewport.width}.png` });
    await page.locator('#front-view').click(); const front = await scene(page);
    for (let index = 0; index < count; index++) {
      const point = front.topPickPoints[index]; await page.mouse.move(point.x, point.y);
      expect((await scene(page)).interaction.hovered).toBe(point.identity);
      const target = front.pickPoints[index];
      expect(await page.evaluate(({ x, y }) => document.elementFromPoint(x, y) === document.querySelector('#scene canvas'), target)).toBe(true);
    }
    await page.mouse.move(5, 5); await page.screenshot({ path: `test-results/layout-${count}-${viewport.width}-front.png` });
    await page.locator('#overview').click();
    const from = before.topPickPoints[count - 1], to = before.pickPoints[0];
    await page.mouse.move(from.x, from.y); await page.mouse.down(); await page.mouse.move(to.x, to.y, { steps: 10 }); await page.mouse.up(); await settle(page);
    const moved = await scene(page), expected = quantities(before); expected[count - 1] -= 1; expected[0] += 1;
    expect(quantities(moved)).toEqual(expected);
    const root = await splitByMouse(page, 0); await page.locator('#source').selectOption('0');
    await page.locator('#merge').focus(); expect((await scene(page)).interaction.actionPreview?.pieceIds).toEqual([`${root}-a`, `${root}-b`]);
    await page.locator('#merge').press('Enter'); await settle(page);
    expect(pieces(await scene(page))).toEqual(pieces(before)); expect(quantities(await scene(page))).toEqual(expected);
    expect((await scene(page)).originals).toEqual(before.originals);
    while ((await scene(page)).pallets[count - 1].quantity > 0) await move(page, count - 1, 0);
    const empty = await scene(page), returnFrom = empty.topPickPoints[0], emptyTarget = empty.pickPoints[count - 1];
    await page.mouse.move(returnFrom.x, returnFrom.y); await page.mouse.down(); await page.mouse.move(emptyTarget.x, emptyTarget.y, { steps: 10 });
    expect((await scene(page)).interaction.destination).toBe(count - 1);
    await page.mouse.up(); await settle(page);
    expect((await scene(page)).pallets[count - 1].quantity).toBe(1);
    expect(pieces(await scene(page))).toEqual(pieces(before));
  });
}
