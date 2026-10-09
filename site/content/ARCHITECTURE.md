# MeanMachine018 Content Contract

This isolated retrofit starts at `8d61b0f653e74553a6fb0ded7bb64f148dcb7c93`, the source of tested local Build018. It does not read or modify the worksheet worker's current files. It preserves the two original lessons and three fixed layout examples. There is no speculative 18-question bank and no independent Learn, Challenge or Freeplay mode in this baseline. The lessons, layout-review metadata, Factory Reference encyclopedia, answer guidance and contextual help are the actual equivalents being extracted.

## Reusable Contract

- `content/default.json`: complete versioned content, with stable activity/reference/message IDs and explicit ordering. Default values are extracted from the pinned source, not newly invented exercises.
- `content/schema.json`: JSON Schema 2020-12, closed objects, required fields, documented defaults and bounded types. Runtime also enforces reference integrity, exact representable means, stable slot order, token contracts and immutable HTML scaffolding.
- `content/adapter-contract.json`: implementation-owned token/markup contracts and source locations for every message; never imported as author content.
- `src/content-validation.js`: pure, deterministic parse/schema/domain checking with field paths. Rejects an entire invalid pack. No partial merges, inferred replacements, coercions or silent repairs.
- `src/content-runtime.js`: validates bundled defaults, freezes the active pack, publishes live named bindings for existing shipment/layout APIs, and activates an import only after full validation.
- `src/math-state.js`: explicit `mean-sharing-v1` adapter. Existing half-unit math, answers, state transitions, piece/root/origin/family IDs, undo/reset/replay and numeric input grammar are unchanged. No executable code or arbitrary JavaScript comes from JSON.
- `src/content-ui.js`: session-only file import, export and explicit restore under Reference. Original markup/layout stays in code; imported teaching text supplies content. Reference IDs link to the actual encyclopedia entries from the active lesson/scenario.

Future games can reuse the envelope and transaction pattern, but must define their own adapters, schemas, references, acceptance rules and parity tests. Do not copy Mean's two-slot/fixed-layout restrictions into unrelated games. Unknown adapters/mechanics/schema versions fail explicitly. Adding a mode, activity slot, new denominator, answer rule, stage, UI structure or mechanics is code work with a versioned contract and tests.

The final pack contains 138 authored text items. Media queries, CSS class names, Three.js object identities, family geometry/appearance definitions and the frozen shared world remain implementation-owned. The surrounding hover/help prose and its runtime tokens are editable; changing a shape family is a visual/mechanics change, not a teaching-text edit.

## Offline And Failure Policy

The existing single-file `Start-Mean-Machine.html` remains fully offline. Defaults are bundled into it; there is no fetch, HTTP requirement, external service or persistent browser storage. A browser file picker reads an explicitly selected `.json` pack. Editing the adjacent JSON is not automatically detected because `file://` browsers cannot reliably fetch neighboring files. Importing it applies edits immediately without rebuilding. A shipped new default requires a normal identified build.

Bad JSON, missing/unknown fields, bad references, unsupported mechanics, invalid quantities, changed markup/tokens and oversized files report readable errors and retain the exact active pack and activity. When an import has succeeded, that pack is the session's last good pack. If no import succeeded, bundled defaults are the last good pack. Import/restore explicitly restarts the lesson and clears current in-memory notes; the UI says this before the action. Reopening intentionally returns to defaults and requires reimport, rather than silently reusing an unknown teacher pack.

## Versions, Saves And Answers

App release `0.1.0` / Foam Rings is the existing development milestone. This independent checkout uses local build scope `local-20261005-json-018`; it never allocates from the source's ledger. Content schema `1.0.0` describes structure and adapter capabilities. Content revision `018.1` identifies wording/data independently of app build. Authors increment revision for distribution, for example `018.2` or `class-2026-10-05`; there is no automatic mutation of author files.

Baseline 018 has no persistent learner save target, save schema, account or grade export. This retrofit introduces none. Active state/piece IDs and reset/replay behavior are compared against old code. Import starts a new state, never migrates an in-progress shipment into different data. Future persisted saves must carry pack ID, schema, content revision and content digest; unsupported versions require explicit migration or rejection, not an assumed match on activity ID.

No teacher answer-key fields or worked solutions are added to the public pack. The client still computes accepted total/count/mean from the visible original observations using the original rules. Any text included in browser content is inspectable: keep confidential teacher notes and solution keys outside the shipped pack. This architecture is not secret storage.

## Equivalence Evidence

`tests/content.test.mjs` regenerates canonical content from pinned Git objects; compares all values, order, IDs, text and reference paragraphs; runs both original and current state machines through all five activities; compares full states, piece identities, pending operations, answers and resets; and checks unchanged visuals/shared inputs and absence of save targets. Existing unit/browser tests remain in place. `scripts/verify-portable-review.mjs` can compare preserved 018, served review and extracted offline review through all five full flows, including scene/camera/ring snapshots. See [Review Evidence](REVIEW.md) for actual results and limitations.
