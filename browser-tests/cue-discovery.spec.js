import { test, expect } from '@playwright/test';

async function enter(page, reduced = false) {
  await page.goto('/'); await page.locator('#reduce-motion').setChecked(reduced); await page.locator('#skip-intro').click();
}
const cue = (page, id) => page.locator(`#${id}`).evaluate(input => ({
  engaged: input.dataset.cueEngaged, state: input.dataset.answerState,
  animation: getComputedStyle(input).animationName, duration: getComputedStyle(input).animationDuration,
  iterations: getComputedStyle(input).animationIterationCount, border: getComputedStyle(input).boxShadow,
  sparkle: getComputedStyle(input.parentElement, '::after').animationName,
  sparkleDuration: getComputedStyle(input.parentElement, '::after').animationDuration,
}));

for (const width of [1366, 1024]) test(`the existing six-pallet example is directly discoverable at ${width}px`, async ({ page }) => {
  await page.setViewportSize({ width, height: 768 }); await enter(page, true);
  const button = page.getByRole('button', { name: 'Try 6-Pallet Example', exact: true });
  await expect(button).toBeVisible(); await expect(button).toBeInViewport();
  expect(await button.evaluate(e => { const r = e.getBoundingClientRect(); return e.contains(document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2)); })).toBe(true);
  await expect(page.locator('#reference')).toBeHidden();
  await page.screenshot({ path: `test-results/six-pallet-access-${width}.png` });
  await button.click();
  await expect(page.locator('#shipment-code')).toHaveText('6-Pallet Layout Review');
  await expect(page.locator('#loads .load')).toHaveCount(6);
  await expect(page.locator('#originals strong')).toHaveText(['1', '5', '2', '4', '3', '3']);
  await expect(page.getByRole('heading', { name: 'What Is Your Prediction?' })).toBeVisible();
  await expect(page.locator('#reference')).toBeHidden();
  await page.locator('#next').click();
  await expect(page.locator('#originals strong')).toHaveText(['2', '4', '9']);
});

test('the slow cue repeats until field or answer-button engagement and stays quiet after incorrect input', async ({ page }) => {
  await enter(page);
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'false', animation: 'answer-glow', duration: '4s', iterations: 'infinite', sparkle: 'answer-sparkle', sparkleDuration: '4s' });
  await page.waitForTimeout(4300);
  expect(await page.locator('#prediction').evaluate(e => e.getAnimations()[0].currentTime)).toBeGreaterThan(4000);
  expect(await cue(page, 'prediction')).toMatchObject({ animation: 'answer-glow', iterations: 'infinite' });
  await page.locator('#prediction').click();
  await expect(page.locator('#prediction')).toHaveValue('');
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'true', state: 'required', animation: 'none', sparkle: 'none' });
  expect((await cue(page, 'prediction')).border).not.toBe('none');
  await page.locator('#stage-title').click();
  await page.locator('#prediction').fill('incorrect');
  await page.getByRole('button', { name: 'Record Prediction' }).click();
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'true', state: 'required', animation: 'none', sparkle: 'none' });
  await expect(page.getByRole('status')).toContainText('Enter a quantity');
  await page.locator('#replay').click();
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'false', animation: 'answer-glow' });
  await page.getByRole('button', { name: 'Record Prediction' }).click();
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'true', state: 'required', animation: 'none', sparkle: 'none' });
  await page.locator('#prediction').fill('5'); await page.locator('#prediction').fill('');
  expect(await cue(page, 'prediction')).toMatchObject({ animation: 'none', sparkle: 'none' });
});

test('new required fields and lessons receive fresh cues without reanimating acknowledged answers', async ({ page }) => {
  await enter(page); await page.locator('#prediction').fill('4'); await page.getByRole('button', { name: 'Record Prediction' }).click();
  await page.locator('#reduce-motion').check();
  for (const destination of [0, 0, 0, 1]) {
    await page.locator('#source').selectOption('2'); await page.locator('#destination').selectOption(String(destination)); await page.locator('#move').click();
    await page.waitForFunction(() => !window.__meanScene.snapshot().pending);
  }
  await page.locator('#reduce-motion').uncheck(); await page.locator('#dispatch').click();
  expect(await cue(page, 'total')).toMatchObject({ engaged: 'false', animation: 'answer-glow' });
  await page.locator('#total').fill('15');
  expect(await cue(page, 'count')).toMatchObject({ engaged: 'false', animation: 'answer-glow' });
  await page.getByRole('button', { name: 'Check Calculation' }).click();
  expect(await cue(page, 'count')).toMatchObject({ engaged: 'true', animation: 'none' });
  await page.locator('#count').fill('15'); await page.getByRole('button', { name: 'Check Calculation' }).click();
  expect(await cue(page, 'count')).toMatchObject({ state: 'required', animation: 'none' });
  await page.locator('#count').fill('3');
  expect(await cue(page, 'mean')).toMatchObject({ engaged: 'false', animation: 'answer-glow' });
  await page.locator('#mean').click();
  await page.locator('#total').fill('0'); await page.locator('#total').fill('15');
  expect(await cue(page, 'mean')).toMatchObject({ engaged: 'true', state: 'required', animation: 'none', sparkle: 'none' });
  await page.locator('#mean').fill('5'); await page.getByRole('button', { name: 'Check Calculation' }).click();
  expect(await cue(page, 'explanation')).toMatchObject({ engaged: 'false', animation: 'answer-glow' });
  await page.getByRole('button', { name: 'Finish Shipment' }).focus(); await page.keyboard.press('Enter');
  expect(await cue(page, 'explanation')).toMatchObject({ engaged: 'true', animation: 'none' });
  await page.locator('#replay').click();
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'false', animation: 'answer-glow' });
  await page.locator('#prediction').focus(); await page.keyboard.type('bad');
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'true', animation: 'none' });
  await page.locator('#six-pallet-example').click();
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'false', animation: 'answer-glow' });
});

test('reduced-motion toggles retain static cues and never restart an engaged field', async ({ page }) => {
  await enter(page, true);
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'false', animation: 'none', sparkle: 'none' });
  expect((await cue(page, 'prediction')).border).not.toBe('none');
  await page.locator('#prediction').click();
  await page.locator('#reduce-motion').uncheck();
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'true', animation: 'none', sparkle: 'none' });
  await page.locator('#replay').click();
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'false', animation: 'answer-glow' });
  await page.locator('#reduce-motion').check();
  expect(await cue(page, 'prediction')).toMatchObject({ engaged: 'false', animation: 'none', sparkle: 'none' });
});
