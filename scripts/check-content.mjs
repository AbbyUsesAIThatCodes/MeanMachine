import { readFile } from 'node:fs/promises';
import { parseContent } from '../src/content-validation.js';
try {
  const path = process.argv[2] || 'content/default.json';
  const pack = parseContent(await readFile(path, 'utf8'));
  console.log(`Valid: ${path}\nSchema ${pack.schemaVersion}; content ${pack.contentRevision}; adapter ${pack.adapter}\n${pack.lessons.length} lessons, ${pack.scenarios.length} scenarios, ${pack.encyclopedia.length} reference entries, ${Object.keys(pack.messages).length} messages.`);
} catch (error) { console.error(error.message); process.exitCode = 1; }
