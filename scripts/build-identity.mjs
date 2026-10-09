import { mkdir, readFile, writeFile, appendFile, rmdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';

export async function allocateOrdinal(directory, scope) {
  await mkdir(directory, { recursive: true });
  const lock = path.join(directory, 'allocator.lock');
  const deadline = Date.now() + 10000;
  while (true) {
    try { await mkdir(lock); break; }
    catch (error) {
      if (error.code !== 'EEXIST') throw error;
      if (Date.now() > deadline) throw new Error('Build ledger is locked; inspect the active build before removing its lock.');
      await new Promise(resolve => setTimeout(resolve, 25));
    }
  }
  try {
    const ledger = path.join(directory, 'ledger.jsonl');
    const rows = (await readFile(ledger, 'utf8').catch(error => { if (error.code === 'ENOENT') return ''; throw error; })).trim().split('\n').filter(Boolean).map(line => JSON.parse(line));
    const ordinal = Math.max(0, ...rows.filter(row => row.scope === scope).map(row => row.ordinal)) + 1;
    await appendFile(ledger, JSON.stringify({ scope, ordinal, status: 'reserved' }) + '\n');
    return ordinal;
  } finally { await rmdir(lock); }
}

export async function reserveBuild(mode = 'production') {
  const root = process.cwd();
  const release = JSON.parse(await readFile('release.json', 'utf8'));
  const directory = path.join(root, '.build');
  const ordinal = await allocateOrdinal(directory, release.scope);
  const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', windowsHide: true }).trim();
  const revision = git('rev-parse', 'HEAD');
  const dirty = !!git('status', '--porcelain');
  const sourcePaths = git('ls-files', '--cached', '--others', '--exclude-standard', '-z').split('\0').filter(Boolean).sort();
  const hash = createHash('sha256');
  for (const filename of sourcePaths) { hash.update(filename); hash.update(await readFile(filename)); }
  const fingerprint = hash.digest('hex');
  // Capture exactly once, immediately before injection into Vite.
  const builtAt = new Date().toISOString();
  const timestamp = builtAt.replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const id = `${release.version}_${release.slug}_${release.scope}_build-${String(ordinal).padStart(3, '0')}_${timestamp}_g${revision.slice(0, 12)}${dirty ? `_dirty-${fingerprint.slice(0, 12)}` : ''}_${release.target}`;
  const manifest = { ...release, id, ordinal, builtAt, revision, dirty, fingerprint, mode };
  await writeFile(path.join(directory, `${id}.json`), JSON.stringify(manifest, null, 2) + '\n');
  console.log(`[Build Identity] ${id}${mode === 'development' ? ' (Live Development Session)' : ''}`);
  return manifest;
}

export function identityPlugin(manifest) {
  return { name: 'mean-build-identity', generateBundle() { this.emitFile({ type: 'asset', fileName: 'build-manifest.json', source: JSON.stringify(manifest, null, 2) + '\n' }); } };
}

export async function finishBuild(manifest, status, artifact = null) {
  await appendFile('.build/ledger.jsonl', JSON.stringify({ scope: manifest.scope, ordinal: manifest.ordinal, status, id: manifest.id, artifact }) + '\n');
  if (status === 'success') {
    await writeFile('.build/latest.json', JSON.stringify({ ...manifest, artifact }, null, 2) + '\n');
    await writeFile('.build/CURRENT_BUILD.md', `# Current Local Build\n\n${manifest.id}\n\n- Status: Development / Local Review\n- Source: ${manifest.revision}${manifest.dirty ? ' (Dirty Local Sources)' : ''}\n- Source Fingerprint: ${manifest.fingerprint}\n- Built At: ${manifest.builtAt}\n- Output: ${artifact}\n- Review ZIP: ${artifact}.zip\n- Public Deployment: None\n`);
  }
  console.log(`[Build ${status}] ${manifest.id}`);
}
