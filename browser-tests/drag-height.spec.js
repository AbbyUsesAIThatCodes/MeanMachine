import { test, expect } from '@playwright/test';
const scene = page => page.evaluate(() => window.__meanScene.snapshot());

for (const width of [1920, 1366, 1024]) for (const view of ['overview', 'front-view']) test(`level front/back dragging and exact stack landing at ${width}px in ${view}`, async ({ page }) => {
  await page.setViewportSize({ width, height: width === 1920 ? 1080 : 768 });
  await page.goto('/'); await page.locator('#reduce-motion').uncheck(); await page.locator('#skip-intro').click();
  await page.locator('#six-pallet-example').click(); await page.locator('#prediction').fill('3'); await page.getByRole('button', { name: 'Record Prediction' }).click();
  await page.locator(`#${view}`).click();
  const initial = await scene(page);
  for (const [source, destination, half] of [[1, 4, false], [4, 1, false], [0, 5, false], [5, 0, false], [1, 4, true], [4, 1, false]]) {
    if (half) { await page.locator('#source').selectOption(String(source)); await page.locator('#split').click(); await page.waitForFunction(() => !window.__meanScene.snapshot().pending); }
    const before = await scene(page), from = before.topPickPoints[source], to = before.pickPoints[destination];
    const piece = before.rings.find(r => r.identity === from.identity);
    const total = before.pallets.reduce((sum, p) => sum + p.quantity, 0);
    await page.mouse.move(from.x, from.y); await page.mouse.down(); await page.mouse.move(from.x + 8, from.y);
    const pickedUp = await scene(page), height = pickedUp.rings.find(r => r.identity === from.identity).position[1];
    expect(pickedUp.interaction.held).toBe(from.identity);
    for (let step = 1; step <= 10; step++) {
      await page.mouse.move(from.x + (to.x - from.x) * step / 10, from.y + (to.y - from.y) * step / 10);
      const held = await scene(page);
      expect(held.interaction.held).toBe(from.identity);
      expect(held.rings.find(r => r.identity === from.identity).position[1]).toBeCloseTo(height, 12);
      expect(held.interaction.heldBounds.min[1]).toBeGreaterThan(0.24);
      expect(held.camera).toEqual(initial.camera); expect(held.pallets).toEqual(before.pallets);
    }
    expect((await scene(page)).interaction.destination).toBe(destination);
    if (source === 4 && destination === 1 && !half) await page.screenshot({ path: `test-results/level-drag-${width}-${view}.png` });
    await page.mouse.up();
    // The existing landing animation must remain above the floor as well.
    for (let sample = 0; sample < 4; sample++) {
      const landing = await scene(page), moving = landing.rings.find(r => r.identity === from.identity);
      expect(moving.position[1]).toBeGreaterThan(0.14); expect(landing.camera).toEqual(initial.camera);
      if (!landing.pending) break;
      await page.waitForTimeout(80);
    }
    await page.waitForFunction(() => !window.__meanScene.snapshot().pending);
    const after = await scene(page), landed = after.rings.find(r => r.identity === from.identity);
    expect(after.interaction.held).toBeNull(); expect(after.camera).toEqual(initial.camera);
    expect(after.pallets[source].quantity).toBe(before.pallets[source].quantity - piece.fraction);
    expect(after.pallets[destination].quantity).toBe(before.pallets[destination].quantity + piece.fraction);
    expect(after.pallets.reduce((sum, p) => sum + p.quantity, 0)).toBe(total);
    expect(landed.position[0]).toBe(before.pallets[destination].position[0]);
    expect(landed.position[2]).toBe(before.pallets[destination].position[2]);
    expect(landed.position[1]).toBeCloseTo(0.14 + 0.29 + before.pallets[destination].quantity * 0.26, 12);
    expect(landed.scale).toEqual([1, 1, 1]); expect(landed.rotation).toEqual([0, 0, 0]);
    for (const key of ['family', 'root', 'origin', 'fraction']) expect(landed[key]).toBe(piece[key]);
  }
});
