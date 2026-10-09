import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const defaults = JSON.parse(await readFile('content/default.json', 'utf8'));
async function open(page, context, offline) {
  if (offline) {
    const latest = JSON.parse(await readFile('.build/latest.json', 'utf8'));
    await context.setOffline(true);
    await page.goto(pathToFileURL(path.resolve(latest.artifact, 'Start-Mean-Machine.html')).href);
  } else await page.goto('/');
  await page.locator('#reduce-motion').check(); await page.locator('#skip-intro').click();
  await page.locator('#reference-button').click(); await page.locator('#content-tools summary').click();
}
async function apply(page, value) {
  await page.locator('#content-file').setInputFiles({name:'fixture.json',mimeType:'application/json',buffer:Buffer.from(typeof value === 'string' ? value : JSON.stringify(value))});
  await page.locator('#import-content').click();
}
for (const offline of [false, true]) test(`content import is atomic and edit-one-value demo resets to defaults (${offline ? 'offline file' : 'served'})`, async ({page,context}) => {
  const errors=[],requests=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(offline && /^https?:/.test(r.url()))requests.push(r.url());});
  await open(page,context,offline);
  const fixture=structuredClone(defaults);fixture.lessons[0].values[0]=5;
  await apply(page,fixture);
  await expect(page.locator('#content-status')).toContainText('Applied content');
  await expect(page.locator('#originals strong')).toHaveText(['5','4','9']);
  await expect(page.locator('#content-identity')).toContainText('Imported For This Session');
  await apply(page,'{"broken":');
  await expect(page.locator('#content-status')).toContainText('invalid JSON');
  await expect(page.locator('#originals strong')).toHaveText(['5','4','9']);
  for(const mutate of [p=>p.schemaVersion='99',p=>p.lessons[0].encyclopediaRefs=['missing'],p=>p.lessons[0].mechanic='javascript']) {
    const bad=structuredClone(defaults);mutate(bad);await apply(page,bad);
    await expect(page.locator('#content-status')).toContainText('Active content and activity are unchanged');
    await expect(page.locator('#originals strong')).toHaveText(['5','4','9']);
  }
  await page.locator('#close-reference').click();
  await page.locator('#prediction').fill('6');await page.getByRole('button',{name:'Record Prediction'}).click();
  for(const destination of [0,1,1]) {await page.locator('#source').selectOption('2');await page.locator('#destination').selectOption(String(destination));await page.locator('#move').click();}
  await expect(page.locator('.load .value')).toHaveText(['6','6','6']);
  await page.locator('#dispatch').click();await page.locator('#total').fill('18');await page.locator('#count').fill('3');await page.locator('#mean').fill('6');await page.getByRole('button',{name:'Check Calculation'}).click();
  await page.locator('#explanation').fill('Eighteen units shared by three original pallets gives six.');await page.getByRole('button',{name:'Finish Shipment'}).click();
  await expect(page.locator('#stage-title')).toHaveText('Shipment Complete');
  await page.locator('#reference-button').click();
  await page.locator('#restore-content').click();
  await expect(page.locator('#originals strong')).toHaveText(['2','4','9']);
  await expect(page.locator('#content-identity')).toContainText('Bundled Defaults');
  await page.reload();await page.locator('#reduce-motion').check();await page.locator('#skip-intro').click();
  await expect(page.locator('#originals strong')).toHaveText(['2','4','9']);
  expect(errors).toEqual([]);expect(requests).toEqual([]);
});

test('teaching text, encyclopedia links, scenario data and download use the active pack',async({page,context})=>{
  await open(page,context,false);const fixture=structuredClone(defaults);
  fixture.contentRevision='wording-demo';fixture.messages['main.what-is-your-prediction']='Predict The Equal Share';
  fixture.encyclopedia[2].title='The Mean';fixture.scenarios[2].values=[2,4,2,4,3,3];
  fixture.lessons[0].encyclopediaRefs=['mean'];
  await apply(page,fixture);await expect(page.locator('#stage-title')).toHaveText('Predict The Equal Share');
  await expect(page.locator('#reference-mean strong')).toHaveText('The Mean');await expect(page.locator('#content-reference-links a')).toHaveText(['The Mean']);
  const downloadPromise=page.waitForEvent('download');await page.locator('#download-content').click();const download=await downloadPromise;
  expect(JSON.parse(await readFile(await download.path(),'utf8'))).toEqual(fixture);
  await page.locator('#close-reference').click();await page.locator('#six-pallet-example').click();await expect(page.locator('#originals strong')).toHaveText(['2','4','2','4','3','3']);
  await page.locator('#reference-button').click();await page.locator('#restore-content').click();await expect(page.locator('#stage-title')).toHaveText('What Is Your Prediction?');
});
