import { build } from 'vite';
import { reserveBuild, finishBuild, identityPlugin } from './build-identity.mjs';
import { packageArtifact } from './package-artifact.mjs';
import { readFile } from 'node:fs/promises';
import { parseContent } from '../src/content-validation.js';
parseContent(await readFile('content/default.json', 'utf8'));
const manifest = await reserveBuild();
const outDir = `artifacts/${manifest.id}`;
try {
  await build({ base: './', define: { __BUILD_MANIFEST__: JSON.stringify(manifest) }, plugins: [identityPlugin(manifest)], build: { outDir, emptyOutDir: false } });
  await packageArtifact(outDir, manifest);
  await finishBuild(manifest, 'success', outDir);
} catch (error) { await finishBuild(manifest, 'failed'); throw error; }
