import { build } from 'vite';
import { reserveBuild, finishBuild, identityPlugin } from './build-identity.mjs';
const manifest = await reserveBuild();
const outDir = `artifacts/${manifest.id}`;
try {
  await build({ base: './', define: { __BUILD_MANIFEST__: JSON.stringify(manifest) }, plugins: [identityPlugin(manifest)], build: { outDir, emptyOutDir: false } });
  await finishBuild(manifest, 'success', outDir);
} catch (error) { await finishBuild(manifest, 'failed'); throw error; }
