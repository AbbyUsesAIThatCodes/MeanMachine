import { createServer } from 'vite';
import { reserveBuild } from './build-identity.mjs';
const manifest = await reserveBuild('development');
const server = await createServer({ define: { __BUILD_MANIFEST__: JSON.stringify(manifest) }, server: { host: '127.0.0.1', port: 4174, strictPort: true, watch: { ignored: ['**/artifacts/**', '**/.build/**', '**/test-results/**'] } } });
await server.listen();
server.printUrls();
