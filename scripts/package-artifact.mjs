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
  await writeFile(path.join(outDir, 'READ-ME.txt'), `MEAN MACHINE — LOCAL CLASSROOM REVIEW\n\nBuild: ${manifest.id}\n\n1. Extract this entire ZIP.\n2. Open Start-Mean-Machine.html in Chrome or Edge. No server, account, install, or internet connection is needed.\n3. Enter the factory, record a prediction, then move rings to share the cargo equally.\n\nWhole shipment: 2, 4, 9. Fractional shipment: 2, 5.\nClick a source pallet and then a destination, or use the From/To keyboard controls.\nReduce Motion skips the camera trip and settles cargo immediately.\nUndo reverses one completed move/split; Reset Arrangement keeps your prediction; Replay Shipment begins a fresh prediction.\n\nThis is an independently made classroom prototype using invented data. Discussion notes remain in this page session and are not automatically graded or saved. Copy reasoning into the classroom notebook before closing.\n\nShared assets: foam-factory-world 1.0.0, MedianDepot local source 871ca3d2e5d605524cd846db13de3e22a1ea9658.\nThree.js MIT license: licenses/three-LICENSE.txt.\n\nindex.html and assets/ provide the equivalent locally served version. build-manifest.json records the complete source/build identity.\nNo public deployment is associated with this ZIP.\n`);
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
