# Edit Mean Machine Content

Make a copy of `content/default.json`. Keep the original as a recovery copy. Open the copy in a plain-text editor, save UTF-8 JSON, and import it through **Reference → Editable Content → Apply Content And Restart** after entering the factory. This works with the offline `Start-Mean-Machine.html`; no build, server, internet or installation is needed. An import starts a fresh lesson and clears current discussion notes. **Download Active JSON** exports the complete active pack. **Restore Bundled Defaults And Restart** restores the original lessons. Reopening the page also starts with bundled defaults.

Editing a neighboring JSON file alone does not change the embedded offline game: use the file picker to import it. When developing from source, changing `content/default.json` changes the bundled default on the next normal build. Do not edit the schema or adapter contract to bypass validation.

## Edit One Value

In a separate copy, change only `lessons[0].values[0]` from `2` to `5`. The first shipment becomes `[5, 4, 9]`; its accepted total becomes 18, its original pallet count stays 3, and its equal share becomes 6. No answer table needs updating. Import the copy to try it, then restore bundled defaults to return to `[2, 4, 9]`. Automated tests perform this demo in memory, never alter the default file, and restore it afterward. When distributing your copy, also give it a new `contentRevision`.

With existing Node/dependencies in the source checkout, validate before importing:

```powershell
node scripts/check-content.mjs
node scripts/check-content.mjs C:\Path\To\my-content.json
# Equivalent package command:
npm run content:check -- C:\Path\To\my-content.json
```

The command exits nonzero and prints paths such as `$.lessons[0].values` on failure. The browser runs the same validation and leaves the current content/activity intact on failure. No missing field is silently filled in. Start from the full default file, not a partial override. Maximum file size is 256 KiB.

## Every Supported Field

All fields below are required. Unknown fields are errors. IDs are case-sensitive. Arrays determine order. This v1 retrofit has the original two lesson slots and three layout slots; do not add/delete/reorder activities. New slots require a future adapter revision.

| Field | Type, Range And Meaning | Example |
| --- | --- | --- |
| `schemaVersion` | Exact string `1.0.0`; content format, not game build | `"1.0.0"` |
| `contentRevision` | 1–64 characters; starts with a letter/digit, then letters/digits/dot/underscore/hyphen; author-owned revision | `"018.2"` |
| `packId` | Exact stable pack identifier | `"mean-machine-018"` |
| `adapter` | Exact supported mechanics adapter | `"mean-sharing-v1"` |
| `lessons` | Exactly 2 objects in order `whole`, `halves` | See default file |
| `lessons[].id` | Stable, fixed IDs; never display names | `"whole"` |
| `lessons[].code` | Plain text, 1–40 characters; shipment label | `"MM-01"` |
| `lessons[].title` | Plain text, 1–2000 characters; use short Title Case names for readability | `"The First Shipment"` |
| `lessons[].values` | Whole integers 0–12 each; exactly 3 for `whole`, 2 for `halves`; total ÷ count must be an exact whole or half; order is pallet A, B, C | `[2,4,9]` |
| `lessons[].halves` | Boolean legacy metadata; `false` for `whole`, `true` for `halves`. Does not enable/disable splitting: both lessons already support it | `false` |
| `lessons[].mechanic` | Exact adapter operation | `"equal-share-half-units"` |
| `lessons[].stageOrder` | Exact fixed array; answer gating stays code-owned | `["prediction","sharing","calculation","explanation","complete"]` |
| `lessons[].encyclopediaRefs` | 1–4 unique existing reference IDs; controls links under Editable Content | `["pallets","gear-quantity","mean"]` |
| `scenarios` | Exactly 3 fixed layout-review objects; not a new question/challenge mode | See default file |
| `scenarios[].id` | Fixed order: `layout-4`, `layout-5`, `layout-6` | `"layout-4"` |
| `scenarios[].palletCount` | Integer 4, 5 or 6 matching the ID and number of values | `4` |
| `scenarios[].shipmentId` | Existing backing shipment key; fixed to `halves` to preserve reset/replay/next behavior | `"halves"` |
| `scenarios[].values` | One integer 0–12 per pallet, same exact-half divisibility rule as lessons | `[1,3,2,6]` |
| `scenarios[].mechanic` | Exact `equal-share-half-units` | `"equal-share-half-units"` |
| `scenarios[].encyclopediaRefs` | Same reference-ID array rules as lessons | `["mean"]` |
| `encyclopedia` | Exactly 4 entries, in original order; this renders Factory Reference | See default file |
| `encyclopedia[].id` | Fixed order `pallets`, `gear-quantity`, `mean`, `median` | `"mean"` |
| `encyclopedia[].title` | Plain text, 1–2000 characters; use short Title Case | `"Mean"` |
| `encyclopedia[].paragraphs` | Exactly 2 plain-text strings, each 1–2000 characters, in displayed order | `["The equal share: total gears ÷ number of pallets.","It can be a value that never appeared in the original data."]` |
| `messages` | Closed map of all 138 stable teaching/help/UI message IDs; edit values, not keys | See Field Catalog |
| `messages.<id>` | String, 1–12000 characters; exact tokens and markup contract described below | `"Make Equal Shares"` |

Plain-text fields reject angle brackets, straight double quotes and control characters. Use curly quotation marks for quoted wording. Normal apostrophes, punctuation, Unicode mathematics and line breaks are supported. Numeric bounds are deliberately limited for the existing scene; all-zero data are legal observations. Prediction input still accepts the original 0–1000 range; calculated answers still use exact total/count equality, decimals, half symbols or fractions. These answer rules are mechanics, not editable fields.

## Teaching Text, Help And Templates

[Field Catalog](FIELD-CATALOG.md) lists every message ID, original wording, source and tokens. Search that file or the JSON for wording you see in the game. `main.*` includes stage headings, instructions, forms and feedback; `math-state.*` includes mathematical guidance and error messages; `scene.*` includes hover/drag help; `answer-cues.*` includes answer-field guidance; `shell.*` includes static labels and reference context. All modes share the same five teaching stages, as they did in 018. There are no separate fabricated Learn/Challenge/Freeplay banks.

Some legacy forms are HTML template strings. Edit their visible text **between** tags. Keep every tag, attribute, field ID and class unchanged. The validator compares the exact markup scaffold. This protects keyboard controls, accessibility, answer cues and visuals. Do not add scripts, links, event attributes, CSS or new HTML. Form structure and attribute-only placeholders belong to the adapter; a structure change requires code. Keep `{{v0}}`, `{{v1}}` and other listed tokens exactly, including their number of occurrences. They receive controlled runtime values such as a pallet letter, recorded prediction or calculated mean; they are not JavaScript. You may move tokens within prose if the markup scaffold stays intact. There is no expression evaluator.

For example, change `messages["main.what-is-your-prediction"]` to `"Predict The Equal Share"`. Update instructions consistently if you edit values: validation checks math, references and structure, not whether authored prose makes a correct teaching claim. Keep wording concise enough for the existing laptop layout. Recheck long edits visually.

Reference links use IDs, not entry titles. A lesson may point to `"mean"` while its displayed title changes to `"The Mean"`. The in-game reference link still opens that entry. Do not put private teacher notes or answer keys anywhere in the pack: browser files are inspectable. No answer-key field is supported or exported. Existing answers are computed from the visible observations.

## Compatibility And Recovery

Schema version, content revision and app build identity are separate. This prototype has no persistent learner saves; notes exist only in the page. Invalid imports retain the session's last valid pack and state. Successful imports and default restores explicitly restart. There is no automatic migration between content revisions, and unsupported schema/adapter versions are rejected. Keep your edited JSON separately and import it again after reopening. See [Architecture](ARCHITECTURE.md) in the source checkout for the reusable adapter boundary and evidence strategy.
