import { DEFAULT_CONTENT, getContent, importContent, restoreDefaults, message } from './content-runtime.js';
import { MAX_CONTENT_BYTES } from './content-validation.js';

export function bindContentUI({ canRestart, restart }) {
  const bindings = [];
  const walker = document.createTreeWalker(document, NodeFilter.SHOW_COMMENT);
  while (walker.nextNode()) {
    const match = walker.currentNode.data.match(/^content:(.+)$/);
    if (match && walker.currentNode.nextSibling?.nodeType === Node.TEXT_NODE) bindings.push([match[1], walker.currentNode.nextSibling]);
  }
  const host = document.createElement('details');
  host.id = 'content-tools';
  host.innerHTML = `<summary>Editable Content</summary>
    <p id="content-identity" class="small"></p>
    <p class="small">Import a complete JSON pack to start a fresh shipment. Current activity and discussion notes will be cleared. It applies only to this page session; reopening uses bundled defaults.</p>
    <label for="content-file">Content JSON File</label><input id="content-file" type="file" accept=".json,application/json" />
    <button id="import-content">Apply Content And Restart</button>
    <button id="restore-content">Restore Bundled Defaults And Restart</button>
    <button id="download-content">Download Active JSON</button>
    <p id="content-status" role="status" aria-live="polite" class="small"></p>
    <p class="small">Reference Links For This Activity</p><div id="content-reference-links"></div>`;
  document.getElementById('close-reference').before(host);
  const status = document.getElementById('content-status');
  function hydrate() {
    for (const [id, node] of bindings) node.textContent = message(id);
    const list = document.getElementById('encyclopedia-entries');
    list.replaceChildren(...getContent().encyclopedia.map(entry => {
      const li = document.createElement('li'), title = document.createElement('strong'), children = document.createElement('ul');
      li.id = `reference-${entry.id}`; title.textContent = entry.title;
      children.replaceChildren(...entry.paragraphs.map(text => { const p = document.createElement('li'); p.textContent = text; return p; }));
      li.append(title, children); return li;
    }));
    const pack = getContent();
    document.getElementById('content-identity').textContent = `${pack.packId} · Content ${pack.contentRevision} · Schema ${pack.schemaVersion}${pack === DEFAULT_CONTENT ? ' · Bundled Defaults' : ' · Imported For This Session'}`;
  }
  function ready() {
    if (!canRestart()) { status.textContent = 'Wait for the factory arrival, cargo movement, or drag to finish. Active content and activity are unchanged.'; return false; }
    return true;
  }
  document.getElementById('import-content').addEventListener('click', async () => {
    if (!ready()) return;
    const file = document.getElementById('content-file').files[0];
    if (!file) { status.textContent = 'Choose a JSON file first. Active content and activity are unchanged.'; return; }
    try {
      if (file.size > MAX_CONTENT_BYTES) throw new Error('Content file exceeds 256 KiB.');
      const text = await file.text();
      if (!ready()) return;
      importContent(text); // Validate the entire candidate before any state changes.
      hydrate(); restart();
      status.textContent = `Applied content ${getContent().contentRevision}. A fresh shipment is ready. Reopening restores bundled defaults.`;
    } catch (error) { status.textContent = `${error.message}\nActive content and activity are unchanged. Fix the file and try again.`; }
  });
  document.getElementById('restore-content').addEventListener('click', () => {
    if (!ready()) return;
    restoreDefaults(); hydrate(); restart(); status.textContent = 'Bundled defaults restored. A fresh shipment is ready.';
  });
  document.getElementById('download-content').addEventListener('click', () => {
    const pack = getContent(), url = URL.createObjectURL(new Blob([JSON.stringify(pack, null, 2) + '\n'], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = `${pack.packId}-${pack.contentRevision}.json`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  hydrate();
  return {
    updateActivity(id) {
      const pack = getContent(), activity = [...pack.lessons, ...pack.scenarios].find(item => item.id === id);
      const links = document.getElementById('content-reference-links');
      links.replaceChildren(...(activity?.encyclopediaRefs || []).flatMap((ref, i) => {
        const a = document.createElement('a'); a.href = `#reference-${ref}`; a.textContent = pack.encyclopedia.find(e => e.id === ref).title;
        return i ? [document.createTextNode(' · '), a] : [a];
      }));
    }
  };
}
