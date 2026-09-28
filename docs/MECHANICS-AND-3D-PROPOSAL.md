# Mean Machine Mechanics And 3D Proposal

Recorded September 28, 2026. This document develops the [original concept](CONCEPT-NOTES.md) for discussion. It is a design proposal, not a playable feature list, an approved implementation roadmap, or a release commitment.

## Confirmed Direction And Proposed Choices

The teacher requests a 3D interface with camera movement, at minimum a set introductory path shared in concept with Median Depot. Earlier confirmed decisions in [Median Depot's design brief](https://github.com/AbbyUsesAIThatCodes/MedianDepot/blob/08e90aed0a884d25c435adfd5c010487ebb765bf/docs/DESIGN.md) establish a common cartoon factory exterior: Mean Machine enters the factory; Median Depot heads toward the rail yard. Shared aesthetics and assets, Example Mode, Challenge Mode, and worksheet development after the game exists are also recorded there. Student laptops are the primary device target, with classroom projection readability; phone layouts are outside scope.

The original Mean Machine concept supplies the equal-sharing premise, distinct incoming groups, persistent block colors, equal output loads, conservation of the total, and the requirement that the bay count match the observation count. The exact controls, camera stops, progression, and feedback below are new recommendations for teacher review. Saving or merging this proposal preserves them without accepting every recommendation.

## What The Student Is Doing

Each shipment is a small dataset. One labeled bay represents one observation, and each same-size block represents one unit of its quantity. A conveyor delivers each original group directly onto its matching bay platform. This avoids a separate unloading puzzle: students immediately see the unequal starting stacks they need to redistribute.

The student moves units between bays until every bay contains an equal quantity. Block color and a repeated symbol identify the original group throughout. Mixed colors are expected. A fixed **Original Shipment** card records the original quantities; the labels beside the stacks say **Current Load**. Moving blocks changes the model's distribution, not the recorded measurements or their mean.

The physical story is repacking cargo. The mathematical story is a hypothetical equal share of the original total. When transferring this idea to skimmer distances, explain that the recorded flights did not physically change.

## A Complete Round

| Stage | Student Action | Display And Feedback | Learning Evidence |
| --- | --- | --- | --- |
| Receive | Inspect the delivered groups and identify how many there are. | Original quantities and bay IDs stay readable. An explicit zero has an empty labeled platform. | Correct observation count, including duplicates or zero. |
| Predict | Enter a predicted equal quantity, then select **Record Prediction**. | The prediction is saved without a correct/incorrect judgment. No mean, target height, or calculated total is revealed. | A prediction made before experimenting. |
| Redistribute | Select a source bay and a destination; move blocks between them. | Current quantities update; legal selection feedback identifies what will move. No correctness glow yet. **Undo Move** and **Reset Arrangement** remain available. | Deliberate redistribution while conserving the total. |
| Dispatch | Select **Dispatch** to check the arrangement. | Equal loads with all material accounted for receive green outlines and a text confirmation. Unequal loads receive red outlines and a concrete prompt to compare their quantities. Nothing departs yet. | A physically correct equal-sharing model. |
| Calculate | Enter the total, number of original observations, and equal share; select **Check Calculation**. | A blank equation scaffold connects the model to addition and division. Distinguish a wrong total, wrong count, and wrong quotient. Show the completed equation after success or an explicit worked hint. | A correct calculation rather than a successful arrangement alone. |
| Explain | Compare the prediction with the result and explain why the divisor is the bay count. | Keep original and final quantities together. Then **Send Shipment** animates departure. | Explain what changed, what stayed constant, and what the mean describes. |

The physical shipment can pass while the calculation still needs revision. Do not label these as the same achievement. An explanation prompt supports teacher discussion or student self-check; the first design does not claim automatic grading of free-text reasoning. Preserve the first prediction and support a fresh independent task to check transfer.

### Worked Original Example

For original quantities **2, 4, 9**, there are three bays and fifteen blocks. Move three blocks from the third bay to the first, then one from the third to the second. Current loads become **5, 5, 5**, while **Original Shipment** still shows **2, 4, 9**.

The completed calculation is **(2 + 4 + 9) / 3 = 5**. Ask why five can be the mean when none of the original observations was five. Sorting the values or averaging only the smallest and largest does not perform the same calculation.

This is the original Mean Machine teaching example, not collected classroom data or a reproduced curriculum exercise.

## Controls That Fit Student Laptops

Recommend click-source, click-destination as the primary action. Clicking a nonempty source highlights its top unit; clicking a different bay transfers that unit and snaps it into place. Clicking the same bay cancels. Clicking an empty source gives a neutral explanation. Start with one unit per move and small quantities; bulk moves can be reconsidered after classroom use.

Optional dragging uses the same move operation and snaps only to valid bays. Dropping elsewhere restores the source state. A compact **Factory Controls** overlay provides source/destination selectors and **Move One** for keyboard access, with the same rules. Keyboard users can select the source and destination, then activate **Move One** using Enter or Space. No instruction depends on precise dragging.

Do not use free-running block physics to decide quantities. Each completed move transfers an identified block or fractional piece exactly once; animations present that operation. During a move, block new moves, dispatch, and undo until it finishes. Zero motion performs the same operation immediately. **Undo Move** reverses the latest completed move or split. **Reset Arrangement** restores this shipment without changing its original values or first prediction. **Replay Shipment** starts the same task afresh, including a new prediction. **New Shipment** is a separate action.

Keep quantity labels anchored to their bays and legible as the camera moves. Color always has a symbol or text partner. Green/red results also have words and shapes. Persistent crate IDs, bay positions, source-group symbols, and quantities should not be confused.

## Modes And Help

**Example Mode** uses curated shipments with **Next Step** and **Replay Step**. The teacher or student advances delivery, prediction, a demonstrated transfer, equal-load checking, and the equation explanation. Stop between steps for class discussion; do not make the tutorial a continuously running film. Ask for a prediction before the demonstration gives the answer.

**Challenge Mode** asks students to predict, move, dispatch, calculate, and explain themselves. Use fixed versioned shipment codes first so everyone can revisit the same dataset and initial layout. No timer, score for minimum moves, or help penalty is proposed. A hint is available after prediction; record whether it was used so assisted completion is not mistaken for independent evidence. A new task with help unused provides a better independent check.

The first implementation can be a small whole-block demonstration. The broader teaching progression should include fractional means and transfer before claiming the complete mean-focused coverage below. Curated tasks come before generation, adaptive difficulty, accounts, or saved student records.

## Fractions And Rounding

Whole blocks introduce the idea, but are not the limit of a mean. Add an explicit **Split One** operation for selected rounds. Split one whole block into exactly as many equal pieces as there are bays, with each piece labeled by its value and retaining the original color/symbol. The total quantity is conserved even though the number of physical pieces changes. Pieces are scaled so equal quantities still produce equal stack heights.

For **2, 5**, move one whole block from the second bay to the first, leaving **3, 4**. Split one remaining whole block in the second bay into two halves, then move one half. Both loads now contain **3½**. The student must see **7 / 2 = 3½ = 3.5**. Two halves together are one unit; they must never be counted as two whole blocks.

Use exact quantities in the mathematical state, with friendly fraction/decimal labels. A repeating decimal can be displayed approximately, but successful equality uses the exact value. Decimal formatting is not permission to discard a remainder.

In these rounds, clicking the source selects its top piece, whether whole or fractional. Display the selected piece's value beside **Move One** so that “one” clearly means one piece, not necessarily one unit. **Split One** is available only for a whole top block. Dispatch sums piece values, verifies that all original quantity is present in the bays with nothing in transit, and compares those sums exactly; it does not compare piece counts. A wrong numeric prediction never blocks a student from trying the model.

Rounding is a separate reporting action in the skimmer transfer. Calculate the exact mean first, retain the raw trials and unit, then report the requested whole-number distance. Do not round the physical cargo loads or call an unequal shipment successful because their rounded labels match.

Negative values, freely entered fractional shipments, and arbitrary denominators need no first-release control. They do not disappear from mathematics; they are outside this introductory cargo model.

## A Small Teaching Progression

These are invented datasets proposed for discussion, not assigned shipment codes or committed levels.

| Dataset | Exact Mean | Teaching Purpose |
| --- | --- | --- |
| 2, 4, 9 | 5 | Make visibly unequal groups equal; the mean need not be an original value. |
| 2, 2, 8 | 4 | Repeated values remain three observations. |
| 1, 3, 5, 7 | 4 | Use four observations and four bays; do not always divide by three. |
| 0, 3, 6 | 3 | An explicit zero still counts; an empty/missing input is different. |
| 2, 5 | 3½ | An equal share can require pieces of a unit. |
| Three invented trial distances: 7, 8, 10 cm | 8⅓ cm; reported as 8 cm | Connect trials, exact mean, units, and the separate rounding step. |

For the final transfer, show a small trial table and calculation workbench rather than hundreds of cargo blocks. Label the example as invented. Then ask students to apply the same calculation to their own three recorded flights. A fictional example rehearses the procedure; it is not evidence that G35 has been met with personal data. Keep real student records in the classroom workflow.

## The Shared 3D Opening

Use one recognizable exterior scene and an identical starting camera pose for both games. The factory entrance, sign, and rail spur establish the shared place. The game already being opened determines the destination; a new launcher or hub is unnecessary for this introduction.

| Camera Stop | Mean Machine | Median Depot |
| --- | --- | --- |
| Exterior Establishing View | Common factory view and game title. | Same exterior, framing, and visual vocabulary. |
| Destination Turn | Turn toward the factory entrance. | Turn toward the rail spur and yard. |
| Arrival | Travel through the entrance to overlook the loading bays. | Travel toward the sorting row in the yard. |
| Teaching View | Settle at a stable three-quarter view showing every bay. | Settle where intact crate labels and order are clear. |

Recommend a brief, skippable introduction, roughly 6–10 seconds total, subject to review. **Skip Intro** immediately sets the final scene and camera state. **Reduce Motion** uses static stops or cuts. New rounds and replayed shipments stay inside the factory and do not repeat the exterior trip. Pause scene controls during a transition and restore keyboard focus at arrival. The introduction must never auto-submit a prediction or move mathematical quantities.

For gameplay, begin with camera presets: **Overview**, **Front View**, and **Inspect Load**. They offer purposeful movement with a reliable **Reset View**, while the front view makes stack-height comparisons easy. A stationary selected teaching view prevents the camera drifting during a move. Bounded orbit/zoom can follow if classroom review shows it helps; unrestricted flight is not required by the present request.

The 3D factory fills the window. Put compact, collapsible **Factory Controls** over unused space and keep the equation display compact. Avoid a permanent panel that squeezes the factory into a small strip. Camera framing must account for the open overlay, window resizing, and fullscreen so bays do not disappear behind controls. Do not show the target equal height before prediction.

## Sharing With Median Depot

Share the exterior layout, palette, suitable materials, block/crate appearances, and starting-camera definition. Each game keeps its own route endpoint, scene controls, and mathematical operations. Mean Machine moves quantities between observations; Median Depot sorts intact observations whose values remain fixed. Shared visuals must preserve that distinction. Optional mirrored pair highlights belong to Median Depot's ordering explanation, not to Mean Machine's equal-sharing rule.

Median Depot already uses Three.js and Vite, which makes the same stack a reasonable candidate here. This proposal does not select or install a runtime. Choose the sharing mechanism in a later bounded conversation after inspecting its actual assets. A versioned shared source with a recorded revision and attribution is preferable to two unrelated factory exteriors, but a package/submodule/copied-assets choice remains open. No companion repository changes are part of this PR.

## Curriculum Connection And Evidence

Use the [curriculum planning copy](curriculum/DM-1.4-Skimmer-Statistics-Curricular-Goals.md) for the full target register and exact source provenance. Prefix local audit IDs as **DM-1.4-Gxx** outside that document. They are local planning IDs, not official standards codes.

| Goals | Game Action Or Transfer | What Would Demonstrate Learning |
| --- | --- | --- |
| G09–G10 | Equalize the shipment, then write total divided by observation count. | Explain the equal share and compute it independently. |
| G11 | Keep one bay per original observation, including duplicates and explicit zero. | Give the correct divisor and explain why every observation counts. |
| G15 | Compare the factory's repacking task with Median Depot's intact-crate ordering task. | Describe how the two procedures differ. A shared opening alone is insufficient. |
| G05–G06 | Label the transfer table as individual trials and label the result as a mean distance. | Identify what each number represents and retain the distance unit. |
| G35–G36 | Apply the calculation to the student's own three trials, then round only the reported result. | Preserve raw trials, exact calculation, and rounded mean with units. |
| G48 | Explain and record the reasoning in the classroom workflow. | A written or otherwise retained explanation; game completion alone does not provide notebook evidence. |

The game mainly prepares one part of the activity's measures-of-center work. It does not by itself assess spread, box plots, spreadsheet construction, the class dataset, career work, or design justification. Median Depot and Skimmer Data Center remain separate companions. Do not expand this factory into an all-statistics application to claim those goals.

## Next Conversation

Discuss this proposal and settle the primary controls, fraction interaction, and camera presets. Then agree on a small first playable scope and turn only that accepted scope into bounded issues. Worksheet production follows the playable game. The current work creates no issues, game build, version number, codename, runtime, or deployment; build-producing work will apply the standing build-identity convention.
