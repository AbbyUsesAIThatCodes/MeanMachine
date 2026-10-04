import { readFile } from 'node:fs/promises';
import { preview } from 'vite';
const latest = JSON.parse(await readFile('.build/latest.json', 'utf8'));
console.log(`[Reuse Artifact] ${latest.id}`);
const port = Number(process.env.MEAN_PREVIEW_PORT || 4175);
if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error('Choose a localhost preview port from 1024 through 65535.');
const server = await preview({ build: { outDir: latest.artifact }, preview: { host: '127.0.0.1', port, strictPort: true } });
server.printUrls();
