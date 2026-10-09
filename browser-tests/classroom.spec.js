import { test, expect } from '@playwright/test';
async function prediction(page, value = '6') {
  await page.getByLabel('My Predicted Share').fill(value);
  await page.getByRole('button', { name: 'Record Prediction' }).press('Enter');
}
async function move(page, source, destination) {
  await page.getByLabel('From', { exact: true }).selectOption(String(source));
  await page.getByLabel('To', { exact: true }).selectOption(String(destination));
  await page.getByRole('button', { name: /^Move Top/ }).press('Enter');
  await expect(page.getByRole('button', { name: 'Dispatch: Check Equal Shares' })).toBeEnabled();
}
test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Reduce Motion').check();
  await page.getByRole('button', { name: 'Skip Intro' }).click();
});
test('whole shipment keyboard flow separates prediction, equal shares, calculation, and explanation', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await expect(page.getByRole('button', { name: /^Pallet A, current load/ })).toBeDisabled();
  await prediction(page);
  await page.getByRole('button', { name: 'Dispatch: Check Equal Shares' }).click();
  await expect(page.getByRole('status')).toContainText('largest and smallest');
  for (let n = 0; n < 3; n++) await move(page, 2, 0);
  await move(page, 2, 1);
  await expect(page.locator('.load .value')).toHaveText(['5', '5', '5']);
  await expect(page.locator('#originals strong')).toHaveText(['2', '4', '9']);
  await page.getByRole('button', { name: 'Dispatch: Check Equal Shares' }).press('Enter');
  await page.getByLabel('Total Gears', { exact: true }).fill('15');
  await page.getByLabel('Number Of Pallets', { exact: true }).fill('15');
  await page.getByLabel('Mean: Gears Per Pallet').fill('5');
  await page.getByRole('button', { name: 'Check Calculation' }).press('Enter');
  await expect(page.getByRole('status')).toContainText('Count the labeled pallets');
  await page.getByLabel('Number Of Pallets', { exact: true }).fill('3');
  await page.getByRole('button', { name: 'Check Calculation' }).press('Enter');
  await expect(page.getByText('(2 + 4 + 9) ÷ 3')).toBeVisible();
  await page.getByLabel('My Explanation / Discussion Notes').fill('There are three observations and fifteen units, so each equal share is five.');
  await page.getByRole('button', { name: 'Finish Shipment' }).press('Enter');
  await expect(page.getByRole('heading', { name: 'Shipment Complete' })).toBeVisible();
  await expect(page.locator('#prediction-record')).toContainText('6');
  expect(errors).toEqual([]);
});
test('halves preserve the observation count and support undo/reset/replay', async ({ page }) => {
  await page.getByRole('button', { name: 'Try Half-Rings' }).click();
  await prediction(page, '4');
  await move(page, 1, 0);
  await page.getByRole('button', { name: 'Split Top Gear Into Halves' }).click();
  await expect(page.getByRole('button', { name: 'Move Top ½ Layer' })).toBeEnabled();
  await page.getByRole('button', { name: 'Undo Move' }).click();
  await expect(page.getByRole('button', { name: 'Move Top Ring', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Split Top Gear Into Halves' }).click();
  await move(page, 1, 0);
  await expect(page.locator('.load .value')).toHaveText(['3½', '3½']);
  await expect(page.locator('#originals strong')).toHaveText(['2', '5']);
  await page.getByRole('button', { name: 'Dispatch: Check Equal Shares' }).click();
  await page.getByLabel('Total Gears', { exact: true }).fill('7');
  await page.getByLabel('Number Of Pallets', { exact: true }).fill('2');
  await page.getByLabel('Mean: Gears Per Pallet').fill('7/2');
  await page.getByRole('button', { name: 'Check Calculation' }).click();
  await expect(page.getByText('= 3½ = 3.5')).toBeVisible();
  await page.getByRole('button', { name: 'Reset Arrangement' }).click();
  await expect(page.locator('.load .value')).toHaveText(['2', '5']);
  await expect(page.locator('#prediction-record')).toContainText('4');
  await page.getByRole('button', { name: 'Replay Shipment' }).click();
  await expect(page.getByLabel('My Predicted Share')).toBeVisible();
  await expect(page.locator('#prediction-record')).toBeHidden();
});
test('click-source destination is keyboard accessible and motion locks repeated actions', async ({ page }) => {
  await prediction(page);
  await page.getByLabel('Reduce Motion').uncheck();
  const source = page.getByRole('button', { name: /^Pallet C, current load/ });
  await source.focus();
  await source.press('Space');
  await expect(source).toBeFocused();
  await expect(source).toHaveAttribute('aria-pressed', 'true');
  const destination = page.getByRole('button', { name: /^Pallet A, current load/ });
  await destination.press('Space');
  await expect(page.getByRole('button', { name: 'Undo Move' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Dispatch: Check Equal Shares' })).toBeEnabled();
  await expect(destination).toBeFocused();
  await expect(page.locator('.load .value')).toHaveText(['3', '4', '8']);
});
test('laptop layout and reference controls remain readable', async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.getByRole('button', { name: 'Reference', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Factory Reference' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Reference', exact: true })).toBeFocused();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
  expect(overflow).toBe(false);
  await expect(page.locator('#build-id')).toContainText(/0\.1\.0_Foam-Rings_[a-z0-9-]+_build-/);
  await page.screenshot({ path: 'test-results/mean-interface-checkpoint.png' });
});

test('production UI displays the exact embedded artifact identity', async ({ page, request }) => {
  test.skip(!process.env.MEAN_PRODUCTION, 'Verify against the production preview after building.');
  const response = await request.get('/build-manifest.json');
  expect(response.ok()).toBe(true);
  const manifest = await response.json();
  await expect(page.locator('#build-id')).toHaveText(`Local Review • ${manifest.id}`);
  expect(manifest.mode).toBe('production');
  expect(manifest.revision).toMatch(/^[a-f0-9]{40}$/);
});
