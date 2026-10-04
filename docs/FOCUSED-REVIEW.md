# Focused Local Review

This isolated review continues from preserved commit `21411cde59b2713c47893edd876fc7fd3d1c964f` on local branch `review/answer-cues-double-click-20261004`. The original source, portable Build004, historical evidence and existing browser sessions remain separate. No dependency/browser download, remote push, PR, Actions run, merge or deployment belongs to this task.

## Accepted Lesson And Controls

The original two shipments stay **2, 4, 9** and **2, 5**, with prediction → sharing → calculation → explanation unchanged. A brief gold sparkle identifies the next required answer, followed by a steady gold border. Valid fields show a ready marker; the instruction states why movement is paused and what action continues the lesson. Reduced motion retains the static cue. Calculation asks for **Total Gears**, **Number Of Pallets**, and **Mean: Gears Per Pallet**.

Double-click a whole top gear to split it into two equal layers. Double-click either half of a matching pair at the top of the same pallet to merge. Both eligible halves highlight, with a short hover hint. Compatibility requires the same original gear root, origin and family; no remote or buried partner is selected. Split/merge buttons provide keyboard equivalents. A drag cancels pending clicks, and phase/animation locks revalidate every action. Undo preserves exact piece identity and quantities.

## Larger Layouts

One-to-six-pallet state/layout support preserves original records and exact half-unit arithmetic. The original two/three-pallet geometry is unchanged. Four/six use balanced two/two and three/three rows; five uses three front and two rear. Rear centers are offset by half the horizontal pitch. Larger layouts fit both camera views to the cargo and available space; tilted placards display the pallet letter and current quantity.

**Reference → Larger Layout Review** exposes three fixed acceptance examples: four `[1,3,2,6]`, five `[1,3,5,2,4]`, and six `[1,5,2,4,3,3]`. Each has mean three and follows the accepted lesson order. Opening an example explicitly starts a new shipment in that page. This is not a recipe generator or question bank. Reset/replay retain that example's original quantities; the shipment button returns to the original lessons.

## Validation And Evidence

The unit suite covers conservation, legal/rejected merges, phase and pending locks, origin/family identity, undo/reset/replay, counts one through six, solvable fixed examples, and the half-pitch stagger. Shared source, lock, license and geometry checks remain required.

Browser QA covers both complete original lessons, gold/ready cues, accessible field labels, static reduced motion, either-half merging, unrelated selection, rejected remote/incompatible partners, drag-versus-double-click behavior, interrupted/repeated input, animation settling, touch/keyboard alternatives, both camera views, and reachable empty rear pallets at 1366×768 and 1024×768. Production identity and standalone gameplay checks run with `MEAN_PRODUCTION=1` and `MEAN_OFFLINE=1`.

`scripts/verify-portable-review.mjs` verifies ZIP CRCs and byte parity, extracts into a directory named by the immutable build identity, completes both original lessons and all three larger examples with networking disabled, and compares scene states with the served build. Optional `MEAN_SOURCE_URL` also compares the current development source. Results include the full identity, ZIP SHA-256, extracted-file hashes, state comparisons, browser errors and external-request counts. Generated evidence is under `.build/portable-review/`; the current production browser report is `.build/focused-browser-production.json`.

Automation uses the installed Edge browser. Installed Vivaldi's headless process terminated before a test page opened; that run gives no gameplay result. The final launcher is prepared for later manual Vivaldi review; the owner's latest instruction requests no new windows or sound on completion. Physical Chromebook/projector acceptance and screen-reader use remain unverified. Discussion notes remain session-only.

## Build Identity

Use the existing pinned Three.js 0.186.1, Vite 7.1.7, Playwright 1.55.1 and JSZip 3.10.1. The new checkout's ledger carries forward all prior reservations and allocates the next ordinal without changing old builds. The supported build script embeds version, codename, ordinal, UTC timestamp, source revision and fingerprint in the UI, manifest and package. See [Build Identity](BUILD_IDENTITY.md) and generated `.build/CURRENT_BUILD.md`.
