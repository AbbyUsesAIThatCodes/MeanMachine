# Jess Preservation And Abigail Resume

Original source: `5ae1507e496d31a95f46d36491d394f8e4187e05` on `local/equal-sharing-slice`. The original branch remains at the exact source commit; this separate preservation branch adds only evidence and this handoff.

Original build: `0.1.0_Foam-Rings_local-20260930-mean_build-006_20260930T142523Z_g5ae1507e496d_web`. This remains a local review build, not a PR build or readiness claim. 17 unit tests passed again on 2026-10-03; 11 browser tests are recorded historical evidence. No server or new browser run was started.

## Resume On Abigail

```sh
git clone --branch local/equal-sharing-slice https://github.com/AbbyUsesAIThatCodes/MeanMachine.git
cd MeanMachine
git rev-parse HEAD
git fetch origin preserve/jess-2026-10-03
```

Expected HEAD: `5ae1507e496d31a95f46d36491d394f8e4187e05`. Evidence can be viewed on `origin/preserve/jess-2026-10-03` without changing the original branch. Verify artifact SHA-256 against `CHECKSUMS.json` before use. Retain the original local build ledger as historical evidence; use a fresh explicit local scope or the documented durable PR allocator for any later build.

## Shared Factory

Canonical editable source: MedianDepot `871ca3d2e5d605524cd846db13de3e22a1ea9658`, branch `local/issue-2-shared-world`. MeanMachine consumes the original six `src/shared/` files byte-identically under its existing consumer lock. Do not reverse engineer MeanMachine or recreate this factory. The frozen archive is preserved on MedianDepot's preservation branch with SHA-256 `8ea6a139f9d3147ef7569e2405f0840590a24fc5f4a06ae14deccc355592833e`.

## Boundaries

No gameplay changes, merge, deployment, settings changes, or new build were made. MeanMachine Issues #4/#5/#9 remain outside this preservation task. Source history was screened for credential signatures, private-file candidates and oversized blobs; no exclusions or history rewriting were necessary for this repository. Dependency caches, browser profiles, private auth records and source-workspace metadata are excluded. Original browser evidence has not been represented as a new run. Read repository AGENTS.md and the shared integration contract before resuming.
