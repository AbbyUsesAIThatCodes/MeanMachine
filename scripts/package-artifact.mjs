import { readFile, writeFile, readdir, mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import JSZip from 'jszip';

export async function packageArtifact(outDir, manifest) {
  let html = await readFile(path.join(outDir, 'index.html'), 'utf8');
  const script = html.match(/<script\b[^>]*src="([^"]+\.js)"[^>]*><\/script>/);
  const style = html.match(/<link\b[^>]*href="([^"]+\.css)"[^>]*>/);
  if (!script || !style) throw new Error('Expected a single bundled entry script and stylesheet.');
  const code = await readFile(path.join(outDir, script[1]), 'utf8');
  const css = await readFile(path.join(outDir, style[1]), 'utf8');
  html = html.replace(script[0], () => `<script type="module">${code.replace(/<\/script/gi, '<\\/script')}</script>`);
  html = html.replace(style[0], () => `<style>${css}</style>`);
  await writeFile(path.join(outDir, 'Start-Mean-Machine.html'), html);
  await mkdir(path.join(outDir, 'provenance'), { recursive: true });
  await copyFile('docs/shared-assets/CONSUMER-LOCK.json', path.join(outDir, 'provenance/shared-world-lock.json'));
  await copyFile('src/shared/manifest.json', path.join(outDir, 'provenance/shared-world-manifest.json'));
  await mkdir(path.join(outDir, 'content'), { recursive: true });
  for (const file of ['default.json', 'schema.json']) await copyFile(`content/${file}`, path.join(outDir, 'content', file));
  await copyFile('docs/content/AUTHORING.md', path.join(outDir, 'content', 'AUTHORING.md'));
  await copyFile('docs/content/FIELD-CATALOG.md', path.join(outDir, 'content', 'FIELD-CATALOG.md'));
  await copyFile('docs/content/ARCHITECTURE.md', path.join(outDir, 'content', 'ARCHITECTURE.md'));
  await copyFile('docs/content/REVIEW.md', path.join(outDir, 'content', 'REVIEW.md'));
  await writeFile(path.join(outDir, 'READ-ME.txt'), [
    'MEAN MACHINE - LOCAL CLASSROOM REVIEW', '', `Build: ${manifest.id}`, '',
    '1. Extract this entire ZIP.',
    '2. Open Start-Mean-Machine.html in Vivaldi or Edge. No server, account, install, or internet connection is needed.',
    '3. Enter the factory, record a prediction, share equally, calculate, and explain.', '',
    'EDITABLE CONTENT: Copy content/default.json, edit it, then use Reference > Editable Content > Apply Content And Restart.',
    'Import works offline and needs no rebuild. It replaces this page session only and starts a fresh shipment; current notes are cleared.',
    'Invalid packs leave active content and activity unchanged. Reopening uses bundled defaults. Editing the adjacent JSON alone does not change the embedded game.',
    'Content schema 1.0.0 and content revision 018.1 are separate from the app build. See content/AUTHORING.md and content/FIELD-CATALOG.md.', '',
    'Original whole shipment: 2, 4, 9. Original fractional shipment: 2, 5.',
    'Gold triangles travel clockwise around the required field on a continuous 1.6-second circuit until you click its field or answer button. The border and guidance remain afterward.',
    'Drag a top gear, click source/destination pallets, or use the From/To keyboard controls.',
    'Double-click a whole top gear to split. Double-click either highlighted matching top half to merge the pair.',
    'Both halves must be adjacent at the top of the same pallet. Split and Merge buttons offer the same actions.',
    'Try 6-Pallet Example beside the shipment controls opens the existing six-pallet task directly.',
    'Six pallets use the original camera angles and controls with closer fixed framing. Cargo actions do not change your camera view.',
    'Dragged gears stay at a level carrying height above the floor, then land on the destination stack.',
    'Reference > Larger Layout Review retains the fixed four-, five-, and six-pallet examples.',
    'Reduce Motion keeps the static answer cue, skips the camera trip, and settles cargo immediately.',
    'Undo reverses a move, split, or merge. Reset keeps the prediction; Replay starts a fresh prediction.', '',
    'This independently made classroom prototype uses invented data. Discussion notes remain in this page session and are not automatically graded or saved. Copy reasoning into the classroom notebook before closing.', '',
    'Shared assets: foam-factory-world 1.0.0, MedianDepot local source 871ca3d2e5d605524cd846db13de3e22a1ea9658.',
    'Three.js MIT license: licenses/three-LICENSE.txt.', '',
    'index.html and assets/ provide the equivalent locally served version. build-manifest.json records the complete source/build identity.',
    'Automated browser verification uses installed Edge; Vivaldi is the requested manual review browser.',
    'No public deployment is associated with this ZIP.', '',
  ].join('\n'));
  const zip = new JSZip();
  async function include(directory, relative = '') {
    for (const entry of (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
      const child = path.join(directory, entry.name);
      const name = relative ? `${relative}/${entry.name}` : entry.name;
      if (entry.isDirectory()) await include(child, name);
      else zip.file(`${manifest.id}/${name}`, await readFile(child));
    }
  }
  await include(outDir);
  await writeFile(`${outDir}.zip`, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: { level: 6 } }));
  console.log(`[Review ZIP] ${outDir}.zip`);
}
