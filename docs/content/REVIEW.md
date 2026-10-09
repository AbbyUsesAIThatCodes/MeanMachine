# JSON Retrofit Review

Isolated branch: `local/json-content-018`, starting at accepted commit `8d61b0f653e74553a6fb0ded7bb64f148dcb7c93`. The worksheet source and original Build018 artifact are preserved. No network publication, repository creation, installation or owner-facing launch occurred.

## Delivered Contract

Two original lessons, three fixed layout examples, four Factory Reference entries and 138 authored text items are extracted to versioned JSON. No 18-question bank or new game modes were introduced. [Authoring](AUTHORING.md) documents every field, bound, token and example; [Field Catalog](FIELD-CATALOG.md) enumerates all text keys. [Architecture](ARCHITECTURE.md) explains the reusable pack/adapter boundary, independent versions and explicit no-save migration policy.

The offline game embeds validated defaults. Reference → Editable Content imports a complete pack for this page session without rebuilding or HTTP. Invalid imports retain the exact last good pack and activity; valid imports explicitly restart and clear notes. Reopening intentionally restores bundled defaults. New mechanics or additional activity slots require code. No teacher-only answer keys are exported.

## Completed Validation

- All 33 Node tests passed, including the 28 existing tests and 5 new content/equivalence tests.
- All 54 Edge browser tests passed against 0.1.0_Foam-Rings_local-20261005-json-018_build-002_20261005T002539Z_g8d61b0f653e7_dirty-9da5c8ad06ab_web, including all 51 existing cases and 3 new import/edit/restore/export cases. Machine report: `.build/browser-build002.json`.
- Canonical content is independently re-extracted from pinned Git objects and compared deeply: exact values, lesson/scenario order, old IDs, teaching strings and reference paragraphs.
- Original and current state engines compare full states through all five activities, including piece/root/origin/family identity, totals/counts/means, wrong and accepted answers, split/merge/move/undo/reset/replay, stage progression and unchanged numeric answer grammar.
- Preserved Build018, served production and the CRC-checked extracted ZIP each complete whole, halves, and 4/5/6-pallet flows. Ten scene snapshots match exactly across all three, including camera, ring geometry/colors/positions and original records. Zero external requests, page errors or console errors. Report: `.build/portable-review/verification.json`.
- Invalid JSON, missing/unknown fields, unsupported schema/mechanics, broken references, invalid/fractional/out-of-range/unshareable numbers, altered IDs/order, unsafe markup, wrong tokens and excessive file size are rejected. Browser checks confirm active values survive invalid imports.
- The isolated one-value demo changes `lessons[0].values[0]` from 2 to 5: [5,4,9], total 18, mean 6. It completes the lesson online and offline, then restores [2,4,9]. Default JSON remains byte-for-byte canonical.
- Build identity matches console, folder/ZIP, embedded manifest, compiled game, visible footer and current report; two distinct real build reservations verified. Shared assets, styling, family geometry, layout and drag-plane source are unchanged.
- Six masked screenshot pairs compare baseline/review at 1366×768 and 1024×768 for whole, halves and six-pallet prediction. Five are pixel-identical; the sixth has only 3 differing pixels out of 786432, each differing by one channel level, within rendered cargo. Only build labels are masked. This is a tiny rasterization variation, not a claim of universal pixel identity. Evidence: `.build/visual-parity/pixel-report.json` and PNGs.

## Final Packaging And Limits

The next identified packaging invocation includes this report and the architecture guide, so documentation links work inside the ZIP. Gameplay sources and defaults remain the already tested bytes. Final artifact identity and packaging/import/offline rechecks are recorded in `.build/FINAL_REVIEW.json`; the canonical current-build record is `.build/latest.json` / `.build/CURRENT_BUILD.md`. Final packaging is not relabeled as the earlier tested artifact.

Automated browser checks use installed Edge with software WebGL; Vivaldi/manual classroom review is still pending. Imported text can be mathematically misleading or too long even if structurally valid, so authors must review wording/layout. This adapter intentionally preserves the original two lesson slots, three layout slots and five-stage sequence; it is not a generic question-authoring engine. No persistent learner saves exist, so importing restarts instead of migrating an in-progress exercise.

The first diagnostic build exposed a helper-name shadowing bug in cancellation/context-loss paths. It was fixed before the fully passing review; Build001 remains historical evidence and should not be used for review. Every reservation remains in the ledger.
