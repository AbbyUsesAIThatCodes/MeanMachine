import { createServer } from 'vite';
import { reserveBuild } from './build-identity.mjs';
const manifest = await reserveBuild('development');
const port = Number(process.env.MEAN_DEV_PORT || 4174);
if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error('Choose a localhost development port from 1024 through 65535.');
const server = await createServer({ define: { __BUILD_MANIFEST__: JSON.stringify(manifest) }, server: { host: '127.0.0.1', port, strictPort: true, watch: { ignored: ['**/artifacts/**', '**/.build/**', '**/test-results/**'] } } });
await server.listen();
server.printUrls();
