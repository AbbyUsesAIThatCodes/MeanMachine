import { test, expect } from '@playwright/test';

const scene = page => page.evaluate(() => window.__meanScene.snapshot());
async function ready(page, halves = false) {
  await page.goto('/'); await page.locator('#reduce-motion').check(); await page.locator('#skip-intro').click();
  if (halves) await page.locator('#next').click();
  await page.locator('#prediction').fill('4'); await page.getByRole('button', { name: 'Record Prediction' }).click();
}
async function hold(page, source, destination) {
  const before = await scene(page), from = before.topPickPoints[source], to = before.pickPoints[destination];
  await page.mouse.move(from.x, from.y); await page.mouse.down(); await page.mouse.move(to.x, to.y, { steps: 10 });
  return before;
}
function identities(snapshot) {
  return snapshot.rings.map(r => ({ id: r.identity, family: r.family, color: r.color, pattern: r.pattern, root: r.root, origin: r.origin, fraction: r.fraction })).sort((a,b) => a.id.localeCompare(b.id));
}
async function unchanged(page, before) {
  const after = await scene(page);
  expect(after.pallets).toEqual(before.pallets); expect(identities(after)).toEqual(identities(before));
  expect(after.rings.every(r => r.scale.every(v => v === 1) && r.rotation.every(v => v === 0))).toBe(true);
  expect(after.interaction.held).toBeNull();
}

test('initial mixed families and compact identity remain readable at laptop sizes', async ({ page }) => {
  await ready(page); const start = await scene(page);
  expect(new Set(start.rings.map(r => r.family)).size).toBe(8);
  for (let i=0;i<3;i++) {
    const pile = start.rings.filter(r => r.palletIndex === i).sort((a,b) => a.position[1] - b.position[1]);
    for (let j=1;j<pile.length;j++) expect(pile[j].family).not.toBe(pile[j-1].family);
  }
  for (const viewport of [{width:1366,height:768},{width:1280,height:720},{width:1024,height:768}]) {
    await page.setViewportSize(viewport);
    const title = await page.locator('h1').boundingBox(), compact = await page.locator('#compact-build').boundingBox();
    expect(compact.y).toBeGreaterThanOrEqual(title.y + title.height);
    await expect(page.locator('#compact-build')).toHaveText(/^0\.1\.0 · Foam Rings · Build \d{3,}$/);
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
    await page.screenshot({path:`test-results/gears-${viewport.width}x${viewport.height}.png`});
  }
  await page.locator('#reference-button').click();await page.getByText('Full Build Details', {exact:true}).click();
  await expect(page.locator('#build-provenance')).toContainText('Source:');
  await expect(page.locator('#build-provenance')).toContainText('Built:');
});

test('top pickup follows the pointer, commits once and settles an expressive landing', async ({ page }) => {
  await ready(page); await page.locator('#reduce-motion').uncheck();
  const before = await scene(page), from = before.topPickPoints[2];
  await page.mouse.move(from.x,from.y);expect((await scene(page)).interaction.hovered).toBe(from.identity);
  await hold(page,2,0); const held = await scene(page);
  expect(held.interaction.held).toBe(from.identity);expect(held.interaction.destination).toBe(0);
  expect(held.pallets.map(p=>p.quantity)).toEqual([2,4,9]);
  expect(held.rings.find(r=>r.identity===from.identity).position).not.toEqual(before.rings.find(r=>r.identity===from.identity).position);
  await expect(page.locator('#move')).toBeDisabled();await expect(page.locator('#undo')).toBeDisabled();
  await page.screenshot({path:'test-results/gear-held.png'});
  await page.mouse.up();await expect(page.locator('#dispatch')).toBeDisabled();
  await page.waitForTimeout(100);
  const middle = await scene(page), moving = middle.rings.find(r=>r.identity===from.identity);
  expect(moving.scale[1]).not.toBe(1);expect(moving.rotation[2]).not.toBe(0);
  expect(middle.pallets.map(p=>p.quantity)).toEqual([3,4,8]);
  await page.mouse.click(before.pickPoints[2].x,before.pickPoints[2].y);await page.mouse.click(before.pickPoints[0].x,before.pickPoints[0].y);
  await expect(page.locator('#dispatch')).toBeEnabled();
  const end=await scene(page);expect(end.pallets.map(p=>p.quantity)).toEqual([3,4,8]);
  expect(identities(end)).toEqual(identities(before));
  expect(end.rings.every(r=>r.scale.every(v=>v===1)&&r.rotation.every(v=>v===0))).toBe(true);
});

test('Escape, invalid drop, pointer cancellation and focus loss preserve the same pieces', async ({ page }) => {
  await ready(page); const before=await scene(page);
  await hold(page,2,0);await page.keyboard.press('Escape');await page.mouse.up();await unchanged(page,before);
  await hold(page,2,0);await page.mouse.move(12,300);await page.mouse.up();await unchanged(page,before);
  await hold(page,2,0);await page.evaluate(()=>document.querySelector('#scene canvas').dispatchEvent(new PointerEvent('pointercancel',{pointerId:1})));await page.mouse.up();await unchanged(page,before);
  await hold(page,2,0);await page.evaluate(()=>window.dispatchEvent(new Event('blur')));await page.mouse.up();await unchanged(page,before);
});

test('half dragging keeps exact values, identity, undo and the calculation/explanation lesson', async ({ page }) => {
  await ready(page,true);
  await page.locator('#source').selectOption('1');await page.locator('#destination').selectOption('0');await page.locator('#move').press('Enter');
  const before=await scene(page),parent=before.rings.filter(r=>r.palletIndex===1).sort((a,b)=>b.position[1]-a.position[1])[0];
  await page.locator('#split').press('Enter');await hold(page,1,0);await page.mouse.up();
  await expect(page.locator('.load .value')).toHaveText(['3½','3½']);
  const shared=await scene(page),halves=shared.rings.filter(r=>r.fraction===0.5);
  expect(halves).toHaveLength(2);expect(shared.rings.reduce((n,r)=>n+r.fraction,0)).toBe(7);
  for(const half of halves){expect(half.family).toBe(parent.family);expect(half.root).toBe(parent.root);expect(half.color).toBe(parent.color);}
  await page.locator('#undo').press('Enter');await expect(page.locator('.load .value')).toHaveText(['3','4']);
  await page.locator('#move').press('Enter');await page.locator('#dispatch').press('Enter');
  await page.locator('#total').fill('7');await page.locator('#count').fill('8');await page.locator('#mean').fill('3.5');await page.getByRole('button',{name:'Check Calculation'}).click();
  await expect(page.getByRole('status')).toContainText('pallets');
  await page.locator('#count').fill('2');await page.getByRole('button',{name:'Check Calculation'}).click();
  await page.locator('#explanation').fill('Seven units shared between two original observations gives three and a half each. Color and shape do not change the quantity.');
  await page.getByRole('button',{name:'Finish Shipment'}).click();await expect(page.getByRole('heading',{name:'Shipment Complete'})).toBeVisible();
  await page.screenshot({path:'test-results/gear-half-complete.png'});
});

test('touch source/destination alternative and a touch drag use the same exact move', async ({ browser }) => {
  const context=await browser.newContext({hasTouch:true,viewport:{width:1280,height:720}});const page=await context.newPage();await ready(page);
  await page.locator('[data-pallet="2"]').tap();await page.locator('[data-pallet="0"]').tap();await expect(page.locator('.load .value')).toHaveText(['3','4','8']);
  const start=await scene(page),from=start.topPickPoints[2],to=start.pickPoints[1];const session=await context.newCDPSession(page);
  await session.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:from.x,y:from.y,id:1}]});
  await session.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:to.x,y:to.y,id:1}]});
  await session.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await expect(page.locator('.load .value')).toHaveText(['3','5','7']);await context.close();
});

test('buried pieces cannot be picked up and an empty source cannot move cargo', async ({ page }) => {
  await ready(page); const before=await scene(page);
  const buried=before.ringSurfacePoints.find(p=>p.identity==='0-0');
  await page.mouse.move(buried.x,buried.y);expect((await scene(page)).interaction.hovered).toBeNull();
  await page.mouse.down();await page.mouse.move(buried.x+45,buried.y+12,{steps:5});
  expect((await scene(page)).interaction.held).toBeNull();await page.mouse.up();
  expect((await scene(page)).pallets.map(p=>p.quantity)).toEqual([2,4,9]);
  await page.locator('#source').selectOption('0');await page.locator('#destination').selectOption('1');
  await page.locator('#move').press('Enter');await page.locator('#move').press('Enter');
  await expect(page.locator('#move')).toBeDisabled();
  await page.locator('[data-pallet="0"]').click();
  await expect(page.getByRole('status')).toContainText('empty');
  const empty=await scene(page);expect(empty.topPickPoints[0]).toBeNull();expect(empty.pallets.map(p=>p.quantity)).toEqual([0,6,9]);
});
