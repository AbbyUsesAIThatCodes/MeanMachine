# Local Checkpoint Verification

## Verified Classroom State And Controls

- Four Chrome browser flows pass at 1366 × 768, with a separate 1024 × 768 layout check. The source/destination label association found in the first run was fixed before the successful rerun.
- Whole shipment: a recorded prediction precedes moves; 2,4,9 becomes 5,5,5; original values remain visible; an incorrect observation count receives specific feedback; a correct calculation leads to a teacher-discussion explanation.
- Fractional shipment: 2,5 becomes 3.5 each through one whole transfer, a split into halves and one half transfer. Undo restores a whole ring, reset retains the prediction, and replay clears it.
- Keyboard source/destination actions preserve focus. Motion locks prevent repeated moves and dispatch while a transfer is pending. Reference can close with Escape and returns focus to its button.
- Fourteen Node tests pass: exact math, origin conservation, move locks, input handling, concurrent durable build allocation, and quantity-based settled layout. Two half-layers occupy the same height as one whole ring; physical piece counts cannot add height.

## Builds And Evidence

Use `.build/CURRENT_BUILD.md` and `.build/latest.json` for the current production identity. `scripts/verify-build.mjs` checks artifact directory, embedded manifest, compiled UI source, report, and distinct identities across two real builds. The production-only browser test checks the visible footer against the served manifest.

The locally generated `test-results/mean-interface-checkpoint.png` is an interface checkpoint screenshot, not completed 3D-game evidence. It is intentionally outside version control. No real student, proprietary curriculum, or network-loaded art is included.

## Limits And Next Verification

Canonical world/cargo integration and animated entry remain pending the parent's frozen asset handoff. `src/scene.js` currently contains a renderer seam only. The timed presentation lock is tested, but visual ring motion, camera arrival, geometry readability, and 3D hit testing cannot be verified until integration. The game is not yet the finished playable 3D deliverable.

Testing used desktop Chrome automation on this Windows machine. There has been no physical classroom laptop/projector review, screen-reader session, or completed-shared-world visual review. No public publication or deployment was attempted.
