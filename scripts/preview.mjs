import { readFile } from 'node:fs/promises';
import { preview } from 'vite';
const latest = JSON.parse(await readFile('.build/latest.json', 'utf8'));
console.log(`[Reuse Artifact] ${latest.id}`);
const server = await preview({ build: { outDir: latest.artifact }, preview: { host: '127.0.0.1', port: 4175, strictPort: true } });
server.printUrls();
