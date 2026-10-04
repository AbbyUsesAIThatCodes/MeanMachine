# Tighter Framing And Level Drag Review

This separate local revision follows the owner's Build015 feedback. It changes only six-pallet framing, drag projection and arrow speed. Earlier source checkouts, review artifacts, game flow, exact quantities and canonical shared assets are preserved.

## Closer Fixed Framing

Build015 fitted a bounding volume tall enough for all 18 gears on every pallet. The new six-pallet framing uses the immutable original maximum stack plus one gear of headroom. It retains the original Overview/Front View directions, field of view and controls. The frame is fixed for the chosen view and viewport; cargo actions do not recalculate it.

At 1920x1080 the pallet labels are 34–35% larger than Build015. Across the tested 1920x1080, 1366x768 and 1024x768 views, the gain is 22–45%. All initial top targets, pallet drop targets and placard corners remain clear of the UI. The comparison is recorded in `.build/framing-comparison.json` and `.build/framing-{build015,candidate}-*.png`.

## Level Dragging

The old pickup plane faced the camera. Moving the pointer toward the front changed the gear's world height instead of carrying it over the floor. The measured Build015 rear-to-front path reached Y=-2.14 in Overview and Y=-2.55 in Front View while the camera stayed fixed. Diagnosis and screenshots are preserved in `.build/Build015-drag-diagnosis.json` and `.build/Build015-drag-*.png`.

The replacement plane is horizontal. At pickup, the carry height is fixed just above the tallest current stack, and the horizontal grab offset is retained. Pointer travel changes X/Z only. Height does not depend on camera angle, distance, motion preference or travel direction. A ray without a valid intersection leaves the existing held position intact. The accepted destination hit testing and stack landing animation remain in place, with exact state committed once on a valid release.

The owner's two Library screenshots could not be materialized locally because the supported Windows transfer helper failed on `os.setxattr`. No alternate transfer was used. The parent supplied its cloud visual inspection: one frame shows the held lavender gear well above the rear stack, the other shows a faint outline at the floor near B, with unchanged camera/layout. Local diagnosis independently reproduces the height fault; no local inspection of those owner images is claimed.

## Faster Accepted Arrows

The accepted gold triangle geometry, solid/translucent/solid fills, outline, clockwise path and spacing are unchanged. Duration changes from 8 seconds to 1.6 seconds; stagger delays are scaled by the same factor to preserve spacing. The gentle four-second halo, engagement stop, fresh-prompt reset and static reduced-motion cue remain unchanged. The arrows do not flash.

## Verification And Delivery

Unit coverage projects drag paths across both camera angles, three distances and zoom factors 0.75, 1 and 1.5, including invalid intersections. Browser coverage drags whole and half gears front-to-back and back-to-front at three viewport sizes in both views, checks the actual held bounds above the floor, verifies constant height/camera and exact destination landing, and retains the full lesson/gesture regressions. Arrow checks retain actual rendered path samples, styling, engagement and reduced motion, with updated timing and phase offsets. Framing checks enforce minimum label size and visible targets.

Use the current generated `.build/CURRENT_BUILD.md`, `.build/focused-browser-production.json`, and `.build/portable-review/verification.json` for final identity and results. The review branch is `review/tighter-frame-level-drag-20261004`. Build015 remains separately available. No installation, publication, merge, deployment or new owner-facing window is part of this correction. Automated QA uses installed Edge; Vivaldi remains the owner's manual review browser.
