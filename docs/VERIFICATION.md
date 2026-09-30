# Local Checkpoint Verification

## Verified Classroom State And Controls

- Core Chrome classroom flows pass at 1366 × 768, with a separate 1024 × 768 layout check. The source/destination label association found in the first run was fixed before the successful rerun.
- Whole shipment: a recorded prediction precedes moves; 2,4,9 becomes 5,5,5; original values remain visible; an incorrect observation count receives specific feedback; a correct calculation leads to a teacher-discussion explanation.
- Fractional shipment: 2,5 becomes 3.5 each through one whole transfer, a split into halves and one half transfer. Undo restores a whole ring, reset retains the prediction, and replay clears it.
- Keyboard source/destination actions preserve focus. Motion locks prevent repeated moves and dispatch while a transfer is pending. Reference can close with Escape and returns focus to its button.
- Seventeen Node tests pass: exact math, origin conservation, move locks, input handling, concurrent durable build allocation, quantity-based settled layout, frozen shared-file hashes, shared camera endpoints, and fractional geometry across all four relief patterns. Two half-layers occupy the same height as one whole ring; physical piece counts cannot add height.

## Verified 3D Behavior

- The initial transform and FOV exactly match the canonical exterior with no view offset. Animated entry, skip and reduced motion end at the same fitted teaching view without changing observations or submitting a prediction.
- Canvas hit testing transfers the identified top piece. Source color, relief, symbol and identity survive transfers and splits.
- A split shows two horizontal half-thickness layers with stronger bounce than an ordinary transfer. Pending operations lock relevant controls. Changing Reduce Motion while a split is active restores exact settled geometry; seven units remain seven units across two observations.
- Resize and simulated context loss preserve state and expose the accessible classroom controls. Replay and new shipments stay inside the factory.
- Visual inspection covers the shared exterior, initial 2/4/9 stacks, equal 5/5/5 loads, separated half-layers, equal 3.5 loads, and laptop framing. Current-load cards were lowered to clear the pallet tags, and two-pallet framing was tightened at narrower widths.

## Builds And Evidence

Use `.build/CURRENT_BUILD.md` and `.build/latest.json` for the current production identity. `scripts/verify-build.mjs` checks artifact directory, embedded manifest, compiled UI source, report, and distinct identities across two real builds. The production-only browser test checks the visible footer against the served manifest.

`scripts/capture-review.mjs` generates screenshots and read-only scene evidence under `.build/`, using the already-built production preview when `MEAN_BASE_URL` is set. The final screenshot folder is recorded in the current build report. `browser-tests/offline.spec.js` opens the standalone file with the network disabled, completes fractional sharing through explanation, and checks for external requests and browser errors. No real student, proprietary curriculum, or network-loaded art is included.

## Verification Limits

This remains a small local review prototype: two invented shipments, exact halves, and no persistent student records, generated task bank, or automatic grading of free-text reasoning. Thin Studded layers retain the shared source's teacher-review caveat; this game uses Grooved halves for the fractional task.

Testing used desktop Chrome automation on this Windows machine. There has been no physical classroom laptop/projector review or screen-reader session. Context loss is simulated to verify recovery handling. No public publication or deployment was attempted.
