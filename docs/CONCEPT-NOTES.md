# Mean Machine: Non-Binding Concept Notes

Recorded September 27, 2026.

> Status: exploratory concept record. These notes preserve the brainstorming discussion, not an approved specification, roadmap, release scope, deadline, or instruction to begin implementation. Merging this document records the ideas; it does not commit to building every suggestion.

## Purpose and Project Boundary

Help students understand the arithmetic mean as the amount each group would contain if the total were shared equally. Pair the game with a worksheet so students predict, manipulate, calculate, and explain.

An early idea combined a factory activity and skimmer statistics in one application. The preferred direction from the discussion is now two separate projects:

- **Mean Machine:** tangible equal sharing in a factory.
- **[Skimmer Data Center](https://github.com/AbbyUsesAIThatCodes/SkimmerDataCenter):** guided spreadsheet use and analysis of real skimmer trials.

Separate repositories support focused development and later possible integration into Fulcrum and possibly Learning Compass. No host interface, integration contract, engine, framework, or deployment platform has been chosen.

## Proposed Factory Experience

The teacher proposed blocks arriving in irregularly sized groups. Each incoming group has a single color, with different groups visually distinguishable. An assembly line or conveyor could deliver the groups at the beginning of a round.

Students redistribute the blocks into the available loading bays so that every bay has an identical quantity and stack height. The incoming arrangement is color sorted; the finished loads can mix colors. Each block keeps its original color as it moves, making redistribution traceable.

A candidate interaction sequence:

1. Watch the incoming groups arrive and record their starting quantities.
2. Inspect the available loading bays and predict the equal share.
3. Move blocks into and between bays.
4. Press a possible **Dispatch** control to check the shipment.
5. Connect the final equal loads to addition and division, then explain the result.

Success would mean all supplied blocks are used and every bay has the same quantity. No blocks appear or disappear during redistribution. Equalizing the loads is the mathematical task; color patterns do not need a separate scoring rule.

## Illustrative Shipment

This is a fabricated teaching example, not classroom data or a fixed level specification.

| Incoming Group | Quantity |
| --- | ---: |
| Orange | 2 |
| Blue | 4 |
| Green | 9 |

There are 15 blocks and three loading bays. An equal shipment contains five blocks in each bay:

**(2 + 4 + 9) / 3 = 5**

One bay may contain several colors, and one original color may be distributed across several bays. Original quantities could remain visible in a small reference display while the physical blocks move.

Useful discussion prompts:

- What changed? The distribution among groups.
- What stayed the same? The total quantity and the number of groups.
- Why divide by three? There are three groups receiving equal shares.
- Must the mean be one of the starting values? No: five is the mean here, although no original group contained five.

## Mathematical Meaning

To model the mean of the incoming group quantities, the number of output bays must equal the number of incoming groups. Redistributing three input groups into five bays is a different division problem, not the mean of those three input values.

Use equal-sized blocks and consistent stacking so equal quantities correspond to equal heights. A later zero-valued input must still have an identifiable empty group and count toward the divisor.

The starting dataset and its mean stay fixed during redistribution. Reordering or transferring the existing blocks does not create a new dataset or change that original mean.

Whole blocks and integer means are the suggested starting point. Fractional means, splitting blocks, and the visual meaning of partial blocks remain later design questions. Do not silently round an unequal shipment into a successful one.

## Candidate Learning Progression

These are possibilities for a later roadmap, not scheduled milestones.

| Candidate Activity | Intended Learning |
| --- | --- |
| First Shipments | Make small unequal groups equal by moving blocks. |
| Predict the Shipment | Predict the final quantity before redistributing. |
| Changing Orders | Vary the number of input groups and matching output bays. |
| Explain the Shipment | Connect the model to total divided by number of values. |
| Target Mean | As a possible extension, choose a missing incoming quantity to reach a specified mean. |

Earlier brainstorming also suggested zero values, decimal means, and exploring how changing one original value affects the mean. Those can be considered after the basic interaction is understood.

## Candidate Interface and Classroom Use

A fixed 3D or isometric factory view could make stack heights and loading bays easy to compare. The visual style and dimensionality remain open.

Ideas to evaluate include simple block movement, readable quantities, clear destinations, labels or patterns alongside color, reset or undo, and a short opening conveyor animation. Animation should support counting and understanding.

Helpful feedback and an untimed introductory experience were suggested. The timing of numerical hints, the formula display, and the answer reveal should support prediction rather than immediately giving the result away.

Whole-class use on a classroom display and student use are both possibilities. The roadmap conversation should select the initial control methods and classroom mode.

## Accompanying Worksheet

The worksheet is part of the concept, not a completed deliverable. A suggested format is one double-sided sheet with rounds matching the game:

- Sketch or record the original groups.
- Predict the final equal quantity.
- Sketch the redistributed loads.
- Record the total, number of groups, and calculation.
- Explain what stayed constant and why division is used.
- Finish with a fresh problem solved independently of the game.

A recurring rhythm could be **Predict -> Try -> Calculate -> Explain**, related to the classroom's **Test It. Record It. Explain It.** approach. Exact wording, page count, number of rounds, and any teacher key remain open.

## Questions for the Roadmap Conversation

- What is the smallest classroom-ready experience?
- Will the initial activity run on the teacher's display, student devices, or both?
- How should moving one block feel with a mouse and with touch?
- Should blocks arrive directly into bays or into separate intake stacks?
- How many groups and blocks remain comfortably visible and countable?
- When should totals, formulas, hints, and the mean be revealed?
- Should initial rounds be fixed to match the worksheet, generated, or both?
- Which visual style, technology, hosting, and versioning choices fit the project?
- What belongs in the initial worksheet, and what evidence shows students understand the mean?

## Handoff

In a new conversation, read these notes and the current repository, then discuss and agree on a concrete roadmap for Mean Machine. After that, turn agreed scope into concrete issues and implement focused PRs.

No implementation issues, release dates, technical commitments, or playable features are established by this document.
