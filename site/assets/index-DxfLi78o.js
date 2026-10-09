(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Iu="1.0.0",Nu="018.1",Uu="mean-machine-018",Fu="mean-sharing-v1",Ou=[{id:"whole",code:"MM-01",title:"The First Shipment",values:[2,4,9],halves:!1,mechanic:"equal-share-half-units",stageOrder:["prediction","sharing","calculation","explanation","complete"],encyclopediaRefs:["pallets","gear-quantity","mean"]},{id:"halves",code:"MM-02",title:"A Share Between Whole Numbers",values:[2,5],halves:!0,mechanic:"equal-share-half-units",stageOrder:["prediction","sharing","calculation","explanation","complete"],encyclopediaRefs:["pallets","gear-quantity","mean"]}],ku=[{id:"layout-4",palletCount:4,shipmentId:"halves",values:[1,3,2,6],mechanic:"equal-share-half-units",encyclopediaRefs:["pallets","gear-quantity","mean"]},{id:"layout-5",palletCount:5,shipmentId:"halves",values:[1,3,5,2,4],mechanic:"equal-share-half-units",encyclopediaRefs:["pallets","gear-quantity","mean"]},{id:"layout-6",palletCount:6,shipmentId:"halves",values:[1,5,2,4,3,3],mechanic:"equal-share-half-units",encyclopediaRefs:["pallets","gear-quantity","mean"]}],Bu=[{id:"pallets",title:"Pallets",paragraphs:["Each labeled pallet represents one original value. Count the pallets, not the physical gear pieces.","Equal starting values still count separately. An empty pallet also counts."]},{id:"gear-quantity",title:"Gear Quantity",paragraphs:["One whole gear is one unit; two half-gears together are one unit.","Moving, splitting, or merging preserves the total and the original records."]},{id:"mean",title:"Mean",paragraphs:["The equal share: total gears ÷ number of pallets.","It can be a value that never appeared in the original data."]},{id:"median",title:"Median",paragraphs:["Found by ordering the original values and locating the middle.","Median Depot practices that different action."]}],zu=JSON.parse('{"main.fullscreen-is-unavailable-here-you-can-keep-using-the-window":"Fullscreen is unavailable here. You can keep using the window.","main.pallet-example-ready-start-with-your-prediction":"{{v0}}-pallet example ready. Start with your prediction.","main.entering-the-factory":"Entering The Factory","main.new-shipment-ready-start-with-a-prediction":"New shipment ready. Start with a prediction.","main.same-shipment-fresh-prediction":"Same shipment, fresh prediction.","main.original-arrangement-restored-your-first-prediction-is-retained":"Original arrangement restored. Your first prediction is retained.","main.last-move-split-or-merge-undone":"Last move, split, or merge undone.","main.the-cargo-animation-stopped-the-exact-move-is-complete-you-can-c":"The cargo animation stopped. The exact move is complete; you can continue or undo it.","main.moving-gear-unit-the-original-pallet-records-stay-unchanged":"Moving {{v0}} gear unit. The original pallet records stay unchanged.","main.these-two-matching-halves-become-one-whole-gear-the-quantity-sta":"These two matching halves become one whole gear. The quantity stays the same.","main.one-whole-gear-becomes-two-halves-the-quantity-stays-the-same":"One whole gear becomes two halves. The quantity stays the same.","main.selection-canceled":"Selection canceled.","main.pallet-selected":"Pallet {{v0}} selected.","main.this-pallet-is-empty-choose-a-source-with-cargo":"This pallet is empty. Choose a source with cargo.","main.text":"{{v0}} ÷ {{v1}} = {{v2}}","main.you-shared-the-total-equally-and-connected-it-to-the-mean-your-d":"<p>You shared the total equally and connected it to the mean.</p><p id=\\"completed-equation\\" class=\\"equation\\"></p><p class=\\"small\\">Your Discussion Notes</p><p id=\\"completed-explanation\\"></p><p class=\\"small\\">For your skimmer trials, use your recorded distances, keep their units, and calculate before rounding the reported mean.</p>","main.your-explanation-is-ready-choose-finish-shipment-to-complete-thi":"Your explanation is ready. Choose Finish Shipment to complete this lesson.","main.gear-movement-stays-paused-to-keep-your-equal-shares-add-your-ex":"Gear movement stays paused to keep your equal shares. Add your explanation in the golden field.","main.your-explanation-or-discussion-notes":"your explanation or discussion notes","main.equal-sharing-and-calculation-are-complete-keep-your-explanation":"Equal sharing and calculation are complete. Keep your explanation in your classroom notebook.","main.why-divide-by-pallets-what-changed-and-what-stayed-the-same-comp":"<p class=\\"equation\\">({{v0}}) ÷ {{v1}}<br />= {{v2}}</p><p>Why divide by {{v3}} pallets? What changed, and what stayed the same? Compare the mean with your prediction of {{v4}}.</p><form id=\\"explanation-form\\" novalidate><label for=\\"explanation\\">My Explanation / Discussion Notes</label><textarea id=\\"explanation\\" rows=\\"3\\" required></textarea><button class=\\"primary\\">Finish Shipment</button></form><p class=\\"small\\">Discuss your reasoning with your teacher. Written reasoning is not automatically graded or saved after you leave.</p>","main.text-2":"{{v0}} = {{v1}}","main.all-three-answers-are-ready-choose-check-calculation-to-continue":"All three answers are ready. Choose Check Calculation to continue. Gear movement stays paused to keep your equal shares.","main.gear-movement-is-paused-while-you-record-the-equal-shares-answer":"Gear movement is paused while you record the equal shares. Answer the golden field.","main.gears-per-pallet":"gears per pallet","main.number-of-pallets":"number of pallets","main.total-gears":"total gears","main.your-loads-are-equal-use-the-original-shipment-to-complete-the-c":"<p>Your loads are equal. Use the <strong>Original Shipment</strong> to complete the calculation. Two halves count as one gear.</p><form id=\\"calculation-form\\" novalidate><label for=\\"total\\">Total Gears</label><input id=\\"total\\" inputmode=\\"decimal\\" required /><label for=\\"count\\">Number Of Pallets</label><input id=\\"count\\" inputmode=\\"numeric\\" required /><label for=\\"mean\\">Mean: Gears Per Pallet</label><input id=\\"mean\\" inputmode=\\"decimal\\" required /><button class=\\"primary\\">Check Calculation</button></form>","main.from-to-move-top-ring-split-top-gear-into-halves-merge-matching":"<p id=\\"selection-note\\" class=\\"selection-note\\"></p><div class=\\"control-row\\"><div><label for=\\"source\\">From</label><select id=\\"source\\">{{v0}}</select></div><div><label for=\\"destination\\">To</label><select id=\\"destination\\">{{v1}}</select></div></div><div class=\\"control-stack\\"><button id=\\"move\\">Move Top Ring</button><button id=\\"split\\">Split Top Gear Into Halves</button><button id=\\"merge\\">Merge Matching Top Halves</button><button id=\\"dispatch\\" class=\\"primary\\">Dispatch: Check Equal Shares</button></div><p class=\\"small\\">Double-click a whole top gear to split it, or either highlighted matching top half to merge the pair. Keep every unit of cargo; all pallets must have the same <strong>quantity</strong>.</p>","main.pallet":"<option value=\\"{{v0}}\\">Pallet {{v1}}</option>","main.prediction-ready-choose-record-prediction-to-unlock-gear-movemen":"Prediction ready. Choose Record Prediction to unlock gear movement.","main.gear-movement-is-paused-until-you-record-your-prediction-answer":"Gear movement is paused until you record your prediction. Answer the golden field.","main.your-predicted-share":"your predicted share","main.prediction-recorded-explore-the-cargo-and-make-equal-shares":"Prediction recorded. Explore the cargo and make equal shares.","main.imagine-sharing-all-the-cargo-equally-how-many-ring-units-might":"<p>Imagine sharing all the cargo equally. How many ring units might each pallet receive?</p><form id=\\"prediction-form\\"><label for=\\"prediction\\">My Predicted Share</label><input id=\\"prediction\\" name=\\"prediction\\" inputmode=\\"decimal\\" autocomplete=\\"off\\" placeholder=\\"Your prediction\\" required /><button class=\\"primary\\">Record Prediction</button></form><p class=\\"small\\">A prediction is a starting idea. You can investigate even if it turns out differently.</p>","main.move-top-ring":"Move Top Ring","main.move-top-layer":"Move Top ½ Layer","main.pallet-selected-choose-a-destination-select-it-again-to-cancel":"Pallet {{v0}} selected. Choose a destination; select it again to cancel.","main.drag-a-top-gear-to-another-pallet-or-select-a-source-and-destina":"Drag a top gear to another pallet. Or select a source and destination using the buttons below.","main.try-whole-rings":"Try Whole Rings","main.try-half-rings":"Try Half-Rings","main.pallet-current-load":"<button class=\\"load\\" data-pallet=\\"{{v0}}\\" aria-label=\\"Pallet {{v1}}, current load {{v2}} units{{v3}}\\" aria-pressed=\\"{{v4}}\\" {{v5}}><span class=\\"pallet-name\\">Pallet {{v6}}</span><span class=\\"value\\">{{v7}}</span><span class=\\"label\\">Current Load</span><span class=\\"piece\\">{{v8}}</span></button>","main.empty":", empty","main.top-piece-unit-from":", top piece {{v0}}, {{v1}} unit from {{v2}}","main.empty-pallet":"Empty Pallet","main.top":"Top: {{v0}}<br>{{v1}} {{v2}}","main.1-ring":"1 Ring","main.layer":"½ Layer","main.first-prediction-units-per-pallet":"First prediction: {{v0}} units per pallet","main.pallet-layout-review":"{{v0}}-Pallet Layout Review","main.pallet-2":"<div class=\\"original-row\\"><span><span class=\\"identity\\">{{v0}}</span> Pallet {{v1}}</span><strong>{{v2}}</strong></div>","main.text-3":"{{v0}} • {{v1}}","main.shipment-complete":"Shipment Complete","main.explain-the-equal-share":"Explain The Equal Share","main.connect-the-calculation":"Connect The Calculation","main.make-equal-shares":"Make Equal Shares","main.what-is-your-prediction":"What Is Your Prediction?","main.gear-movement-is-paused-at-this-step-use-reset-arrangement-to-re":"Gear movement is paused at this step. Use Reset Arrangement to return to sharing.","math-state.add-your-explanation-or-discussion-notes-before-finishing":"Add your explanation or discussion notes before finishing.","math-state.check-the-calculation-first":"Check the calculation first.","math-state.your-total-gears-pallet-count-and-mean-all-agree-with-the-equal":"Your total gears, pallet count, and mean all agree with the equal shares.","math-state.dispatch-equal-loads-before-calculating":"Dispatch equal loads before calculating.","math-state.divide-the-total-gears-by-the-number-of-pallets-keep-any-half-ge":"Divide the total gears by the number of pallets. Keep any half-gear.","math-state.count-the-labeled-pallets-not-the-gears-or-half-gears-each-origi":"Count the labeled pallets, not the gears or half-gears. Each original pallet counts once, even if it is empty.","math-state.recheck-the-total-gears-add-every-value-in-original-shipment-two":"Recheck the total gears: add every value in Original Shipment. Two halves count as one gear.","math-state.the-current-loads-are-compare-the-largest-and-smallest-loads-and":"The current loads are {{v0}}. Compare the largest and smallest loads and keep sharing.","math-state.equal-shares-all-original-cargo-is-accounted-for-now-connect-the":"Equal shares! All original cargo is accounted for. Now connect the model to a calculation.","math-state.there-is-no-move-to-undo":"There is no move to undo.","math-state.choose-a-whole-top-gear-or-either-of-the-highlighted-matching-to":"Choose a whole top gear or either of the highlighted matching top halves.","math-state.place-the-two-matching-halves-together-at-the-top-of-the-same-pa":"Place the two matching halves together at the top of the same pallet to merge them.","math-state.choose-a-whole-top-gear-to-split-into-halves":"Choose a whole top gear to split into halves.","math-state.this-pallet-is-empty-choose-a-pallet-with-cargo":"This pallet is empty. Choose a pallet with cargo.","math-state.choose-a-different-destination":"Choose a different destination.","math-state.enter-a-quantity-such-as-4-or-3-5":"Enter a quantity, such as 4 or 3.5.","math-state.your-first-prediction-is-already-recorded":"Your first prediction is already recorded.","math-state.choose-a-labeled-pallet":"Choose a labeled pallet.","math-state.gear-movement-is-paused-while-you-complete-this-step":"Gear movement is paused while you complete this step.","math-state.record-a-prediction-before-sharing":"Record a prediction before sharing.","math-state.wait-for-the-cargo-to-settle":"Wait for the cargo to settle.","math-state.invalid-piece":"Invalid piece.","math-state.original-quantity-was-not-conserved":"Original quantity was not conserved.","math-state.a-piece-occurs-more-than-once":"A piece occurs more than once.","math-state.every-original-observation-needs-one-pallet":"Every original observation needs one pallet.","math-state.choose-a-total-that-can-be-shared-equally-in-whole-or-half-gears":"Choose a total that can be shared equally in whole or half gears.","math-state.choose-one-to-six-pallets-with-whole-starting-gear-quantities":"Choose one to six pallets with whole starting gear quantities.","math-state.unknown-shipment":"Unknown shipment.","scene.the-3d-view-is-ready-again":"The 3D view is ready again.","scene.the-3d-view-paused-your-exact-quantities-are-safe-all-sharing-co":"The 3D view paused. Your exact quantities are safe; all sharing controls remain available.","scene.split-a-whole-top-gear-or-merge-its-matching-halves-together-at":"Split a whole top gear, or merge its matching halves together at the top of one pallet.","scene.drop-canceled-your-cargo-is-unchanged":"Drop canceled. Your cargo is unchanged.","scene.drop-canceled-choose-a-different-pallet-no-cargo-changed":"Drop canceled. Choose a different pallet; no cargo changed.","scene.gear-picked-up-drop-on-another-pallet-or-press-escape-to-cancel":"Gear picked up. Drop on another pallet, or press Escape to cancel.","scene.pickup-canceled-the-same-piece-returned-to-its-stack":"Pickup canceled. The same piece returned to its stack.","scene.drag-this-half-to-move-it-merging-needs-its-matching-half-beside":"Drag this half to move it. Merging needs its matching half beside it at the top.","scene.double-click-either-highlighted-half-to-merge-this-top-pair":"Double-click either highlighted half to merge this top pair.","scene.double-click-to-split-this-gear-drag-to-move-it":"Double-click to split this gear. Drag to move it.","scene.pickup-canceled":"Pickup canceled.","scene.pallet-current-load":"Pallet {{v0}} • Current Load","scene.text":"{{v0}}: {{v1}}","scene.pallet":"Pallet {{v0}}","scene.the-3d-view-is-unavailable-all-sharing-controls-remain-available":"The 3D view is unavailable. All sharing controls remain available.","answer-cues.next":"{{v0}} Next: {{v1}}.","answer-cues.ready":"✓ Ready","shell.mean-machine-equal-shares":"Mean Machine — Equal Shares","shell.the-foam-ring-factory":"The Foam-Ring Factory","shell.mean-machine":"Mean Machine","shell.reduce-motion":" Reduce Motion","shell.fullscreen":"Fullscreen","shell.reference":"Reference","shell.one-factory-two-ways-to-explore":"One Factory, Two Ways To Explore","shell.welcome-to-foam-works":"Welcome To Foam Works","shell.head-inside-to-share-colorful-cargo-equally-among-the-labeled-pa":"Head inside to share colorful cargo equally among the labeled pallets.","shell.enter-the-factory":"Enter The Factory","shell.skip-intro":"Skip Intro","shell.overview":"Overview","shell.front-view":"Front View","shell.original-shipment":"Original Shipment","shell.each-labeled-pallet-counts-once-one-whole-gear-is-one-unit-two-h":"Each labeled pallet counts once. One whole gear is one unit; two halves also make one unit.","shell.predict":"Predict","shell.share":"Share","shell.calculate":"Calculate","shell.explain":"Explain","shell.undo-move":"Undo Move","shell.reset-arrangement":"Reset Arrangement","shell.replay-shipment":"Replay Shipment","shell.try-half-rings":"Try Half-Rings","shell.try-6-pallet-example":"Try 6-Pallet Example","shell.factory-reference":"Factory Reference","shell.in-skimmer-statistics-each-recorded-trial-counts-once-repacking":"In skimmer statistics, each recorded trial counts once. Repacking this model does not change recorded flight distances.","shell.larger-layout-review":"Larger Layout Review","shell.these-fixed-examples-let-you-review-four-to-six-pallets-opening":"These fixed examples let you review four to six pallets. Opening one starts a new shipment. The two original lessons stay available through the shipment button.","shell.pallets-in-layout-review":"Pallets In Layout Review","shell.4-pallets":"4 Pallets","shell.5-pallets":"5 Pallets","shell.6-pallets":"6 Pallets","shell.open-layout-review":"Open Layout Review","shell.full-build-details":"Full Build Details","shell.close-reference":"Close Reference"}'),Hu={schemaVersion:Iu,contentRevision:Nu,packId:Uu,adapter:Fu,lessons:Ou,scenarios:ku,encyclopedia:Bu,messages:zu},Gu="object",Vu=JSON.parse('{"schemaVersion":{"const":"1.0.0"},"contentRevision":{"type":"string","minLength":1,"maxLength":64,"pattern":"^[A-Za-z0-9][A-Za-z0-9._-]*$"},"packId":{"const":"mean-machine-018"},"adapter":{"const":"mean-sharing-v1"},"lessons":{"type":"array","minItems":2,"maxItems":2,"items":{"type":"object","properties":{"id":{"enum":["whole","halves"]},"code":{"type":"string","minLength":1,"maxLength":40,"pattern":"^[^<>\\"\\\\u0000-\\\\u0008\\\\u000b\\\\u000c\\\\u000e-\\\\u001f]*$"},"title":{"type":"string","minLength":1,"maxLength":2000,"pattern":"^[^<>\\"\\\\u0000-\\\\u0008\\\\u000b\\\\u000c\\\\u000e-\\\\u001f]*$"},"values":{"type":"array","minItems":1,"maxItems":6,"items":{"type":"integer","minimum":0,"maximum":12}},"halves":{"type":"boolean"},"mechanic":{"const":"equal-share-half-units"},"stageOrder":{"const":["prediction","sharing","calculation","explanation","complete"]},"encyclopediaRefs":{"type":"array","minItems":1,"maxItems":4,"uniqueItems":true,"items":{"type":"string","enum":["pallets","gear-quantity","mean","median"]}}},"required":["id","code","title","values","halves","mechanic","stageOrder","encyclopediaRefs"],"additionalProperties":false}},"scenarios":{"type":"array","minItems":3,"maxItems":3,"items":{"type":"object","properties":{"id":{"enum":["layout-4","layout-5","layout-6"]},"palletCount":{"type":"integer","minimum":4,"maximum":6},"shipmentId":{"const":"halves"},"values":{"type":"array","minItems":1,"maxItems":6,"items":{"type":"integer","minimum":0,"maximum":12}},"mechanic":{"const":"equal-share-half-units"},"encyclopediaRefs":{"type":"array","minItems":1,"maxItems":4,"uniqueItems":true,"items":{"type":"string","enum":["pallets","gear-quantity","mean","median"]}}},"required":["id","palletCount","shipmentId","values","mechanic","encyclopediaRefs"],"additionalProperties":false}},"encyclopedia":{"type":"array","minItems":4,"maxItems":4,"items":{"type":"object","properties":{"id":{"enum":["pallets","gear-quantity","mean","median"]},"title":{"type":"string","minLength":1,"maxLength":2000,"pattern":"^[^<>\\"\\\\u0000-\\\\u0008\\\\u000b\\\\u000c\\\\u000e-\\\\u001f]*$"},"paragraphs":{"type":"array","minItems":2,"maxItems":2,"items":{"type":"string","minLength":1,"maxLength":2000,"pattern":"^[^<>\\"\\\\u0000-\\\\u0008\\\\u000b\\\\u000c\\\\u000e-\\\\u001f]*$"}}},"required":["id","title","paragraphs"],"additionalProperties":false}},"messages":{"type":"object","properties":{"main.fullscreen-is-unavailable-here-you-can-keep-using-the-window":{"type":"string","minLength":1,"maxLength":12000,"default":"Fullscreen is unavailable here. You can keep using the window.","description":"src/main.js:179. Keep runtime tokens and HTML structure."},"main.pallet-example-ready-start-with-your-prediction":{"type":"string","minLength":1,"maxLength":12000,"default":"{{v0}}-pallet example ready. Start with your prediction.","description":"src/main.js:172. Keep runtime tokens and HTML structure."},"main.entering-the-factory":{"type":"string","minLength":1,"maxLength":12000,"default":"Entering The Factory","description":"src/main.js:162. Keep runtime tokens and HTML structure."},"main.new-shipment-ready-start-with-a-prediction":{"type":"string","minLength":1,"maxLength":12000,"default":"New shipment ready. Start with a prediction.","description":"src/main.js:158. Keep runtime tokens and HTML structure."},"main.same-shipment-fresh-prediction":{"type":"string","minLength":1,"maxLength":12000,"default":"Same shipment, fresh prediction.","description":"src/main.js:157. Keep runtime tokens and HTML structure."},"main.original-arrangement-restored-your-first-prediction-is-retained":{"type":"string","minLength":1,"maxLength":12000,"default":"Original arrangement restored. Your first prediction is retained.","description":"src/main.js:156. Keep runtime tokens and HTML structure."},"main.last-move-split-or-merge-undone":{"type":"string","minLength":1,"maxLength":12000,"default":"Last move, split, or merge undone.","description":"src/main.js:155. Keep runtime tokens and HTML structure."},"main.the-cargo-animation-stopped-the-exact-move-is-complete-you-can-c":{"type":"string","minLength":1,"maxLength":12000,"default":"The cargo animation stopped. The exact move is complete; you can continue or undo it.","description":"src/main.js:152. Keep runtime tokens and HTML structure."},"main.moving-gear-unit-the-original-pallet-records-stay-unchanged":{"type":"string","minLength":1,"maxLength":12000,"default":"Moving {{v0}} gear unit. The original pallet records stay unchanged.","description":"src/main.js:149. Keep runtime tokens and HTML structure."},"main.these-two-matching-halves-become-one-whole-gear-the-quantity-sta":{"type":"string","minLength":1,"maxLength":12000,"default":"These two matching halves become one whole gear. The quantity stays the same.","description":"src/main.js:149. Keep runtime tokens and HTML structure."},"main.one-whole-gear-becomes-two-halves-the-quantity-stays-the-same":{"type":"string","minLength":1,"maxLength":12000,"default":"One whole gear becomes two halves. The quantity stays the same.","description":"src/main.js:149. Keep runtime tokens and HTML structure."},"main.selection-canceled":{"type":"string","minLength":1,"maxLength":12000,"default":"Selection canceled.","description":"src/main.js:139. Keep runtime tokens and HTML structure."},"main.pallet-selected":{"type":"string","minLength":1,"maxLength":12000,"default":"Pallet {{v0}} selected.","description":"src/main.js:138. Keep runtime tokens and HTML structure."},"main.this-pallet-is-empty-choose-a-source-with-cargo":{"type":"string","minLength":1,"maxLength":12000,"default":"This pallet is empty. Choose a source with cargo.","description":"src/main.js:137. Keep runtime tokens and HTML structure."},"main.text":{"type":"string","minLength":1,"maxLength":12000,"default":"{{v0}} ÷ {{v1}} = {{v2}}","description":"src/main.js:129. Keep runtime tokens and HTML structure."},"main.you-shared-the-total-equally-and-connected-it-to-the-mean-your-d":{"type":"string","minLength":1,"maxLength":12000,"default":"<p>You shared the total equally and connected it to the mean.</p><p id=\\"completed-equation\\" class=\\"equation\\"></p><p class=\\"small\\">Your Discussion Notes</p><p id=\\"completed-explanation\\"></p><p class=\\"small\\">For your skimmer trials, use your recorded distances, keep their units, and calculate before rounding the reported mean.</p>","description":"src/main.js:128. Keep runtime tokens and HTML structure."},"main.your-explanation-is-ready-choose-finish-shipment-to-complete-thi":{"type":"string","minLength":1,"maxLength":12000,"default":"Your explanation is ready. Choose Finish Shipment to complete this lesson.","description":"src/main.js:125. Keep runtime tokens and HTML structure."},"main.gear-movement-stays-paused-to-keep-your-equal-shares-add-your-ex":{"type":"string","minLength":1,"maxLength":12000,"default":"Gear movement stays paused to keep your equal shares. Add your explanation in the golden field.","description":"src/main.js:124. Keep runtime tokens and HTML structure."},"main.your-explanation-or-discussion-notes":{"type":"string","minLength":1,"maxLength":12000,"default":"your explanation or discussion notes","description":"src/main.js:123. Keep runtime tokens and HTML structure."},"main.equal-sharing-and-calculation-are-complete-keep-your-explanation":{"type":"string","minLength":1,"maxLength":12000,"default":"Equal sharing and calculation are complete. Keep your explanation in your classroom notebook.","description":"src/main.js:121. Keep runtime tokens and HTML structure."},"main.why-divide-by-pallets-what-changed-and-what-stayed-the-same-comp":{"type":"string","minLength":1,"maxLength":12000,"default":"<p class=\\"equation\\">({{v0}}) ÷ {{v1}}<br />= {{v2}}</p><p>Why divide by {{v3}} pallets? What changed, and what stayed the same? Compare the mean with your prediction of {{v4}}.</p><form id=\\"explanation-form\\" novalidate><label for=\\"explanation\\">My Explanation / Discussion Notes</label><textarea id=\\"explanation\\" rows=\\"3\\" required></textarea><button class=\\"primary\\">Finish Shipment</button></form><p class=\\"small\\">Discuss your reasoning with your teacher. Written reasoning is not automatically graded or saved after you leave.</p>","description":"src/main.js:120. Keep runtime tokens and HTML structure."},"main.text-2":{"type":"string","minLength":1,"maxLength":12000,"default":"{{v0}} = {{v1}}","description":"src/main.js:120. Keep runtime tokens and HTML structure."},"main.all-three-answers-are-ready-choose-check-calculation-to-continue":{"type":"string","minLength":1,"maxLength":12000,"default":"All three answers are ready. Choose Check Calculation to continue. Gear movement stays paused to keep your equal shares.","description":"src/main.js:116. Keep runtime tokens and HTML structure."},"main.gear-movement-is-paused-while-you-record-the-equal-shares-answer":{"type":"string","minLength":1,"maxLength":12000,"default":"Gear movement is paused while you record the equal shares. Answer the golden field.","description":"src/main.js:115. Keep runtime tokens and HTML structure."},"main.gears-per-pallet":{"type":"string","minLength":1,"maxLength":12000,"default":"gears per pallet","description":"src/main.js:114. Keep runtime tokens and HTML structure."},"main.number-of-pallets":{"type":"string","minLength":1,"maxLength":12000,"default":"number of pallets","description":"src/main.js:114. Keep runtime tokens and HTML structure."},"main.total-gears":{"type":"string","minLength":1,"maxLength":12000,"default":"total gears","description":"src/main.js:114. Keep runtime tokens and HTML structure."},"main.your-loads-are-equal-use-the-original-shipment-to-complete-the-c":{"type":"string","minLength":1,"maxLength":12000,"default":"<p>Your loads are equal. Use the <strong>Original Shipment</strong> to complete the calculation. Two halves count as one gear.</p><form id=\\"calculation-form\\" novalidate><label for=\\"total\\">Total Gears</label><input id=\\"total\\" inputmode=\\"decimal\\" required /><label for=\\"count\\">Number Of Pallets</label><input id=\\"count\\" inputmode=\\"numeric\\" required /><label for=\\"mean\\">Mean: Gears Per Pallet</label><input id=\\"mean\\" inputmode=\\"decimal\\" required /><button class=\\"primary\\">Check Calculation</button></form>","description":"src/main.js:110. Keep runtime tokens and HTML structure."},"main.from-to-move-top-ring-split-top-gear-into-halves-merge-matching":{"type":"string","minLength":1,"maxLength":12000,"default":"<p id=\\"selection-note\\" class=\\"selection-note\\"></p><div class=\\"control-row\\"><div><label for=\\"source\\">From</label><select id=\\"source\\">{{v0}}</select></div><div><label for=\\"destination\\">To</label><select id=\\"destination\\">{{v1}}</select></div></div><div class=\\"control-stack\\"><button id=\\"move\\">Move Top Ring</button><button id=\\"split\\">Split Top Gear Into Halves</button><button id=\\"merge\\">Merge Matching Top Halves</button><button id=\\"dispatch\\" class=\\"primary\\">Dispatch: Check Equal Shares</button></div><p class=\\"small\\">Double-click a whole top gear to split it, or either highlighted matching top half to merge the pair. Keep every unit of cargo; all pallets must have the same <strong>quantity</strong>.</p>","description":"src/main.js:98. Keep runtime tokens and HTML structure."},"main.pallet":{"type":"string","minLength":1,"maxLength":12000,"default":"<option value=\\"{{v0}}\\">Pallet {{v1}}</option>","description":"src/main.js:97. Keep runtime tokens and HTML structure."},"main.prediction-ready-choose-record-prediction-to-unlock-gear-movemen":{"type":"string","minLength":1,"maxLength":12000,"default":"Prediction ready. Choose Record Prediction to unlock gear movement.","description":"src/main.js:94. Keep runtime tokens and HTML structure."},"main.gear-movement-is-paused-until-you-record-your-prediction-answer":{"type":"string","minLength":1,"maxLength":12000,"default":"Gear movement is paused until you record your prediction. Answer the golden field.","description":"src/main.js:93. Keep runtime tokens and HTML structure."},"main.your-predicted-share":{"type":"string","minLength":1,"maxLength":12000,"default":"your predicted share","description":"src/main.js:92. Keep runtime tokens and HTML structure."},"main.prediction-recorded-explore-the-cargo-and-make-equal-shares":{"type":"string","minLength":1,"maxLength":12000,"default":"Prediction recorded. Explore the cargo and make equal shares.","description":"src/main.js:89. Keep runtime tokens and HTML structure."},"main.imagine-sharing-all-the-cargo-equally-how-many-ring-units-might":{"type":"string","minLength":1,"maxLength":12000,"default":"<p>Imagine sharing all the cargo equally. How many ring units might each pallet receive?</p><form id=\\"prediction-form\\"><label for=\\"prediction\\">My Predicted Share</label><input id=\\"prediction\\" name=\\"prediction\\" inputmode=\\"decimal\\" autocomplete=\\"off\\" placeholder=\\"Your prediction\\" required /><button class=\\"primary\\">Record Prediction</button></form><p class=\\"small\\">A prediction is a starting idea. You can investigate even if it turns out differently.</p>","description":"src/main.js:88. Keep runtime tokens and HTML structure."},"main.move-top-ring":{"type":"string","minLength":1,"maxLength":12000,"default":"Move Top Ring","description":"src/main.js:80. Keep runtime tokens and HTML structure."},"main.move-top-layer":{"type":"string","minLength":1,"maxLength":12000,"default":"Move Top ½ Layer","description":"src/main.js:80. Keep runtime tokens and HTML structure."},"main.pallet-selected-choose-a-destination-select-it-again-to-cancel":{"type":"string","minLength":1,"maxLength":12000,"default":"Pallet {{v0}} selected. Choose a destination; select it again to cancel.","description":"src/main.js:79. Keep runtime tokens and HTML structure."},"main.drag-a-top-gear-to-another-pallet-or-select-a-source-and-destina":{"type":"string","minLength":1,"maxLength":12000,"default":"Drag a top gear to another pallet. Or select a source and destination using the buttons below.","description":"src/main.js:79. Keep runtime tokens and HTML structure."},"main.try-whole-rings":{"type":"string","minLength":1,"maxLength":12000,"default":"Try Whole Rings","description":"src/main.js:70. Keep runtime tokens and HTML structure."},"main.try-half-rings":{"type":"string","minLength":1,"maxLength":12000,"default":"Try Half-Rings","description":"src/main.js:70. Keep runtime tokens and HTML structure."},"main.pallet-current-load":{"type":"string","minLength":1,"maxLength":12000,"default":"<button class=\\"load\\" data-pallet=\\"{{v0}}\\" aria-label=\\"Pallet {{v1}}, current load {{v2}} units{{v3}}\\" aria-pressed=\\"{{v4}}\\" {{v5}}><span class=\\"pallet-name\\">Pallet {{v6}}</span><span class=\\"value\\">{{v7}}</span><span class=\\"label\\">Current Load</span><span class=\\"piece\\">{{v8}}</span></button>","description":"src/main.js:64. Keep runtime tokens and HTML structure."},"main.empty":{"type":"string","minLength":1,"maxLength":12000,"default":", empty","description":"src/main.js:64. Keep runtime tokens and HTML structure."},"main.top-piece-unit-from":{"type":"string","minLength":1,"maxLength":12000,"default":", top piece {{v0}}, {{v1}} unit from {{v2}}","description":"src/main.js:64. Keep runtime tokens and HTML structure."},"main.empty-pallet":{"type":"string","minLength":1,"maxLength":12000,"default":"Empty Pallet","description":"src/main.js:64. Keep runtime tokens and HTML structure."},"main.top":{"type":"string","minLength":1,"maxLength":12000,"default":"Top: {{v0}}<br>{{v1}} {{v2}}","description":"src/main.js:64. Keep runtime tokens and HTML structure."},"main.1-ring":{"type":"string","minLength":1,"maxLength":12000,"default":"1 Ring","description":"src/main.js:64. Keep runtime tokens and HTML structure."},"main.layer":{"type":"string","minLength":1,"maxLength":12000,"default":"½ Layer","description":"src/main.js:64. Keep runtime tokens and HTML structure."},"main.first-prediction-units-per-pallet":{"type":"string","minLength":1,"maxLength":12000,"default":"First prediction: {{v0}} units per pallet","description":"src/main.js:61. Keep runtime tokens and HTML structure."},"main.pallet-layout-review":{"type":"string","minLength":1,"maxLength":12000,"default":"{{v0}}-Pallet Layout Review","description":"src/main.js:60. Keep runtime tokens and HTML structure."},"main.pallet-2":{"type":"string","minLength":1,"maxLength":12000,"default":"<div class=\\"original-row\\"><span><span class=\\"identity\\">{{v0}}</span> Pallet {{v1}}</span><strong>{{v2}}</strong></div>","description":"src/main.js:58. Keep runtime tokens and HTML structure."},"main.text-3":{"type":"string","minLength":1,"maxLength":12000,"default":"{{v0}} • {{v1}}","description":"src/main.js:57. Keep runtime tokens and HTML structure."},"main.shipment-complete":{"type":"string","minLength":1,"maxLength":12000,"default":"Shipment Complete","description":"src/main.js:49. Keep runtime tokens and HTML structure."},"main.explain-the-equal-share":{"type":"string","minLength":1,"maxLength":12000,"default":"Explain The Equal Share","description":"src/main.js:49. Keep runtime tokens and HTML structure."},"main.connect-the-calculation":{"type":"string","minLength":1,"maxLength":12000,"default":"Connect The Calculation","description":"src/main.js:49. Keep runtime tokens and HTML structure."},"main.make-equal-shares":{"type":"string","minLength":1,"maxLength":12000,"default":"Make Equal Shares","description":"src/main.js:49. Keep runtime tokens and HTML structure."},"main.what-is-your-prediction":{"type":"string","minLength":1,"maxLength":12000,"default":"What Is Your Prediction?","description":"src/main.js:49. Keep runtime tokens and HTML structure."},"main.gear-movement-is-paused-at-this-step-use-reset-arrangement-to-re":{"type":"string","minLength":1,"maxLength":12000,"default":"Gear movement is paused at this step. Use Reset Arrangement to return to sharing.","description":"src/main.js:35. Keep runtime tokens and HTML structure."},"math-state.add-your-explanation-or-discussion-notes-before-finishing":{"type":"string","minLength":1,"maxLength":12000,"default":"Add your explanation or discussion notes before finishing.","description":"src/math-state.js:157. Keep runtime tokens and HTML structure."},"math-state.check-the-calculation-first":{"type":"string","minLength":1,"maxLength":12000,"default":"Check the calculation first.","description":"src/math-state.js:156. Keep runtime tokens and HTML structure."},"math-state.your-total-gears-pallet-count-and-mean-all-agree-with-the-equal":{"type":"string","minLength":1,"maxLength":12000,"default":"Your total gears, pallet count, and mean all agree with the equal shares.","description":"src/math-state.js:153. Keep runtime tokens and HTML structure."},"math-state.dispatch-equal-loads-before-calculating":{"type":"string","minLength":1,"maxLength":12000,"default":"Dispatch equal loads before calculating.","description":"src/math-state.js:151. Keep runtime tokens and HTML structure."},"math-state.divide-the-total-gears-by-the-number-of-pallets-keep-any-half-ge":{"type":"string","minLength":1,"maxLength":12000,"default":"Divide the total gears by the number of pallets. Keep any half-gear.","description":"src/math-state.js:146. Keep runtime tokens and HTML structure."},"math-state.count-the-labeled-pallets-not-the-gears-or-half-gears-each-origi":{"type":"string","minLength":1,"maxLength":12000,"default":"Count the labeled pallets, not the gears or half-gears. Each original pallet counts once, even if it is empty.","description":"src/math-state.js:145. Keep runtime tokens and HTML structure."},"math-state.recheck-the-total-gears-add-every-value-in-original-shipment-two":{"type":"string","minLength":1,"maxLength":12000,"default":"Recheck the total gears: add every value in Original Shipment. Two halves count as one gear.","description":"src/math-state.js:144. Keep runtime tokens and HTML structure."},"math-state.the-current-loads-are-compare-the-largest-and-smallest-loads-and":{"type":"string","minLength":1,"maxLength":12000,"default":"The current loads are {{v0}}. Compare the largest and smallest loads and keep sharing.","description":"src/math-state.js:139. Keep runtime tokens and HTML structure."},"math-state.equal-shares-all-original-cargo-is-accounted-for-now-connect-the":{"type":"string","minLength":1,"maxLength":12000,"default":"Equal shares! All original cargo is accounted for. Now connect the model to a calculation.","description":"src/math-state.js:139. Keep runtime tokens and HTML structure."},"math-state.there-is-no-move-to-undo":{"type":"string","minLength":1,"maxLength":12000,"default":"There is no move to undo.","description":"src/math-state.js:126. Keep runtime tokens and HTML structure."},"math-state.choose-a-whole-top-gear-or-either-of-the-highlighted-matching-to":{"type":"string","minLength":1,"maxLength":12000,"default":"Choose a whole top gear or either of the highlighted matching top halves.","description":"src/math-state.js:120. Keep runtime tokens and HTML structure."},"math-state.place-the-two-matching-halves-together-at-the-top-of-the-same-pa":{"type":"string","minLength":1,"maxLength":12000,"default":"Place the two matching halves together at the top of the same pallet to merge them.","description":"src/math-state.js:100. Keep runtime tokens and HTML structure."},"math-state.choose-a-whole-top-gear-to-split-into-halves":{"type":"string","minLength":1,"maxLength":12000,"default":"Choose a whole top gear to split into halves.","description":"src/math-state.js:84. Keep runtime tokens and HTML structure."},"math-state.this-pallet-is-empty-choose-a-pallet-with-cargo":{"type":"string","minLength":1,"maxLength":12000,"default":"This pallet is empty. Choose a pallet with cargo.","description":"src/math-state.js:75. Keep runtime tokens and HTML structure."},"math-state.choose-a-different-destination":{"type":"string","minLength":1,"maxLength":12000,"default":"Choose a different destination.","description":"src/math-state.js:74. Keep runtime tokens and HTML structure."},"math-state.enter-a-quantity-such-as-4-or-3-5":{"type":"string","minLength":1,"maxLength":12000,"default":"Enter a quantity, such as 4 or 3.5.","description":"src/math-state.js:64. Keep runtime tokens and HTML structure."},"math-state.your-first-prediction-is-already-recorded":{"type":"string","minLength":1,"maxLength":12000,"default":"Your first prediction is already recorded.","description":"src/math-state.js:62. Keep runtime tokens and HTML structure."},"math-state.choose-a-labeled-pallet":{"type":"string","minLength":1,"maxLength":12000,"default":"Choose a labeled pallet.","description":"src/math-state.js:50. Keep runtime tokens and HTML structure."},"math-state.gear-movement-is-paused-while-you-complete-this-step":{"type":"string","minLength":1,"maxLength":12000,"default":"Gear movement is paused while you complete this step.","description":"src/math-state.js:47. Keep runtime tokens and HTML structure."},"math-state.record-a-prediction-before-sharing":{"type":"string","minLength":1,"maxLength":12000,"default":"Record a prediction before sharing.","description":"src/math-state.js:47. Keep runtime tokens and HTML structure."},"math-state.wait-for-the-cargo-to-settle":{"type":"string","minLength":1,"maxLength":12000,"default":"Wait for the cargo to settle.","description":"src/math-state.js:43. Keep runtime tokens and HTML structure."},"math-state.invalid-piece":{"type":"string","minLength":1,"maxLength":12000,"default":"Invalid piece.","description":"src/math-state.js:38. Keep runtime tokens and HTML structure."},"math-state.original-quantity-was-not-conserved":{"type":"string","minLength":1,"maxLength":12000,"default":"Original quantity was not conserved.","description":"src/math-state.js:34. Keep runtime tokens and HTML structure."},"math-state.a-piece-occurs-more-than-once":{"type":"string","minLength":1,"maxLength":12000,"default":"A piece occurs more than once.","description":"src/math-state.js:32. Keep runtime tokens and HTML structure."},"math-state.every-original-observation-needs-one-pallet":{"type":"string","minLength":1,"maxLength":12000,"default":"Every original observation needs one pallet.","description":"src/math-state.js:30. Keep runtime tokens and HTML structure."},"math-state.choose-a-total-that-can-be-shared-equally-in-whole-or-half-gears":{"type":"string","minLength":1,"maxLength":12000,"default":"Choose a total that can be shared equally in whole or half gears.","description":"src/math-state.js:26. Keep runtime tokens and HTML structure."},"math-state.choose-one-to-six-pallets-with-whole-starting-gear-quantities":{"type":"string","minLength":1,"maxLength":12000,"default":"Choose one to six pallets with whole starting gear quantities.","description":"src/math-state.js:24. Keep runtime tokens and HTML structure."},"math-state.unknown-shipment":{"type":"string","minLength":1,"maxLength":12000,"default":"Unknown shipment.","description":"src/math-state.js:22. Keep runtime tokens and HTML structure."},"scene.the-3d-view-is-ready-again":{"type":"string","minLength":1,"maxLength":12000,"default":"The 3D view is ready again.","description":"src/scene.js:454. Keep runtime tokens and HTML structure."},"scene.the-3d-view-paused-your-exact-quantities-are-safe-all-sharing-co":{"type":"string","minLength":1,"maxLength":12000,"default":"The 3D view paused. Your exact quantities are safe; all sharing controls remain available.","description":"src/scene.js:453. Keep runtime tokens and HTML structure."},"scene.split-a-whole-top-gear-or-merge-its-matching-halves-together-at":{"type":"string","minLength":1,"maxLength":12000,"default":"Split a whole top gear, or merge its matching halves together at the top of one pallet.","description":"src/scene.js:429. Keep runtime tokens and HTML structure."},"scene.drop-canceled-your-cargo-is-unchanged":{"type":"string","minLength":1,"maxLength":12000,"default":"Drop canceled. Your cargo is unchanged.","description":"src/scene.js:404. Keep runtime tokens and HTML structure."},"scene.drop-canceled-choose-a-different-pallet-no-cargo-changed":{"type":"string","minLength":1,"maxLength":12000,"default":"Drop canceled. Choose a different pallet; no cargo changed.","description":"src/scene.js:400. Keep runtime tokens and HTML structure."},"scene.gear-picked-up-drop-on-another-pallet-or-press-escape-to-cancel":{"type":"string","minLength":1,"maxLength":12000,"default":"Gear picked up. Drop on another pallet, or press Escape to cancel.","description":"src/scene.js:386. Keep runtime tokens and HTML structure."},"scene.pickup-canceled-the-same-piece-returned-to-its-stack":{"type":"string","minLength":1,"maxLength":12000,"default":"Pickup canceled. The same piece returned to its stack.","description":"src/scene.js:359. Keep runtime tokens and HTML structure."},"scene.drag-this-half-to-move-it-merging-needs-its-matching-half-beside":{"type":"string","minLength":1,"maxLength":12000,"default":"Drag this half to move it. Merging needs its matching half beside it at the top.","description":"src/scene.js:332. Keep runtime tokens and HTML structure."},"scene.double-click-either-highlighted-half-to-merge-this-top-pair":{"type":"string","minLength":1,"maxLength":12000,"default":"Double-click either highlighted half to merge this top pair.","description":"src/scene.js:332. Keep runtime tokens and HTML structure."},"scene.double-click-to-split-this-gear-drag-to-move-it":{"type":"string","minLength":1,"maxLength":12000,"default":"Double-click to split this gear. Drag to move it.","description":"src/scene.js:332. Keep runtime tokens and HTML structure."},"scene.pickup-canceled":{"type":"string","minLength":1,"maxLength":12000,"default":"Pickup canceled.","description":"src/scene.js:174. Keep runtime tokens and HTML structure."},"scene.pallet-current-load":{"type":"string","minLength":1,"maxLength":12000,"default":"Pallet {{v0}} • Current Load","description":"src/scene.js:154. Keep runtime tokens and HTML structure."},"scene.text":{"type":"string","minLength":1,"maxLength":12000,"default":"{{v0}}: {{v1}}","description":"src/scene.js:153. Keep runtime tokens and HTML structure."},"scene.pallet":{"type":"string","minLength":1,"maxLength":12000,"default":"Pallet {{v0}}","description":"src/scene.js:119. Keep runtime tokens and HTML structure."},"scene.the-3d-view-is-unavailable-all-sharing-controls-remain-available":{"type":"string","minLength":1,"maxLength":12000,"default":"The 3D view is unavailable. All sharing controls remain available.","description":"src/scene.js:18. Keep runtime tokens and HTML structure."},"answer-cues.next":{"type":"string","minLength":1,"maxLength":12000,"default":"{{v0}} Next: {{v1}}.","description":"src/answer-cues.js:49. Keep runtime tokens and HTML structure."},"answer-cues.ready":{"type":"string","minLength":1,"maxLength":12000,"default":"✓ Ready","description":"src/answer-cues.js:19. Keep runtime tokens and HTML structure."},"shell.mean-machine-equal-shares":{"type":"string","minLength":1,"maxLength":12000,"default":"Mean Machine — Equal Shares","description":"index.html:8. Keep runtime tokens and HTML structure."},"shell.the-foam-ring-factory":{"type":"string","minLength":1,"maxLength":12000,"default":"The Foam-Ring Factory","description":"index.html:13. Keep runtime tokens and HTML structure."},"shell.mean-machine":{"type":"string","minLength":1,"maxLength":12000,"default":"Mean Machine","description":"index.html:13. Keep runtime tokens and HTML structure."},"shell.reduce-motion":{"type":"string","minLength":1,"maxLength":12000,"default":" Reduce Motion","description":"index.html:14. Keep runtime tokens and HTML structure."},"shell.fullscreen":{"type":"string","minLength":1,"maxLength":12000,"default":"Fullscreen","description":"index.html:14. Keep runtime tokens and HTML structure."},"shell.reference":{"type":"string","minLength":1,"maxLength":12000,"default":"Reference","description":"index.html:14. Keep runtime tokens and HTML structure."},"shell.one-factory-two-ways-to-explore":{"type":"string","minLength":1,"maxLength":12000,"default":"One Factory, Two Ways To Explore","description":"index.html:17. Keep runtime tokens and HTML structure."},"shell.welcome-to-foam-works":{"type":"string","minLength":1,"maxLength":12000,"default":"Welcome To Foam Works","description":"index.html:17. Keep runtime tokens and HTML structure."},"shell.head-inside-to-share-colorful-cargo-equally-among-the-labeled-pa":{"type":"string","minLength":1,"maxLength":12000,"default":"Head inside to share colorful cargo equally among the labeled pallets.","description":"index.html:18. Keep runtime tokens and HTML structure."},"shell.enter-the-factory":{"type":"string","minLength":1,"maxLength":12000,"default":"Enter The Factory","description":"index.html:19. Keep runtime tokens and HTML structure."},"shell.skip-intro":{"type":"string","minLength":1,"maxLength":12000,"default":"Skip Intro","description":"index.html:19. Keep runtime tokens and HTML structure."},"shell.overview":{"type":"string","minLength":1,"maxLength":12000,"default":"Overview","description":"index.html:21. Keep runtime tokens and HTML structure."},"shell.front-view":{"type":"string","minLength":1,"maxLength":12000,"default":"Front View","description":"index.html:21. Keep runtime tokens and HTML structure."},"shell.original-shipment":{"type":"string","minLength":1,"maxLength":12000,"default":"Original Shipment","description":"index.html:25. Keep runtime tokens and HTML structure."},"shell.each-labeled-pallet-counts-once-one-whole-gear-is-one-unit-two-h":{"type":"string","minLength":1,"maxLength":12000,"default":"Each labeled pallet counts once. One whole gear is one unit; two halves also make one unit.","description":"index.html:27. Keep runtime tokens and HTML structure."},"shell.predict":{"type":"string","minLength":1,"maxLength":12000,"default":"Predict","description":"index.html:31. Keep runtime tokens and HTML structure."},"shell.share":{"type":"string","minLength":1,"maxLength":12000,"default":"Share","description":"index.html:31. Keep runtime tokens and HTML structure."},"shell.calculate":{"type":"string","minLength":1,"maxLength":12000,"default":"Calculate","description":"index.html:31. Keep runtime tokens and HTML structure."},"shell.explain":{"type":"string","minLength":1,"maxLength":12000,"default":"Explain","description":"index.html:31. Keep runtime tokens and HTML structure."},"shell.undo-move":{"type":"string","minLength":1,"maxLength":12000,"default":"Undo Move","description":"index.html:37. Keep runtime tokens and HTML structure."},"shell.reset-arrangement":{"type":"string","minLength":1,"maxLength":12000,"default":"Reset Arrangement","description":"index.html:37. Keep runtime tokens and HTML structure."},"shell.replay-shipment":{"type":"string","minLength":1,"maxLength":12000,"default":"Replay Shipment","description":"index.html:37. Keep runtime tokens and HTML structure."},"shell.try-half-rings":{"type":"string","minLength":1,"maxLength":12000,"default":"Try Half-Rings","description":"index.html:37. Keep runtime tokens and HTML structure."},"shell.try-6-pallet-example":{"type":"string","minLength":1,"maxLength":12000,"default":"Try 6-Pallet Example","description":"index.html:37. Keep runtime tokens and HTML structure."},"shell.factory-reference":{"type":"string","minLength":1,"maxLength":12000,"default":"Factory Reference","description":"index.html:40. Keep runtime tokens and HTML structure."},"shell.in-skimmer-statistics-each-recorded-trial-counts-once-repacking":{"type":"string","minLength":1,"maxLength":12000,"default":"In skimmer statistics, each recorded trial counts once. Repacking this model does not change recorded flight distances.","description":"index.html:41. Keep runtime tokens and HTML structure."},"shell.larger-layout-review":{"type":"string","minLength":1,"maxLength":12000,"default":"Larger Layout Review","description":"index.html:41. Keep runtime tokens and HTML structure."},"shell.these-fixed-examples-let-you-review-four-to-six-pallets-opening":{"type":"string","minLength":1,"maxLength":12000,"default":"These fixed examples let you review four to six pallets. Opening one starts a new shipment. The two original lessons stay available through the shipment button.","description":"index.html:41. Keep runtime tokens and HTML structure."},"shell.pallets-in-layout-review":{"type":"string","minLength":1,"maxLength":12000,"default":"Pallets In Layout Review","description":"index.html:41. Keep runtime tokens and HTML structure."},"shell.4-pallets":{"type":"string","minLength":1,"maxLength":12000,"default":"4 Pallets","description":"index.html:41. Keep runtime tokens and HTML structure."},"shell.5-pallets":{"type":"string","minLength":1,"maxLength":12000,"default":"5 Pallets","description":"index.html:41. Keep runtime tokens and HTML structure."},"shell.6-pallets":{"type":"string","minLength":1,"maxLength":12000,"default":"6 Pallets","description":"index.html:41. Keep runtime tokens and HTML structure."},"shell.open-layout-review":{"type":"string","minLength":1,"maxLength":12000,"default":"Open Layout Review","description":"index.html:41. Keep runtime tokens and HTML structure."},"shell.full-build-details":{"type":"string","minLength":1,"maxLength":12000,"default":"Full Build Details","description":"index.html:41. Keep runtime tokens and HTML structure."},"shell.close-reference":{"type":"string","minLength":1,"maxLength":12000,"default":"Close Reference","description":"index.html:42. Keep runtime tokens and HTML structure."}},"required":["main.fullscreen-is-unavailable-here-you-can-keep-using-the-window","main.pallet-example-ready-start-with-your-prediction","main.entering-the-factory","main.new-shipment-ready-start-with-a-prediction","main.same-shipment-fresh-prediction","main.original-arrangement-restored-your-first-prediction-is-retained","main.last-move-split-or-merge-undone","main.the-cargo-animation-stopped-the-exact-move-is-complete-you-can-c","main.moving-gear-unit-the-original-pallet-records-stay-unchanged","main.these-two-matching-halves-become-one-whole-gear-the-quantity-sta","main.one-whole-gear-becomes-two-halves-the-quantity-stays-the-same","main.selection-canceled","main.pallet-selected","main.this-pallet-is-empty-choose-a-source-with-cargo","main.text","main.you-shared-the-total-equally-and-connected-it-to-the-mean-your-d","main.your-explanation-is-ready-choose-finish-shipment-to-complete-thi","main.gear-movement-stays-paused-to-keep-your-equal-shares-add-your-ex","main.your-explanation-or-discussion-notes","main.equal-sharing-and-calculation-are-complete-keep-your-explanation","main.why-divide-by-pallets-what-changed-and-what-stayed-the-same-comp","main.text-2","main.all-three-answers-are-ready-choose-check-calculation-to-continue","main.gear-movement-is-paused-while-you-record-the-equal-shares-answer","main.gears-per-pallet","main.number-of-pallets","main.total-gears","main.your-loads-are-equal-use-the-original-shipment-to-complete-the-c","main.from-to-move-top-ring-split-top-gear-into-halves-merge-matching","main.pallet","main.prediction-ready-choose-record-prediction-to-unlock-gear-movemen","main.gear-movement-is-paused-until-you-record-your-prediction-answer","main.your-predicted-share","main.prediction-recorded-explore-the-cargo-and-make-equal-shares","main.imagine-sharing-all-the-cargo-equally-how-many-ring-units-might","main.move-top-ring","main.move-top-layer","main.pallet-selected-choose-a-destination-select-it-again-to-cancel","main.drag-a-top-gear-to-another-pallet-or-select-a-source-and-destina","main.try-whole-rings","main.try-half-rings","main.pallet-current-load","main.empty","main.top-piece-unit-from","main.empty-pallet","main.top","main.1-ring","main.layer","main.first-prediction-units-per-pallet","main.pallet-layout-review","main.pallet-2","main.text-3","main.shipment-complete","main.explain-the-equal-share","main.connect-the-calculation","main.make-equal-shares","main.what-is-your-prediction","main.gear-movement-is-paused-at-this-step-use-reset-arrangement-to-re","math-state.add-your-explanation-or-discussion-notes-before-finishing","math-state.check-the-calculation-first","math-state.your-total-gears-pallet-count-and-mean-all-agree-with-the-equal","math-state.dispatch-equal-loads-before-calculating","math-state.divide-the-total-gears-by-the-number-of-pallets-keep-any-half-ge","math-state.count-the-labeled-pallets-not-the-gears-or-half-gears-each-origi","math-state.recheck-the-total-gears-add-every-value-in-original-shipment-two","math-state.the-current-loads-are-compare-the-largest-and-smallest-loads-and","math-state.equal-shares-all-original-cargo-is-accounted-for-now-connect-the","math-state.there-is-no-move-to-undo","math-state.choose-a-whole-top-gear-or-either-of-the-highlighted-matching-to","math-state.place-the-two-matching-halves-together-at-the-top-of-the-same-pa","math-state.choose-a-whole-top-gear-to-split-into-halves","math-state.this-pallet-is-empty-choose-a-pallet-with-cargo","math-state.choose-a-different-destination","math-state.enter-a-quantity-such-as-4-or-3-5","math-state.your-first-prediction-is-already-recorded","math-state.choose-a-labeled-pallet","math-state.gear-movement-is-paused-while-you-complete-this-step","math-state.record-a-prediction-before-sharing","math-state.wait-for-the-cargo-to-settle","math-state.invalid-piece","math-state.original-quantity-was-not-conserved","math-state.a-piece-occurs-more-than-once","math-state.every-original-observation-needs-one-pallet","math-state.choose-a-total-that-can-be-shared-equally-in-whole-or-half-gears","math-state.choose-one-to-six-pallets-with-whole-starting-gear-quantities","math-state.unknown-shipment","scene.the-3d-view-is-ready-again","scene.the-3d-view-paused-your-exact-quantities-are-safe-all-sharing-co","scene.split-a-whole-top-gear-or-merge-its-matching-halves-together-at","scene.drop-canceled-your-cargo-is-unchanged","scene.drop-canceled-choose-a-different-pallet-no-cargo-changed","scene.gear-picked-up-drop-on-another-pallet-or-press-escape-to-cancel","scene.pickup-canceled-the-same-piece-returned-to-its-stack","scene.drag-this-half-to-move-it-merging-needs-its-matching-half-beside","scene.double-click-either-highlighted-half-to-merge-this-top-pair","scene.double-click-to-split-this-gear-drag-to-move-it","scene.pickup-canceled","scene.pallet-current-load","scene.text","scene.pallet","scene.the-3d-view-is-unavailable-all-sharing-controls-remain-available","answer-cues.next","answer-cues.ready","shell.mean-machine-equal-shares","shell.the-foam-ring-factory","shell.mean-machine","shell.reduce-motion","shell.fullscreen","shell.reference","shell.one-factory-two-ways-to-explore","shell.welcome-to-foam-works","shell.head-inside-to-share-colorful-cargo-equally-among-the-labeled-pa","shell.enter-the-factory","shell.skip-intro","shell.overview","shell.front-view","shell.original-shipment","shell.each-labeled-pallet-counts-once-one-whole-gear-is-one-unit-two-h","shell.predict","shell.share","shell.calculate","shell.explain","shell.undo-move","shell.reset-arrangement","shell.replay-shipment","shell.try-half-rings","shell.try-6-pallet-example","shell.factory-reference","shell.in-skimmer-statistics-each-recorded-trial-counts-once-repacking","shell.larger-layout-review","shell.these-fixed-examples-let-you-review-four-to-six-pallets-opening","shell.pallets-in-layout-review","shell.4-pallets","shell.5-pallets","shell.6-pallets","shell.open-layout-review","shell.full-build-details","shell.close-reference"],"additionalProperties":false}}'),Wu=["schemaVersion","contentRevision","packId","adapter","lessons","scenarios","encyclopedia","messages"],qu=!1,Xu={type:Gu,properties:Vu,required:Wu,additionalProperties:qu},Ku=JSON.parse('{"main.fullscreen-is-unavailable-here-you-can-keep-using-the-window":{"tokens":[],"markup":[]},"main.pallet-example-ready-start-with-your-prediction":{"tokens":["v0"],"markup":[]},"main.entering-the-factory":{"tokens":[],"markup":[]},"main.new-shipment-ready-start-with-a-prediction":{"tokens":[],"markup":[]},"main.same-shipment-fresh-prediction":{"tokens":[],"markup":[]},"main.original-arrangement-restored-your-first-prediction-is-retained":{"tokens":[],"markup":[]},"main.last-move-split-or-merge-undone":{"tokens":[],"markup":[]},"main.the-cargo-animation-stopped-the-exact-move-is-complete-you-can-c":{"tokens":[],"markup":[]},"main.moving-gear-unit-the-original-pallet-records-stay-unchanged":{"tokens":["v0"],"markup":[]},"main.these-two-matching-halves-become-one-whole-gear-the-quantity-sta":{"tokens":[],"markup":[]},"main.one-whole-gear-becomes-two-halves-the-quantity-stays-the-same":{"tokens":[],"markup":[]},"main.selection-canceled":{"tokens":[],"markup":[]},"main.pallet-selected":{"tokens":["v0"],"markup":[]},"main.this-pallet-is-empty-choose-a-source-with-cargo":{"tokens":[],"markup":[]},"main.text":{"tokens":["v0","v1","v2"],"markup":[]},"main.you-shared-the-total-equally-and-connected-it-to-the-mean-your-d":{"tokens":[],"markup":["<p>","</p>","<p id=\\"completed-equation\\" class=\\"equation\\">","</p>","<p class=\\"small\\">","</p>","<p id=\\"completed-explanation\\">","</p>","<p class=\\"small\\">","</p>"]},"main.your-explanation-is-ready-choose-finish-shipment-to-complete-thi":{"tokens":[],"markup":[]},"main.gear-movement-stays-paused-to-keep-your-equal-shares-add-your-ex":{"tokens":[],"markup":[]},"main.your-explanation-or-discussion-notes":{"tokens":[],"markup":[]},"main.equal-sharing-and-calculation-are-complete-keep-your-explanation":{"tokens":[],"markup":[]},"main.why-divide-by-pallets-what-changed-and-what-stayed-the-same-comp":{"tokens":["v0","v1","v2","v3","v4"],"markup":["<p class=\\"equation\\">","<br />","</p>","<p>","</p>","<form id=\\"explanation-form\\" novalidate>","<label for=\\"explanation\\">","</label>","<textarea id=\\"explanation\\" rows=\\"3\\" required>","</textarea>","<button class=\\"primary\\">","</button>","</form>","<p class=\\"small\\">","</p>"]},"main.text-2":{"tokens":["v0","v1"],"markup":[]},"main.all-three-answers-are-ready-choose-check-calculation-to-continue":{"tokens":[],"markup":[]},"main.gear-movement-is-paused-while-you-record-the-equal-shares-answer":{"tokens":[],"markup":[]},"main.gears-per-pallet":{"tokens":[],"markup":[]},"main.number-of-pallets":{"tokens":[],"markup":[]},"main.total-gears":{"tokens":[],"markup":[]},"main.your-loads-are-equal-use-the-original-shipment-to-complete-the-c":{"tokens":[],"markup":["<p>","<strong>","</strong>","</p>","<form id=\\"calculation-form\\" novalidate>","<label for=\\"total\\">","</label>","<input id=\\"total\\" inputmode=\\"decimal\\" required />","<label for=\\"count\\">","</label>","<input id=\\"count\\" inputmode=\\"numeric\\" required />","<label for=\\"mean\\">","</label>","<input id=\\"mean\\" inputmode=\\"decimal\\" required />","<button class=\\"primary\\">","</button>","</form>"]},"main.from-to-move-top-ring-split-top-gear-into-halves-merge-matching":{"tokens":["v0","v1"],"markup":["<p id=\\"selection-note\\" class=\\"selection-note\\">","</p>","<div class=\\"control-row\\">","<div>","<label for=\\"source\\">","</label>","<select id=\\"source\\">","</select>","</div>","<div>","<label for=\\"destination\\">","</label>","<select id=\\"destination\\">","</select>","</div>","</div>","<div class=\\"control-stack\\">","<button id=\\"move\\">","</button>","<button id=\\"split\\">","</button>","<button id=\\"merge\\">","</button>","<button id=\\"dispatch\\" class=\\"primary\\">","</button>","</div>","<p class=\\"small\\">","<strong>","</strong>","</p>"]},"main.pallet":{"tokens":["v0","v1"],"markup":["<option value=\\"{{v0}}\\">","</option>"]},"main.prediction-ready-choose-record-prediction-to-unlock-gear-movemen":{"tokens":[],"markup":[]},"main.gear-movement-is-paused-until-you-record-your-prediction-answer":{"tokens":[],"markup":[]},"main.your-predicted-share":{"tokens":[],"markup":[]},"main.prediction-recorded-explore-the-cargo-and-make-equal-shares":{"tokens":[],"markup":[]},"main.imagine-sharing-all-the-cargo-equally-how-many-ring-units-might":{"tokens":[],"markup":["<p>","</p>","<form id=\\"prediction-form\\">","<label for=\\"prediction\\">","</label>","<input id=\\"prediction\\" name=\\"prediction\\" inputmode=\\"decimal\\" autocomplete=\\"off\\" placeholder=\\"Your prediction\\" required />","<button class=\\"primary\\">","</button>","</form>","<p class=\\"small\\">","</p>"]},"main.move-top-ring":{"tokens":[],"markup":[]},"main.move-top-layer":{"tokens":[],"markup":[]},"main.pallet-selected-choose-a-destination-select-it-again-to-cancel":{"tokens":["v0"],"markup":[]},"main.drag-a-top-gear-to-another-pallet-or-select-a-source-and-destina":{"tokens":[],"markup":[]},"main.try-whole-rings":{"tokens":[],"markup":[]},"main.try-half-rings":{"tokens":[],"markup":[]},"main.pallet-current-load":{"tokens":["v0","v1","v2","v3","v4","v5","v6","v7","v8"],"markup":["<button class=\\"load\\" data-pallet=\\"{{v0}}\\" aria-label=\\"Pallet {{v1}}, current load {{v2}} units{{v3}}\\" aria-pressed=\\"{{v4}}\\" {{v5}}>","<span class=\\"pallet-name\\">","</span>","<span class=\\"value\\">","</span>","<span class=\\"label\\">","</span>","<span class=\\"piece\\">","</span>","</button>"]},"main.empty":{"tokens":[],"markup":[]},"main.top-piece-unit-from":{"tokens":["v0","v1","v2"],"markup":[]},"main.empty-pallet":{"tokens":[],"markup":[]},"main.top":{"tokens":["v0","v1","v2"],"markup":["<br>"]},"main.1-ring":{"tokens":[],"markup":[]},"main.layer":{"tokens":[],"markup":[]},"main.first-prediction-units-per-pallet":{"tokens":["v0"],"markup":[]},"main.pallet-layout-review":{"tokens":["v0"],"markup":[]},"main.pallet-2":{"tokens":["v0","v1","v2"],"markup":["<div class=\\"original-row\\">","<span>","<span class=\\"identity\\">","</span>","</span>","<strong>","</strong>","</div>"]},"main.text-3":{"tokens":["v0","v1"],"markup":[]},"main.shipment-complete":{"tokens":[],"markup":[]},"main.explain-the-equal-share":{"tokens":[],"markup":[]},"main.connect-the-calculation":{"tokens":[],"markup":[]},"main.make-equal-shares":{"tokens":[],"markup":[]},"main.what-is-your-prediction":{"tokens":[],"markup":[]},"main.gear-movement-is-paused-at-this-step-use-reset-arrangement-to-re":{"tokens":[],"markup":[]},"math-state.add-your-explanation-or-discussion-notes-before-finishing":{"tokens":[],"markup":[]},"math-state.check-the-calculation-first":{"tokens":[],"markup":[]},"math-state.your-total-gears-pallet-count-and-mean-all-agree-with-the-equal":{"tokens":[],"markup":[]},"math-state.dispatch-equal-loads-before-calculating":{"tokens":[],"markup":[]},"math-state.divide-the-total-gears-by-the-number-of-pallets-keep-any-half-ge":{"tokens":[],"markup":[]},"math-state.count-the-labeled-pallets-not-the-gears-or-half-gears-each-origi":{"tokens":[],"markup":[]},"math-state.recheck-the-total-gears-add-every-value-in-original-shipment-two":{"tokens":[],"markup":[]},"math-state.the-current-loads-are-compare-the-largest-and-smallest-loads-and":{"tokens":["v0"],"markup":[]},"math-state.equal-shares-all-original-cargo-is-accounted-for-now-connect-the":{"tokens":[],"markup":[]},"math-state.there-is-no-move-to-undo":{"tokens":[],"markup":[]},"math-state.choose-a-whole-top-gear-or-either-of-the-highlighted-matching-to":{"tokens":[],"markup":[]},"math-state.place-the-two-matching-halves-together-at-the-top-of-the-same-pa":{"tokens":[],"markup":[]},"math-state.choose-a-whole-top-gear-to-split-into-halves":{"tokens":[],"markup":[]},"math-state.this-pallet-is-empty-choose-a-pallet-with-cargo":{"tokens":[],"markup":[]},"math-state.choose-a-different-destination":{"tokens":[],"markup":[]},"math-state.enter-a-quantity-such-as-4-or-3-5":{"tokens":[],"markup":[]},"math-state.your-first-prediction-is-already-recorded":{"tokens":[],"markup":[]},"math-state.choose-a-labeled-pallet":{"tokens":[],"markup":[]},"math-state.gear-movement-is-paused-while-you-complete-this-step":{"tokens":[],"markup":[]},"math-state.record-a-prediction-before-sharing":{"tokens":[],"markup":[]},"math-state.wait-for-the-cargo-to-settle":{"tokens":[],"markup":[]},"math-state.invalid-piece":{"tokens":[],"markup":[]},"math-state.original-quantity-was-not-conserved":{"tokens":[],"markup":[]},"math-state.a-piece-occurs-more-than-once":{"tokens":[],"markup":[]},"math-state.every-original-observation-needs-one-pallet":{"tokens":[],"markup":[]},"math-state.choose-a-total-that-can-be-shared-equally-in-whole-or-half-gears":{"tokens":[],"markup":[]},"math-state.choose-one-to-six-pallets-with-whole-starting-gear-quantities":{"tokens":[],"markup":[]},"math-state.unknown-shipment":{"tokens":[],"markup":[]},"scene.the-3d-view-is-ready-again":{"tokens":[],"markup":[]},"scene.the-3d-view-paused-your-exact-quantities-are-safe-all-sharing-co":{"tokens":[],"markup":[]},"scene.split-a-whole-top-gear-or-merge-its-matching-halves-together-at":{"tokens":[],"markup":[]},"scene.drop-canceled-your-cargo-is-unchanged":{"tokens":[],"markup":[]},"scene.drop-canceled-choose-a-different-pallet-no-cargo-changed":{"tokens":[],"markup":[]},"scene.gear-picked-up-drop-on-another-pallet-or-press-escape-to-cancel":{"tokens":[],"markup":[]},"scene.pickup-canceled-the-same-piece-returned-to-its-stack":{"tokens":[],"markup":[]},"scene.drag-this-half-to-move-it-merging-needs-its-matching-half-beside":{"tokens":[],"markup":[]},"scene.double-click-either-highlighted-half-to-merge-this-top-pair":{"tokens":[],"markup":[]},"scene.double-click-to-split-this-gear-drag-to-move-it":{"tokens":[],"markup":[]},"scene.pickup-canceled":{"tokens":[],"markup":[]},"scene.pallet-current-load":{"tokens":["v0"],"markup":[]},"scene.text":{"tokens":["v0","v1"],"markup":[]},"scene.pallet":{"tokens":["v0"],"markup":[]},"scene.the-3d-view-is-unavailable-all-sharing-controls-remain-available":{"tokens":[],"markup":[]},"answer-cues.next":{"tokens":["v0","v1"],"markup":[]},"answer-cues.ready":{"tokens":[],"markup":[]},"shell.mean-machine-equal-shares":{"tokens":[],"markup":[]},"shell.the-foam-ring-factory":{"tokens":[],"markup":[]},"shell.mean-machine":{"tokens":[],"markup":[]},"shell.reduce-motion":{"tokens":[],"markup":[]},"shell.fullscreen":{"tokens":[],"markup":[]},"shell.reference":{"tokens":[],"markup":[]},"shell.one-factory-two-ways-to-explore":{"tokens":[],"markup":[]},"shell.welcome-to-foam-works":{"tokens":[],"markup":[]},"shell.head-inside-to-share-colorful-cargo-equally-among-the-labeled-pa":{"tokens":[],"markup":[]},"shell.enter-the-factory":{"tokens":[],"markup":[]},"shell.skip-intro":{"tokens":[],"markup":[]},"shell.overview":{"tokens":[],"markup":[]},"shell.front-view":{"tokens":[],"markup":[]},"shell.original-shipment":{"tokens":[],"markup":[]},"shell.each-labeled-pallet-counts-once-one-whole-gear-is-one-unit-two-h":{"tokens":[],"markup":[]},"shell.predict":{"tokens":[],"markup":[]},"shell.share":{"tokens":[],"markup":[]},"shell.calculate":{"tokens":[],"markup":[]},"shell.explain":{"tokens":[],"markup":[]},"shell.undo-move":{"tokens":[],"markup":[]},"shell.reset-arrangement":{"tokens":[],"markup":[]},"shell.replay-shipment":{"tokens":[],"markup":[]},"shell.try-half-rings":{"tokens":[],"markup":[]},"shell.try-6-pallet-example":{"tokens":[],"markup":[]},"shell.factory-reference":{"tokens":[],"markup":[]},"shell.in-skimmer-statistics-each-recorded-trial-counts-once-repacking":{"tokens":[],"markup":[]},"shell.larger-layout-review":{"tokens":[],"markup":[]},"shell.these-fixed-examples-let-you-review-four-to-six-pallets-opening":{"tokens":[],"markup":[]},"shell.pallets-in-layout-review":{"tokens":[],"markup":[]},"shell.4-pallets":{"tokens":[],"markup":[]},"shell.5-pallets":{"tokens":[],"markup":[]},"shell.6-pallets":{"tokens":[],"markup":[]},"shell.open-layout-review":{"tokens":[],"markup":[]},"shell.full-build-details":{"tokens":[],"markup":[]},"shell.close-reference":{"tokens":[],"markup":[]}}'),Yu={messages:Ku},Ec=256*1024;class Es extends Error{constructor(e){super(`Content was not applied:
${e.join(`
`)}`),this.name="ContentError",this.errors=e}}function wc(i){const e=[],t=(s,a)=>{e.length<30&&e.push(`${s}: ${a}`)};function n(s,a,o){a.const!==void 0&&JSON.stringify(s)!==JSON.stringify(a.const)&&t(o,`must equal ${JSON.stringify(a.const)} (adapter contract).`),a.enum&&!a.enum.includes(s)&&t(o,`must be one of ${a.enum.join(", ")}.`);const c=Array.isArray(s)?"array":s===null?"null":typeof s;if(a.type&&(a.type==="integer"?!Number.isSafeInteger(s):c!==a.type)){t(o,`expected ${a.type}, received ${c}.`);return}if(typeof s=="string"&&((s.length<(a.minLength??0)||s.length>(a.maxLength??1/0))&&t(o,`length must be ${a.minLength??0}–${a.maxLength??"unlimited"} characters.`),a.pattern&&!new RegExp(a.pattern).test(s)&&t(o,"contains unsupported characters; use plain text without angle brackets, straight double quotes, or control characters.")),typeof s=="number"&&(!Number.isFinite(s)||s<(a.minimum??-1/0)||s>(a.maximum??1/0))&&t(o,`must be ${a.minimum}–${a.maximum}.`),Array.isArray(s))(s.length<(a.minItems??0)||s.length>(a.maxItems??1/0))&&t(o,`expected ${a.minItems}–${a.maxItems} items.`),a.uniqueItems&&new Set(s.map(l=>JSON.stringify(l))).size!==s.length&&t(o,"items must be unique."),a.items&&s.forEach((l,u)=>n(l,a.items,`${o}[${u}]`));else if(c==="object"&&a.properties){for(const l of a.required||[])Object.hasOwn(s,l)||t(`${o}.${l}`,"required field is missing.");for(const[l,u]of Object.entries(s))Object.hasOwn(a.properties,l)?n(u,a.properties[l],`${o}.${l}`):a.additionalProperties===!1&&t(`${o}.${l}`,"unsupported field.")}}if(n(i,Xu,"$"),e.length)throw new Es(e);const r=(s,a,o)=>{s.map(c=>c.id).join("|")!==a.join("|")&&t(o,`IDs and order must remain ${a.join(", ")} in this adapter version.`)};r(i.lessons,["whole","halves"],"$.lessons"),r(i.scenarios,["layout-4","layout-5","layout-6"],"$.scenarios"),r(i.encyclopedia,["pallets","gear-quantity","mean","median"],"$.encyclopedia");for(const[s,a]of[["lessons",i.lessons],["scenarios",i.scenarios]])a.forEach((o,c)=>{const l=`$.${s}[${c}]`;o.values.reduce((d,h)=>d+h,0)*2%o.values.length&&t(`${l}.values`,"total must divide into exact whole or half gears across the original pallets."),s==="lessons"&&o.values.length!==(c===0?3:2)&&t(`${l}.values`,`this lesson slot requires ${c===0?3:2} pallets.`),s==="scenarios"&&(o.palletCount!==c+4||o.values.length!==o.palletCount)&&t(`${l}.values`,`layout-${c+4} requires exactly ${c+4} values and matching palletCount.`),s==="lessons"&&o.halves!==(c===1)&&t(`${l}.halves`,"legacy metadata must remain false for whole, true for halves; it does not enable or disable splitting.");for(const d of o.encyclopediaRefs)i.encyclopedia.some(h=>h.id===d)||t(`${l}.encyclopediaRefs`,`broken reference ${d}.`)});for(const[s,a]of Object.entries(i.messages)){const o=`$.messages.${s}`,c=Yu.messages[s],l=[...a.matchAll(/\{\{([^{}]+)\}\}/g)].map(d=>d[1]).sort();(JSON.stringify(l)!==JSON.stringify(c.tokens)||/\{\{|\}\}/.test(a.replace(/\{\{v\d+\}\}/g,"")))&&t(o,`keep exactly these runtime tokens: ${c.tokens.join(", ")||"(none)"}.`);const u=[...a.matchAll(/<[^>]*>/g)].map(d=>d[0]);(JSON.stringify(u)!==JSON.stringify(c.markup)||/[<>]/.test(a.replace(/<[^>]*>/g,"")))&&t(o,"HTML structure and attributes are fixed by the adapter; edit only the text between tags."),!c.markup.length&&/"/.test(a)&&t(o,"use curly quotation marks instead of straight double quotes."),/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(a)&&t(o,"control characters are unsupported.")}if(e.length)throw new Es(e);return i}function $u(i){if(new TextEncoder().encode(i).length>Ec)throw new Es(["$: file exceeds 256 KiB."]);let e;try{e=JSON.parse(i)}catch(t){throw new Es([`$: invalid JSON (${t.message}).`])}return wc(e)}const yr=i=>(i&&typeof i=="object"&&(Object.values(i).forEach(yr),Object.freeze(i)),i),yo=yr(wc(Hu));let Jn=yo,ws,Tc;function Mo(i){return Jn=yr(i),ws=yr(Object.fromEntries(Jn.lessons.map(({id:e,code:t,title:n,values:r,halves:s})=>[e,{code:t,title:n,values:r,halves:s}]))),Tc=yr(Object.fromEntries(Jn.scenarios.map(e=>[e.palletCount,e.values]))),Jn}Mo(Jn);const or=()=>Jn;function Zu(i){const e=$u(i);return Mo(e)}function Ju(){return Mo(yo)}function le(i,e={}){if(!Object.hasOwn(Jn.messages,i))throw new Error(`Unknown content message: ${i}`);return Jn.messages[i].replace(/\{\{(v\d+)\}\}/g,(t,n)=>{if(!Object.hasOwn(e,n))throw new Error(`Missing content token: ${i}.${n}`);return String(e[n])})}const Ac=Object.freeze([{name:"Rose Gear",color:"#ef6684",profile:"teeth",lobes:12,hole:"circle",windows:0},{name:"Amber Sun",color:"#f2a12e",profile:"petals",lobes:10,hole:"hexagon",windows:0},{name:"Lemon Hex",color:"#e2cb38",profile:"polygon",lobes:6,hole:"circle",windows:6},{name:"Emerald Clover",color:"#44b877",profile:"petals",lobes:6,hole:"diamond",windows:0},{name:"Turquoise Cog",color:"#29b5c4",profile:"teeth",lobes:8,hole:"hexagon",windows:4},{name:"Blue Star",color:"#578fea",profile:"star",lobes:8,hole:"circle",windows:0},{name:"Indigo Wheel",color:"#8580dc",profile:"polygon",lobes:8,hole:"diamond",windows:8},{name:"Violet Flower",color:"#ce79cb",profile:"petals",lobes:8,hole:"circle",windows:4}].map(i=>Object.freeze(i))),Qu=(i,e)=>(i*3+e)%Ac.length;function Ts(i){const e=Ac[i.family];if(!e)throw new Error("Unknown gear family.");return e}const gs=Object.freeze([Object.freeze({color:"#e85972",relief:"ribbed",symbol:"Star",glyph:"★"}),Object.freeze({color:"#28aabc",relief:"grooved",symbol:"Diamond",glyph:"◆"}),Object.freeze({color:"#f2b83f",relief:"studded",symbol:"Circle",glyph:"●"}),Object.freeze({color:"#44b877",relief:"smooth",symbol:"Square",glyph:"■"}),Object.freeze({color:"#578fea",relief:"smooth",symbol:"Triangle",glyph:"▲"}),Object.freeze({color:"#ce79cb",relief:"smooth",symbol:"Hexagon",glyph:"⬢"})]),Ki=i=>i%2?`${Math.floor(i/2)||""}½`:String(i/2),So=i=>i.pallets.map(e=>e.reduce((t,n)=>t+n.halves,0)),gr=i=>i.originals.reduce((e,t)=>e+t*2,0),Fr=i=>i.map(e=>e.map(t=>({...t})));function ju(i){return i.map((e,t)=>Array.from({length:e},(n,r)=>({id:`${t}-${r}`,root:`${t}-${r}`,origin:t,family:Qu(t,r),halves:2})))}function ji(i="whole",e=null){const t=ws[i];if(!t)throw new Error(le("math-state.unknown-shipment"));const n=e?[...e]:[...t.values];if(n.length<1||n.length>6||n.some(s=>!Number.isInteger(s)||s<0))throw new Error(le("math-state.choose-one-to-six-pallets-with-whole-starting-gear-quantities"));if(n.reduce((s,a)=>s+a,0)*2%n.length)throw new Error(le("math-state.choose-a-total-that-can-be-shared-equally-in-whole-or-half-gears"));return{key:i,originals:n,pallets:ju(n),stage:"prediction",prediction:null,pending:null,history:[],explanation:"",hintUsed:!1}}function Rc(i){if(i.pallets.length!==i.originals.length)throw new Error(le("math-state.every-original-observation-needs-one-pallet"));const e=i.pallets.flat();if(new Set(e.map(t=>t.id)).size!==e.length)throw new Error(le("math-state.a-piece-occurs-more-than-once"));for(let t=0;t<i.originals.length;t++)if(e.filter(n=>n.origin===t).reduce((n,r)=>n+r.halves,0)!==i.originals[t]*2)throw new Error(le("math-state.original-quantity-was-not-conserved"));for(const t of e)if(Ts(t),![1,2].includes(t.halves)||!Number.isInteger(t.origin)||!i.originals.hasOwnProperty(t.origin))throw new Error(le("math-state.invalid-piece"));return!0}function Os(i){if(i.pending)throw new Error(le("math-state.wait-for-the-cargo-to-settle"))}function er(i){if(Os(i),i.stage!=="sharing")throw new Error(i.stage==="prediction"?le("math-state.record-a-prediction-before-sharing"):le("math-state.gear-movement-is-paused-while-you-complete-this-step"))}function As(i,e){if(!Number.isInteger(e)||!i.pallets[e])throw new Error(le("math-state.choose-a-labeled-pallet"))}function Qn(i){const e=String(i).trim();if(/^\d+(?:\.\d+)?$/.test(e))return Number(e);const t=e.match(/^(\d*)\s*½$/);if(t)return Number(t[1]||0)+.5;const n=e.match(/^(?:(\d+)\s+)?(\d+)\/(\d+)$/);return n&&Number(n[3])>0?Number(n[1]||0)+Number(n[2])/Number(n[3]):NaN}function eh(i,e){if(i.stage!=="prediction")throw new Error(le("math-state.your-first-prediction-is-already-recorded"));const t=Qn(e);if(!Number.isFinite(t)||t<0||t>1e3)throw new Error(le("math-state.enter-a-quantity-such-as-4-or-3-5"));return{...i,prediction:t,stage:"sharing"}}function bo(i,e,t){const n={...i,pallets:e,pending:t,history:[...i.history,Fr(i.pallets)]};return Rc(n),n}function Eo(i,e,t){if(er(i),As(i,e),As(i,t),e===t)throw new Error(le("math-state.choose-a-different-destination"));if(!i.pallets[e].length)throw new Error(le("math-state.this-pallet-is-empty-choose-a-pallet-with-cargo"));const n=Fr(i.pallets),r=n[e].pop();return n[t].push(r),bo(i,n,{type:"move",source:e,destination:t,pieceId:r.id,halves:r.halves})}function Cc(i,e){er(i),As(i,e);const t=i.pallets[e].at(-1);if(!t||t.halves!==2)throw new Error(le("math-state.choose-a-whole-top-gear-to-split-into-halves"));const n=Fr(i.pallets);return n[e].pop(),n[e].push({...t,id:`${t.id}-a`,halves:1},{...t,id:`${t.id}-b`,halves:1}),bo(i,n,{type:"split",source:e,pieceId:t.id,children:[`${t.id}-a`,`${t.id}-b`]})}function wo(i,e){const t=i.pallets[e],n=t?.at(-2),r=t?.at(-1);return n&&r&&n.halves===1&&r.halves===1&&n.root===r.root&&n.origin===r.origin&&n.family===r.family?[n,r]:null}function Lc(i,e){er(i),As(i,e);const t=wo(i,e);if(!t)throw new Error(le("math-state.place-the-two-matching-halves-together-at-the-top-of-the-same-pa"));const n=Fr(i.pallets),r={...t[0],id:t[0].root,halves:2};return n[e].splice(-2,2,r),bo(i,n,{type:"merge",source:e,pieceId:t[0].id,children:t.map(s=>s.id),mergedId:r.id})}function Bi(i,e){if(i.stage!=="sharing"||i.pending)return null;for(let t=0;t<i.pallets.length;t++){const n=i.pallets[t].at(-1);if(n?.id===e&&n.halves===2)return{type:"split",source:t,pieceIds:[e]};const r=wo(i,t);if(r?.some(s=>s.id===e))return{type:"merge",source:t,pieceIds:r.map(s=>s.id)}}return null}function th(i,e){er(i);const t=Bi(i,e);if(!t)throw new Error(le("math-state.choose-a-whole-top-gear-or-either-of-the-highlighted-matching-to"));return t.type==="split"?Cc(i,t.source):Lc(i,t.source)}function nh(i){return{...i,pending:null}}function ih(i){if(er(i),!i.history.length)throw new Error(le("math-state.there-is-no-move-to-undo"));return{...i,pallets:Fr(i.history.at(-1)),history:i.history.slice(0,-1)}}function rh(i){return Os(i),{...ji(i.key,i.originals),prediction:i.prediction,stage:i.prediction===null?"prediction":"sharing",hintUsed:i.hintUsed}}function sh(i){return Os(i),ji(i.key,i.originals)}function ah(i){er(i),Rc(i);const e=So(i),t=e.every(n=>n===e[0]);return{success:t,state:t?{...i,stage:"calculation"}:i,message:t?le("math-state.equal-shares-all-original-cargo-is-accounted-for-now-connect-the"):le("math-state.the-current-loads-are-compare-the-largest-and-smallest-loads-and",{v0:e.map(Ki).join(", ")})}}function oh(i,e){const t=gr(i)/2,n=i.originals.length;return Qn(e.total)!==t?{field:"total",message:le("math-state.recheck-the-total-gears-add-every-value-in-original-shipment-two")}:Qn(e.count)!==n?{field:"count",message:le("math-state.count-the-labeled-pallets-not-the-gears-or-half-gears-each-origi")}:Qn(e.mean)!==t/n?{field:"mean",message:le("math-state.divide-the-total-gears-by-the-number-of-pallets-keep-any-half-ge")}:null}function lh(i,e){if(Os(i),i.stage!=="calculation")throw new Error(le("math-state.dispatch-equal-loads-before-calculating"));const t=oh(i,e);return{success:!t,field:t?.field,message:t?.message||le("math-state.your-total-gears-pallet-count-and-mean-all-agree-with-the-equal"),state:t?i:{...i,stage:"explanation"}}}function ch(i,e){if(i.stage!=="explanation")throw new Error(le("math-state.check-the-calculation-first"));if(!String(e).trim())throw new Error(le("math-state.add-your-explanation-or-discussion-notes-before-finishing"));return{...i,explanation:String(e).trim(),stage:"complete"}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="186",uh=0,ol=1,hh=2,vs=1,Pc=2,vr=3,di=0,$t=1,hn=2,On=0,Mr=1,ll=2,cl=3,ul=4,dh=5,Oi=100,fh=101,ph=102,mh=103,gh=104,vh=200,_h=201,xh=202,yh=203,Dc=204,Ic=205,Mh=206,Sh=207,bh=208,Eh=209,wh=210,Th=211,Ah=212,Rh=213,Ch=214,Ta=0,Aa=1,Ra=2,wr=3,Ca=4,La=5,Pa=6,Da=7,Nc=0,Lh=1,Ph=2,bn=0,Uc=1,Fc=2,Oc=3,kc=4,Bc=5,zc=6,Hc=7,Gc=300,fi=301,Yi=302,Vs=303,Ws=304,ks=306,Ia=1e3,Un=1001,Na=1002,Ft=1003,Dh=1004,zr=1005,zt=1006,qs=1007,li=1008,jt=1009,Vc=1010,Wc=1011,Tr=1012,Ao=1013,En=1014,Mn=1015,wn=1016,Ro=1017,Co=1018,Ar=1020,qc=35902,Xc=35899,Kc=1021,Yc=1022,fn=1023,zn=1026,ci=1027,$c=1028,Lo=1029,pi=1030,Po=1031,Do=1033,_s=33776,xs=33777,ys=33778,Ms=33779,Ua=35840,Fa=35841,Oa=35842,ka=35843,Ba=36196,za=37492,Ha=37496,Ga=37488,Va=37489,Rs=37490,Wa=37491,qa=37808,Xa=37809,Ka=37810,Ya=37811,$a=37812,Za=37813,Ja=37814,Qa=37815,ja=37816,eo=37817,to=37818,no=37819,io=37820,ro=37821,so=36492,ao=36494,oo=36495,lo=36283,co=36284,Cs=36285,uo=36286,Ih=3200,ho=0,Nh=1,Zn="",Kt="srgb",Ls="srgb-linear",Ps="linear",ut="srgb",Xs=7680,Uh=519,Fh=512,Oh=513,kh=514,Io=515,Bh=516,zh=517,No=518,Hh=519,Gh=35044,hl="300 es",Sn=2e3,Rr=2001;function Vh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){const i=Ds("canvas");return i.style.display="block",i}const dl={};function fl(...i){const e="THREE."+i.shift();console.log(e,...i)}function Zc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=Zc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=Zc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Vi(...i){const e=i.join(" ");e in dl||(dl[e]=!0,Ve(...i))}function qh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Xh={[Ta]:Aa,[Ra]:Pa,[Ca]:Da,[wr]:La,[Aa]:Ta,[Pa]:Ra,[Da]:Ca,[La]:wr};class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const Wi=Math.PI/180,Cr=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Uo(i,e){return(i%e+e)%e}function Kh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Yh(i,e,t){return i!==e?(t-i)/(e-i):0}function Sr(i,e,t){return(1-t)*i+t*e}function $h(i,e,t,n){return Sr(i,e,1-Math.exp(-t*n))}function Zh(i,e=1){return e-Math.abs(Uo(i,e*2)-e)}function Jh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ed(i,e){return i+Math.random()*(e-i)}function td(i){return i*(.5-Math.random())}function nd(i){i!==void 0&&(pl=i);let e=pl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function id(i){return i*Wi}function rd(i){return i*Cr}function sd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function od(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ld(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*v,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*v,o*l);break;case"ZYZ":i.set(c*v,c*f,o*u,o*l);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ml={DEG2RAD:Wi,RAD2DEG:Cr,generateUUID:_i,clamp:Qe,euclideanModulo:Uo,mapLinear:Kh,inverseLerp:Yh,lerp:Sr,damp:$h,pingpong:Zh,smoothstep:Jh,smootherstep:Qh,randInt:jh,randFloat:ed,randFloatSpread:td,seededRandom:nd,degToRad:id,radToDeg:rd,isPowerOfTwo:sd,ceilPowerOfTwo:ad,floorPowerOfTwo:od,setQuaternionFromProperEuler:ld,normalize:Wt,denormalize:ki},Jo=class Jo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jo.prototype.isVector2=!0;let Me=Jo;class tr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3],h=s[a+0],f=s[a+1],v=s[a+2],M=s[a+3];if(d!==M||c!==h||l!==f||u!==v){let m=c*h+l*f+u*v+d*M;m<0&&(h=-h,f=-f,v=-v,M=-M,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,o=Math.sin(o*b)/w,c=c*p+h*o,l=l*p+f*o,u=u*p+v*o,d=d*p+M*o}else{c=c*p+h*o,l=l*p+f*o,u=u*p+v*o,d=d*p+M*o;const b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[a],h=s[a+1],f=s[a+2],v=s[a+3];return e[t]=o*v+u*d+c*f-l*h,e[t+1]=c*v+u*h+l*d-o*f,e[t+2]=l*v+u*f+o*h-c*d,e[t+3]=u*v-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),d=o(s/2),h=c(n/2),f=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*f*v,this._y=l*f*d-h*u*v,this._z=l*u*v+h*f*d,this._w=l*u*d-h*f*v;break;case"YXZ":this._x=h*u*d+l*f*v,this._y=l*f*d-h*u*v,this._z=l*u*v-h*f*d,this._w=l*u*d+h*f*v;break;case"ZXY":this._x=h*u*d-l*f*v,this._y=l*f*d+h*u*v,this._z=l*u*v+h*f*d,this._w=l*u*d-h*f*v;break;case"ZYX":this._x=h*u*d-l*f*v,this._y=l*f*d+h*u*v,this._z=l*u*v-h*f*d,this._w=l*u*d+h*f*v;break;case"YZX":this._x=h*u*d+l*f*v,this._y=l*f*d+h*u*v,this._z=l*u*v-h*f*d,this._w=l*u*d-h*f*v;break;case"XZY":this._x=h*u*d-l*f*v,this._y=l*f*d-h*u*v,this._z=l*u*v+h*f*d,this._w=l*u*d+h*f*v;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qo=class Qo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qo.prototype.isVector3=!0;let P=Qo;const Ks=new P,gl=new tr,jo=class jo{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],v=n[8],M=r[0],m=r[3],p=r[6],b=r[1],w=r[4],x=r[7],A=r[2],E=r[5],C=r[8];return s[0]=a*M+o*b+c*A,s[3]=a*m+o*w+c*E,s[6]=a*p+o*x+c*C,s[1]=l*M+u*b+d*A,s[4]=l*m+u*w+d*E,s[7]=l*p+u*x+d*C,s[2]=h*M+f*b+v*A,s[5]=h*m+f*w+v*E,s[8]=h*p+f*x+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,f=l*s-a*c,v=t*d+n*h+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=d*M,e[1]=(r*l-u*n)*M,e[2]=(o*n-r*a)*M,e[3]=h*M,e[4]=(u*t-r*c)*M,e[5]=(r*s-o*t)*M,e[6]=f*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ys.makeScale(e,t)),this}rotate(e){return Vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ys.makeRotation(-e)),this}translate(e,t){return Vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ys.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jo.prototype.isMatrix3=!0;let Xe=jo;const Ys=new Xe,vl=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cd(){const i={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?Ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ls]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:vl,fromXYZ:_l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:vl,fromXYZ:_l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}const rt=cd();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class ud{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Ds("canvas")),bi.width=e.width,bi.height=e.height;const r=bi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=kn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hd=0;class Fo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($s(r[a].image)):s.push($s(r[a]))}else s=$s(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function $s(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ud.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let dd=0;const Zs=new P;class Ht extends vi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Un,r=Un,s=zt,a=li,o=fn,c=jt,l=Ht.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=_i(),this.name="",this.source=new Fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zs).x}get height(){return this.source.getSize(Zs).y}get depth(){return this.source.getSize(Zs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Gc;Ht.DEFAULT_ANISOTROPY=1;const el=class el{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],v=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(v+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,x=(f+1)/2,A=(p+1)/2,E=(u+h)/4,C=(d+M)/4,_=(v+m)/4;return w>x&&w>A?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=E/n,s=C/n):x>A?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=E/r,s=_/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=C/s,r=_/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-v)*(m-v)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(d-M)/b,this.z=(h-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};el.prototype.isVector4=!0;let vt=el;class fd extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Ht(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jc extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pd extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Fs=class Fs{constructor(e,t,n,r,s,a,o,c,l,u,d,h,f,v,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,d,h,f,v,M,m)}set(e,t,n,r,s,a,o,c,l,u,d,h,f,v,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=v,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,v=o*u,M=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+v*l,t[5]=h-M*l,t[9]=-o*c,t[2]=M-h*l,t[6]=v+f*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,v=l*u,M=l*d;t[0]=h+M*o,t[4]=v*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=M+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,v=l*u,M=l*d;t[0]=h-M*o,t[4]=-a*d,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,f=a*d,v=o*u,M=o*d;t[0]=c*u,t[4]=v*l-f,t[8]=h*l+M,t[1]=c*d,t[5]=M*l+h,t[9]=f*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,f=a*l,v=o*c,M=o*l;t[0]=c*u,t[4]=M-h*d,t[8]=v*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+v,t[10]=h-M*d}else if(e.order==="XZY"){const h=a*c,f=a*l,v=o*c,M=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+M,t[5]=a*u,t[9]=f*d-v,t[2]=v*d-f,t[6]=o*u,t[10]=M*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,gd)}lookAt(e,t,n){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),qn.crossVectors(n,Jt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),qn.crossVectors(n,Jt)),qn.normalize(),Hr.crossVectors(Jt,qn),r[0]=qn.x,r[4]=Hr.x,r[8]=Jt.x,r[1]=qn.y,r[5]=Hr.y,r[9]=Jt.y,r[2]=qn.z,r[6]=Hr.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],v=n[2],M=n[6],m=n[10],p=n[14],b=n[3],w=n[7],x=n[11],A=n[15],E=r[0],C=r[4],_=r[8],T=r[12],L=r[1],U=r[5],k=r[9],q=r[13],D=r[2],z=r[6],j=r[10],X=r[14],ae=r[3],Y=r[7],ee=r[11],re=r[15];return s[0]=a*E+o*L+c*D+l*ae,s[4]=a*C+o*U+c*z+l*Y,s[8]=a*_+o*k+c*j+l*ee,s[12]=a*T+o*q+c*X+l*re,s[1]=u*E+d*L+h*D+f*ae,s[5]=u*C+d*U+h*z+f*Y,s[9]=u*_+d*k+h*j+f*ee,s[13]=u*T+d*q+h*X+f*re,s[2]=v*E+M*L+m*D+p*ae,s[6]=v*C+M*U+m*z+p*Y,s[10]=v*_+M*k+m*j+p*ee,s[14]=v*T+M*q+m*X+p*re,s[3]=b*E+w*L+x*D+A*ae,s[7]=b*C+w*U+x*z+A*Y,s[11]=b*_+w*k+x*j+A*ee,s[15]=b*T+w*q+x*X+A*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],v=e[3],M=e[7],m=e[11],p=e[15],b=c*f-l*h,w=o*f-l*d,x=o*h-c*d,A=a*f-l*u,E=a*h-c*u,C=a*d-o*u;return t*(M*b-m*w+p*x)-n*(v*b-m*A+p*E)+r*(v*w-M*A+p*C)-s*(v*x-M*E+m*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],v=e[12],M=e[13],m=e[14],p=e[15],b=t*o-n*a,w=t*c-r*a,x=t*l-s*a,A=n*c-r*o,E=n*l-s*o,C=r*l-s*c,_=u*M-d*v,T=u*m-h*v,L=u*p-f*v,U=d*m-h*M,k=d*p-f*M,q=h*p-f*m,D=b*q-w*k+x*U+A*L-E*T+C*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=(o*q-c*k+l*U)*z,e[1]=(r*k-n*q-s*U)*z,e[2]=(M*C-m*E+p*A)*z,e[3]=(h*E-d*C-f*A)*z,e[4]=(c*L-a*q-l*T)*z,e[5]=(t*q-r*L+s*T)*z,e[6]=(m*x-v*C-p*w)*z,e[7]=(u*C-h*x+f*w)*z,e[8]=(a*k-o*L+l*_)*z,e[9]=(n*L-t*k-s*_)*z,e[10]=(v*E-M*x+p*b)*z,e[11]=(d*x-u*E-f*b)*z,e[12]=(o*T-a*U-c*_)*z,e[13]=(t*U-n*T+r*_)*z,e[14]=(M*w-v*A-m*b)*z,e[15]=(u*A-d*w+h*b)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,f=s*u,v=s*d,M=a*u,m=a*d,p=o*d,b=c*l,w=c*u,x=c*d,A=n.x,E=n.y,C=n.z;return r[0]=(1-(M+p))*A,r[1]=(f+x)*A,r[2]=(v-w)*A,r[3]=0,r[4]=(f-x)*E,r[5]=(1-(h+p))*E,r[6]=(m+b)*E,r[7]=0,r[8]=(v+w)*C,r[9]=(m-b)*C,r[10]=(1-(h+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ei.set(r[0],r[1],r[2]).length();const o=Ei.set(r[4],r[5],r[6]).length(),c=Ei.set(r[8],r[9],r[10]).length();s<0&&(a=-a),an.copy(this);const l=1/a,u=1/o,d=1/c;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Sn,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let v,M;if(c)v=s/(a-s),M=a*s/(a-s);else if(o===Sn)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Rr)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Sn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r);let v,M;if(c)v=1/(a-s),M=a/(a-s);else if(o===Sn)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===Rr)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fs.prototype.isMatrix4=!0;let mt=Fs;const Ei=new P,an=new mt,md=new P(0,0,0),gd=new P(1,1,1),qn=new P,Hr=new P,Jt=new P,xl=new mt,yl=new tr;class jn{constructor(e=0,t=0,n=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yl.setFromEuler(this),this.setFromQuaternion(yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Oo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vd=0;const Ml=new P,wi=new tr,Cn=new mt,Gr=new P,lr=new P,_d=new P,xd=new tr,Sl=new P(1,0,0),bl=new P(0,1,0),El=new P(0,0,1),wl={type:"added"},yd={type:"removed"},Ti={type:"childadded",child:null},Js={type:"childremoved",child:null};class Nt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new P,t=new jn,n=new tr,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Xe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Sl,e)}rotateY(e){return this.rotateOnAxis(bl,e)}rotateZ(e){return this.rotateOnAxis(El,e)}translateOnAxis(e,t){return Ml.copy(e).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sl,e)}translateY(e){return this.translateOnAxis(bl,e)}translateZ(e){return this.translateOnAxis(El,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(lr,Gr,this.up):Cn.lookAt(Gr,lr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(Cn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wl),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wl),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,_d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Nt.DEFAULT_UP=new P(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yt extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Md={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,v=.005;l.inputState.pinching&&h>f+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function js(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=rt.workingColorSpace){if(e=Uo(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=js(a,s,e+1/3),this.g=js(a,s,e),this.b=js(a,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=Qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return rt.workingToColorSpace(Bt.copy(this),e),Math.round(Qe(Bt.r*255,0,255))*65536+Math.round(Qe(Bt.g*255,0,255))*256+Math.round(Qe(Bt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Bt.copy(this),t);const n=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Kt){rt.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,r=Bt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Vr);const n=Sr(Xn.h,Vr.h,t),r=Sr(Xn.s,Vr.s,t),s=Sr(Xn.l,Vr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new et;et.NAMES=Qc;class ko{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=n}clone(){return new ko(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sd extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const on=new P,Ln=new P,ea=new P,Pn=new P,Ai=new P,Ri=new P,Tl=new P,ta=new P,na=new P,ia=new P,ra=new vt,sa=new vt,aa=new vt;class sn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){on.subVectors(r,t),Ln.subVectors(n,t),ea.subVectors(e,t);const a=on.dot(on),o=on.dot(Ln),c=on.dot(ea),l=Ln.dot(Ln),u=Ln.dot(ea),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,v=(a*u-o*c)*h;return s.set(1-f-v,v,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return ra.setScalar(0),sa.setScalar(0),aa.setScalar(0),ra.fromBufferAttribute(e,t),sa.fromBufferAttribute(e,n),aa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ra,s.x),a.addScaledVector(sa,s.y),a.addScaledVector(aa,s.z),a}static isFrontFacing(e,t,n,r){return on.subVectors(n,t),Ln.subVectors(e,t),on.cross(Ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),on.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ai.subVectors(r,n),Ri.subVectors(s,n),ta.subVectors(e,n);const c=Ai.dot(ta),l=Ri.dot(ta);if(c<=0&&l<=0)return t.copy(n);na.subVectors(e,r);const u=Ai.dot(na),d=Ri.dot(na);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ai,a);ia.subVectors(e,s);const f=Ai.dot(ia),v=Ri.dot(ia);if(v>=0&&f<=v)return t.copy(s);const M=f*l-c*v;if(M<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Ri,o);const m=u*v-f*d;if(m<=0&&d-u>=0&&f-v>=0)return Tl.subVectors(s,r),o=(d-u)/(d-u+(f-v)),t.copy(r).addScaledVector(Tl,o);const p=1/(m+M+h);return a=M*p,o=h*p,t.copy(n).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class nr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),qr.subVectors(this.max,cr),Ci.subVectors(e.a,cr),Li.subVectors(e.b,cr),Pi.subVectors(e.c,cr),Kn.subVectors(Li,Ci),Yn.subVectors(Pi,Li),ii.subVectors(Ci,Pi);let t=[0,-Kn.z,Kn.y,0,-Yn.z,Yn.y,0,-ii.z,ii.y,Kn.z,0,-Kn.x,Yn.z,0,-Yn.x,ii.z,0,-ii.x,-Kn.y,Kn.x,0,-Yn.y,Yn.x,0,-ii.y,ii.x,0];return!oa(t,Ci,Li,Pi,qr)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,Ci,Li,Pi,qr))?!1:(Xr.crossVectors(Kn,Yn),t=[Xr.x,Xr.y,Xr.z],oa(t,Ci,Li,Pi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new P,new P,new P,new P,new P,new P,new P,new P],ln=new P,Wr=new nr,Ci=new P,Li=new P,Pi=new P,Kn=new P,Yn=new P,ii=new P,cr=new P,qr=new P,Xr=new P,ri=new P;function oa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ri.fromArray(i,s);const o=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),c=e.dot(ri),l=t.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Et=new P,Kr=new Me;let bd=0;class Bn extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gh,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class jc extends Bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eu extends Bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ed=new nr,ur=new P,la=new P;class Bs{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ed.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ur,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(la.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(la)),this.expandByPoint(ur.copy(e.center).sub(la))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wd=0;const tn=new mt,ca=new Nt,Di=new P,Qt=new nr,hr=new nr,Pt=new P;class Gt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vh(e)?eu:jc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return ca.lookAt(e),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Qt.min,hr.min),Qt.expandByPoint(Pt),Pt.addVectors(Qt.max,hr.max),Qt.expandByPoint(Pt)):(Qt.expandByPoint(hr.min),Qt.expandByPoint(hr.max))}Qt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Pt.fromBufferAttribute(o,l),c&&(Di.fromBufferAttribute(e,l),Pt.add(Di)),r=Math.max(r,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new P,c[_]=new P;const l=new P,u=new P,d=new P,h=new Me,f=new Me,v=new Me,M=new P,m=new P;function p(_,T,L){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,L),h.fromBufferAttribute(s,_),f.fromBufferAttribute(s,T),v.fromBufferAttribute(s,L),u.sub(l),d.sub(l),f.sub(h),v.sub(h);const U=1/(f.x*v.y-v.x*f.y);isFinite(U)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(U),o[_].add(M),o[T].add(M),o[L].add(M),c[_].add(m),c[T].add(m),c[L].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,T=b.length;_<T;++_){const L=b[_],U=L.start,k=L.count;for(let q=U,D=U+k;q<D;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const w=new P,x=new P,A=new P,E=new P;function C(_){A.fromBufferAttribute(r,_),E.copy(A);const T=o[_];w.copy(T),w.sub(A.multiplyScalar(A.dot(T))).normalize(),x.crossVectors(E,T);const U=x.dot(c[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,U)}for(let _=0,T=b.length;_<T;++_){const L=b[_],U=L.start,k=L.count;for(let q=U,D=U+k;q<D;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new P,s=new P,a=new P,o=new P,c=new P,l=new P,u=new P,d=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){const v=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,v=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?f=c[M]*o.data.stride+o.offset:f=c[M]*u;for(let p=0;p<u;p++)h[v++]=l[f++]}return new Bn(h,u,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ua=new P,Td=new P,Ad=new Xe;class Nn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ua.subVectors(n,t).cross(Td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ua),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ad.getNormalMatrix(e),r=this.coplanarPoint(ua).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Rd=0;class ir extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Mr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Ic,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const In=new P,ha=new P,Yr=new P,$r=new P;class Bo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ha.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(ha);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=$r.dot(this.direction),c=-$r.dot(Yr),l=$r.lengthSq(),u=Math.abs(1-a*a);let d,h,f,v;if(u>0)if(d=a*c-o,h=a*o-c,v=s*u,d>=0)if(h>=-v)if(h<=v){const M=1/u;d*=M,h*=M,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-v?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=v?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ha).addScaledVector(Yr,h),f}intersectSphere(e,t){if(e.radius<0)return null;In.subVectors(e.center,this.origin);const n=In.dot(this.direction),r=In.dot(In)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,v=t.x-a.x,M=t.y-a.y,m=t.z-a.z,p=n.x-a.x,b=n.y-a.y,w=n.z-a.z,x=Math.abs(c),A=Math.abs(l),E=Math.abs(u);let C,_,T,L,U,k,q,D,z,j,X,ae;if(x>=A&&x>=E?(T=c,k=d,z=v,ae=p,c>=0?(C=l,_=u,L=h,U=f,q=M,D=m,j=b,X=w):(C=u,_=l,L=f,U=h,q=m,D=M,j=w,X=b)):A>=E?(T=l,k=h,z=M,ae=b,l>=0?(C=u,_=c,L=f,U=d,q=m,D=v,j=w,X=p):(C=c,_=u,L=d,U=f,q=v,D=m,j=p,X=w)):(T=u,k=f,z=m,ae=w,u>=0?(C=c,_=l,L=d,U=h,q=v,D=M,j=p,X=b):(C=l,_=c,L=h,U=d,q=M,D=v,j=b,X=p)),T===0)return null;const Y=C/T,ee=_/T,re=1/T,Ne=L-Y*k,Ce=U-ee*k,nt=q-Y*z,Ke=D-ee*z,it=j-Y*ae,J=X-ee*ae,ie=it*Ke-J*nt,ye=Ne*J-Ce*it,He=nt*Ce-Ke*Ne;if(r){if(ie<0||ye<0||He<0)return null}else if((ie<0||ye<0||He<0)&&(ie>0||ye>0||He>0))return null;const Ee=ie+ye+He;if(Ee===0)return null;const Pe=re*(ie*k+ye*z+He*ae);return(Ee>0?Pe<0:Pe>0)?null:this.at(Pe/Ee,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $i extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Al=new mt,si=new Bo,Zr=new Bs,Rl=new P,Jr=new P,Qr=new P,jr=new P,da=new P,es=new P,Cl=new P,ts=new P;class Xt extends Nt{constructor(e=new Gt,t=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){es.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(da.fromBufferAttribute(d,e),a?es.addScaledVector(da,u):es.addScaledVector(da.sub(t),u))}t.add(es)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(Zr.containsPoint(si.origin)===!1&&(si.intersectSphere(Zr,Rl)===null||si.origin.distanceToSquared(Rl)>(e.far-e.near)**2))&&(Al.copy(s).invert(),si.copy(e.ray).applyMatrix4(Al),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){const m=h[v],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,A=w;x<A;x+=3){const E=o.getX(x),C=o.getX(x+1),_=o.getX(x+2);r=ns(this,p,e,n,l,u,d,E,C,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=v,p=M;m<p;m+=3){const b=o.getX(m),w=o.getX(m+1),x=o.getX(m+2);r=ns(this,a,e,n,l,u,d,b,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){const m=h[v],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,A=w;x<A;x+=3){const E=x,C=x+1,_=x+2;r=ns(this,p,e,n,l,u,d,E,C,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=v,p=M;m<p;m+=3){const b=m,w=m+1,x=m+2;r=ns(this,a,e,n,l,u,d,b,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Cd(i,e,t,n,r,s,a,o){let c;if(e.side===$t?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===di,o),c===null)return null;ts.copy(o),ts.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ts);return l<t.near||l>t.far?null:{distance:l,point:ts.clone(),object:i}}function ns(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Jr),i.getVertexPosition(c,Qr),i.getVertexPosition(l,jr);const u=Cd(i,e,t,n,Jr,Qr,jr,Cl);if(u){const d=new P;sn.getBarycoord(Cl,Jr,Qr,jr,d),r&&(u.uv=sn.getInterpolatedAttribute(r,o,c,l,d,new Me)),s&&(u.uv1=sn.getInterpolatedAttribute(s,o,c,l,d,new Me)),a&&(u.normal=sn.getInterpolatedAttribute(a,o,c,l,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new P,materialIndex:0};sn.getNormal(Jr,Qr,jr,h.normal),u.face=h,u.barycoord=d}return u}class Ld extends Ht{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Ft,u=Ft,d,h){super(null,a,o,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ai=new Bs,Pd=new Me(.5,.5),is=new P;class zo{constructor(e=new Nn,t=new Nn,n=new Nn,r=new Nn,s=new Nn,a=new Nn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],v=s[8],M=s[9],m=s[10],p=s[11],b=s[12],w=s[13],x=s[14],A=s[15];if(r[0].setComponents(l-a,f-u,p-v,A-b).normalize(),r[1].setComponents(l+a,f+u,p+v,A+b).normalize(),r[2].setComponents(l+o,f+d,p+M,A+w).normalize(),r[3].setComponents(l-o,f-d,p-M,A-w).normalize(),n)r[4].setComponents(c,h,m,x).normalize(),r[5].setComponents(l-c,f-h,p-m,A-x).normalize();else if(r[4].setComponents(l-c,f-h,p-m,A-x).normalize(),t===Sn)r[5].setComponents(l+c,f+h,p+m,A+x).normalize();else if(t===Rr)r[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=Pd.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(is.x=r.normal.x>0?e.max.x:e.min.x,is.y=r.normal.y>0?e.max.y:e.min.y,is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tu extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Is=new P,Ns=new P,Ll=new mt,dr=new Bo,rs=new Bs,fa=new P,Pl=new P;class Dd extends Nt{constructor(e=new Gt,t=new tu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Is.fromBufferAttribute(t,r-1),Ns.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Is.distanceTo(Ns);e.setAttribute("lineDistance",new xt(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),rs.radius+=s,e.ray.intersectsSphere(rs)===!1)return;Ll.copy(r).invert(),dr.copy(e.ray).applyMatrix4(Ll);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let M=f,m=v-1;M<m;M+=l){const p=u.getX(M),b=u.getX(M+1),w=ss(this,e,dr,c,p,b,M);w&&t.push(w)}if(this.isLineLoop){const M=u.getX(v-1),m=u.getX(f),p=ss(this,e,dr,c,M,m,v-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let M=f,m=v-1;M<m;M+=l){const p=ss(this,e,dr,c,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=ss(this,e,dr,c,v-1,f,v-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ss(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Is.fromBufferAttribute(o,r),Ns.fromBufferAttribute(o,s),t.distanceSqToSegment(Is,Ns,fa,Pl)>n)return;fa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(fa);if(!(l<e.near||l>e.far))return{distance:l,point:Pl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Dl=new P,Il=new P;class Id extends Dd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Dl.fromBufferAttribute(t,r),Il.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Dl.distanceTo(Il);e.setAttribute("lineDistance",new xt(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nu extends Ht{constructor(e=[],t=fi,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nd extends Ht{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lr extends Ht{constructor(e,t,n=En,r,s,a,o=Ft,c=Ft,l,u=zn,d=1){if(u!==zn&&u!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ud extends Lr{constructor(e,t=En,n=fi,r,s,a=Ft,o=Ft,c,l=zn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class iu extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ei extends Gt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function v(M,m,p,b,w,x,A,E,C,_,T){const L=x/C,U=A/_,k=x/2,q=A/2,D=E/2,z=C+1,j=_+1;let X=0,ae=0;const Y=new P;for(let ee=0;ee<j;ee++){const re=ee*U-q;for(let Ne=0;Ne<z;Ne++){const Ce=Ne*L-k;Y[M]=Ce*b,Y[m]=re*w,Y[p]=D,l.push(Y.x,Y.y,Y.z),Y[M]=0,Y[m]=0,Y[p]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(Ne/C),d.push(1-ee/_),X+=1}}for(let ee=0;ee<_;ee++)for(let re=0;re<C;re++){const Ne=h+re+z*ee,Ce=h+re+z*(ee+1),nt=h+(re+1)+z*(ee+1),Ke=h+(re+1)+z*ee;c.push(Ne,Ce,Ke),c.push(Ce,nt,Ke),ae+=6}o.addGroup(f,ae,T),f+=ae,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ho extends Gt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],f=[];let v=0;const M=[],m=n/2;let p=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(f,2));function b(){const x=new P,A=new P;let E=0;const C=(t-e)/n;for(let _=0;_<=s;_++){const T=[],L=_/s,U=L*(t-e)+e;for(let k=0;k<=r;k++){const q=k/r,D=q*c+o,z=Math.sin(D),j=Math.cos(D);A.x=U*z,A.y=-L*n+m,A.z=U*j,d.push(A.x,A.y,A.z),x.set(z,C,j).normalize(),h.push(x.x,x.y,x.z),f.push(q,1-L),T.push(v++)}M.push(T)}for(let _=0;_<r;_++)for(let T=0;T<s;T++){const L=M[T][_],U=M[T+1][_],k=M[T+1][_+1],q=M[T][_+1];(e>0||T!==0)&&(u.push(L,U,q),E+=3),(t>0||T!==s-1)&&(u.push(U,k,q),E+=3)}l.addGroup(p,E,0),p+=E}function w(x){const A=v,E=new Me,C=new P;let _=0;const T=x===!0?e:t,L=x===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,m*L,0),h.push(0,L,0),f.push(.5,.5),v++;const U=v;for(let k=0;k<=r;k++){const D=k/r*c+o,z=Math.cos(D),j=Math.sin(D);C.x=T*j,C.y=m*L,C.z=T*z,d.push(C.x,C.y,C.z),h.push(0,L,0),E.x=z*.5+.5,E.y=j*.5*L+.5,f.push(E.x,E.y),v++}for(let k=0;k<r;k++){const q=A+k,D=U+k;x===!0?u.push(D,D+1,q):u.push(D+1,D,q),_+=3}l.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Go extends Gt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(s.slice(),3)),this.setAttribute("uv",new xt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const w=new P,x=new P,A=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],w),f(t[E+1],x),f(t[E+2],A),c(w,x,A,b)}function c(b,w,x,A){const E=A+1,C=[];for(let _=0;_<=E;_++){C[_]=[];const T=b.clone().lerp(x,_/E),L=w.clone().lerp(x,_/E),U=E-_;for(let k=0;k<=U;k++)k===0&&_===E?C[_][k]=T:C[_][k]=T.clone().lerp(L,k/U)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){const L=Math.floor(T/2);T%2===0?(h(C[_][L+1]),h(C[_+1][L]),h(C[_][L])):(h(C[_][L+1]),h(C[_+1][L+1]),h(C[_+1][L]))}}function l(b){const w=new P;for(let x=0;x<s.length;x+=3)w.x=s[x+0],w.y=s[x+1],w.z=s[x+2],w.normalize().multiplyScalar(b),s[x+0]=w.x,s[x+1]=w.y,s[x+2]=w.z}function u(){const b=new P;for(let w=0;w<s.length;w+=3){b.x=s[w+0],b.y=s[w+1],b.z=s[w+2];const x=m(b)/2/Math.PI+.5,A=p(b)/Math.PI+.5;a.push(x,1-A)}v(),d()}function d(){for(let b=0;b<a.length;b+=6){const w=a[b+0],x=a[b+2],A=a[b+4],E=Math.max(w,x,A),C=Math.min(w,x,A);E>.9&&C<.1&&(w<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),A<.2&&(a[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function f(b,w){const x=b*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function v(){const b=new P,w=new P,x=new P,A=new P,E=new Me,C=new Me,_=new Me;for(let T=0,L=0;T<s.length;T+=9,L+=6){b.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),E.set(a[L+0],a[L+1]),C.set(a[L+2],a[L+3]),_.set(a[L+4],a[L+5]),A.copy(b).add(w).add(x).divideScalar(3);const U=m(A);M(E,L+0,b,U),M(C,L+2,w,U),M(_,L+4,x,U)}}function M(b,w,x,A){A<0&&b.x===1&&(a[w]=b.x-1),x.x===0&&x.z===0&&(a[w]=A/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.vertices,e.indices,e.radius,e.detail)}}const as=new P,os=new P,pa=new P,ls=new sn;class ru extends Gt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Wi*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let v=0;v<c;v+=3){a?(l[0]=a.getX(v),l[1]=a.getX(v+1),l[2]=a.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:M,b:m,c:p}=ls;if(M.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),ls.getNormal(pa),d[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const w=(b+1)%3,x=d[b],A=d[w],E=ls[u[b]],C=ls[u[w]],_=`${x}_${A}`,T=`${A}_${x}`;T in h&&h[T]?(pa.dot(h[T].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(C.x,C.y,C.z)),h[T]=null):_ in h||(h[_]={index0:l[b],index1:l[w],normal:pa.clone()})}}for(const v in h)if(h[v]){const{index0:M,index1:m}=h[v];as.fromBufferAttribute(o,M),os.fromBufferAttribute(o,m),f.push(as.x,as.y,as.z),f.push(os.x,os.y,os.z)}this.setAttribute("position",new xt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],h=n[r+1]-u,f=(a-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new Me:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,r=[],s=[],a=[],o=new P,c=new mt;for(let f=0;f<=e;f++){const v=f/e;r[f]=this.getTangentAt(v,new P)}s[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Qe(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,v))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Qe(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let v=1;v<=e;v++)s[v].applyMatrix4(c.makeRotationAxis(r[v],f*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vo extends Rn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Me){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fd extends Vo{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Wo(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,d){let h=(a-s)/l-(o-s)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,r(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Nl=new P,Ul=new P,ma=new Wo,ga=new Wo,va=new Wo;class Od extends Rn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(Ul.subVectors(r[0],r[1]).add(r[0]),l=Ul);const d=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Nl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Nl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);M<1e-4&&(M=1),v<1e-4&&(v=M),m<1e-4&&(m=M),ma.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,v,M,m),ga.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,v,M,m),va.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,v,M,m)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),ga.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),va.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(ma.calc(c),ga.calc(c),va.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fl(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function kd(i,e){const t=1-i;return t*t*e}function Bd(i,e){return 2*(1-i)*i*e}function zd(i,e){return i*i*e}function br(i,e,t,n){return kd(i,e)+Bd(i,t)+zd(i,n)}function Hd(i,e){const t=1-i;return t*t*t*e}function Gd(i,e){const t=1-i;return 3*t*t*i*e}function Vd(i,e){return 3*(1-i)*i*i*e}function Wd(i,e){return i*i*i*e}function Er(i,e,t,n,r){return Hd(i,e)+Gd(i,t)+Vd(i,n)+Wd(i,r)}class su extends Rn{constructor(e=new Me,t=new Me,n=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Me){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Er(e,r.x,s.x,a.x,o.x),Er(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qd extends Rn{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Er(e,r.x,s.x,a.x,o.x),Er(e,r.y,s.y,a.y,o.y),Er(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class au extends Rn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends Rn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ou extends Rn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(br(e,r.x,s.x,a.x),br(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends Rn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(br(e,r.x,s.x,a.x),br(e,r.y,s.y,a.y),br(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lu extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Fl(o,c.x,l.x,u.x,d.x),Fl(o,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Me().fromArray(r))}return this}}var fo=Object.freeze({__proto__:null,ArcCurve:Fd,CatmullRomCurve3:Od,CubicBezierCurve:su,CubicBezierCurve3:qd,EllipseCurve:Vo,LineCurve:au,LineCurve3:Xd,QuadraticBezierCurve:ou,QuadraticBezierCurve3:Kd,SplineCurve:lu});class Yd extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new fo[r.type]().fromJSON(r))}return this}}class Pr extends Yd{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new au(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new ou(this.currentPoint.clone(),new Me(e,t),new Me(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new su(this.currentPoint.clone(),new Me(e,t),new Me(n,r),new Me(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new lu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const l=new Vo(e,t,n,r,s,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qo extends Pr{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Pr().fromJSON(r))}return this}}function $d(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=cu(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=ef(i,e,s,t)),i.length>80*t){o=i[0],c=i[1];let u=o,d=c;for(let h=t;h<r;h+=t){const f=i[h],v=i[h+1];f<o&&(o=f),v<c&&(c=v),f>u&&(u=f),v>d&&(d=v)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return Dr(s,a,t,o,c,l,0),a}function cu(i,e,t,n,r){let s;if(r===df(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Ol(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Ol(a/n|0,i[a],i[a+1],s);return s&&Zi(s,s.next)&&(Nr(s),s=s.next),s}function mi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Zi(t,t.next)||_t(t.prev,t,t.next)===0)){if(Nr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Dr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&af(i,n,r,s);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?Jd(i,n,r,s):Zd(i)){e.push(c.i,i.i,l.i),Nr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Qd(mi(i),e),Dr(i,e,t,n,r,s,2)):a===2&&jd(i,e,t,n,r,s):Dr(mi(i),e,t,n,r,s,1);break}}}function Zd(i){const e=i.prev,t=i,n=i.next;if(_t(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(r,s,a),d=Math.min(o,c,l),h=Math.max(r,s,a),f=Math.max(o,c,l);let v=n.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=d&&v.y<=f&&_r(r,o,s,c,a,l,v.x,v.y)&&_t(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Jd(i,e,t,n){const r=i.prev,s=i,a=i.next;if(_t(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,d=s.y,h=a.y,f=Math.min(o,c,l),v=Math.min(u,d,h),M=Math.max(o,c,l),m=Math.max(u,d,h),p=po(f,v,e,t,n),b=po(M,m,e,t,n);let w=i.prevZ,x=i.nextZ;for(;w&&w.z>=p&&x&&x.z<=b;){if(w.x>=f&&w.x<=M&&w.y>=v&&w.y<=m&&w!==r&&w!==a&&_r(o,u,c,d,l,h,w.x,w.y)&&_t(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=f&&x.x<=M&&x.y>=v&&x.y<=m&&x!==r&&x!==a&&_r(o,u,c,d,l,h,x.x,x.y)&&_t(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=M&&w.y>=v&&w.y<=m&&w!==r&&w!==a&&_r(o,u,c,d,l,h,w.x,w.y)&&_t(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=M&&x.y>=v&&x.y<=m&&x!==r&&x!==a&&_r(o,u,c,d,l,h,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Qd(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Zi(n,r)&&hu(n,t,t.next,r)&&Ir(n,r)&&Ir(r,n)&&(e.push(n.i,t.i,r.i),Nr(t),Nr(t.next),t=i=r),t=t.next}while(t!==i);return mi(t)}function jd(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cf(a,o)){let c=du(a,o);a=mi(a,a.next),c=mi(c,c.next),Dr(a,e,t,n,r,s,0),Dr(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function ef(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=cu(i,o,c,n,!1);l===l.next&&(l.steiner=!0),r.push(lf(l))}r.sort(tf);for(let s=0;s<r.length;s++)t=nf(r[s],t);return t}function tf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function nf(i,e){const t=rf(i,e);if(!t)return e;const n=du(t,i);return mi(n,n.next),mi(t,t.next)}function rf(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(Zi(i,t))return t;do{if(Zi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&uu(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){const d=Math.abs(r-t.y)/(n-t.x);Ir(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&sf(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function sf(i,e){return _t(i.prev,i,e.prev)<0&&_t(e.next,i,i.next)<0}function af(i,e,t,n){let r=i;do r.z===0&&(r.z=po(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,of(r)}function of(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function po(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function uu(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function _r(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&uu(i,e,t,n,r,s,a,o)}function cf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!uf(i,e)&&(Ir(i,e)&&Ir(e,i)&&hf(i,e)&&(_t(i.prev,i,e.prev)||_t(i,e.prev,e))||Zi(i,e)&&_t(i.prev,i,i.next)>0&&_t(e.prev,e,e.next)>0)}function _t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Zi(i,e){return i.x===e.x&&i.y===e.y}function hu(i,e,t,n){const r=us(_t(i,e,t)),s=us(_t(i,e,n)),a=us(_t(t,n,i)),o=us(_t(t,n,e));return!!(r!==s&&a!==o||r===0&&cs(i,t,e)||s===0&&cs(i,n,e)||a===0&&cs(t,i,n)||o===0&&cs(t,e,n))}function cs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function us(i){return i>0?1:i<0?-1:0}function uf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&hu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ir(i,e){return _t(i.prev,i,i.next)<0?_t(i,e,i.next)>=0&&_t(i,i.prev,e)>=0:_t(i,e,i.prev)<0||_t(i,i.next,e)<0}function hf(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function du(i,e){const t=mo(i.i,i.x,i.y),n=mo(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ol(i,e,t,n){const r=mo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function df(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class ff{static triangulate(e,t,n=2){return $d(e,t,n)}}class zi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return zi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];kl(e),Bl(n,e);let a=e.length;t.forEach(kl);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Bl(n,t[c]);const o=ff.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function kl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class zs extends Gt{constructor(e=new qo([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new xt(r,3)),this.setAttribute("uv",new xt(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:f-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:pf;let w,x=!1,A,E,C,_;if(p){w=p.getSpacedPoints(u),x=!0,h=!1;const se=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,se),E=new P,C=new P,_=new P}h||(m=0,f=0,v=0,M=0);const T=o.extractPoints(l);let L=T.shape;const U=T.holes;if(!zi.isClockWise(L)){L=L.reverse();for(let se=0,ce=U.length;se<ce;se++){const he=U[se];zi.isClockWise(he)&&(U[se]=he.reverse())}}function q(se){const he=10000000000000001e-36;let de=se[0];for(let ve=1;ve<=se.length;ve++){const Oe=ve%se.length,ze=se[Oe],Ge=ze.x-de.x,qe=ze.y-de.y,N=Ge*Ge+qe*qe,lt=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(de.x),Math.abs(de.y)),Je=he*lt*lt;if(N<=Je){se.splice(Oe,1),ve--;continue}de=ze}}q(L),U.forEach(q);const D=U.length,z=L;for(let se=0;se<D;se++){const ce=U[se];L=L.concat(ce)}function j(se,ce,he){return ce||st("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ce,he)}const X=L.length;function ae(se,ce,he){let de,ve,Oe;const ze=se.x-ce.x,Ge=se.y-ce.y,qe=he.x-se.x,N=he.y-se.y,lt=ze*ze+Ge*Ge,Je=ze*N-Ge*qe;if(Math.abs(Je)>Number.EPSILON){const R=Math.sqrt(lt),g=Math.sqrt(qe*qe+N*N),B=ce.x-Ge/R,W=ce.y+ze/R,$=he.x-N/g,fe=he.y+qe/g,_e=(($-B)*N-(fe-W)*qe)/(ze*N-Ge*qe);de=B+ze*_e-se.x,ve=W+Ge*_e-se.y;const Q=de*de+ve*ve;if(Q<=2)return new Me(de,ve);Oe=Math.sqrt(Q/2)}else{let R=!1;ze>Number.EPSILON?qe>Number.EPSILON&&(R=!0):ze<-Number.EPSILON?qe<-Number.EPSILON&&(R=!0):Math.sign(Ge)===Math.sign(N)&&(R=!0),R?(de=-Ge,ve=ze,Oe=Math.sqrt(lt)):(de=ze,ve=Ge,Oe=Math.sqrt(lt/2))}return new Me(de/Oe,ve/Oe)}const Y=[];for(let se=0,ce=z.length,he=ce-1,de=se+1;se<ce;se++,he++,de++)he===ce&&(he=0),de===ce&&(de=0),Y[se]=ae(z[se],z[he],z[de]);const ee=[];let re,Ne=Y.concat();for(let se=0,ce=D;se<ce;se++){const he=U[se];re=[];for(let de=0,ve=he.length,Oe=ve-1,ze=de+1;de<ve;de++,Oe++,ze++)Oe===ve&&(Oe=0),ze===ve&&(ze=0),re[de]=ae(he[de],he[Oe],he[ze]);ee.push(re),Ne=Ne.concat(re)}let Ce;if(m===0)Ce=zi.triangulateShape(z,U);else{const se=[],ce=[];for(let he=0;he<m;he++){const de=he/m,ve=f*Math.cos(de*Math.PI/2),Oe=v*Math.sin(de*Math.PI/2)+M;for(let ze=0,Ge=z.length;ze<Ge;ze++){const qe=j(z[ze],Y[ze],Oe);ye(qe.x,qe.y,-ve),de===0&&se.push(qe)}for(let ze=0,Ge=D;ze<Ge;ze++){const qe=U[ze];re=ee[ze];const N=[];for(let lt=0,Je=qe.length;lt<Je;lt++){const R=j(qe[lt],re[lt],Oe);ye(R.x,R.y,-ve),de===0&&N.push(R)}de===0&&ce.push(N)}}Ce=zi.triangulateShape(se,ce)}const nt=Ce.length,Ke=v+M;for(let se=0;se<X;se++){const ce=h?j(L[se],Ne[se],Ke):L[se];x?(C.copy(A.normals[0]).multiplyScalar(ce.x),E.copy(A.binormals[0]).multiplyScalar(ce.y),_.copy(w[0]).add(C).add(E),ye(_.x,_.y,_.z)):ye(ce.x,ce.y,0)}for(let se=1;se<=u;se++)for(let ce=0;ce<X;ce++){const he=h?j(L[ce],Ne[ce],Ke):L[ce];x?(C.copy(A.normals[se]).multiplyScalar(he.x),E.copy(A.binormals[se]).multiplyScalar(he.y),_.copy(w[se]).add(C).add(E),ye(_.x,_.y,_.z)):ye(he.x,he.y,d/u*se)}for(let se=m-1;se>=0;se--){const ce=se/m,he=f*Math.cos(ce*Math.PI/2),de=v*Math.sin(ce*Math.PI/2)+M;for(let ve=0,Oe=z.length;ve<Oe;ve++){const ze=j(z[ve],Y[ve],de);ye(ze.x,ze.y,d+he)}for(let ve=0,Oe=U.length;ve<Oe;ve++){const ze=U[ve];re=ee[ve];for(let Ge=0,qe=ze.length;Ge<qe;Ge++){const N=j(ze[Ge],re[Ge],de);x?ye(N.x,N.y+w[u-1].y,w[u-1].x+he):ye(N.x,N.y,d+he)}}}it(),J();function it(){const se=r.length/3;if(h){let ce=0,he=X*ce;for(let de=0;de<nt;de++){const ve=Ce[de];He(ve[2]+he,ve[1]+he,ve[0]+he)}ce=u+m*2,he=X*ce;for(let de=0;de<nt;de++){const ve=Ce[de];He(ve[0]+he,ve[1]+he,ve[2]+he)}}else{for(let ce=0;ce<nt;ce++){const he=Ce[ce];He(he[2],he[1],he[0])}for(let ce=0;ce<nt;ce++){const he=Ce[ce];He(he[0]+X*u,he[1]+X*u,he[2]+X*u)}}n.addGroup(se,r.length/3-se,0)}function J(){const se=r.length/3;let ce=0;ie(z,ce),ce+=z.length;for(let he=0,de=U.length;he<de;he++){const ve=U[he];ie(ve,ce),ce+=ve.length}n.addGroup(se,r.length/3-se,1)}function ie(se,ce){let he=se.length;for(;--he>=0;){const de=he;let ve=he-1;ve<0&&(ve=se.length-1);for(let Oe=0,ze=u+m*2;Oe<ze;Oe++){const Ge=X*Oe,qe=X*(Oe+1),N=ce+de+Ge,lt=ce+ve+Ge,Je=ce+ve+qe,R=ce+de+qe;Ee(N,lt,Je,R)}}}function ye(se,ce,he){c.push(se),c.push(ce),c.push(he)}function He(se,ce,he){Pe(se),Pe(ce),Pe(he);const de=r.length/3,ve=b.generateTopUV(n,r,de-3,de-2,de-1);at(ve[0]),at(ve[1]),at(ve[2])}function Ee(se,ce,he,de){Pe(se),Pe(ce),Pe(de),Pe(ce),Pe(he),Pe(de);const ve=r.length/3,Oe=b.generateSideWallUV(n,r,ve-6,ve-3,ve-2,ve-1);at(Oe[0]),at(Oe[1]),at(Oe[3]),at(Oe[1]),at(Oe[2]),at(Oe[3])}function Pe(se){r.push(c[se*3+0]),r.push(c[se*3+1]),r.push(c[se*3+2])}function at(se){s.push(se.x),s.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mf(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new fo[r.type]().fromJSON(r)),new zs(n,e.options)}}const pf={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new Me(s,a),new Me(o,c),new Me(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[r*3],f=e[r*3+1],v=e[r*3+2],M=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new Me(a,1-c),new Me(l,1-d),new Me(h,1-v),new Me(M,1-p)]:[new Me(o,1-c),new Me(u,1-d),new Me(f,1-v),new Me(m,1-p)]}};function mf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xo extends Go{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xo(e.radius,e.detail)}}class Or extends Gt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,d=e/o,h=t/c,f=[],v=[],M=[],m=[];for(let p=0;p<u;p++){const b=p*h-a;for(let w=0;w<l;w++){const x=w*d-s;v.push(x,-b,0),M.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const w=b+l*p,x=b+l*(p+1),A=b+1+l*(p+1),E=b+1+l*p;f.push(w,x,E),f.push(x,A,E)}this.setIndex(f),this.setAttribute("position",new xt(v,3)),this.setAttribute("normal",new xt(M,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ko extends Gt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let d=e;const h=(t-e)/r,f=new P,v=new Me;for(let M=0;M<=r;M++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,u.push(v.x,v.y)}d+=h}for(let M=0;M<r;M++){const m=M*(n+1);for(let p=0;p<n;p++){const b=p+m,w=b,x=b+n+1,A=b+n+2,E=b+1;o.push(w,x,E),o.push(x,A,E)}}this.setIndex(o),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(zl(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(zl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=Ji(i[t]);for(const r in n)e[r]=n[r]}return e}function zl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const vf={clone:Ji,merge:qt};var _f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new et().setHex(r.value);break;case"v2":this.uniforms[n].value=new Me().fromArray(r.value);break;case"v3":this.uniforms[n].value=new P().fromArray(r.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yf extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pu extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mf extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sf extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mu extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class bf extends mu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _a=new mt,Hl=new P,Gl=new P;class Ef{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_a,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Rr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hs=new P,ds=new tr,gn=new P;class gu extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hs,ds,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hs,ds,gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(hs,ds,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hs,ds,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new P,Vl=new Me,Wl=new Me;class rn extends gu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Wl),t.subVectors(Wl,Vl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yo extends gu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wf extends Ef{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tf extends mu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new wf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ii=-90,Ni=1;class Af extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Ii,Ni,e,t);r.layers=this.layers,this.add(r);const s=new rn(Ii,Ni,e,t);s.layers=this.layers,this.add(s);const a=new rn(Ii,Ni,e,t);a.layers=this.layers,this.add(a);const o=new rn(Ii,Ni,e,t);o.layers=this.layers,this.add(o);const c=new rn(Ii,Ni,e,t);c.layers=this.layers,this.add(c);const l=new rn(Ii,Ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Rf extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ql=new mt;class Cf{constructor(e,t,n=0,r=1/0){this.ray=new Bo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ql.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ql),this}intersectObject(e,t=!0,n=[]){return go(e,this,n,t),n.sort(Xl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)go(e[r],this,n,t);return n.sort(Xl),n}}function Xl(i,e){return i.distance-e.distance}function go(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)go(s[a],e,t,!0)}}const tl=class tl{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};tl.prototype.isMatrix2=!0;let Kl=tl;function Yl(i,e,t,n){const r=Lf(n);switch(t){case Kc:return i*e;case $c:return i*e/r.components*r.byteLength;case Lo:return i*e/r.components*r.byteLength;case pi:return i*e*2/r.components*r.byteLength;case Po:return i*e*2/r.components*r.byteLength;case Yc:return i*e*3/r.components*r.byteLength;case fn:return i*e*4/r.components*r.byteLength;case Do:return i*e*4/r.components*r.byteLength;case _s:case xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ys:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:case ka:return Math.max(i,16)*Math.max(e,8)/4;case Ua:case Oa:return Math.max(i,8)*Math.max(e,8)/2;case Ba:case za:case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Rs:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case so:case ao:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cs:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lf(i){switch(i){case jt:case Vc:return{byteLength:1,components:1};case Tr:case Wc:case wn:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case En:case Ao:case Mn:return{byteLength:4,components:1};case qc:case Xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vu(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Pf(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,v)=>f.start-v.start);let h=0;for(let f=1;f<d.length;f++){const v=d[h],M=d[f];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++h,d[h]=M)}d.length=h+1;for(let f=0,v=d.length;f<v;f++){const M=d[f];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,If=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,np=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ep=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Np=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Am=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Df,alphahash_pars_fragment:If,alphamap_fragment:Nf,alphamap_pars_fragment:Uf,alphatest_fragment:Ff,alphatest_pars_fragment:Of,aomap_fragment:kf,aomap_pars_fragment:Bf,batching_pars_vertex:zf,batching_vertex:Hf,begin_vertex:Gf,beginnormal_vertex:Vf,bsdfs:Wf,iridescence_fragment:qf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:$f,clipping_planes_vertex:Zf,color_fragment:Jf,color_pars_fragment:Qf,color_pars_vertex:jf,color_vertex:ep,common:tp,cube_uv_reflection_fragment:np,defaultnormal_vertex:ip,displacementmap_pars_vertex:rp,displacementmap_vertex:sp,emissivemap_fragment:ap,emissivemap_pars_fragment:op,colorspace_fragment:lp,colorspace_pars_fragment:cp,envmap_fragment:up,envmap_common_pars_fragment:hp,envmap_pars_fragment:dp,envmap_pars_vertex:fp,envmap_physical_pars_fragment:Ep,envmap_vertex:pp,fog_vertex:mp,fog_pars_vertex:gp,fog_fragment:vp,fog_pars_fragment:_p,gradientmap_pars_fragment:xp,lightmap_pars_fragment:yp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:Sp,lights_pars_begin:bp,lights_toon_fragment:wp,lights_toon_pars_fragment:Tp,lights_phong_fragment:Ap,lights_phong_pars_fragment:Rp,lights_physical_fragment:Cp,lights_physical_pars_fragment:Lp,lights_fragment_begin:Pp,lights_fragment_maps:Dp,lights_fragment_end:Ip,lightprobes_pars_fragment:Np,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:kp,map_fragment:Bp,map_pars_fragment:zp,map_particle_fragment:Hp,map_particle_pars_fragment:Gp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:qp,morphcolor_vertex:Xp,morphnormal_vertex:Kp,morphtarget_pars_vertex:Yp,morphtarget_vertex:$p,normal_fragment_begin:Zp,normal_fragment_maps:Jp,normal_pars_fragment:Qp,normal_pars_vertex:jp,normal_vertex:em,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:rm,iridescence_pars_fragment:sm,opaque_fragment:am,packing:om,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:um,dithering_pars_fragment:hm,roughnessmap_fragment:dm,roughnessmap_pars_fragment:fm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:vm,skinbase_vertex:_m,skinning_pars_vertex:xm,skinning_vertex:ym,skinnormal_vertex:Mm,specularmap_fragment:Sm,specularmap_pars_fragment:bm,tonemapping_fragment:Em,tonemapping_pars_fragment:wm,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:Rm,uv_pars_vertex:Cm,uv_vertex:Lm,worldpos_vertex:Pm,background_vert:Dm,background_frag:Im,backgroundCube_vert:Nm,backgroundCube_frag:Um,cube_vert:Fm,cube_frag:Om,depth_vert:km,depth_frag:Bm,distance_vert:zm,distance_frag:Hm,equirect_vert:Gm,equirect_frag:Vm,linedashed_vert:Wm,linedashed_frag:qm,meshbasic_vert:Xm,meshbasic_frag:Km,meshlambert_vert:Ym,meshlambert_frag:$m,meshmatcap_vert:Zm,meshmatcap_frag:Jm,meshnormal_vert:Qm,meshnormal_frag:jm,meshphong_vert:eg,meshphong_frag:tg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:rg,meshtoon_frag:sg,points_vert:ag,points_frag:og,shadow_vert:lg,shadow_frag:cg,sprite_vert:ug,sprite_frag:hg},be={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},_n={basic:{uniforms:qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:qt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:qt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new et(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:qt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:qt([be.points,be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:qt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:qt([be.common,be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:qt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:qt([be.sprite,be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:qt([be.common,be.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:qt([be.lights,be.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};_n.physical={uniforms:qt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const fs={r:0,b:0,g:0},dg=new mt,_u=new Xe;_u.set(-1,0,0,0,1,0,0,0,1);function fg(i,e,t,n,r,s){const a=new et(0);let o=r===!0?0:1,c,l,u=null,d=0,h=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const x=b.backgroundBlurriness>0;w=e.get(w,x)}return w}function v(b){let w=!1;const x=f(b);x===null?m(a,o):x&&x.isColor&&(m(x,1),w=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,w){const x=f(w);x&&(x.isCubeTexture||x.mapping===ks)?(l===void 0&&(l=new Xt(new ei(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Ji(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_u),l.material.toneMapped=rt.getTransfer(x.colorSpace)!==ut,(u!==x||d!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Xt(new Or(2,2),new Tn({name:"BackgroundMaterial",uniforms:Ji(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=rt.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,w){b.getRGB(fs,fu(i)),t.buffers.color.setClear(fs.r,fs.g,fs.b,w,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:v,addToRenderList:M,dispose:p}}function pg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(U,k,q,D,z){let j=!1;const X=d(U,D,q,k);s!==X&&(s=X,l(s.object)),j=f(U,D,q,z),j&&v(U,D,q,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(U,k,q,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function d(U,k,q,D){const z=D.wireframe===!0;let j=n[k.id];j===void 0&&(j={},n[k.id]=j);const X=U.isInstancedMesh===!0?U.id:0;let ae=j[X];ae===void 0&&(ae={},j[X]=ae);let Y=ae[q.id];Y===void 0&&(Y={},ae[q.id]=Y);let ee=Y[z];return ee===void 0&&(ee=h(c()),Y[z]=ee),ee}function h(U){const k=[],q=[],D=[];for(let z=0;z<t;z++)k[z]=0,q[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,k,q,D){const z=s.attributes,j=k.attributes;let X=0;const ae=q.getAttributes();for(const Y in ae)if(ae[Y].location>=0){const re=z[Y];let Ne=j[Y];if(Ne===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Ne=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Ne=U.instanceColor)),re===void 0||re.attribute!==Ne||Ne&&re.data!==Ne.data)return!0;X++}return s.attributesNum!==X||s.index!==D}function v(U,k,q,D){const z={},j=k.attributes;let X=0;const ae=q.getAttributes();for(const Y in ae)if(ae[Y].location>=0){let re=j[Y];re===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(re=U.instanceColor));const Ne={};Ne.attribute=re,re&&re.data&&(Ne.data=re.data),z[Y]=Ne,X++}s.attributes=z,s.attributesNum=X,s.index=D}function M(){const U=s.newAttributes;for(let k=0,q=U.length;k<q;k++)U[k]=0}function m(U){p(U,0)}function p(U,k){const q=s.newAttributes,D=s.enabledAttributes,z=s.attributeDivisors;q[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),z[U]!==k&&(i.vertexAttribDivisor(U,k),z[U]=k)}function b(){const U=s.newAttributes,k=s.enabledAttributes;for(let q=0,D=k.length;q<D;q++)k[q]!==U[q]&&(i.disableVertexAttribArray(q),k[q]=0)}function w(U,k,q,D,z,j,X){X===!0?i.vertexAttribIPointer(U,k,q,z,j):i.vertexAttribPointer(U,k,q,D,z,j)}function x(U,k,q,D){M();const z=D.attributes,j=q.getAttributes(),X=k.defaultAttributeValues;for(const ae in j){const Y=j[ae];if(Y.location>=0){let ee=z[ae];if(ee===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor)),ee!==void 0){const re=ee.normalized,Ne=ee.itemSize,Ce=e.get(ee);if(Ce===void 0)continue;const nt=Ce.buffer,Ke=Ce.type,it=Ce.bytesPerElement,J=Ke===i.INT||Ke===i.UNSIGNED_INT||ee.gpuType===Ao;if(ee.isInterleavedBufferAttribute){const ie=ee.data,ye=ie.stride,He=ee.offset;if(ie.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Y.locationSize;Ee++)p(Y.location+Ee,ie.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ee=0;Ee<Y.locationSize;Ee++)m(Y.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Ee=0;Ee<Y.locationSize;Ee++)w(Y.location+Ee,Ne/Y.locationSize,Ke,re,ye*it,(He+Ne/Y.locationSize*Ee)*it,J)}else{if(ee.isInstancedBufferAttribute){for(let ie=0;ie<Y.locationSize;ie++)p(Y.location+ie,ee.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ie=0;ie<Y.locationSize;ie++)m(Y.location+ie);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ie=0;ie<Y.locationSize;ie++)w(Y.location+ie,Ne/Y.locationSize,Ke,re,Ne*it,Ne/Y.locationSize*ie*it,J)}}else if(X!==void 0){const re=X[ae];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(Y.location,re);break;case 3:i.vertexAttrib3fv(Y.location,re);break;case 4:i.vertexAttrib4fv(Y.location,re);break;default:i.vertexAttrib1fv(Y.location,re)}}}}b()}function A(){T();for(const U in n){const k=n[U];for(const q in k){const D=k[q];for(const z in D){const j=D[z];for(const X in j)u(j[X].object),delete j[X];delete D[z]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;const k=n[U.id];for(const q in k){const D=k[q];for(const z in D){const j=D[z];for(const X in j)u(j[X].object),delete j[X];delete D[z]}}delete n[U.id]}function C(U){for(const k in n){const q=n[k];for(const D in q){const z=q[D];if(z[U.id]===void 0)continue;const j=z[U.id];for(const X in j)u(j[X].object),delete j[X];delete z[U.id]}}}function _(U){for(const k in n){const q=n[k],D=U.isInstancedMesh===!0?U.id:0,z=q[D];if(z!==void 0){for(const j in z){const X=z[j];for(const ae in X)u(X[ae].object),delete X[ae];delete z[j]}delete q[D],Object.keys(q).length===0&&delete n[k]}}}function T(){L(),a=!0,s!==r&&(s=r,l(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function mg(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function gg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jt&&C!==Mn&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ve("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:x,maxSamples:A,samples:E}}function vg(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Nn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const v=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):l();else{const b=s?0:n,w=b*4;let x=p.clippingState||null;c.value=x,x=u(v,h,w,f);for(let A=0;A!==w;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,v){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=c.value,v!==!0||m===null){const p=f+M*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==M;++w,x+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const Hi=4,_g=6,xg=20,yg=256,fr=new Yo,$l=new et;let xa=null,ya=0,Ma=0,Sa=!1;const Mg=new P,oi=new P;class Zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Mg}=s;xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xa,ya,Ma),this._renderer.xr.enabled=Sa,e.scissorTest=!1,Ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:wn,format:fn,colorSpace:Ls,depthBuffer:!1},r=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Sg(s)),this._blurMaterial=Eg(s,e,t),this._ggxMaterial=bg(s,e,t)}return r}_compileMaterial(e){const t=new Xt(new Gt,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,n,r,s){const c=new rn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor($l),d.toneMapping=bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new ei,new $i({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy($l),p=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):x===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));const A=this._cubeSize;Ui(r,x*A,w>2?A:0,A,A),d.setRenderTarget(r),p&&d.render(M,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===fi||e.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ui(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,fr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:v}=this,M=this._sizeLods[n],m=3*M*(n>v-Hi?n-v+Hi:0),p=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=v-t,Ui(s,m,p,3*M,2*M),r.setRenderTarget(s),r.render(o,fr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,Ui(e,m,p,3*M,2*M),r.setRenderTarget(e),r.render(o,fr)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[r],d=3*u*(r>this._lodMax-Hi?r-this._lodMax+Hi:0),h=4*(this._cubeSize-u);Ui(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(c,fr)}}function Sg(i){const e=[],t=[];let n=i;const r=i-Hi+1+_g;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,v=new Float32Array(f*h*d),M=new Float32Array(f*h*d);for(let p=0;p<d;p++){const b=p%3*2/3-1,w=p>2?0:-1,x=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];v.set(x,f*h*p);for(let A=0;A<h;A++){const E=u[A*2]*2-1,C=u[A*2+1]*2-1;p===0?oi.set(1,C,E):p===1?oi.set(-E,1,-C):p===2?oi.set(-E,C,1):p===3?oi.set(-1,C,-E):p===4?oi.set(-E,-1,C):oi.set(E,C,-1),oi.toArray(M,(p*h+A)*f)}}const m=new Gt;m.setAttribute("position",new Bn(v,f)),m.setAttribute("outputDirection",new Bn(M,f)),t.push(new Xt(m,null)),n>Hi&&n--}return{lodMeshes:t,sizeLods:e}}function Jl(i,e,t){const n=new pn(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bg(i,e,t){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Eg(i,e,t){return new Tn({name:"SphericalGaussianBlur",defines:{SAMPLES:xg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ql(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function jl(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Hs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xu extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new nu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ei(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:On});s.uniforms.tEquirect.value=t;const a=new Xt(r,s),o=t.minFilter;return t.minFilter===li&&(t.minFilter=zt),new Af(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function wg(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Vs||f===Ws)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const M=new xu(v.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,v=f===Vs||f===Ws,M=f===fi||f===Yi;if(v||M){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Zl(i)),m=v?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return v&&b&&b.height>0||M&&b&&c(b)?(n===null&&(n=new Zl(i)),m=v?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Vs?h.mapping=fi:f===Ws&&(h.mapping=Yi),h}function c(h){let f=0;const v=6;for(let M=0;M<v;M++)h[M]!==void 0&&f++;return f===v}function l(h){const f=h.target;f.removeEventListener("dispose",l);const v=e.get(f);v!==void 0&&(e.delete(f),v.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const v=t.get(f);v!==void 0&&(t.delete(f),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Tg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Vi("WebGLRenderer: "+n+" extension not supported."),r}}}function Ag(i,e,t,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,v=d.attributes.position;let M=0;if(v===void 0)return;if(f!==null){const b=f.array;M=f.version;for(let w=0,x=b.length;w<x;w+=3){const A=b[w+0],E=b[w+1],C=b[w+2];h.push(A,E,E,C,C,A)}}else{const b=v.array;M=v.version;for(let w=0,x=b.length/3-1;w<x;w+=3){const A=w+0,E=w+1,C=w+2;h.push(A,E,E,C,C,A)}}const m=new(v.count>=65535?eu:jc)(h,1);m.version=M;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Rg(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){i.drawElements(n,h,s,d*a),t.update(h,n,1)}function l(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let M=0;for(let m=0;m<f;m++)M+=h[m];t.update(M,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Cg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Lg(i,e,t){const n=new WeakMap,r=new vt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var f=L;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let x=0;v===!0&&(x=1),M===!0&&(x=2),m===!0&&(x=3);let A=o.attributes.position.count*x,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*E*4*d),_=new Jc(C,A,E,d);_.type=Mn,_.needsUpdate=!0;const T=x*4;for(let U=0;U<d;U++){const k=p[U],q=b[U],D=w[U],z=A*E*4*U;for(let j=0;j<k.count;j++){const X=j*T;v===!0&&(r.fromBufferAttribute(k,j),C[z+X+0]=r.x,C[z+X+1]=r.y,C[z+X+2]=r.z,C[z+X+3]=0),M===!0&&(r.fromBufferAttribute(q,j),C[z+X+4]=r.x,C[z+X+5]=r.y,C[z+X+6]=r.z,C[z+X+7]=0),m===!0&&(r.fromBufferAttribute(D,j),C[z+X+8]=r.x,C[z+X+9]=r.y,C[z+X+10]=r.z,C[z+X+11]=D.itemSize===4?r.w:1)}}h={count:d,texture:_,size:new Me(A,E)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<l.length;m++)v+=l[m];const M=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Pg(i,e,t,n,r){let s=new WeakMap;function a(l){const u=r.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Dg={[Uc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Oc]:"CINEON_TONE_MAPPING",[kc]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[Hc]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};function Ig(i,e,t,n,r,s){const a=new pn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Gt;l.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xt([0,2,0,0,2,0],2));const u=new yf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Xt(l,u),h=new Yo(-1,1,1,-1,0,1);let f=null,v=null,M=!1,m,p=null,b=[],w=!1;this.setSize=function(x,A){a.setSize(x,A),o!==null&&o.setSize(x,A),c!==null&&c.setSize(x,A);for(let E=0;E<b.length;E++){const C=b[E];C.setSize&&C.setSize(x,A)}},this.setEffects=function(x){b=x,w=b.length>0&&b[0].isRenderPass===!0;const A=a.width,E=a.height;b.length>0&&o===null&&(o=new pn(A,E,{type:wn,depthBuffer:!1,stencilBuffer:!1}),c=new pn(A,E,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){const _=b[C];_.setSize&&_.setSize(A,E)}},this.begin=function(x,A){if(M||x.toneMapping===bn&&b.length===0)return!1;if(p=A,A!==null){const E=A.width,C=A.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return w===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=bn,!0},this.hasRenderPass=function(){return w},this.end=function(x,A){x.toneMapping=m,M=!0;let E=a,C=o;for(let _=0;_<b.length;_++){const T=b[_];T.enabled!==!1&&(T.render(x,C,E,A),T.needsSwap!==!1&&(E=C,C=C===o?c:o))}if(f!==x.outputColorSpace||v!==x.toneMapping){f=x.outputColorSpace,v=x.toneMapping,u.defines={},rt.getTransfer(f)===ut&&(u.defines.SRGB_TRANSFER="");const _=Dg[v];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(p),x.render(d,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const yu=new Ht,vo=new Lr(1,1),Mu=new Jc,Su=new pd,bu=new nu,ec=[],tc=[],nc=new Float32Array(16),ic=new Float32Array(9),rc=new Float32Array(4);function rr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ec[r];if(s===void 0&&(s=new Float32Array(r),ec[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gs(i,e){let t=tc[e];t===void 0&&(t=new Int32Array(e),tc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ng(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function kg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;rc.set(n),i.uniformMatrix2fv(this.addr,!1,rc),Lt(t,n)}}function Bg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;ic.set(n),i.uniformMatrix3fv(this.addr,!1,ic),Lt(t,n)}}function zg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,n))return;nc.set(n),i.uniformMatrix4fv(this.addr,!1,nc),Lt(t,n)}}function Hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function qg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function $g(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(vo.compareFunction=t.isReversedDepthBuffer()?No:Io,s=vo):s=yu,t.setTexture2D(e||s,r)}function Zg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Su,r)}function Jg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||bu,r)}function Qg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Mu,r)}function jg(i){switch(i){case 5126:return Ng;case 35664:return Ug;case 35665:return Fg;case 35666:return Og;case 35674:return kg;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return Hg;case 35667:case 35671:return Gg;case 35668:case 35672:return Vg;case 35669:case 35673:return Wg;case 5125:return qg;case 36294:return Xg;case 36295:return Kg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Qg}}function e0(i,e){i.uniform1fv(this.addr,e)}function t0(i,e){const t=rr(e,this.size,2);i.uniform2fv(this.addr,t)}function n0(i,e){const t=rr(e,this.size,3);i.uniform3fv(this.addr,t)}function i0(i,e){const t=rr(e,this.size,4);i.uniform4fv(this.addr,t)}function r0(i,e){const t=rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s0(i,e){const t=rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function a0(i,e){const t=rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function o0(i,e){i.uniform1iv(this.addr,e)}function l0(i,e){i.uniform2iv(this.addr,e)}function c0(i,e){i.uniform3iv(this.addr,e)}function u0(i,e){i.uniform4iv(this.addr,e)}function h0(i,e){i.uniform1uiv(this.addr,e)}function d0(i,e){i.uniform2uiv(this.addr,e)}function f0(i,e){i.uniform3uiv(this.addr,e)}function p0(i,e){i.uniform4uiv(this.addr,e)}function m0(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=vo:a=yu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function g0(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Su,s[a])}function v0(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||bu,s[a])}function _0(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Mu,s[a])}function x0(i){switch(i){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return r0;case 35675:return s0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return u0;case 5125:return h0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return _0}}class y0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jg(t.type)}}class M0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x0(t.type)}}class S0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function sc(i,e){i.seq.push(e),i.map[e.id]=e}function b0(i,e,t){const n=i.name,r=n.length;for(ba.lastIndex=0;;){const s=ba.exec(n),a=ba.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){sc(t,l===void 0?new y0(o,i,e):new M0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new S0(o),sc(t,d)),t=d}}}class Ss{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);b0(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ac(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const E0=37297;let w0=0;function T0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const oc=new Xe;function A0(i){rt._getMatrix(oc,rt.workingColorSpace,i);const e=`mat3( ${oc.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Ps:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+T0(i.getShaderSource(e),o)}else return s}function R0(i,e){const t=A0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const C0={[Uc]:"Linear",[Fc]:"Reinhard",[Oc]:"Cineon",[kc]:"ACESFilmic",[zc]:"AgX",[Hc]:"Neutral",[Bc]:"Custom"};function L0(i,e){const t=C0[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ps=new P;function P0(){rt.getLuminanceCoefficients(ps);const i=ps.x.toFixed(4),e=ps.y.toFixed(4),t=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function I0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xr(i){return i!==""}function cc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(i){return i.replace(U0,O0)}const F0=new Map;function O0(i,e){let t=Ze[e];if(t===void 0){const n=F0.get(e);if(n!==void 0)t=Ze[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _o(t)}const k0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(k0,B0)}function B0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const z0={[vs]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function H0(i){return z0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const G0={[fi]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE_UV"};function V0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":G0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const W0={[Yi]:"ENVMAP_MODE_REFRACTION"};function q0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":W0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const X0={[Nc]:"ENVMAP_BLENDING_MULTIPLY",[Lh]:"ENVMAP_BLENDING_MIX",[Ph]:"ENVMAP_BLENDING_ADD"};function K0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":X0[i.combine]||"ENVMAP_BLENDING_NONE"}function Y0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $0(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=H0(t),l=V0(t),u=q0(t),d=K0(t),h=Y0(t),f=D0(t),v=I0(s),M=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==bn?L0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,R0("linearToOutputTexel",t.outputColorSpace),P0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=_o(a),a=cc(a,t),a=uc(a,t),o=_o(o),o=cc(o,t),o=uc(o,t),a=hc(a),o=hc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+a,x=b+p+o,A=ac(r,r.VERTEX_SHADER,w),E=ac(r,r.FRAGMENT_SHADER,x);r.attachShader(M,A),r.attachShader(M,E),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(U){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(M)||"",q=r.getShaderInfoLog(A)||"",D=r.getShaderInfoLog(E)||"",z=k.trim(),j=q.trim(),X=D.trim();let ae=!0,Y=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,A,E);else{const ee=lc(r,A,"vertex"),re=lc(r,E,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+ee+`
`+re)}else z!==""?Ve("WebGLProgram: Program Info Log:",z):(j===""||X==="")&&(Y=!1);Y&&(U.diagnostics={runnable:ae,programLog:z,vertexShader:{log:j,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(A),r.deleteShader(E),_=new Ss(r,M),T=N0(r,M)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(M,E0)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=E,this}let Z0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q0(e),t.set(e,n)),n}}class Q0{constructor(e){this.id=Z0++,this.code=e,this.usedTimes=0}}function j0(i){return i===pi||i===Rs||i===Cs}function ev(i,e,t,n,r,s){const a=new Oo,o=new J0,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function M(_,T,L,U,k,q){const D=U.fog,z=k.geometry,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ae=e.get(_.envMap||j,X),Y=ae&&ae.mapping===ks?ae.image.height:null,ee=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ne=re!==void 0?re.length:0;let Ce=0;z.morphAttributes.position!==void 0&&(Ce=1),z.morphAttributes.normal!==void 0&&(Ce=2),z.morphAttributes.color!==void 0&&(Ce=3);let nt,Ke,it,J;if(ee){const tt=_n[ee];nt=tt.vertexShader,Ke=tt.fragmentShader}else{nt=_.vertexShader,Ke=_.fragmentShader;const tt=o.getVertexShaderStage(_),Ye=o.getFragmentShaderStage(_);o.update(_,tt,Ye),it=tt.id,J=Ye.id}const ie=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),He=k.isInstancedMesh===!0,Ee=k.isBatchedMesh===!0,Pe=!!_.map,at=!!_.matcap,se=!!ae,ce=!!_.aoMap,he=!!_.lightMap,de=!!_.bumpMap&&_.wireframe===!1,ve=!!_.normalMap,Oe=!!_.displacementMap,ze=!!_.emissiveMap,Ge=!!_.metalnessMap,qe=!!_.roughnessMap,N=_.anisotropy>0,lt=_.clearcoat>0,Je=_.dispersion>0,R=_.retroreflectivity>0,g=_.iridescence>0,B=_.sheen>0,W=_.transmission>0,$=N&&!!_.anisotropyMap,fe=lt&&!!_.clearcoatMap,_e=lt&&!!_.clearcoatNormalMap,Q=lt&&!!_.clearcoatRoughnessMap,ne=g&&!!_.iridescenceMap,pe=g&&!!_.iridescenceThicknessMap,ke=B&&!!_.sheenColorMap,me=B&&!!_.sheenRoughnessMap,xe=!!_.specularMap,Ue=!!_.specularColorMap,Fe=!!_.specularIntensityMap,I=W&&!!_.transmissionMap,S=W&&!!_.thicknessMap,H=!!_.gradientMap,O=!!_.alphaMap,Z=_.alphaTest>0,oe=!!_.alphaHash,te=!!_.extensions;let Se=bn;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Se=i.toneMapping);const Ae={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:nt,fragmentShader:Ke,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ee,batchingColor:Ee&&k._colorsTexture!==null,instancing:He,instancingColor:He&&k.instanceColor!==null,instancingMorph:He&&k.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:at,envMap:se,envMapMode:se&&ae.mapping,envMapCubeUVHeight:Y,aoMap:ce,lightMap:he,bumpMap:de,normalMap:ve,displacementMap:Oe,emissiveMap:ze,normalMapObjectSpace:ve&&_.normalMapType===Nh,normalMapTangentSpace:ve&&_.normalMapType===ho,packedNormalMap:ve&&_.normalMapType===ho&&j0(_.normalMap.format),metalnessMap:Ge,roughnessMap:qe,anisotropy:N,anisotropyMap:$,clearcoat:lt,clearcoatMap:fe,clearcoatNormalMap:_e,clearcoatRoughnessMap:Q,dispersion:Je,retroreflection:R,iridescence:g,iridescenceMap:ne,iridescenceThicknessMap:pe,sheen:B,sheenColorMap:ke,sheenRoughnessMap:me,specularMap:xe,specularColorMap:Ue,specularIntensityMap:Fe,transmission:W,transmissionMap:I,thicknessMap:S,gradientMap:H,opaque:_.transparent===!1&&_.blending===Mr&&_.alphaToCoverage===!1,alphaMap:O,alphaTest:Z,alphaHash:oe,combine:_.combine,mapUv:Pe&&v(_.map.channel),aoMapUv:ce&&v(_.aoMap.channel),lightMapUv:he&&v(_.lightMap.channel),bumpMapUv:de&&v(_.bumpMap.channel),normalMapUv:ve&&v(_.normalMap.channel),displacementMapUv:Oe&&v(_.displacementMap.channel),emissiveMapUv:ze&&v(_.emissiveMap.channel),metalnessMapUv:Ge&&v(_.metalnessMap.channel),roughnessMapUv:qe&&v(_.roughnessMap.channel),anisotropyMapUv:$&&v(_.anisotropyMap.channel),clearcoatMapUv:fe&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(_.sheenRoughnessMap.channel),specularMapUv:xe&&v(_.specularMap.channel),specularColorMapUv:Ue&&v(_.specularColorMap.channel),specularIntensityMapUv:Fe&&v(_.specularIntensityMap.channel),transmissionMapUv:I&&v(_.transmissionMap.channel),thicknessMapUv:S&&v(_.thicknessMap.channel),alphaMapUv:O&&v(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||N),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(Pe||O),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Ce,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:ze&&_.emissiveMap.isVideoTexture===!0&&rt.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:te&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&_.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)T.push(L),T.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(p(T,_),b(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const T=f[_.type];let L;if(T){const U=_n[T];L=vf.clone(U.uniforms)}else L=_.uniforms;return L}function x(_,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new $0(i,T,_,r),l.push(L),u.set(T,L)),L}function A(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:C}}function tv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function nv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,v,M,m,p){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:f,material:v,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:p},i[e]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=v,b.materialVariant=a(h),b.groupOrder=M,b.renderOrder=h.renderOrder,b.z=m,b.group=p),e++,b}function c(h,f,v,M,m,p,b){b.reversedDepth===!0&&(m=-m);const w=o(h,f,v,M,m,p);v.transmission>0?n.push(w):v.transparent===!0?r.push(w):t.push(w)}function l(h,f,v,M,m,p){const b=o(h,f,v,M,m,p);v.transmission>0?n.unshift(b):v.transparent===!0?r.unshift(b):t.unshift(b)}function u(h,f){t.length>1&&t.sort(h||nv),n.length>1&&n.sort(f||fc),r.length>1&&r.sort(f||fc)}function d(){for(let h=e,f=i.length;h<f;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function iv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new pc,i.set(n,[a])):r>=s.length?(a=new pc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function rv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new et};break;case"SpotLight":t={position:new P,direction:new P,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function sv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let av=0;function ov(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lv(i){const e=new rv,t=sv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const r=new P,s=new mt,a=new mt;function o(l){let u=0,d=0,h=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,v=0,M=0,m=0,p=0,b=0,w=0,x=0,A=0,E=0,C=0,_=0,T=0,L=0;l.sort(ov);for(let k=0,q=l.length;k<q;k++){const D=l[k],z=D.color,j=D.intensity,X=D.distance;let ae=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===pi?ae=D.shadow.map.texture:ae=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=z.r*j,d+=z.g*j,h+=z.b*j;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],j);L++}else if(D.isSunLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ee=D.shadow,re=t.get(D);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[v]=re,n.sunShadowMap[v]=ae;const Ne=ee.getViewportCount();for(let Ce=0;Ce<Ne;Ce++)n.sunShadowMatrix[M+Ce]=ee.getMatrix(Ce),n.sunShadowCascade[M+Ce]=ee._cascadeData[Ce];M+=Ne,v++}n.sun[f]=Y,f++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ee=D.shadow,re=t.get(D);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=ae,n.directionalShadowMatrix[m]=D.shadow.matrix,A++}n.directional[m]=Y,m++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(z).multiplyScalar(j),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[b]=Y;const ee=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,ee.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[b]=ee.matrix,D.castShadow){const re=t.get(D);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,n.spotShadow[b]=re,n.spotShadowMap[b]=ae,C++}b++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(z).multiplyScalar(j),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=Y,w++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const ee=D.shadow,re=t.get(D);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,re.shadowCameraNear=ee.camera.near,re.shadowCameraFar=ee.camera.far,n.pointShadow[p]=re,n.pointShadowMap[p]=ae,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=Y,p++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(j),Y.groundColor.copy(D.groundColor).multiplyScalar(j),n.hemi[x]=Y,x++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==b||U.rectAreaLength!==w||U.hemiLength!==x||U.numSunShadows!==v||U.numDirectionalShadows!==A||U.numPointShadows!==E||U.numSpotShadows!==C||U.numSpotMaps!==_||U.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=w,n.point.length=p,n.hemi.length=x,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=b,U.rectAreaLength=w,U.hemiLength=x,U.numSunShadows=v,U.numDirectionalShadows=A,U.numPointShadows=E,U.numSpotShadows=C,U.numSpotMaps=_,U.numLightProbes=L,n.version=av++)}function c(l,u){let d=0,h=0,f=0,v=0,M=0,m=0;const p=u.matrixWorldInverse;for(let b=0,w=l.length;b<w;b++){const x=l[b];if(x.isSunLight){const A=n.sun[d];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),h++}else if(x.isSpotLight){const A=n.spot[v];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),v++}else if(x.isRectAreaLight){const A=n.rectArea[M];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const A=n.hemi[m];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function mc(i){const e=new lv(i),t=[],n=[],r=[];function s(h){d.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){r.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function cv(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new mc(i),e.set(r,[o])):s>=a.length?(o=new mc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],fv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],gc=new mt,pr=new P,Ea=new P;function pv(i,e,t){let n=new zo;const r=new Me,s=new Me,a=new vt,o=new Mf,c=new Sf,l={},u=t.maxTextureSize,d={[di]:$t,[$t]:di,[hn]:hn},h=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:uv,fragmentShader:hv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const v=new Gt;v.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Xt(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let p=this.type;this.render=function(E,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Pc&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vs);const T=i.getRenderTarget(),L=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(On),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=p!==this.type;q&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=E.length;D<z;D++){const j=E[D],X=j.shadow;if(X===void 0){Ve("WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ae=X.getFrameExtents();r.multiply(ae),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,X.mapSize.y=s.y));const Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||q===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===vr){if(j.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new pn(r.x,r.y,{format:pi,type:wn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),X.map.texture.name=j.name+".shadowMap",X.map.depthTexture=new Lr(r.x,r.y,Mn),X.map.depthTexture.name=j.name+".shadowMapDepth",X.map.depthTexture.format=zn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ft,X.map.depthTexture.magFilter=Ft}else j.isPointLight?(X.map=new xu(r.x),X.map.depthTexture=new Ud(r.x,En)):(X.map=new pn(r.x,r.y),X.map.depthTexture=new Lr(r.x,r.y,En)),X.map.depthTexture.name=j.name+".shadowMap",X.map.depthTexture.format=zn,this.type===vs?(X.map.depthTexture.compareFunction=Y?No:Io,X.map.depthTexture.minFilter=zt,X.map.depthTexture.magFilter=zt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ft,X.map.depthTexture.magFilter=Ft);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const ee=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();j.isPointLight!==!0&&X.updateMatrices(j,_);for(let re=0;re<ee;re++){const Ne=X.getCamera(re);if(j.isPointLight){const Ce=X.camera,nt=X.matrix,Ke=j.distance||Ce.far;Ke!==Ce.far&&(Ce.far=Ke,Ce.updateProjectionMatrix()),pr.setFromMatrixPosition(j.matrixWorld),Ce.position.copy(pr),Ea.copy(Ce.position),Ea.add(dv[re]),Ce.up.copy(fv[re]),Ce.lookAt(Ea),Ce.updateMatrixWorld(),nt.makeTranslation(-pr.x,-pr.y,-pr.z),gc.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),X._frustum.setFromProjectionMatrix(gc,Ce.coordinateSystem,Ce.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,re),i.clear();else{re===0&&(i.setRenderTarget(X.map),i.clear());const Ce=X.getViewport(re);a.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),k.viewport(a)}n=X.getFrustum(re),x(C,_,Ne,j,this.type)}X.isPointLightShadow!==!0&&this.type===vr&&b(X,_),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,L,U)};function b(E,C){const _=e.update(M);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new pn(r.x,r.y,{format:pi,type:wn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,_,h,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,_,f,M,null)}function w(E,C,_,T){let L=null;const U=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)L=U;else if(L=_.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=L.uuid,q=C.uuid;let D=l[k];D===void 0&&(D={},l[k]=D);let z=D[q];z===void 0&&(z=L.clone(),D[q]=z,C.addEventListener("dispose",A)),L=z}if(L.visible=C.visible,L.wireframe=C.wireframe,T===vr?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:d[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const k=i.properties.get(L);k.light=_}return L}function x(E,C,_,T,L){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===vr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const q=e.update(E),D=E.material;if(Array.isArray(D)){const z=q.groups;for(let j=0,X=z.length;j<X;j++){const ae=z[j],Y=D[ae.materialIndex];if(Y&&Y.visible){const ee=w(E,Y,T,L);E.onBeforeShadow(i,E,C,_,q,ee,ae),i.renderBufferDirect(_,null,q,ee,E,ae),E.onAfterShadow(i,E,C,_,q,ee,ae)}}}else if(D.visible){const z=w(E,D,T,L);E.onBeforeShadow(i,E,C,_,q,z,null),i.renderBufferDirect(_,null,q,z,E,null),E.onAfterShadow(i,E,C,_,q,z,null)}}const k=E.children;for(let q=0,D=k.length;q<D;q++)x(k[q],C,_,T,L)}function A(E){E.target.removeEventListener("dispose",A);for(const _ in l){const T=l[_],L=E.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function mv(i,e){function t(){let S=!1;const H=new vt;let O=null;const Z=new vt(0,0,0,0);return{setMask:function(oe){O!==oe&&!S&&(i.colorMask(oe,oe,oe,oe),O=oe)},setLocked:function(oe){S=oe},setClear:function(oe,te,Se,Ae,tt){tt===!0&&(oe*=Ae,te*=Ae,Se*=Ae),H.set(oe,te,Se,Ae),Z.equals(H)===!1&&(i.clearColor(oe,te,Se,Ae),Z.copy(H))},reset:function(){S=!1,O=null,Z.set(-1,0,0,0)}}}function n(){let S=!1,H=!1,O=null,Z=null,oe=null;return{setReversed:function(te){if(H!==te){const Se=e.get("EXT_clip_control");te?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),H=te;const Ae=oe;oe=null,this.setClear(Ae)}},getReversed:function(){return H},setTest:function(te){te?ie(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(te){O!==te&&!S&&(i.depthMask(te),O=te)},setFunc:function(te){if(H&&(te=Xh[te]),Z!==te){switch(te){case Ta:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Pa:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=te}},setLocked:function(te){S=te},setClear:function(te){oe!==te&&(oe=te,H&&(te=1-te),i.clearDepth(te))},reset:function(){S=!1,O=null,Z=null,oe=null,H=!1}}}function r(){let S=!1,H=null,O=null,Z=null,oe=null,te=null,Se=null,Ae=null,tt=null;return{setTest:function(Ye){S||(Ye?ie(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ye){H!==Ye&&!S&&(i.stencilMask(Ye),H=Ye)},setFunc:function(Ye,Ut,wt){(O!==Ye||Z!==Ut||oe!==wt)&&(i.stencilFunc(Ye,Ut,wt),O=Ye,Z=Ut,oe=wt)},setOp:function(Ye,Ut,wt){(te!==Ye||Se!==Ut||Ae!==wt)&&(i.stencilOp(Ye,Ut,wt),te=Ye,Se=Ut,Ae=wt)},setLocked:function(Ye){S=Ye},setClear:function(Ye){tt!==Ye&&(i.clearStencil(Ye),tt=Ye)},reset:function(){S=!1,H=null,O=null,Z=null,oe=null,te=null,Se=null,Ae=null,tt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,v=[],M=null,m=!1,p=null,b=null,w=null,x=null,A=null,E=null,C=null,_=new et(0,0,0),T=0,L=!1,U=null,k=null,q=null,D=null,z=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ae=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=ae>=1):Y.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=ae>=2);let ee=null,re={};const Ne=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),nt=new vt().fromArray(Ne),Ke=new vt().fromArray(Ce);function it(S,H,O,Z){const oe=new Uint8Array(4),te=i.createTexture();i.bindTexture(S,te),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<O;Se++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(H+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return te}const J={};J[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(wr),de(!1),ve(ol),ie(i.CULL_FACE),ce(On);function ie(S){u[S]!==!0&&(i.enable(S),u[S]=!0)}function ye(S){u[S]!==!1&&(i.disable(S),u[S]=!1)}function He(S,H){return h[S]!==H?(i.bindFramebuffer(S,H),h[S]=H,S===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=H),S===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=H),!0):!1}function Ee(S,H){let O=v,Z=!1;if(S){O=f.get(H),O===void 0&&(O=[],f.set(H,O));const oe=S.textures;if(O.length!==oe.length||O[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Se=oe.length;te<Se;te++)O[te]=i.COLOR_ATTACHMENT0+te;O.length=oe.length,Z=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,Z=!0);Z&&i.drawBuffers(O)}function Pe(S){return M!==S?(i.useProgram(S),M=S,!0):!1}const at={[Oi]:i.FUNC_ADD,[fh]:i.FUNC_SUBTRACT,[ph]:i.FUNC_REVERSE_SUBTRACT};at[mh]=i.MIN,at[gh]=i.MAX;const se={[vh]:i.ZERO,[_h]:i.ONE,[xh]:i.SRC_COLOR,[Dc]:i.SRC_ALPHA,[wh]:i.SRC_ALPHA_SATURATE,[bh]:i.DST_COLOR,[Mh]:i.DST_ALPHA,[yh]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[Eh]:i.ONE_MINUS_DST_COLOR,[Sh]:i.ONE_MINUS_DST_ALPHA,[Th]:i.CONSTANT_COLOR,[Ah]:i.ONE_MINUS_CONSTANT_COLOR,[Rh]:i.CONSTANT_ALPHA,[Ch]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(S,H,O,Z,oe,te,Se,Ae,tt,Ye){if(S===On){m===!0&&(ye(i.BLEND),m=!1);return}if(m===!1&&(ie(i.BLEND),m=!0),S!==dh){if(S!==p||Ye!==L){if((b!==Oi||A!==Oi)&&(i.blendEquation(i.FUNC_ADD),b=Oi,A=Oi),Ye)switch(S){case Mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ll:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",S);break}else switch(S){case Mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ll:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cl:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",S);break}w=null,x=null,E=null,C=null,_.set(0,0,0),T=0,p=S,L=Ye}return}oe=oe||H,te=te||O,Se=Se||Z,(H!==b||oe!==A)&&(i.blendEquationSeparate(at[H],at[oe]),b=H,A=oe),(O!==w||Z!==x||te!==E||Se!==C)&&(i.blendFuncSeparate(se[O],se[Z],se[te],se[Se]),w=O,x=Z,E=te,C=Se),(Ae.equals(_)===!1||tt!==T)&&(i.blendColor(Ae.r,Ae.g,Ae.b,tt),_.copy(Ae),T=tt),p=S,L=!1}function he(S,H){S.side===hn?ye(i.CULL_FACE):ie(i.CULL_FACE);let O=S.side===$t;H&&(O=!O),de(O),S.blending===Mr&&S.transparent===!1?ce(On):ce(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),a.setFunc(S.depthFunc),a.setTest(S.depthTest),a.setMask(S.depthWrite),s.setMask(S.colorWrite);const Z=S.stencilWrite;o.setTest(Z),Z&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ze(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(S){U!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),U=S)}function ve(S){S!==uh?(ie(i.CULL_FACE),S!==k&&(S===ol?i.cullFace(i.BACK):S===hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),k=S}function Oe(S){S!==q&&(X&&i.lineWidth(S),q=S)}function ze(S,H,O){S?(ie(i.POLYGON_OFFSET_FILL),(D!==H||z!==O)&&(D=H,z=O,a.getReversed()&&(H=-H),i.polygonOffset(H,O))):ye(i.POLYGON_OFFSET_FILL)}function Ge(S){S?ie(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function qe(S){S===void 0&&(S=i.TEXTURE0+j-1),ee!==S&&(i.activeTexture(S),ee=S)}function N(S,H,O){O===void 0&&(ee===null?O=i.TEXTURE0+j-1:O=ee);let Z=re[O];Z===void 0&&(Z={type:void 0,texture:void 0},re[O]=Z),(Z.type!==S||Z.texture!==H)&&(ee!==O&&(i.activeTexture(O),ee=O),i.bindTexture(S,H||J[S]),Z.type=S,Z.texture=H)}function lt(){const S=re[ee];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(S){st("WebGLState:",S)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(S){st("WebGLState:",S)}}function g(){try{i.texSubImage2D(...arguments)}catch(S){st("WebGLState:",S)}}function B(){try{i.texSubImage3D(...arguments)}catch(S){st("WebGLState:",S)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(S){st("WebGLState:",S)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(S){st("WebGLState:",S)}}function fe(){try{i.texStorage2D(...arguments)}catch(S){st("WebGLState:",S)}}function _e(){try{i.texStorage3D(...arguments)}catch(S){st("WebGLState:",S)}}function Q(){try{i.texImage2D(...arguments)}catch(S){st("WebGLState:",S)}}function ne(){try{i.texImage3D(...arguments)}catch(S){st("WebGLState:",S)}}function pe(S){return d[S]!==void 0?d[S]:i.getParameter(S)}function ke(S,H){d[S]!==H&&(i.pixelStorei(S,H),d[S]=H)}function me(S){nt.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),nt.copy(S))}function xe(S){Ke.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),Ke.copy(S))}function Ue(S,H){let O=l.get(H);O===void 0&&(O=new WeakMap,l.set(H,O));let Z=O.get(S);Z===void 0&&(Z=i.getUniformBlockIndex(H,S.name),O.set(S,Z))}function Fe(S,H){const Z=l.get(H).get(S);c.get(H)!==Z&&(i.uniformBlockBinding(H,Z,S.__bindingPointIndex),c.set(H,Z))}function I(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,re={},h={},f=new WeakMap,v=[],M=null,m=!1,p=null,b=null,w=null,x=null,A=null,E=null,C=null,_=new et(0,0,0),T=0,L=!1,U=null,k=null,q=null,D=null,z=null,nt.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ye,bindFramebuffer:He,drawBuffers:Ee,useProgram:Pe,setBlending:ce,setMaterial:he,setFlipSided:de,setCullFace:ve,setLineWidth:Oe,setPolygonOffset:ze,setScissorTest:Ge,activeTexture:qe,bindTexture:N,unbindTexture:lt,compressedTexImage2D:Je,compressedTexImage3D:R,texImage2D:Q,texImage3D:ne,pixelStorei:ke,getParameter:pe,updateUBOMapping:Ue,uniformBlockBinding:Fe,texStorage2D:fe,texStorage3D:_e,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:me,viewport:xe,reset:I}}function gv(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,g){return v?new OffscreenCanvas(R,g):Ds("canvas")}function m(R,g,B){let W=1;const $=Je(R);if(($.width>B||$.height>B)&&(W=B/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const fe=Math.floor(W*$.width),_e=Math.floor(W*$.height);h===void 0&&(h=M(fe,_e));const Q=g?M(fe,_e):h;return Q.width=fe,Q.height=_e,Q.getContext("2d").drawImage(R,0,0,fe,_e),Ve("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+fe+"x"+_e+")."),Q}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,g,B,W,$,fe=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let _e;W&&(_e=e.get("EXT_texture_norm16"),_e||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=g;if(g===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8),B===i.UNSIGNED_SHORT&&_e&&(Q=_e.R16_EXT),B===i.SHORT&&_e&&(Q=_e.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),g===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8),B===i.UNSIGNED_SHORT&&_e&&(Q=_e.RG16_EXT),B===i.SHORT&&_e&&(Q=_e.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&_e&&(Q=_e.RGB16_EXT),B===i.SHORT&&_e&&(Q=_e.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),g===i.RGBA){const ne=fe?Ps:rt.getTransfer($);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=ne===ut?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&_e&&(Q=_e.RGBA16_EXT),B===i.SHORT&&_e&&(Q=_e.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function A(R,g){let B;return R?g===null||g===En||g===Ar?B=i.DEPTH24_STENCIL8:g===Mn?B=i.DEPTH32F_STENCIL8:g===Tr&&(B=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===En||g===Ar?B=i.DEPTH_COMPONENT24:g===Mn?B=i.DEPTH_COMPONENT32F:g===Tr&&(B=i.DEPTH_COMPONENT16),B}function E(R,g){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ft&&R.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?g.mipmaps.length:1}function C(R){const g=R.target;g.removeEventListener("dispose",C),T(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function _(R){const g=R.target;g.removeEventListener("dispose",_),U(g)}function T(R){const g=n.get(R);if(g.__webglInit===void 0)return;const B=R.source,W=f.get(B);if(W){const $=W[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&L(R),Object.keys(W).length===0&&f.delete(B)}n.remove(R)}function L(R){const g=n.get(R);i.deleteTexture(g.__webglTexture);const B=R.source,W=f.get(B);delete W[g.__cacheKey],a.memory.textures--}function U(R){const g=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let $=0;$<g.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[W][$]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=R.textures;for(let W=0,$=B.length;W<$;W++){const fe=n.get(B[W]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(R)}let k=0;function q(){k=0}function D(){return k}function z(R){k=R}function j(){const R=k;return R>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,R}function X(R){const g=[];return g.push(R.wrapS),g.push(R.wrapT),g.push(R.wrapR||0),g.push(R.magFilter),g.push(R.minFilter),g.push(R.anisotropy),g.push(R.internalFormat),g.push(R.format),g.push(R.type),g.push(R.generateMipmaps),g.push(R.premultiplyAlpha),g.push(R.flipY),g.push(R.unpackAlignment),g.push(R.colorSpace),g.join()}function ae(R,g){const B=n.get(R);if(R.isVideoTexture&&N(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const W=R.image;if(W===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,R,g);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function Y(R,g){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ye(B,R,g);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function ee(R,g){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ye(B,R,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function re(R,g){const B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){He(B,R,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const Ne={[Ia]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},Ce={[Ft]:i.NEAREST,[Dh]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[qs]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},nt={[Fh]:i.NEVER,[Hh]:i.ALWAYS,[Oh]:i.LESS,[Io]:i.LEQUAL,[kh]:i.EQUAL,[No]:i.GEQUAL,[Bh]:i.GREATER,[zh]:i.NOTEQUAL};function Ke(R,g){if(g.type===Mn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===zt||g.magFilter===qs||g.magFilter===zr||g.magFilter===li||g.minFilter===zt||g.minFilter===qs||g.minFilter===zr||g.minFilter===li)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ne[g.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ne[g.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ne[g.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ce[g.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ce[g.minFilter]),g.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,nt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ft||g.minFilter!==zr&&g.minFilter!==li||g.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function it(R,g){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,g.addEventListener("dispose",C));const W=g.source;let $=f.get(W);$===void 0&&($={},f.set(W,$));const fe=X(g);if(fe!==R.__cacheKey){$[fe]===void 0&&($[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[fe].usedTimes++;const _e=$[R.__cacheKey];_e!==void 0&&($[R.__cacheKey].usedTimes--,_e.usedTimes===0&&L(g)),R.__cacheKey=fe,R.__webglTexture=$[fe].texture}return B}function J(R,g,B){return Math.floor(Math.floor(R/B)/g)}function ie(R,g,B,W){const fe=R.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,W,g.data);else{fe.sort((ke,me)=>ke.start-me.start);let _e=0;for(let ke=1;ke<fe.length;ke++){const me=fe[_e],xe=fe[ke],Ue=me.start+me.count,Fe=J(xe.start,g.width,4),I=J(me.start,g.width,4);xe.start<=Ue+1&&Fe===I&&J(xe.start+xe.count-1,g.width,4)===Fe?me.count=Math.max(me.count,xe.start+xe.count-me.start):(++_e,fe[_e]=xe)}fe.length=_e+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ke=0,me=fe.length;ke<me;ke++){const xe=fe[ke],Ue=Math.floor(xe.start/4),Fe=Math.ceil(xe.count/4),I=Ue%g.width,S=Math.floor(Ue/g.width),H=Fe,O=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,I),t.pixelStorei(i.UNPACK_SKIP_ROWS,S),t.texSubImage2D(i.TEXTURE_2D,0,I,S,H,O,B,W,g.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function ye(R,g,B){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);const $=it(R,g),fe=g.source;t.bindTexture(W,R.__webglTexture,i.TEXTURE0+B);const _e=n.get(fe);if(fe.version!==_e.__version||$===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const O=rt.getPrimaries(rt.workingColorSpace),Z=g.colorSpace===Zn?null:rt.getPrimaries(g.colorSpace),oe=g.colorSpace===Zn||O===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ne=m(g.image,!1,r.maxTextureSize);ne=lt(g,ne);const pe=s.convert(g.format,g.colorSpace),ke=s.convert(g.type);let me=x(g.internalFormat,pe,ke,g.normalized,g.colorSpace,g.isVideoTexture);Ke(W,g);let xe;const Ue=g.mipmaps,Fe=g.isVideoTexture!==!0,I=_e.__version===void 0||$===!0,S=fe.dataReady,H=E(g,ne);if(g.isDepthTexture)me=A(g.format===ci,g.type),I&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,me,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,me,ne.width,ne.height,0,pe,ke,null));else if(g.isDataTexture)if(Ue.length>0){Fe&&I&&t.texStorage2D(i.TEXTURE_2D,H,me,Ue[0].width,Ue[0].height);for(let O=0,Z=Ue.length;O<Z;O++)xe=Ue[O],Fe?S&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,xe.width,xe.height,pe,ke,xe.data):t.texImage2D(i.TEXTURE_2D,O,me,xe.width,xe.height,0,pe,ke,xe.data);g.generateMipmaps=!1}else Fe?(I&&t.texStorage2D(i.TEXTURE_2D,H,me,ne.width,ne.height),S&&ie(g,ne,pe,ke)):t.texImage2D(i.TEXTURE_2D,0,me,ne.width,ne.height,0,pe,ke,ne.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Fe&&I&&t.texStorage3D(i.TEXTURE_2D_ARRAY,H,me,Ue[0].width,Ue[0].height,ne.depth);for(let O=0,Z=Ue.length;O<Z;O++)if(xe=Ue[O],g.format!==fn)if(pe!==null)if(Fe){if(S)if(g.layerUpdates.size>0){const oe=Yl(xe.width,xe.height,g.format,g.type);for(const te of g.layerUpdates){const Se=xe.data.subarray(te*oe/xe.data.BYTES_PER_ELEMENT,(te+1)*oe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,te,xe.width,xe.height,1,pe,Se)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,xe.width,xe.height,ne.depth,pe,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,me,xe.width,xe.height,ne.depth,0,xe.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?S&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,xe.width,xe.height,ne.depth,pe,ke,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,O,me,xe.width,xe.height,ne.depth,0,pe,ke,xe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Fe&&I&&t.texStorage2D(i.TEXTURE_2D,H,me,Ue[0].width,Ue[0].height);for(let O=0,Z=Ue.length;O<Z;O++)xe=Ue[O],g.format!==fn?pe!==null?Fe?S&&t.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,xe.width,xe.height,pe,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,O,me,xe.width,xe.height,0,xe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?S&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,xe.width,xe.height,pe,ke,xe.data):t.texImage2D(i.TEXTURE_2D,O,me,xe.width,xe.height,0,pe,ke,xe.data)}else if(g.isDataArrayTexture)if(Fe){if(I&&t.texStorage3D(i.TEXTURE_2D_ARRAY,H,me,ne.width,ne.height,ne.depth),S)if(g.layerUpdates.size>0){const O=Yl(ne.width,ne.height,g.format,g.type);for(const Z of g.layerUpdates){const oe=ne.data.subarray(Z*O/ne.data.BYTES_PER_ELEMENT,(Z+1)*O/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,pe,ke,oe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,ke,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ne.width,ne.height,ne.depth,0,pe,ke,ne.data);else if(g.isData3DTexture)Fe?(I&&t.texStorage3D(i.TEXTURE_3D,H,me,ne.width,ne.height,ne.depth),S&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,ke,ne.data)):t.texImage3D(i.TEXTURE_3D,0,me,ne.width,ne.height,ne.depth,0,pe,ke,ne.data);else if(g.isFramebufferTexture){if(I)if(Fe)t.texStorage2D(i.TEXTURE_2D,H,me,ne.width,ne.height);else{let O=ne.width,Z=ne.height;for(let oe=0;oe<H;oe++)t.texImage2D(i.TEXTURE_2D,oe,me,O,Z,0,pe,ke,null),O>>=1,Z>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const O=i.canvas;if(O.hasAttribute("layoutsubtree")||O.setAttribute("layoutsubtree","true"),ne.parentNode!==O){O.appendChild(ne),d.add(g),O.onpaint=Z=>{const oe=Z.changedElements;for(const te of d)oe.includes(te.image)&&(te.needsUpdate=!0)},O.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{const oe=i.RGBA,te=i.RGBA,Se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,oe,te,Se,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Fe&&I){const O=Je(Ue[0]);t.texStorage2D(i.TEXTURE_2D,H,me,O.width,O.height)}for(let O=0,Z=Ue.length;O<Z;O++)xe=Ue[O],Fe?S&&t.texSubImage2D(i.TEXTURE_2D,O,0,0,pe,ke,xe):t.texImage2D(i.TEXTURE_2D,O,me,pe,ke,xe);g.generateMipmaps=!1}else if(Fe){if(I){const O=Je(ne);t.texStorage2D(i.TEXTURE_2D,H,me,O.width,O.height)}S&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,ke,ne)}else t.texImage2D(i.TEXTURE_2D,0,me,pe,ke,ne);p(g)&&b(W),_e.__version=fe.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function He(R,g,B){if(g.image.length!==6)return;const W=it(R,g),$=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);const fe=n.get($);if($.version!==fe.__version||W===!0){t.activeTexture(i.TEXTURE0+B);const _e=rt.getPrimaries(rt.workingColorSpace),Q=g.colorSpace===Zn?null:rt.getPrimaries(g.colorSpace),ne=g.colorSpace===Zn||_e===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const pe=g.isCompressedTexture||g.image[0].isCompressedTexture,ke=g.image[0]&&g.image[0].isDataTexture,me=[];for(let te=0;te<6;te++)!pe&&!ke?me[te]=m(g.image[te],!0,r.maxCubemapSize):me[te]=ke?g.image[te].image:g.image[te],me[te]=lt(g,me[te]);const xe=me[0],Ue=s.convert(g.format,g.colorSpace),Fe=s.convert(g.type),I=x(g.internalFormat,Ue,Fe,g.normalized,g.colorSpace),S=g.isVideoTexture!==!0,H=fe.__version===void 0||W===!0,O=$.dataReady;let Z=E(g,xe);Ke(i.TEXTURE_CUBE_MAP,g);let oe;if(pe){S&&H&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,I,xe.width,xe.height);for(let te=0;te<6;te++){oe=me[te].mipmaps;for(let Se=0;Se<oe.length;Se++){const Ae=oe[Se];g.format!==fn?Ue!==null?S?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,Ae.width,Ae.height,Ue,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,I,Ae.width,Ae.height,0,Ae.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,Ae.width,Ae.height,Ue,Fe,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,I,Ae.width,Ae.height,0,Ue,Fe,Ae.data)}}}else{if(oe=g.mipmaps,S&&H){oe.length>0&&Z++;const te=Je(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,I,te.width,te.height)}for(let te=0;te<6;te++)if(ke){S?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,me[te].width,me[te].height,Ue,Fe,me[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,I,me[te].width,me[te].height,0,Ue,Fe,me[te].data);for(let Se=0;Se<oe.length;Se++){const tt=oe[Se].image[te].image;S?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,tt.width,tt.height,Ue,Fe,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,I,tt.width,tt.height,0,Ue,Fe,tt.data)}}else{S?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,Fe,me[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,I,Ue,Fe,me[te]);for(let Se=0;Se<oe.length;Se++){const Ae=oe[Se];S?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,Ue,Fe,Ae.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,I,Ue,Fe,Ae.image[te])}}}p(g)&&b(i.TEXTURE_CUBE_MAP),fe.__version=$.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function Ee(R,g,B,W,$,fe){const _e=s.convert(B.format,B.colorSpace),Q=s.convert(B.type),ne=x(B.internalFormat,_e,Q,B.normalized,B.colorSpace),pe=n.get(g),ke=n.get(B);if(ke.__renderTarget=g,!pe.__hasExternalTextures){const me=Math.max(1,g.width>>fe),xe=Math.max(1,g.height>>fe);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,fe,ne,me,xe,g.depth,0,_e,Q,null):t.texImage2D($,fe,ne,me,xe,0,_e,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),qe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,ke.__webglTexture,0,Ge(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,ke.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(R,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),g.depthBuffer){const W=g.depthTexture,$=W&&W.isDepthTexture?W.type:null,fe=A(g.stencilBuffer,$),_e=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(g),fe,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(g),fe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,fe,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,R)}else{const W=g.textures;for(let $=0;$<W.length;$++){const fe=W[$],_e=s.convert(fe.format,fe.colorSpace),Q=s.convert(fe.type),ne=x(fe.internalFormat,_e,Q,fe.normalized,fe.colorSpace);qe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(g),ne,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(g),ne,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ne,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(R,g,B){const W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(g.depthTexture);if($.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,g.depthTexture);const pe=s.convert(g.depthTexture.format),ke=s.convert(g.depthTexture.type);let me;g.depthTexture.format===zn?me=i.DEPTH_COMPONENT24:g.depthTexture.format===ci&&(me=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,me,g.width,g.height,0,pe,ke,null)}}else ae(g.depthTexture,0);const fe=$.__webglTexture,_e=Ge(g),Q=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ne=g.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===zn)qe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,fe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,fe,0);else if(g.depthTexture.format===ci)qe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,fe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(R){const g=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=W}if(R.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)at(g.__webglFramebuffer[W],R,W);else{const W=R.texture.mipmaps;W&&W.length>0?at(g.__webglFramebuffer[0],R,0):at(g.__webglFramebuffer,R,0)}else if(B){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Pe(g.__webglDepthbuffer[W],R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,fe)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Pe(g.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(R,g,B){const W=n.get(R);g!==void 0&&Ee(W.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&se(R)}function he(R){const g=R.texture,B=n.get(R),W=n.get(g);R.addEventListener("dispose",_);const $=R.textures,fe=R.isWebGLCubeRenderTarget===!0,_e=$.length>1;if(_e||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),fe){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let ne=0;ne<g.mipmaps.length;ne++)B.__webglFramebuffer[Q][ne]=i.createFramebuffer()}else B.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)B.__webglFramebuffer[Q]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(_e)for(let Q=0,ne=$.length;Q<ne;Q++){const pe=n.get($[Q]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&qe(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){const ne=$[Q];B.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);const pe=s.convert(ne.format,ne.colorSpace),ke=s.convert(ne.type),me=x(ne.internalFormat,pe,ke,ne.normalized,ne.colorSpace,R.isXRRenderTarget===!0),xe=Ge(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,g);for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0)for(let ne=0;ne<g.mipmaps.length;ne++)Ee(B.__webglFramebuffer[Q][ne],R,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else Ee(B.__webglFramebuffer[Q],R,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(g)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let Q=0,ne=$.length;Q<ne;Q++){const pe=$[Q],ke=n.get(pe);let me=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,ke.__webglTexture),Ke(me,pe),Ee(B.__webglFramebuffer,R,pe,i.COLOR_ATTACHMENT0+Q,me,0),p(pe)&&b(me)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,W.__webglTexture),Ke(Q,g),g.mipmaps&&g.mipmaps.length>0)for(let ne=0;ne<g.mipmaps.length;ne++)Ee(B.__webglFramebuffer[ne],R,g,i.COLOR_ATTACHMENT0,Q,ne);else Ee(B.__webglFramebuffer,R,g,i.COLOR_ATTACHMENT0,Q,0);p(g)&&b(Q),t.unbindTexture()}R.depthBuffer&&se(R)}function de(R){const g=R.textures;for(let B=0,W=g.length;B<W;B++){const $=g[B];if(p($)){const fe=w(R),_e=n.get($).__webglTexture;t.bindTexture(fe,_e),b(fe),t.unbindTexture()}}}const ve=[],Oe=[];function ze(R){if(R.samples>0){if(qe(R)===!1){const g=R.textures,B=R.width,W=R.height;let $=i.COLOR_BUFFER_BIT;const fe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(R),Q=g.length>1;if(Q)for(let pe=0;pe<g.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const ne=R.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);const ke=n.get(g[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,$,i.NEAREST),c===!0&&(ve.length=0,Oe.length=0,ve.push(i.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ve.push(fe),Oe.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let pe=0;pe<g.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);const ke=n.get(g[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const g=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Ge(R){return Math.min(r.maxSamples,R.samples)}function qe(R){const g=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(R){const g=a.render.frame;u.get(R)!==g&&(u.set(R,g),R.update())}function lt(R,g){const B=R.colorSpace,W=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ls&&B!==Zn&&(rt.getTransfer(B)===ut?(W!==fn||$!==jt)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",B)),g}function Je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=ae,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=re,this.rebindTextures=ce,this.setupRenderTarget=he,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vv(i,e){function t(n,r=Zn){let s;const a=rt.getTransfer(r);if(n===jt)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vc)return i.BYTE;if(n===Wc)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===fn)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===Po)return i.RG_INTEGER;if(n===Do)return i.RGBA_INTEGER;if(n===_s||n===xs||n===ys||n===Ms)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Oa||n===ka)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===za||n===Ha||n===Ga||n===Va||n===Rs||n===Wa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ba||n===za)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ga)return s.COMPRESSED_R11_EAC;if(n===Va)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Rs)return s.COMPRESSED_RG11_EAC;if(n===Wa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qa||n===Xa||n===Ka||n===Ya||n===$a||n===Za||n===Ja||n===Qa||n===ja||n===eo||n===to||n===no||n===io||n===ro)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===ao||n===oo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===so)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lo||n===co||n===Cs||n===uo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===co)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const _v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new iu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tn({vertexShader:_v,fragmentShader:xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mv extends vi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,v=null;const M=typeof XRWebGLBinding<"u",m=new yv,p={},b=t.getContextAttributes();let w=null,x=null;const A=[],E=[],C=new Me;let _=null,T=null;const L=new rn;L.viewport=new vt;const U=new rn;U.viewport=new vt;const k=[L,U],q=new Rf;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=A[J];return ie===void 0&&(ie=new Qs,A[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=A[J];return ie===void 0&&(ie=new Qs,A[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=A[J];return ie===void 0&&(ie=new Qs,A[J]=ie),ie.getHandSpace()};function j(J){const ie=E.indexOf(J.inputSource);if(ie===-1)return;const ye=A[ie];ye!==void 0&&(ye.update(J.inputSource,J.frame,l||a),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ae);for(let J=0;J<A.length;J++){const ie=E[J];ie!==null&&(E[J]=null,A[J].disconnect(ie))}D=null,z=null,m.reset();for(const J in p)delete p[J];if(e.setRenderTarget(w),f=null,h=null,d=null,r=null,x=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),T!==null){const J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,He=null,Ee=null;b.depth&&(Ee=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=b.stencil?ci:zn,He=b.stencil?Ar:En);const Pe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new pn(h.textureWidth,h.textureHeight,{format:fn,type:jt,depthTexture:new Lr(h.textureWidth,h.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new pn(f.framebufferWidth,f.framebufferHeight,{format:fn,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(J){for(let ie=0;ie<J.removed.length;ie++){const ye=J.removed[ie],He=E.indexOf(ye);He>=0&&(E[He]=null,A[He].disconnect(ye))}for(let ie=0;ie<J.added.length;ie++){const ye=J.added[ie];let He=E.indexOf(ye);if(He===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=E.length){E.push(ye),He=Pe;break}else if(E[Pe]===null){E[Pe]=ye,He=Pe;break}if(He===-1)break}const Ee=A[He];Ee&&Ee.connect(ye)}}const Y=new P,ee=new P;function re(J,ie,ye){Y.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);const He=Y.distanceTo(ee),Ee=ie.projectionMatrix.elements,Pe=ye.projectionMatrix.elements,at=Ee[14]/(Ee[10]-1),se=Ee[14]/(Ee[10]+1),ce=(Ee[9]+1)/Ee[5],he=(Ee[9]-1)/Ee[5],de=(Ee[8]-1)/Ee[0],ve=(Pe[8]+1)/Pe[0],Oe=at*de,ze=at*ve,Ge=He/(-de+ve),qe=Ge*-de;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qe),J.translateZ(Ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ee[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const N=at+Ge,lt=se+Ge,Je=Oe-qe,R=ze+(He-qe),g=ce*se/lt*N,B=he*se/lt*N;J.projectionMatrix.makePerspective(Je,R,g,B,N,lt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ne(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ie=J.near,ye=J.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),q.near=U.near=L.near=ie,q.far=U.far=L.far=ye,(D!==q.near||z!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),D=q.near,z=q.far),q.layers.mask=J.layers.mask|6,L.layers.mask=q.layers.mask&-5,U.layers.mask=q.layers.mask&-3;const He=J.parent,Ee=q.cameras;Ne(q,He);for(let Pe=0;Pe<Ee.length;Pe++)Ne(Ee[Pe],He);Ee.length===2?re(q,L,U):q.projectionMatrix.copy(L.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Ce(J,q,He)};function Ce(J,ie,ye){ye===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Cr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(J){return p[J]};let nt=null;function Ke(J,ie){if(u=ie.getViewerPose(l||a),v=ie,u!==null){const ye=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let He=!1;ye.length!==q.cameras.length&&(q.cameras.length=0,He=!0);for(let se=0;se<ye.length;se++){const ce=ye[se];let he=null;if(f!==null)he=f.getViewport(ce);else{const ve=d.getViewSubImage(h,ce);he=ve.viewport,se===0&&(e.setRenderTargetTextures(x,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(x))}let de=k[se];de===void 0&&(de=new rn,de.layers.enable(se),de.viewport=new vt,k[se]=de),de.matrix.fromArray(ce.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ce.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(he.x,he.y,he.width,he.height),se===0&&(q.matrix.copy(de.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),He===!0&&q.cameras.push(de)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const se=d.getDepthInformation(ye[0]);se&&se.isValid&&se.texture&&m.init(se,r.renderState)}if(Ee&&Ee.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let se=0;se<ye.length;se++){const ce=ye[se].camera;if(ce){let he=p[ce];he||(he=new iu,p[ce]=he);const de=d.getCameraImage(ce);he.sourceTexture=de}}}}for(let ye=0;ye<A.length;ye++){const He=E[ye],Ee=A[ye];He!==null&&Ee!==void 0&&Ee.update(He,ie,l||a)}nt&&nt(J,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),v=null}const it=new vu;it.setAnimationLoop(Ke),this.setAnimationLoop=function(J){nt=J},this.dispose=function(){}}}const Sv=new mt,Eu=new Xe;Eu.set(-1,0,0,0,1,0,0,0,1);function bv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,w,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,x=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Eu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ev(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,A){const E=A.program;n.uniformBlockBinding(x,E)}function l(x,A){let E=r[x.id];E===void 0&&(m(x),E=u(x),r[x.id]=E,x.addEventListener("dispose",b));const C=A.program;n.updateUBOMapping(x,C);const _=e.render.frame;s[x.id]!==_&&(h(x),s[x.id]=_)}function u(x){const A=d();x.__bindingPointIndex=A;const E=i.createBuffer(),C=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const A=r[x.id],E=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,T=E.length;_<T;_++){const L=E[_];if(Array.isArray(L))for(let U=0,k=L.length;U<k;U++)f(L[U],_,U,C);else f(L,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,A,E,C){if(M(x,A,E,C)===!0){const _=x.__offset,T=x.value;if(Array.isArray(T)){let L=0;for(let U=0;U<T.length;U++){const k=T[U],q=p(k);v(k,x.__data,L),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function v(x,A,E){typeof x=="number"||typeof x=="boolean"?A[0]=x:x.isMatrix3?(A[0]=x.elements[0],A[1]=x.elements[1],A[2]=x.elements[2],A[3]=0,A[4]=x.elements[3],A[5]=x.elements[4],A[6]=x.elements[5],A[7]=0,A[8]=x.elements[6],A[9]=x.elements[7],A[10]=x.elements[8],A[11]=0):ArrayBuffer.isView(x)?A.set(new x.constructor(x.buffer,x.byteOffset,A.length)):x.toArray(A,E)}function M(x,A,E,C){const _=x.value,T=A+"_"+E;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{const L=C[T];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function m(x){const A=x.uniforms;let E=0;const C=16;for(let T=0,L=A.length;T<L;T++){const U=Array.isArray(A[T])?A[T]:[A[T]];for(let k=0,q=U.length;k<q;k++){const D=U[k],z=Array.isArray(D.value)?D.value:[D.value];for(let j=0,X=z.length;j<X;j++){const ae=z[j],Y=p(ae),ee=E%C,re=ee%Y.boundary,Ne=ee+re;E+=re,Ne!==0&&C-Ne<Y.storage&&(E+=C-Ne),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=Y.storage}}}const _=E%C;return _>0&&(E+=C-_),x.__size=E,x.__cache={},this}function p(x){const A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(A.boundary=16,A.storage=x.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",x),A}function b(x){const A=x.target;A.removeEventListener("dispose",b);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function w(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:w}}const wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vn=null;function Tv(){return vn===null&&(vn=new Ld(wv,16,16,pi,wn),vn.name="DFG_LUT",vn.minFilter=zt,vn.magFilter=zt,vn.wrapS=Un,vn.wrapT=Un,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class Av{constructor(e={}){const{canvas:t=Wh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=jt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const M=f,m=new Set([Do,Po,Lo]),p=new Set([jt,En,Tr,Ar,Ro,Co]),b=new Uint32Array(4),w=new Int32Array(4),x=new P;let A=null,E=null;const C=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,k=null,q=null,D=null,z=null;this._outputColorSpace=Kt;let j=0,X=0,ae=null,Y=-1,ee=null;const re=new vt,Ne=new vt;let Ce=null;const nt=new et(0);let Ke=0,it=t.width,J=t.height,ie=1,ye=null,He=null;const Ee=new vt(0,0,it,J),Pe=new vt(0,0,it,J);let at=!1;const se=new zo;let ce=!1,he=!1;const de=new mt,ve=new P,Oe=new vt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function qe(){return ae===null?ie:1}let N=n;function lt(y,F){return t.getContext(y,F)}let Je,R,g,B,W,$,fe,_e,Q,ne,pe,ke,me,xe,Ue,Fe,I,S,H,O,Z,oe,te;try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${To}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",Ut,!1),N===null){const F="webgl2";if(N=lt(F,y),N===null)throw lt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Se()}catch(y){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Ut,!1),st("WebGLRenderer: "+y.message),y}function Se(){Je=new Tg(N),Je.init(),Z=new vv(N,Je),R=new gg(N,Je,e,Z),g=new mv(N,Je),R.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),q=N.createFramebuffer(),D=N.createFramebuffer(),z=N.createFramebuffer(),B=new Cg(N),W=new tv,$=new gv(N,Je,g,W,R,Z,B),fe=new wg(L),_e=new Pf(N),oe=new pg(N,_e),Q=new Ag(N,_e,B,oe),ne=new Pg(N,Q,_e,oe,B),S=new Lg(N,R,$),Ue=new vg(W),pe=new ev(L,fe,Je,R,oe,Ue),ke=new bv(L,W),me=new iv,xe=new cv(Je),I=new fg(L,fe,g,ne,v,c),Fe=new pv(L,ne,R),te=new Ev(N,B,R,g),H=new mg(N,Je,B),O=new Rg(N,Je,B),B.programs=pe.programs,L.capabilities=R,L.extensions=Je,L.properties=W,L.renderLists=me,L.shadowMap=Fe,L.state=g,L.info=B}M!==jt&&(T=new Ig(M,t.width,t.height,o,r,s));const Ae=new Mv(L,N);this.xr=Ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(it,J,!1))},this.getSize=function(y){return y.set(it,J)},this.setSize=function(y,F,K=!0){if(Ae.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}it=y,J=F,t.width=Math.floor(y*ie),t.height=Math.floor(F*ie),K===!0&&(t.style.width=y+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(it*ie,J*ie).floor()},this.setDrawingBufferSize=function(y,F,K){it=y,J=F,ie=K,t.width=Math.floor(y*K),t.height=Math.floor(F*K),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(M===jt){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(re)},this.getViewport=function(y){return y.copy(Ee)},this.setViewport=function(y,F,K,G){y.isVector4?Ee.set(y.x,y.y,y.z,y.w):Ee.set(y,F,K,G),g.viewport(re.copy(Ee).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy(Pe)},this.setScissor=function(y,F,K,G){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,F,K,G),g.scissor(Ne.copy(Pe).multiplyScalar(ie).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(y){g.setScissorTest(at=y)},this.setOpaqueSort=function(y){ye=y},this.setTransparentSort=function(y){He=y},this.getClearColor=function(y){return y.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,K=!0){let G=0;if(y){let V=!1;if(ae!==null){const Te=ae.texture.format;V=m.has(Te)}if(V){const Te=ae.texture.type,Le=p.has(Te),we=I.getClearColor(),De=I.getClearAlpha(),Be=we.r,$e=we.g,je=we.b;Le?(b[0]=Be,b[1]=$e,b[2]=je,b[3]=De,N.clearBufferuiv(N.COLOR,0,b)):(w[0]=Be,w[1]=$e,w[2]=je,w[3]=De,N.clearBufferiv(N.COLOR,0,w))}else G|=N.COLOR_BUFFER_BIT}F&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Ut,!1),I.dispose(),me.dispose(),xe.dispose(),W.dispose(),fe.dispose(),ne.dispose(),oe.dispose(),te.dispose(),pe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",yt),Ae.removeEventListener("sessionend",gt),Zt.stop()};function tt(y){y.preventDefault(),fl("WebGLRenderer: Context Lost."),U=!0}function Ye(){fl("WebGLRenderer: Context Restored."),U=!1;const y=B.autoReset,F=Fe.enabled,K=Fe.autoUpdate,G=Fe.needsUpdate,V=Fe.type;Se(),B.autoReset=y,Fe.enabled=F,Fe.autoUpdate=K,Fe.needsUpdate=G,Fe.type=V}function Ut(y){st("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function wt(y){const F=y.target;F.removeEventListener("dispose",wt),ti(F)}function ti(y){xi(y),W.remove(y)}function xi(y){const F=W.get(y).programs;F!==void 0&&(F.forEach(function(K){pe.releaseProgram(K)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,K,G,V,Te){F===null&&(F=ze);const Le=V.isMesh&&V.matrixWorld.determinantAffine()<0,we=Lu(y,F,K,G,V);g.setMaterial(G,Le);let De=K.index,Be=1;if(G.wireframe===!0){if(De=Q.getWireframeAttribute(K),De===void 0)return;Be=2}const $e=K.drawRange,je=K.attributes.position;let Ie=$e.start*Be,ct=($e.start+$e.count)*Be;Te!==null&&(Ie=Math.max(Ie,Te.start*Be),ct=Math.min(ct,(Te.start+Te.count)*Be)),De!==null?(Ie=Math.max(Ie,0),ct=Math.min(ct,De.count)):je!=null&&(Ie=Math.max(Ie,0),ct=Math.min(ct,je.count));const bt=ct-Ie;if(bt<0||bt===1/0)return;oe.setup(V,G,we,K,De);let pt,dt=H;if(De!==null&&(pt=_e.get(De),dt=O,dt.setIndex(pt)),V.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*qe()),dt.setMode(N.LINES)):dt.setMode(N.TRIANGLES);else if(V.isLine){let Ot=G.linewidth;Ot===void 0&&(Ot=1),g.setLineWidth(Ot*qe()),V.isLineSegments?dt.setMode(N.LINES):V.isLineLoop?dt.setMode(N.LINE_LOOP):dt.setMode(N.LINE_STRIP)}else V.isPoints?dt.setMode(N.POINTS):V.isSprite&&dt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ot=V._multiDrawStarts,Re=V._multiDrawCounts,Vt=V._multiDrawCount,ot=De?_e.get(De).bytesPerElement:1,en=W.get(G).currentProgram.getUniforms();for(let mn=0;mn<Vt;mn++)en.setValue(N,"_gl_DrawID",mn),dt.render(Ot[mn]/ot,Re[mn])}else if(V.isInstancedMesh)dt.renderInstances(Ie,bt,V.count);else if(K.isInstancedBufferGeometry){const Ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Re=Math.min(K.instanceCount,Ot);dt.renderInstances(Ie,bt,Re)}else dt.render(Ie,bt)};function ni(y,F,K,G){k!==null&&y.isNodeMaterial&&k.setObject(G,y),ce===!0&&Ue.setState(y,K,!1),y.transparent===!0&&y.side===hn&&y.forceSinglePass===!1?(y.side=$t,y.needsUpdate=!0,Br(y,F,G),y.side=di,y.needsUpdate=!0,Br(y,F,G),y.side=hn):Br(y,F,G)}this.compile=function(y,F,K=null){K===null&&(K=y),k!==null&&k.renderStart(y,F,K),E=xe.get(K),E.init(F),_.push(E),K.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),y!==K&&y.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),k!==null&&k.updateLights(E.state.lightsArray),he=this.localClippingEnabled,ce=Ue.init(this.clippingPlanes,he),ce===!0&&Ue.setGlobalState(this.clippingPlanes,F),k!==null&&Fe.render(E.state.shadowsArray,K,F);const G=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Te=V.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const we=Te[Le];ni(we,K,F,V),G.add(we)}else ni(Te,K,F,V),G.add(Te)}),E=_.pop(),k!==null&&k.renderEnd(),G},this.compileAsync=function(y,F,K=null){const G=this.compile(y,F,K);return new Promise(V=>{function Te(){if(G.forEach(function(Le){const De=W.get(Le).currentProgram;(De===void 0||De.isReady())&&G.delete(Le)}),G.size===0){V(y);return}setTimeout(Te,10)}Je.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Tt=null;function At(y){Tt&&Tt(y)}function yt(){Zt.stop()}function gt(){Zt.start()}const Zt=new vu;Zt.setAnimationLoop(At),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(y){Tt=y,Ae.setAnimationLoop(y),y===null?Zt.stop():Zt.start()},Ae.addEventListener("sessionstart",yt),Ae.addEventListener("sessionend",gt),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(y,F);const K=Ae.enabled===!0&&Ae.isPresenting===!0,G=T!==null&&(ae===null||K)&&T.begin(L,ae);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(F),F=Ae.getCamera()),y.isScene===!0&&y.onBeforeRender(L,y,F,ae),E=xe.get(y,_.length),E.init(F),E.state.textureUnits=$.getTextureUnits(),_.push(E),de.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),se.setFromProjectionMatrix(de,Sn,F.reversedDepth),he=this.localClippingEnabled,ce=Ue.init(this.clippingPlanes,he),A=me.get(y,C.length),A.init(),C.push(A),Ae.enabled===!0&&Ae.isPresenting===!0){const Le=L.xr.getDepthSensingMesh();Le!==null&&sr(Le,F,-1/0,L.sortObjects)}sr(y,F,0,L.sortObjects),A.finish(),k!==null&&k.updateLights(E.state.lightsArray),L.sortObjects===!0&&A.sort(ye,He),Ge=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Ge&&I.addToRenderList(A,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Ue.beginShadows();const V=E.state.shadowsArray;if(Fe.render(V,y,F),ce===!0&&Ue.endShadows(),(G&&T.hasRenderPass())===!1){const Le=A.opaque,we=A.transmissive;if(E.setupLights(),F.isArrayCamera){const De=F.cameras;if(we.length>0)for(let Be=0,$e=De.length;Be<$e;Be++){const je=De[Be];ar(Le,we,y,je)}Ge&&I.render(y);for(let Be=0,$e=De.length;Be<$e;Be++){const je=De[Be];yi(A,y,je,je.viewport)}}else we.length>0&&ar(Le,we,y,F),Ge&&I.render(y),yi(A,y,F)}ae!==null&&X===0&&($.updateMultisampleRenderTarget(ae),$.updateRenderTargetMipmap(ae)),G&&T.end(L),y.isScene===!0&&y.onAfterRender(L,y,F),oe.resetDefaultState(),Y=-1,ee=null,_.pop(),_.length>0?(E=_[_.length-1],$.setTextureUnits(E.state.textureUnits),ce===!0&&Ue.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,k!==null&&k.renderEnd()};function sr(y,F,K,G){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)K=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(se)){G&&Oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(de);const Le=ne.update(y),we=y.material;we.visible&&A.push(y,Le,we,K,Oe.z,null,F)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(se))){const Le=ne.update(y),we=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Oe.copy(y.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Oe.copy(Le.boundingSphere.center)),Oe.applyMatrix4(y.matrixWorld).applyMatrix4(de)),Array.isArray(we)){const De=Le.groups;for(let Be=0,$e=De.length;Be<$e;Be++){const je=De[Be],Ie=we[je.materialIndex];Ie&&Ie.visible&&A.push(y,Le,Ie,K,Oe.z,je,F)}}else we.visible&&A.push(y,Le,we,K,Oe.z,null,F)}}const Te=y.children;for(let Le=0,we=Te.length;Le<we;Le++)sr(Te[Le],F,K,G)}function yi(y,F,K,G){const{opaque:V,transmissive:Te,transparent:Le}=y;E.setupLightsView(K),ce===!0&&Ue.setGlobalState(L.clippingPlanes,K),G&&g.viewport(re.copy(G)),V.length>0&&kr(V,F,K),Te.length>0&&kr(Te,F,K),Le.length>0&&kr(Le,F,K),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ar(y,F,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const Ie=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new pn(1,1,{generateMipmaps:!0,type:Ie?wn:jt,minFilter:li,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Te=E.state.transmissionRenderTarget[G.id],Le=G.viewport||re;Te.setSize(Le.z*L.transmissionResolutionScale,Le.w*L.transmissionResolutionScale);const we=L.getRenderTarget(),De=L.getActiveCubeFace(),Be=L.getActiveMipmapLevel();L.setRenderTarget(Te),L.getClearColor(nt),Ke=L.getClearAlpha(),Ke<1&&L.setClearColor(16777215,.5),L.clear(),Ge&&I.render(K);const $e=L.toneMapping;L.toneMapping=bn;const je=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),ce===!0&&Ue.setGlobalState(L.clippingPlanes,G),kr(y,K,G),$.updateMultisampleRenderTarget(Te),$.updateRenderTargetMipmap(Te),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ct=0,bt=F.length;ct<bt;ct++){const pt=F[ct],{object:dt,geometry:Ot,material:Re,group:Vt}=pt;if(Re.side===hn&&dt.layers.test(G.layers)){const ot=Re.side;Re.side=$t,Re.needsUpdate=!0,nl(dt,K,G,Ot,Re,Vt),Re.side=ot,Re.needsUpdate=!0,Ie=!0}}Ie===!0&&($.updateMultisampleRenderTarget(Te),$.updateRenderTargetMipmap(Te))}L.setRenderTarget(we,De,Be),L.setClearColor(nt,Ke),je!==void 0&&(G.viewport=je),L.toneMapping=$e}function kr(y,F,K){const G=F.isScene===!0?F.overrideMaterial:null;for(let V=0,Te=y.length;V<Te;V++){const Le=y[V],{object:we,geometry:De,group:Be}=Le;let $e=Le.material;$e.allowOverride===!0&&G!==null&&($e=G),we.layers.test(K.layers)&&nl(we,F,K,De,$e,Be)}}function nl(y,F,K,G,V,Te){k!==null&&V.isNodeMaterial&&k.setObject(y,V),y.onBeforeRender(L,F,K,G,V,Te),y.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(L,F,K,G,y,Te),V.transparent===!0&&V.side===hn&&V.forceSinglePass===!1?(V.side=$t,V.needsUpdate=!0,L.renderBufferDirect(K,F,G,V,y,Te),V.side=di,V.needsUpdate=!0,L.renderBufferDirect(K,F,G,V,y,Te),V.side=hn):L.renderBufferDirect(K,F,G,V,y,Te),y.onAfterRender(L,F,K,G,V,Te)}function Br(y,F,K){F.isScene!==!0&&(F=ze);const G=W.get(y),V=E.state.lights,Te=E.state.shadowsArray,Le=V.state.version,we=pe.getParameters(y,V.state,Te,F,K,E.state.lightProbeGridArray),De=pe.getProgramCacheKey(we);let Be=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const $e=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=fe.get(y.envMap||G.environment,$e),G.envMapRotation=G.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Be===void 0&&(y.addEventListener("dispose",wt),Be=new Map,G.programs=Be);let je=Be.get(De);if(je!==void 0){if(G.currentProgram===je&&G.lightsStateVersion===Le)return rl(y,we),je}else we.uniforms=pe.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,K,we),y.onBeforeCompile(we,L),je=pe.acquireProgram(we,De),Be.set(De,je),G.uniforms=we.uniforms;const Ie=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=Ue.uniform),rl(y,we),G.needsLights=Du(y),G.lightsStateVersion=Le,G.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.sunLights.value=V.state.sun,Ie.sunLightShadows.value=V.state.sunShadow,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.sunShadowMatrix.value=V.state.sunShadowMatrix,Ie.sunShadowCascade.value=V.state.sunShadowCascade,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=je,G.uniformsList=null,je}function il(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Ss.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function rl(y,F){const K=W.get(y);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Cu(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let K=0,G=y.length;K<G;K++){const V=y[K];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function Lu(y,F,K,G,V){F.isScene!==!0&&(F=ze),$.resetTextureUnits();const Te=F.fog,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,we=ae===null?L.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:rt.workingColorSpace,De=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Be=fe.get(G.envMap||Le,De),$e=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,je=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!K.morphAttributes.position,ct=!!K.morphAttributes.normal,bt=!!K.morphAttributes.color;let pt=bn;G.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(pt=L.toneMapping);const dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ot=dt!==void 0?dt.length:0,Re=W.get(G),Vt=E.state.lights;if(ce===!0&&(he===!0||y!==ee)){const ft=y===ee&&G.id===Y;Ue.setState(G,y,ft)}let ot=!1;G.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Vt.state.version||Re.outputColorSpace!==we||V.isBatchedMesh&&Re.batching===!1||!V.isBatchedMesh&&Re.batching===!0||V.isBatchedMesh&&Re.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Re.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Re.instancing===!1||!V.isInstancedMesh&&Re.instancing===!0||V.isSkinnedMesh&&Re.skinning===!1||!V.isSkinnedMesh&&Re.skinning===!0||V.isInstancedMesh&&Re.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Re.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Re.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Re.instancingMorph===!1&&V.morphTexture!==null||Re.envMap!==Be||G.fog===!0&&Re.fog!==Te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ue.numPlanes||Re.numIntersection!==Ue.numIntersection)||Re.vertexAlphas!==$e||Re.vertexTangents!==je||Re.morphTargets!==Ie||Re.morphNormals!==ct||Re.morphColors!==bt||Re.toneMapping!==pt||Re.morphTargetsCount!==Ot||!!Re.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Re.__version=G.version);let en=Re.currentProgram;ot===!0&&(en=Br(G,F,V),k&&G.isNodeMaterial&&k.onUpdateProgram(G,en,Re));let mn=!1,Gn=!1,Mi=!1;const ht=en.getUniforms(),Mt=Re.uniforms;if(g.useProgram(en.program)&&(mn=!0,Gn=!0,Mi=!0),G.id!==Y&&(Y=G.id,Gn=!0),Re.needsLights){const ft=Cu(E.state.lightProbeGridArray,V);Re.lightProbeGrid!==ft&&(Re.lightProbeGrid=ft,Gn=!0)}if(mn||ee!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(N,"projectionMatrix",y.projectionMatrix),ht.setValue(N,"viewMatrix",y.matrixWorldInverse);const Wn=ht.map.cameraPosition;Wn!==void 0&&Wn.setValue(N,ve.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&ht.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),ee!==y&&(ee=y,Gn=!0,Mi=!0)}if(Re.needsLights&&(Vt.state.sunShadowMap.length>0&&ht.setValue(N,"sunShadowMap",Vt.state.sunShadowMap,$),Vt.state.directionalShadowMap.length>0&&ht.setValue(N,"directionalShadowMap",Vt.state.directionalShadowMap,$),Vt.state.spotShadowMap.length>0&&ht.setValue(N,"spotShadowMap",Vt.state.spotShadowMap,$),Vt.state.pointShadowMap.length>0&&ht.setValue(N,"pointShadowMap",Vt.state.pointShadowMap,$)),V.isSkinnedMesh){ht.setOptional(N,V,"bindMatrix"),ht.setOptional(N,V,"bindMatrixInverse");const ft=V.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ht.setValue(N,"boneTexture",ft.boneTexture,$))}V.isBatchedMesh&&(ht.setOptional(N,V,"batchingTexture"),ht.setValue(N,"batchingTexture",V._matricesTexture,$),ht.setOptional(N,V,"batchingIdTexture"),ht.setValue(N,"batchingIdTexture",V._indirectTexture,$),ht.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&ht.setValue(N,"batchingColorTexture",V._colorsTexture,$));const Vn=K.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&S.update(V,K,en),(Gn||Re.receiveShadow!==V.receiveShadow)&&(Re.receiveShadow=V.receiveShadow,ht.setValue(N,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Mt.envMapIntensity.value=F.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=Tv()),Gn){if(ht.setValue(N,"toneMappingExposure",L.toneMappingExposure),Re.needsLights&&Pu(Mt,Mi),Te&&G.fog===!0&&ke.refreshFogUniforms(Mt,Te),ke.refreshMaterialUniforms(Mt,G,ie,J,E.state.transmissionRenderTarget[y.id]),Re.needsLights&&Re.lightProbeGrid){const ft=Re.lightProbeGrid;Mt.probesSH.value=ft.texture,Mt.probesMin.value.copy(ft.boundingBox.min),Mt.probesMax.value.copy(ft.boundingBox.max),Mt.probesResolution.value.copy(ft.resolution)}Ss.upload(N,il(Re),Mt,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ss.upload(N,il(Re),Mt,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(N,"center",V.center),ht.setValue(N,"modelViewMatrix",V.modelViewMatrix),ht.setValue(N,"normalMatrix",V.normalMatrix),ht.setValue(N,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const ft=G.uniformsGroups;for(let Wn=0,Si=ft.length;Wn<Si;Wn++){const al=ft[Wn];te.update(al,en),te.bind(al,en)}}return en}function Pu(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.sunLights.needsUpdate=F,y.sunLightShadows.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Du(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(y,F,K){const G=W.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(y.texture).__webglTexture=F,W.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const K=W.get(y);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,K=0){ae=y,j=F,X=K;let G=null,V=!1,Te=!1;if(y){const we=W.get(y);if(we.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(N.FRAMEBUFFER,we.__webglFramebuffer),re.copy(y.viewport),Ne.copy(y.scissor),Ce=y.scissorTest,g.viewport(re),g.scissor(Ne),g.setScissorTest(Ce),Y=-1;return}else if(we.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(we.__hasExternalTextures)$.rebindTextures(y,W.get(y.texture).__webglTexture,W.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const $e=y.depthTexture;if(we.__boundDepthTexture!==$e){if($e!==null&&W.has($e)&&(y.width!==$e.image.width||y.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}const De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Te=!0);const Be=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?G=Be[F][K]:G=Be[F],V=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?G=W.get(y).__webglMultisampledFramebuffer:Array.isArray(Be)?G=Be[K]:G=Be,re.copy(y.viewport),Ne.copy(y.scissor),Ce=y.scissorTest}else re.copy(Ee).multiplyScalar(ie).floor(),Ne.copy(Pe).multiplyScalar(ie).floor(),Ce=at;if(K!==0&&(G=q),g.bindFramebuffer(N.FRAMEBUFFER,G)&&g.drawBuffers(y,G),g.viewport(re),g.scissor(Ne),g.setScissorTest(Ce),V){const we=W.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,K)}else if(Te){const we=F;for(let De=0;De<y.textures.length;De++){const Be=W.get(y.textures[De]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+De,Be.__webglTexture,K,we)}}else if(y!==null&&K!==0){const we=W.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,we.__webglTexture,K)}Y=-1};function sl(y){const F=W.get(y);return(F.__readFormat!==y.format||F.__readType!==y.type)&&(F.__readFormat=y.format,F.__readType=y.type,F.__formatReadable=R.textureFormatReadable(y.format),F.__typeReadable=R.textureTypeReadable(y.type)),F}this.readRenderTargetPixels=function(y,F,K,G,V,Te,Le,we=0){if(!(y&&y.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De){g.bindFramebuffer(N.FRAMEBUFFER,De);try{const Be=y.textures[we],$e=Be.format,je=Be.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we);const Ie=sl(Be);if(Ie.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-G&&K>=0&&K<=y.height-V&&N.readPixels(F,K,G,V,Z.convert($e),Z.convert(je),Te)}finally{const Be=ae!==null?W.get(ae).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(y,F,K,G,V,Te,Le,we=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De)if(F>=0&&F<=y.width-G&&K>=0&&K<=y.height-V){g.bindFramebuffer(N.FRAMEBUFFER,De);const Be=y.textures[we],$e=Be.format,je=Be.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we);const Ie=sl(Be);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.bufferData(N.PIXEL_PACK_BUFFER,Te.byteLength,N.STREAM_READ),N.readPixels(F,K,G,V,Z.convert($e),Z.convert(je),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const bt=ae!==null?W.get(ae).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,bt);const pt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await qh(N,pt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Te),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ct),N.deleteSync(pt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,K=0){const G=Math.pow(2,-K),V=Math.floor(y.image.width*G),Te=Math.floor(y.image.height*G),Le=F!==null?F.x:0,we=F!==null?F.y:0;$.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Le,we,V,Te),g.unbindTexture()},this.copyTextureToTexture=function(y,F,K=null,G=null,V=0,Te=0){let Le,we,De,Be,$e,je,Ie,ct,bt;const pt=y.isCompressedTexture?y.mipmaps[Te]:y.image;if(K!==null)Le=K.max.x-K.min.x,we=K.max.y-K.min.y,De=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,$e=K.min.y,je=K.isBox3?K.min.z:0;else{const Mt=Math.pow(2,-V);Le=Math.floor(pt.width*Mt),we=Math.floor(pt.height*Mt),y.isDataArrayTexture?De=pt.depth:y.isData3DTexture?De=Math.floor(pt.depth*Mt):De=1,Be=0,$e=0,je=0}G!==null?(Ie=G.x,ct=G.y,bt=G.z):(Ie=0,ct=0,bt=0);const dt=Z.convert(F.format),Ot=Z.convert(F.type);let Re;F.isData3DTexture?($.setTexture3D(F,0),Re=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),Re=N.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),Re=N.TEXTURE_2D),g.activeTexture(N.TEXTURE0),g.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Vt=g.getParameter(N.UNPACK_ROW_LENGTH),ot=g.getParameter(N.UNPACK_IMAGE_HEIGHT),en=g.getParameter(N.UNPACK_SKIP_PIXELS),mn=g.getParameter(N.UNPACK_SKIP_ROWS),Gn=g.getParameter(N.UNPACK_SKIP_IMAGES);g.pixelStorei(N.UNPACK_ROW_LENGTH,pt.width),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt.height),g.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),g.pixelStorei(N.UNPACK_SKIP_ROWS,$e),g.pixelStorei(N.UNPACK_SKIP_IMAGES,je);const Mi=y.isDataArrayTexture||y.isData3DTexture,ht=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const Mt=W.get(y),Vn=W.get(F),ft=W.get(Mt.__renderTarget),Wn=W.get(Vn.__renderTarget);g.bindFramebuffer(N.READ_FRAMEBUFFER,ft.__webglFramebuffer),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Si=0;Si<De;Si++)Mi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(y).__webglTexture,V,je+Si),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(F).__webglTexture,Te,bt+Si)),N.blitFramebuffer(Be,$e,Le,we,Ie,ct,Le,we,N.DEPTH_BUFFER_BIT,N.NEAREST);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||W.has(y)){const Mt=W.get(y),Vn=W.get(F);g.bindFramebuffer(N.READ_FRAMEBUFFER,D),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let ft=0;ft<De;ft++)Mi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,V,je+ft):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Mt.__webglTexture,V),ht?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vn.__webglTexture,Te,bt+ft):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Vn.__webglTexture,Te),V!==0?N.blitFramebuffer(Be,$e,Le,we,Ie,ct,Le,we,N.COLOR_BUFFER_BIT,N.NEAREST):ht?N.copyTexSubImage3D(Re,Te,Ie,ct,bt+ft,Be,$e,Le,we):N.copyTexSubImage2D(Re,Te,Ie,ct,Be,$e,Le,we);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ht?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Re,Te,Ie,ct,bt,Le,we,De,dt,Ot,pt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,Te,Ie,ct,bt,Le,we,De,dt,pt.data):N.texSubImage3D(Re,Te,Ie,ct,bt,Le,we,De,dt,Ot,pt):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Te,Ie,ct,Le,we,dt,Ot,pt.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Te,Ie,ct,pt.width,pt.height,dt,pt.data):N.texSubImage2D(N.TEXTURE_2D,Te,Ie,ct,Le,we,dt,Ot,pt);g.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),g.pixelStorei(N.UNPACK_SKIP_PIXELS,en),g.pixelStorei(N.UNPACK_SKIP_ROWS,mn),g.pixelStorei(N.UNPACK_SKIP_IMAGES,Gn),Te===0&&F.generateMipmaps&&N.generateMipmap(Re),g.unbindTexture()},this.initRenderTarget=function(y){W.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){j=0,X=0,ae=null,g.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const We=Object.freeze({sky:"#d8eef0",ground:"#afcb96",cream:"#fff3d1",ink:"#254f57",teal:"#328c91",coral:"#ed9379",wood:"#d6a46b",woodDark:"#9c6c44",rail:"#667d83",pavement:"#e5dcc0"}),xo=Object.freeze(["smooth","ribbed","grooved","studded"]),vc=["#eb976f","#64b7b3","#a78ad2","#efc660","#86b96c","#78a8df","#e491bc","#83c9cb","#dbaf75"],_c=["A","B","C","D","E","F","G","H","J"];function Rv(i){if(!Number.isInteger(i)||i<0)throw new RangeError("Appearance index must be a nonnegative integer.");return Object.freeze({color:vc[i%vc.length],pattern:xo[i%xo.length],symbol:_c[i%_c.length]})}const mr=new P;function nn(i,e,t,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;mr.copy(e),mr[n]=0,mr.normalize();const l=.5*a/(a+o),u=1-mr.angleTo(i)/c;return Math.sign(mr[t])===1?u*l:o/(a+o)+l+l*(1-u)}class $o extends ei{constructor(e=1,t=1,n=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new P,l=new P,u=new P(e,t,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,v=d.length/6,M=new P,m=.5/a;for(let p=0,b=0;p<d.length;p+=3,b+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*s,d[p+1]=u.y*Math.sign(c.y)+l.y*s,d[p+2]=u.z*Math.sign(c.z)+l.z*s,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/v)){case 0:M.set(1,0,0),f[b+0]=nn(M,l,"z","y",s,n),f[b+1]=1-nn(M,l,"y","z",s,t);break;case 1:M.set(-1,0,0),f[b+0]=1-nn(M,l,"z","y",s,n),f[b+1]=1-nn(M,l,"y","z",s,t);break;case 2:M.set(0,1,0),f[b+0]=1-nn(M,l,"x","z",s,e),f[b+1]=nn(M,l,"z","x",s,n);break;case 3:M.set(0,-1,0),f[b+0]=1-nn(M,l,"x","z",s,e),f[b+1]=1-nn(M,l,"z","x",s,n);break;case 4:M.set(0,0,1),f[b+0]=1-nn(M,l,"x","y",s,e),f[b+1]=1-nn(M,l,"y","x",s,t);break;case 5:M.set(0,0,-1),f[b+0]=nn(M,l,"x","y",s,e),f[b+1]=1-nn(M,l,"y","x",s,t);break}}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.segments,e.radius)}}function wu(){const i=new Map;function e(a){return i.has(a)||i.set(a,new pu({color:a,roughness:.83})),i.get(a)}function t(a,o,c,l){const u=new Xt(o,e(l));return u.position.set(...c),u.castShadow=u.receiveShadow=!0,a.add(u),u}function n(a,o,c,l,u=.04){return t(a,u?new $o(...o,1,u):new ei(...o),c,l)}function r(a,o,c,l,u,d=16){return t(a,new Ho(o,o,c,d),l,u)}function s(a,o,c,l){return t(a,new Xo(o,1),c,l)}return{material:e,mesh:t,box:n,cylinder:r,ball:s}}function dn(i,e,t,n,r,{background:s=We.cream,color:a=We.ink,subtitle:o=""}={}){const c=document.createElement("canvas");c.width=768,c.height=Math.round(c.width*n/t);const l=c.getContext("2d");l.fillStyle=s,l.fillRect(0,0,c.width,c.height),l.fillStyle=a,l.textAlign="center",l.textBaseline="middle";function u(f,v,M){l.font=`800 ${v}px system-ui, sans-serif`;const m=Math.min(1,c.width*.9/l.measureText(f).width);l.font=`800 ${v*m}px system-ui, sans-serif`,l.fillText(f,c.width/2,M)}u(e,c.height*(o?.57:.66),c.height*(o?.4:.5)),o&&u(o,c.height*.15,c.height*.81);const d=new Nd(c);d.colorSpace=Kt;const h=new Xt(new Or(t,n),new $i({map:d}));return h.position.set(...r),i.add(h),h}function Cv(i){const e=new Set,t=new Set,n=new Set;i.traverse(r=>{r.geometry&&e.add(r.geometry);for(const s of Array.isArray(r.material)?r.material:[r.material])s&&(t.add(s),s.map&&n.add(s.map))}),e.forEach(r=>r.dispose()),n.forEach(r=>r.dispose()),t.forEach(r=>r.dispose())}const Lv=Object.freeze({factory:Object.freeze([-14,0,-7]),yard:Object.freeze([4,0,5]),spacing:2.65,floorY:.22});function Pv(){const i=new Yt;i.name="Foam Factory and Rail Yard";const{box:e,cylinder:t,ball:n}=wu();e(i,[120,.6,120],[0,-.65,0],We.ground,0),e(i,[30,.35,13],[4,-.18,4],We.pavement,.15),e(i,[27,.18,3.45],[4,.1,5],"#849c9d");for(const c of[3.28,6.72])e(i,[27,.07,.09],[4,.23,c],We.cream);e(i,[8,.07,16],[-14,-.29,8],"#c4c5ad");for(let c=3;c<16;c+=3)e(i,[.14,.025,1.5],[-14,-.24,c],We.cream,0);const r=new Yt;r.position.set(...Lv.factory),r.name="Factory Interior",i.add(r),e(r,[14,.35,12],[0,-.05,0],"#9cb9b7"),e(r,[14,6.2,.35],[0,3,-6],We.cream),e(r,[.35,6.2,12],[-7,3,0],We.coral),e(r,[.35,6.2,12],[7,3,0],We.coral);for(const c of[-4.5,0,4.5])e(r,[3,1.6,.1],[c,3.3,-5.76],We.teal),e(r,[.12,1.7,.15],[c,3.3,-5.65],We.cream);const s=new Yt;s.name="Factory Roof and Front (Hide for Interior Teaching View)",s.position.copy(r.position),i.add(s);for(const c of[-5.25,5.25])e(s,[3.5,6,.35],[c,3,6],We.coral);e(s,[7,2,.4],[0,5,6],We.coral),e(s,[7.4,.24,1.8],[0,4.03,6.55],We.teal);for(const c of[-3.6,3.6])e(s,[.25,4,.3],[c,2,6.35],We.cream);dn(s,"Foam Works",7.1,1.05,[0,5.2,6.25],{background:We.teal,color:We.cream}),dn(s,"Mean Machine",4.3,.58,[0,3.4,7.48]);for(const c of[-4.8,4.8])e(s,[1.5,1.9,.13],[c,2.5,6.25],We.cream),e(s,[1.24,1.6,.16],[c,2.5,6.33],"#78b3bf");e(s,[14.7,.45,12.8],[0,6.14,0],We.teal,.12);for(const[c,l]of[[-4.6,4],[-1.8,2.8]])t(s,.65,l,[c,6.4+l/2,-2.6],We.cream),t(s,.84,.32,[c,6.4+l,-2.6],We.coral);n(i,.85,[-18.6,11.1,-9.6],"#eff5dd"),n(i,1.13,[-18.9,12.4,-10],"#eff5dd");for(let c=-8;c<=29;c++)e(i,[.22,.14,1.5],[c,-.03,-.65],We.woodDark,0);for(const c of[-1.2,-.1])e(i,[39,.13,.11],[10,.08,c],We.rail,0);const a=new Yt;a.position.set(6,0,-7.2),i.add(a),e(a,[9,3.5,3.5],[0,1.6,0],We.cream),e(a,[9.5,.55,4.2],[0,3.45,0],We.coral),e(a,[9.5,.16,1.6],[0,2.4,2.2],We.teal),e(a,[1.8,2.2,.1],[0,1,1.79],We.teal);for(const c of[-3.1,3.1])e(a,[1.5,1.3,.12],[c,1.6,1.8],"#8dc7ce");dn(a,"Median Depot",6.8,.78,[0,2.91,2.68],{background:We.ink,color:We.cream});const o=new Yt;o.name="Arriving Shipment Engine",o.position.set(13.5,0,-.65),i.add(o),e(o,[3.4,.3,1.5],[0,.52,0],We.ink);for(const c of[-1.1,1.1])for(const l of[-.75,.75]){const u=t(o,.42,.18,[c,.31,l],"#3c5158");u.rotation.x=Math.PI/2}e(o,[1.9,1.2,1.3],[-.6,1.25,0],We.teal,.15),e(o,[1.05,1.9,1.37],[.91,1.6,0],We.teal),e(o,[1.45,.19,1.75],[.91,2.6,0],We.cream),e(o,[.72,.63,.1],[.91,2.08,.73],"#b9e0dc"),t(o,.16,.73,[-1.08,2.1,0],We.ink),dn(o,"01",.8,.45,[-.65,1.4,.68],{background:We.teal,color:We.cream});for(const[c,l,u]of[[-25,-14,1.5],[-25,6,1.1],[21,-10,1.5],[27,6,1.2],[0,-17,1.3],[15,-17,1.5],[-6,14,.9]]){const d=new Yt;d.position.set(c,-.3,l),d.scale.setScalar(u),i.add(d),t(d,.2,2.5,[0,1,0],We.woodDark),n(d,1.35,[0,2.8,0],"#689a70"),n(d,.97,[.35,3.8,0],"#8cba7e")}for(const c of[-9.8,17.8])t(i,.075,4,[c,1.9,2],We.ink),e(i,[.8,.23,.65],[c,4,2],We.ink),e(i,[.53,.22,.43],[c,3.8,2],"#ffdf9c");dn(i,"Rail Yard  →",3.8,.64,[-5,1.6,4],{background:We.teal,color:We.cream});for(const c of[-6.5,-3.5])t(i,.06,1.4,[c,.6,4],We.woodDark);return{root:i,train:o,factoryInterior:r,factoryShell:s}}const yn=.26;function Dv(i="smooth",e=1){if(!xo.includes(i))throw new RangeError(`Unknown ring pattern: ${i}`);if(!(e>0&&e<=1))throw new RangeError("A ring fraction must be greater than zero and at most one.");const t=new qo,n=128;for(let a=0;a<=n;a++){const o=a/n*Math.PI*2;let c=.73+.045*Math.cos(8*o);i==="ribbed"&&(c+=.055*Math.pow(Math.max(0,Math.cos(16*o)),2)),i==="grooved"&&(c-=.085*Math.pow(Math.max(0,Math.cos(12*o)),4)),i==="studded"&&(c+=.075*Math.pow(Math.max(0,Math.cos(8*o)),4));const l=Math.cos(o)*c,u=Math.sin(o)*c;a===0?t.moveTo(l,u):t.lineTo(l,u)}const r=new Pr;r.absarc(0,0,.31,0,Math.PI*2,!0),t.holes.push(r);const s=new zs(t,{depth:yn*e,bevelEnabled:!1,curveSegments:24,steps:1});return s.rotateX(-Math.PI/2),s}function Tu({color:i="#64b7b3",pattern:e="smooth",symbol:t="A",identity:n="ring",fraction:r=1}={}){const s=new Yt;s.name=`Foam Ring ${n}`,s.userData={identity:n,color:i,pattern:e,symbol:t,fraction:r};const a=new Xt(Dv(e,r),new pu({color:i,roughness:.9}));a.castShadow=a.receiveShadow=!0,s.add(a);const o=new Id(new ru(a.geometry,50),new tu({color:new et(i).multiplyScalar(.62),transparent:!0,opacity:.8}));s.add(o);const c=dn(s,r===1?t:`${t} · ${r===.5?"1/2":r===1/3?"1/3":r}`,.35,.13,[0,yn*r+.006,.53]);return c.rotation.x=-Math.PI/2,s}function Iv({id:i,label:e,quantity:t,appearance:n=Rv(0),coveredAbove:r=8}){if(!Number.isInteger(t)||t<0)throw new RangeError("Whole-pallet quantities must be nonnegative integers.");const s=new Yt;s.name=`Pallet ${i}`,s.userData={id:i,quantity:t,appearance:{...n},covered:t>r};const{box:a}=wu();for(const u of[-.76,0,.76])a(s,[.22,.18,1.72],[u,.09,0],We.woodDark);for(const u of[-.66,-.22,.22,.66])a(s,[2.05,.12,.36],[0,.23,u],We.wood);const o=new Yt;if(o.name="Load",o.position.y=.29,s.add(o),t>r){a(o,[1.77,1.48,1.51],[0,.74,0],n.color,.18);for(const u of[-.59,.59])a(o,[.09,1.51,1.55],[u,.75,0],We.cream);dn(o,"Covered Load",1.22,.24,[0,1.23,.8]),dn(o,`${n.symbol} · ${n.pattern}`,1.2,.21,[0,.91,.8])}else for(let u=0;u<t;u++){const d=Tu({...n,identity:`${i}-R${u+1}`});d.position.y=u*yn,o.add(d)}a(s,[1.36,.9,.09],[0,.62,.99],We.ink);const c=dn(s,String(t),1.29,.83,[0,.62,1.042],{subtitle:`${e} · ${n.symbol} · Quantity`});c.name="Quantity Tag";const l=new Xt(new ei(2.1,Math.max(1.3,t<=r?.3+t*yn:1.8),1.9),new $i({visible:!1}));return l.position.y=l.geometry.parameters.height/2,s.add(l),s}function Nv(i,e=1){if(![.5,1].includes(e))throw new Error("Expected a whole or half gear.");const t=new qo,n=192;for(let a=0;a<=n;a++){const o=a/n*Math.PI*2,c=Math.cos(i.lobes*o);let l;if(i.profile==="polygon"){const h=Math.PI*2/i.lobes;l=.74*Math.cos(Math.PI/i.lobes)/Math.cos((o+Math.PI/i.lobes)%h-Math.PI/i.lobes)}else i.profile==="star"?l=.65+.12*c:i.profile==="teeth"?l=.69+.085*Math.max(-.65,Math.min(1,c*3)):l=.69+.075*c;const u=Math.cos(o)*l,d=Math.sin(o)*l;a===0?t.moveTo(u,d):t.lineTo(u,d)}const r=new Pr;if(i.hole==="circle")r.absarc(0,0,.255,0,Math.PI*2,!0);else{const a=i.hole==="diamond"?4:6;for(let o=0;o<=a;o++){const c=-o/a*Math.PI*2,l=Math.cos(c)*.285,u=Math.sin(c)*.285;o===0?r.moveTo(l,u):r.lineTo(l,u)}}t.holes.push(r);for(let a=0;a<i.windows;a++){const o=a/i.windows*Math.PI*2,c=new Pr;c.absarc(Math.cos(o)*.47,Math.sin(o)*.47,.068,0,Math.PI*2,!0),t.holes.push(c)}const s=new zs(t,{depth:yn*e,bevelEnabled:!1,curveSegments:16,steps:1});return s.rotateX(-Math.PI/2),s}function Uv(i,e){const t=Ts(i),n=Tu({identity:i.id,color:t.color,pattern:"smooth",symbol:e,fraction:i.halves/2}),r=n.children.find(a=>a.isMesh),s=n.children.find(a=>a.isLineSegments);return r.geometry.dispose(),r.geometry=Nv(t,i.halves/2),s.geometry.dispose(),s.geometry=new ru(r.geometry,35),Object.assign(n.userData,{family:i.family,familyName:t.name,pattern:t.name,origin:i.origin,root:i.root}),n}const bs=7600,Us=Object.freeze({position:Object.freeze([22,18,32]),target:Object.freeze([-6,2,-4]),roll:0,fov:35}),Fi=(i,e)=>Object.freeze({position:Object.freeze(i),target:Object.freeze(e),roll:0}),xc=Object.freeze({median:Object.freeze([Us,Fi([22,14,12],[4,1,1]),Fi([15,12,22],[4,.8,3]),Fi([8,13,26],[4,0,2])]),mean:Object.freeze([Us,Fi([-3,11,19],[-14,2,-2]),Fi([-14,4.5,2],[-14,2,-9]),Fi([-10,8,-2],[-14,.8,-10])])}),yc=i=>Math.max(0,Math.min(1,i)),Fv=i=>i*i*(3-2*i);function Mc(i,e,t,n,r){return e.map((s,a)=>.5*(2*s+(-i[a]+t[a])*r+(2*i[a]-5*s+4*t[a]-n[a])*r*r+(-i[a]+3*s-3*t[a]+n[a])*r*r*r))}function Ov(i,e,t){if(!xc[i])throw new RangeError(`Unknown destination: ${i}`);const n=[...xc[i]];t&&(n[3]=t);const r=yc(e/bs);if(r>=1)return{position:[...n[3].position],target:[...n[3].target],roll:0,complete:!0};const s=Fv(yc((r-.13)/.87))*3,a=Math.min(2,Math.floor(s)),o=s-a,c=[n[Math.max(0,a-1)],n[a],n[a+1],n[Math.min(3,a+2)]];return{position:Mc(...c.map(l=>l.position),o),target:Mc(...c.map(l=>l.target),o),roll:r<.13||r>=1?0:Math.sin((r-.13)/.87*Math.PI*2)*.025*Math.sin(r*Math.PI),complete:r>=1}}function kv(i,e,t=0){if(!Number.isFinite(e)||!Number.isFinite(t))throw new Error("Provide finite deck and whole-ring dimensions.");let n=0;return i.map(r=>{if(![1,2].includes(r.halves))throw new Error("Expected an exact whole or half ring.");const s={id:r.id,origin:r.origin,fraction:r.halves/2,y:t+n*e/2,height:r.halves*e/2};return n+=r.halves,s})}function Sc(i){if(!Number.isInteger(i)||i<1||i>6)throw new Error("Display one to six pallets.");if(i<=3)return Array.from({length:i},(r,s)=>({x:-14+(s-(i-1)/2)*2.7,y:.14,z:-7.1,row:0}));const e=Math.ceil(i/2),t=Array.from({length:i},(r,s)=>{const a=s>=e;return{x:((a?s-e:s)-(e-1)/2+(a?.5:0))*3.3,y:.14,z:-7.1+(a?-2.15:2.15),row:a?1:0}}),n=(Math.min(...t.map(r=>r.x))+Math.max(...t.map(r=>r.x)))/2;return t.map(r=>({...r,x:-14+r.x-n}))}function Bv(i,e,t){const n=new Nn(new P(0,1,0),-t),r=i.intersectPlane(n,new P);if(!r)return null;const s=e.clone().sub(r);return s.y=0,{plane:n,offset:s,height:t}}function zv(i,e){const t=i.intersectPlane(e.plane,new P);return t?(t.add(e.offset),t.y=e.height,t):null}const ms=i=>String.fromCharCode(65+i),bc=i=>i*i*(3-2*i);function Hv(i,e,{onArrive:t,onStatus:n,onTransfer:r,onDragActive:s,onPieceAction:a,onHint:o,onBlocked:c}={}){let l;try{l=new Av({antialias:!0,alpha:!1})}catch{return queueMicrotask(()=>{t?.(),n?.(le("scene.the-3d-view-is-unavailable-all-sharing-controls-remain-available"))}),{sync(){},async animate(){},startIntro(){},skipIntro(){},setReducedMotion(){},setView(){},previewAction(){}}}l.setPixelRatio(Math.min(devicePixelRatio,1.75)),l.setSize(innerWidth,innerHeight),l.shadowMap.enabled=!0,l.shadowMap.type=Pc,l.outputColorSpace=Kt,l.setClearColor(We.sky),i.append(l.domElement);const u=new Sd;u.fog=new ko(We.sky,48,115),u.add(new bf(16777215,8559217,2.3));const d=new Tf(16774103,3.2);d.position.set(-7,24,18),d.target.position.set(-10,0,-5),d.castShadow=!0,d.shadow.mapSize.set(2048,2048),Object.assign(d.shadow.camera,{left:-38,right:38,top:35,bottom:-35,near:1,far:80}),d.shadow.normalBias=.03,u.add(d,d.target);const h=Pv();u.add(h.root);const f=new rn(Us.fov,innerWidth/innerHeight,.1,180),v=new P,M=new Yt;M.name="Mean Machine Observations",u.add(M);const m=new Map;let p=[],b=[],w=null,x=null,A=null,E="exterior",C=null,_=!1,T=!1,L=null,U="overview",k,q=null,D=null,z=null,j=null,X=!1,ae=null,Y=null,ee=null,re=null,Ne="";const Ce=Array.from({length:2},()=>{const I=new Xt(new Gt,new $i({color:16770456,transparent:!0,opacity:.34,depthWrite:!1,side:hn}));return I.visible=!1,I.renderOrder=4,u.add(I),I});l.domElement.style.touchAction="none";const nt=.14,Ke=-7.1,it=2.7,J=I=>{const S=Sc(w.pallets.length)[I];return new P(S.x,S.y,S.z)};function ie(){const I=document.querySelector(".shipment")?.getBoundingClientRect().right||254,S=document.querySelector(".activity")?.getBoundingClientRect().left||innerWidth-336,H=document.querySelector("#loads")?.getBoundingClientRect().top||innerHeight-245;return{left:I+18,right:S-18,top:167,bottom:Math.max(407,H-18)}}function ye(I){f.position.fromArray(I.position),v.fromArray(I.target),f.up.set(0,1,0),f.lookAt(v),I.roll&&f.rotateZ(I.roll),f.updateMatrixWorld()}function He(){if(w?.pallets.length>3){const te=Sc(w.pallets.length),Se=q||=ie(),Ae=Math.max(...w.originals)+(w.pallets.length===6?1:0),tt=new P(Math.min(...te.map(gt=>gt.x))-1.4,nt,Math.min(...te.map(gt=>gt.z))-1.2),Ye=new P(Math.max(...te.map(gt=>gt.x))+1.4,nt+.29+Ae*yn+.25,Math.max(...te.map(gt=>gt.z))+1.8),Ut=tt.clone().add(Ye).multiplyScalar(.5),wt=(w.pallets.length===6?new P(...U==="front"?[0,.6,1]:[.22,.57,.91]):new P(0,U==="front"?.62:.72,U==="front"?.78:.69)).normalize(),ti=new P().crossVectors(new P(0,1,0),wt).normalize(),xi=new P().crossVectors(wt,ti),ni=Math.tan(ml.degToRad(f.fov/2)),Tt=ni*f.aspect*Math.max(280,Se.right-Se.left)/innerWidth,At=ni*Math.max(220,Se.bottom-Se.top)/innerHeight;let yt=0;for(const gt of[tt.x,Ye.x])for(const Zt of[tt.y,Ye.y])for(const sr of[tt.z,Ye.z]){const yi=new P(gt,Zt,sr).sub(Ut),ar=yi.dot(wt);yt=Math.max(yt,Math.abs(yi.dot(ti))/Tt+ar,Math.abs(yi.dot(xi))/At+ar)}k={position:Ut.clone().addScaledVector(wt,yt*1.04).toArray(),target:Ut.toArray(),roll:0};return}const I=document.querySelector(".shipment")?.getBoundingClientRect().right||(innerWidth<=1050?206:254),S=document.querySelector(".activity")?.getBoundingClientRect().left||innerWidth-(innerWidth<=1050?292:336),H=Math.max(360,S-I-28),O=((w?.pallets.length||3)-1)*it+2.5,Z=Math.max(13.7,O/(2*Math.tan(ml.degToRad(f.fov/2))*f.aspect*H/innerWidth)),oe=[-14,1.2,Ke];k={position:U==="front"?[-14,1.2+Z*.6,Ke+Z]:[-14+Z*.22,1.2+Z*.57,Ke+Z*.91],target:oe,roll:0}}function Ee(I=1){if(w?.pallets.length>3){const O=q||ie();f.setViewOffset(innerWidth,innerHeight,(innerWidth/2-(O.left+O.right)/2)*I,(innerHeight/2-(O.top+O.bottom)/2)*I,innerWidth,innerHeight),f.updateProjectionMatrix();return}const S=document.querySelector(".shipment")?.getBoundingClientRect().right||(innerWidth<=1050?206:254),H=document.querySelector(".activity")?.getBoundingClientRect().left||innerWidth-(innerWidth<=1050?292:336);f.setViewOffset(innerWidth,innerHeight,(innerWidth/2-(S+H)/2)*I,50*I,innerWidth,innerHeight),f.updateProjectionMatrix()}function Pe(){T||l.render(u,f)}function at(I){I.removeFromParent(),Cv(I)}function se(){for(const I of[...M.children])at(I);m.clear(),p=[],b=[]}function ce(){se(),w.pallets.forEach((I,S)=>{const H=Iv({id:ms(S),label:le("scene.pallet",{v0:ms(S)}),quantity:0}),O=H.children.find(oe=>oe.isMesh&&oe.position.z===.99&&oe.position.y===.62);O&&(O.position.z+=.4,O.position.y=w.pallets.length>3?.48:.35,O.scale.y=w.pallets.length>3?.9:.75,w.pallets.length>3&&(O.scale.x=1.22,O.rotation.x=-Math.PI/4)),H.userData.palletIndex=S,H.position.copy(J(S)),M.add(H),p.push(H);const Z=new Xt(new Ko(1.19,1.29,64),new $i({color:5536895,transparent:!0,opacity:.5,side:hn}));Z.rotation.x=-Math.PI/2,Z.position.copy(H.position).add(new P(0,.013,0)),M.add(Z),b.push(Z)})}function he(I){const S=new Map;return I.pallets.forEach((H,O)=>kv(H,yn,.29).forEach(Z=>{S.set(Z.id,{...Z,pallet:O,position:J(O).add(new P(0,Z.y,0))})})),S}function de(I){const S=gs[I.origin],H=Uv(I,S.glyph);return H.userData.origin=I.origin,H.userData.root=I.root,M.add(H),m.set(I.id,H),H}function ve(I){So(I).forEach((S,H)=>{if(p[H].userData.halfUnits===S)return;const O=p[H].getObjectByName("Quantity Tag");O&&at(O);const Z=I.pallets.length>3,oe=Z?dn(p[H],le("scene.text",{v0:ms(H),v1:Ki(S)}),1.55,.747,[0,.517,1.427]):dn(p[H],Ki(S),1.29,.6225,[0,.35,1.442],{subtitle:le("scene.pallet-current-load",{v0:ms(H)})});Z&&(oe.rotation.x=-Math.PI/4),oe.name="Quantity Tag",p[H].userData.halfUnits=S,p[H].userData.quantity=S/2})}function Oe(I){const S=he(I);for(const[H,O]of m)S.has(H)||(at(O),m.delete(H));for(const H of I.pallets.flat()){const O=m.get(H.id)||de(H),Z=S.get(H.id);O.position.copy(Z.position),O.scale.set(1,1,1),O.rotation.set(0,0,0),O.visible=!0,O.userData.palletIndex=Z.pallet}ve(I),A=I.pallets}function ze(I,S){w&&(I.pending||I.stage!==w.stage||I.pallets!==w.pallets)&&me(),D&&(I.pending||I.stage!=="sharing"||I.key!==w?.key||I.pallets[D.source]?.at(-1)?.id!==D.pieceId)&&Fe(le("scene.pickup-canceled")),w=I,(I.pending||I.stage!=="sharing")&&pe(null);const H=`${I.key}:${I.originals.join(",")}`;x!==H&&(x=H,q=null,ce(),A=null,E==="teaching"&&(He(),ye(k),Ee())),!I.pending&&I.pallets!==A&&Oe(I),b.forEach((O,Z)=>{O.material.color.set(Z===S?13057400:["calculation","explanation","complete"].includes(I.stage)?3442267:5536895),O.material.opacity=Z===S?1:.5}),l.domElement.style.cursor=D?.moved?"grabbing":z?"grab":E==="teaching"&&w.stage==="sharing"&&!w.pending?"pointer":"default",Pe()}function Ge(){E!=="teaching"&&(E="teaching",C=null,h.factoryShell.visible=!1,i.dataset.phase=E,t?.(),He(),ye(k),Ee(),Pe())}function qe(){if(E==="exterior"){if(_){Ge();return}E="entering",i.dataset.phase=E,C=performance.now(),requestAnimationFrame(N)}}function N(I){if(E==="entering"){const S=I-C;He();const H=Ov("mean",S,k);ye(H),h.factoryShell.visible=S<bs*.6,S>bs*.6&&Ee(bc(Math.min(1,(S/bs-.6)/.4))),Pe(),H.complete?Ge():requestAnimationFrame(N)}}function lt(I){E!=="teaching"||w?.pending||D?.moved||(U=I,He(),ye(k),Ee(),Pe())}function Je(I){_=I,I&&(E==="entering"&&Ge(),L?.finish())}function R(I,S){I.scale.set(1/Math.sqrt(S),S,1/Math.sqrt(S))}async function g(I,S,H){if(H||_||T){Oe(S),Pe();return}const O=S.pending,Z=he(S);ve(S);const oe=m.get(O.pieceId);if(!oe){Oe(S),Pe();return}const te=oe.position.clone(),Se=[],Ae=O.type==="split"?1150:O.type==="merge"?750:520,tt=O.type==="merge"?O.children.map(Ye=>({object:m.get(Ye),start:m.get(Ye).position.clone()})):[];await new Promise(Ye=>{const Ut=performance.now();let wt=!1;function ti(){wt||(wt=!0,L=null,Oe(S),Pe(),Ye())}L={finish:ti};function xi(ni){if(wt)return;const Tt=Math.min(1,(ni-Ut)/Ae);if(O.type==="move")oe.position.lerpVectors(te,Z.get(O.pieceId).position,bc(Tt)),oe.position.y+=Math.sin(Math.PI*Tt)*1.1,R(oe,Tt<.72?1+.2*Math.sin(Math.PI*Tt/.72):1-.24*Math.sin((Tt-.72)/.28*Math.PI)),oe.rotation.z=Math.sin(Math.PI*Tt)*.16*Math.sign(Z.get(O.pieceId).position.x-te.x||1);else if(O.type==="merge")if(Tt<.65){const At=Tt/.65;tt.forEach(({object:yt,start:gt},Zt)=>{yt.position.copy(gt),yt.position.y+=Math.sin(Math.PI*At)*(Zt?.5:.15),yt.position.x+=(Zt?1:-1)*Math.sin(Math.PI*At)*.13,yt.rotation.z=(Zt?1:-1)*Math.sin(Math.PI*At)*.05})}else{Se.length||(tt.forEach(({object:gt})=>{gt.visible=!1}),Se.push(de(S.pallets.flat().find(gt=>gt.id===O.mergedId))));const At=Se[0],yt=(Tt-.65)/.35;At.position.copy(Z.get(O.mergedId).position),R(At,1-.16*Math.sin(Math.PI*yt))}else if(Tt<.2)R(oe,1-.3*Math.sin(Tt/.2*Math.PI/2));else{if(!Se.length){oe.visible=!1;for(const yt of O.children)Se.push(de(S.pallets.flat().find(gt=>gt.id===yt)))}const At=(Tt-.2)/.8;Se.forEach((yt,gt)=>{yt.position.copy(Z.get(yt.userData.identity).position),yt.position.y+=Math.sin(Math.PI*At)*(gt?1.55:.78)+Math.sin(3*Math.PI*At)*.12*(1-At),yt.position.x+=(gt?1:-1)*Math.sin(Math.PI*At)*.32,R(yt,1+Math.sin(3*Math.PI*At)*.25*(1-At)),yt.rotation.z=(gt?1:-1)*Math.sin(2*Math.PI*At)*.08*(1-At)})}Pe(),Tt>=1?ti():requestAnimationFrame(xi)}requestAnimationFrame(xi)})}const B=new Cf;function W(I){const S=l.domElement.getBoundingClientRect();B.setFromCamera(new Me((I.clientX-S.left)/S.width*2-1,1-(I.clientY-S.top)/S.height*2),f)}function $(){return E==="teaching"&&w?.stage==="sharing"&&!w.pending&&!T}function fe(I){W(I);for(const S of B.intersectObjects([...m.values()],!0)){if(!S.object.isMesh)continue;let H=S.object;for(;H&&!H.userData.identity;)H=H.parent;if(H)return H}return null}function _e(I){const S=fe(I);return S&&w.pallets[S.userData.palletIndex]?.at(-1)?.id===S.userData.identity?S:null}function Q(I){const S=fe(I);return S&&(w.pallets[S.userData.palletIndex]?.at(-1)?.id===S.userData.identity||Bi(w,S.userData.identity))?S:null}function ne(I,S=null){if(document.elementFromPoint(I.clientX,I.clientY)!==l.domElement)return null;W(I);const H=[...p,...[...m.values()].filter(O=>O.userData.identity!==S)];for(const O of B.intersectObjects(H,!0)){if(!O.object.isMesh)continue;let Z=O.object;for(;Z&&Z.userData.palletIndex===void 0;)Z=Z.parent;if(Z)return Z.userData.palletIndex}return null}function pe(I){const S=I?Bi(w,I.userData.identity):null,H=I?`${I.userData.identity}:${S?.type}:${S?.pieceIds.join(",")}`:"";if(z===I&&Ne===H)return;z=I,re=S,Ne=H;const O=S?S.pieceIds.map(Z=>m.get(Z)):I?[I]:[];Ce.forEach((Z,oe)=>{Z.geometry.dispose();const te=O[oe];te&&(Z.geometry=te.children.find(Se=>Se.isMesh).geometry.clone(),Z.position.copy(te.position),Z.position.y+=.006,Z.scale.set(1.055,1.07,1.055)),Z.visible=!!te}),o?.(S?.type==="split"?le("scene.double-click-to-split-this-gear-drag-to-move-it"):S?.type==="merge"?le("scene.double-click-either-highlighted-half-to-merge-this-top-pair"):I?le("scene.drag-this-half-to-move-it-merging-needs-its-matching-half-beside"):""),l.domElement.style.cursor=D?.moved?"grabbing":I?"grab":$()?"pointer":"default",Pe()}function ke(I,S){const H=I&&$()?m.get(w.pallets[S]?.at(-1)?.id):null;pe(H&&Bi(w,H.userData.identity)?.type===I?H:null)}function me(){ee&&clearTimeout(ee.timer),ee=null,Y=null}function xe(I){j=I,b.forEach((S,H)=>{S.material.color.set(H===I?3004064:H===D?.source?13057400:5536895),S.material.opacity=H===I||H===D?.source?1:.4,S.scale.setScalar(H===I?1.08:1)})}function Ue(){const I=D;return D=null,j=null,pe(null),b.forEach(S=>S.scale.setScalar(1)),I&&l.domElement.hasPointerCapture(I.pointerId)&&l.domElement.releasePointerCapture(I.pointerId),I?.moved&&s?.(!1),I}function Fe(I=le("scene.pickup-canceled-the-same-piece-returned-to-its-stack")){if(ae=null,me(),!D)return;const S=D.moved;X=!0,Ue(),Oe(w),xe(null),Pe(),S&&n?.(I)}return l.domElement.addEventListener("pointerdown",I=>{if(!I.isPrimary||I.button!==0||D)return;if(!$()){me(),E==="teaching"&&!w?.pending&&(I.preventDefault(),c?.());return}X=!1,Y=null;const S=fe(I);ae={pointerId:I.pointerId,x:I.clientX,y:I.clientY,pieceId:S?.userData.identity||null,moved:!1};const H=_e(I);if(!H)return;const O=Math.max(nt+.29,...[...m.values()].map(oe=>oe.position.y+yn*oe.userData.fraction))+.18,Z=Bv(B.ray,H.position,O);Z&&(D={pointerId:I.pointerId,source:H.userData.palletIndex,pieceId:H.userData.identity,object:H,x:I.clientX,y:I.clientY,drag:Z,moved:!1},l.domElement.setPointerCapture(I.pointerId))}),l.domElement.addEventListener("pointermove",I=>{if(ae&&ae.pointerId===I.pointerId&&Math.hypot(I.clientX-ae.x,I.clientY-ae.y)>=5&&(ae.moved=!0,X=!0,me()),D){if(I.pointerId!==D.pointerId||!D.moved&&Math.hypot(I.clientX-D.x,I.clientY-D.y)<5)return;D.moved||(D.moved=!0,X=!0,pe(null),s?.(!0),n?.(le("scene.gear-picked-up-drop-on-another-pallet-or-press-escape-to-cancel"))),W(I);const S=zv(B.ray,D.drag);S&&D.object.position.copy(S);const H=ne(I,D.pieceId);xe(H===D.source?null:H),l.domElement.style.cursor="grabbing",I.preventDefault(),Pe()}else $()?pe(Q(I)):pe(null)}),l.domElement.addEventListener("pointerup",I=>{if(ae?.pointerId===I.pointerId&&(Y=ae,ae=null),!D||D.pointerId!==I.pointerId)return;if(!D.moved){Ue();return}const S=ne(I,D.pieceId);if(S===null||S===D.source){Fe(le("scene.drop-canceled-choose-a-different-pallet-no-cargo-changed"));return}const H=Ue();X=!0,me();try{r?.(H.source,S)||(Oe(w),xe(null),Pe())}catch{Oe(w),xe(null),Pe(),n?.(le("scene.drop-canceled-your-cargo-is-unchanged"))}}),l.domElement.addEventListener("pointercancel",()=>Fe()),l.domElement.addEventListener("lostpointercapture",()=>{(D||ae)&&Fe()}),l.domElement.addEventListener("pointerleave",()=>{D||pe(null)}),window.addEventListener("blur",()=>{Fe(),pe(null),L?.finish()}),document.addEventListener("pointerdown",I=>{I.target!==l.domElement&&me()}),document.addEventListener("keydown",I=>{I.key==="Escape"&&(D||ae||ee)?(I.preventDefault(),Fe(),pe(null)):I.target!==l.domElement&&me()}),l.domElement.addEventListener("click",I=>{const S=Y;if(Y=null,X){X=!1,me();return}if(!$()||!S||S.moved){me();return}const H=fe(I),O=H?.userData.identity||null;if(O!==S.pieceId){me();return}const Z=ne(I);if(Z===null)return;const oe=O?Bi(w,O):null,te=oe?`${oe.type}:${oe.source}:${oe.pieceIds.join(",")}`:O;if(I.detail===2){const Ae=ee,tt=Ae&&Ae.key===te&&Ae.pallets===w.pallets;me(),I.preventDefault(),tt&&oe?a?.(O):O&&n?.(le("scene.split-a-whole-top-gear-or-merge-its-matching-halves-together-at"));return}if(me(),I.detail!==1)return;if(!O){e(Z);return}const Se={key:te,source:Z,pallets:w.pallets,timer:null};Se.timer=setTimeout(()=>{ee===Se&&(ee=null,$()&&w.pallets===Se.pallets&&e(Se.source))},500),ee=Se}),l.domElement.addEventListener("dblclick",I=>I.preventDefault()),window.addEventListener("resize",()=>{Fe(),pe(null),q=null,f.aspect=innerWidth/innerHeight,f.clearViewOffset(),f.updateProjectionMatrix(),l.setSize(innerWidth,innerHeight),E==="teaching"&&(He(),ye(k),Ee()),Pe()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(Fe(),E==="entering"&&Ge(),L?.finish())}),l.domElement.addEventListener("webglcontextlost",I=>{I.preventDefault(),Fe(),T=!0,E!=="teaching"&&Ge(),L?.finish(),n?.(le("scene.the-3d-view-paused-your-exact-quantities-are-safe-all-sharing-co"))}),l.domElement.addEventListener("webglcontextrestored",()=>{T=!1,Pe(),n?.(le("scene.the-3d-view-is-ready-again"))}),window.__meanScene=Object.freeze({snapshot(){return{phase:E,camera:{position:f.position.toArray(),target:v.toArray(),fov:f.fov,view:f.view?{...f.view}:null},shellVisible:h.factoryShell.visible,contextLost:T,stage:w.stage,pending:w.pending?{...w.pending}:null,originals:[...w.originals],interaction:{held:D?.moved?D.pieceId:null,heldBounds:D?.moved?(()=>{const I=new nr().setFromObject(D.object);return{min:I.min.toArray(),max:I.max.toArray()}})():null,hovered:z?.userData.identity||null,destination:j,actionPreview:re?{...re}:null,pendingSingleClick:!!ee},pallets:p.map(I=>({id:I.userData.id,quantity:I.userData.quantity,position:I.position.toArray()})),palletLabelBounds:p.map(I=>{const S=I.getObjectByName("Quantity Tag");S.geometry.computeBoundingBox();const{min:H,max:O}=S.geometry.boundingBox,Z=[new P(H.x,H.y,0),new P(H.x,O.y,0),new P(O.x,H.y,0),new P(O.x,O.y,0)].map(oe=>{const te=S.localToWorld(oe).project(f);return{x:(te.x+1)*innerWidth/2,y:(1-te.y)*innerHeight/2}});return{id:I.userData.id,points:Z,width:Math.max(...Z.map(oe=>oe.x))-Math.min(...Z.map(oe=>oe.x)),height:Math.max(...Z.map(oe=>oe.y))-Math.min(...Z.map(oe=>oe.y))}}),rings:[...m.values()].filter(I=>I.visible).map(I=>({...I.userData,position:I.position.toArray(),scale:I.scale.toArray(),rotation:[I.rotation.x,I.rotation.y,I.rotation.z]})),ringSurfacePoints:[...m.values()].map(I=>{const S=I.position.clone().add(new P(0,yn*I.userData.fraction/2,.7)).project(f);return{identity:I.userData.identity,x:(S.x+1)*innerWidth/2,y:(1-S.y)*innerHeight/2}}),topPickPoints:w.pallets.map(I=>{const S=m.get(I.at(-1)?.id);if(!S)return null;const H=S.position.clone().add(new P(0,yn*S.userData.fraction,.45)).project(f);return{x:(H.x+1)*innerWidth/2,y:(1-H.y)*innerHeight/2,identity:S.userData.identity}}),pickPoints:p.map(I=>{const S=I.position.clone().add(w.pallets.length>3?new P(0,.35,1.442):new P(0,1.1,0)).project(f);return{x:(S.x+1)*innerWidth/2,y:(1-S.y)*innerHeight/2}})}}}),ye(Us),i.dataset.phase=E,Pe(),{sync:ze,animate:g,startIntro:qe,skipIntro:Ge,setReducedMotion:Je,setView:lt,previewAction:ke}}function wa(i,{checks:e,pendingMessage:t,readyMessage:n}){const r=document.createElement("p");r.id="answer-guidance",r.className="answer-guidance",r.setAttribute("aria-live","polite"),i.before(r);const s=e.map(l=>{const u=i.querySelector(`#${l.id}`),d=document.createElement("span");d.className="answer-field",u.before(d),d.append(u);const h=document.createElement("span");h.className="answer-particles",h.setAttribute("aria-hidden","true");for(let M=0;M<3;M++){const m=document.createElement("span");m.className=`answer-particle${M===1?" is-translucent":""}`,m.innerHTML='<svg viewBox="0 0 14 14" focusable="false"><path d="M2 1.5 L12 7 L2 12.5 Z" /></svg>',h.append(m)}d.append(h);const f=document.createElement("span");f.className="answer-ready",f.textContent=le("answer-cues.ready"),f.setAttribute("aria-hidden","true"),d.append(f);const v={...l,input:u,wrapper:d,engaged:!1};u.setAttribute("aria-describedby",r.id);for(const M of["pointerdown","click","keydown","input"])u.addEventListener(M,()=>{v.engaged=!0,c()});return v});let a=null;function o(){const l=s.find(u=>u.input===a);l&&(l.engaged=!0),c()}for(const l of["pointerdown","click"])i.addEventListener(l,u=>{u.target.closest('button[type="submit"], button:not([type]), input[type="submit"]')&&o()},!0);i.addEventListener("submit",o,!0);function c(){const l=s.find(u=>!u.valid(u.input.value));a=l?.input||null;for(const u of s){const d=u.valid(u.input.value);u.wrapper.classList.toggle("is-current",u===l),u.wrapper.classList.toggle("is-ready",d),u.wrapper.classList.toggle("needs-attention",u===l&&!u.engaged),u.input.dataset.answerState=d?"ready":u===l?"required":"waiting",u.input.dataset.cueEngaged=String(u.engaged),u.input.setAttribute("aria-invalid",String(!!u.input.value.trim()&&!d))}r.classList.toggle("is-ready",!l),r.textContent=l?le("answer-cues.next",{v0:t,v1:l.label}):n}return c(),{refresh:c,focusRequired(){a?.focus({preventScroll:!0})},reveal:c}}function Gv({canRestart:i,restart:e}){const t=[],n=document.createTreeWalker(document,NodeFilter.SHOW_COMMENT);for(;n.nextNode();){const c=n.currentNode.data.match(/^content:(.+)$/);c&&n.currentNode.nextSibling?.nodeType===Node.TEXT_NODE&&t.push([c[1],n.currentNode.nextSibling])}const r=document.createElement("details");r.id="content-tools",r.innerHTML=`<summary>Editable Content</summary>
    <p id="content-identity" class="small"></p>
    <p class="small">Import a complete JSON pack to start a fresh shipment. Current activity and discussion notes will be cleared. It applies only to this page session; reopening uses bundled defaults.</p>
    <label for="content-file">Content JSON File</label><input id="content-file" type="file" accept=".json,application/json" />
    <button id="import-content">Apply Content And Restart</button>
    <button id="restore-content">Restore Bundled Defaults And Restart</button>
    <button id="download-content">Download Active JSON</button>
    <p id="content-status" role="status" aria-live="polite" class="small"></p>
    <p class="small">Reference Links For This Activity</p><div id="content-reference-links"></div>`,document.getElementById("close-reference").before(r);const s=document.getElementById("content-status");function a(){for(const[u,d]of t)d.textContent=le(u);document.getElementById("encyclopedia-entries").replaceChildren(...or().encyclopedia.map(u=>{const d=document.createElement("li"),h=document.createElement("strong"),f=document.createElement("ul");return d.id=`reference-${u.id}`,h.textContent=u.title,f.replaceChildren(...u.paragraphs.map(v=>{const M=document.createElement("li");return M.textContent=v,M})),d.append(h,f),d}));const l=or();document.getElementById("content-identity").textContent=`${l.packId} · Content ${l.contentRevision} · Schema ${l.schemaVersion}${l===yo?" · Bundled Defaults":" · Imported For This Session"}`}function o(){return i()?!0:(s.textContent="Wait for the factory arrival, cargo movement, or drag to finish. Active content and activity are unchanged.",!1)}return document.getElementById("import-content").addEventListener("click",async()=>{if(!o())return;const c=document.getElementById("content-file").files[0];if(!c){s.textContent="Choose a JSON file first. Active content and activity are unchanged.";return}try{if(c.size>Ec)throw new Error("Content file exceeds 256 KiB.");const l=await c.text();if(!o())return;Zu(l),a(),e(),s.textContent=`Applied content ${or().contentRevision}. A fresh shipment is ready. Reopening restores bundled defaults.`}catch(l){s.textContent=`${l.message}
Active content and activity are unchanged. Fix the file and try again.`}}),document.getElementById("restore-content").addEventListener("click",()=>{o()&&(Ju(),a(),e(),s.textContent="Bundled defaults restored. A fresh shipment is ready.")}),document.getElementById("download-content").addEventListener("click",()=>{const c=or(),l=URL.createObjectURL(new Blob([JSON.stringify(c,null,2)+`
`],{type:"application/json"})),u=document.createElement("a");u.href=l,u.download=`${c.packId}-${c.contentRevision}.json`,u.click(),setTimeout(()=>URL.revokeObjectURL(l),1e3)}),a(),{updateActivity(c){const l=or(),u=[...l.lessons,...l.scenarios].find(h=>h.id===c);document.getElementById("content-reference-links").replaceChildren(...(u?.encyclopediaRefs||[]).flatMap((h,f)=>{const v=document.createElement("a");return v.href=`#reference-${h}`,v.textContent=l.encyclopedia.find(M=>M.id===h).title,f?[document.createTextNode(" · "),v]:[v]}))}}}var Vv={version:"0.1.0",codename:"Foam Rings",scope:"local-20261005-json-018",id:"0.1.0_Foam-Rings_local-20261005-json-018_build-004_20261005T003616Z_g5ffbc607dbaf_web",ordinal:4,builtAt:"2026-10-05T00:36:16.336Z",revision:"5ffbc607dbaf0756f980fd5a29c1a82072b6cd5e",fingerprint:"e55d791b236face71c2c285ebe715fedbb31b8d239cd3df94bbff6cc14d594ee",mode:"production"};const ue=i=>document.querySelector(i);let ge=ji(),It=null,Dt=2,Hn=0,Qi=null,ui=!0,gi=!1,xn=null,Ur=!1;const Wv=Gv({canRestart:()=>!ge.pending&&!gi&&!ui,restart(){ge=ji(),It=null,Dt=2,Hn=0,Qi=null,Ur=!1,St(""),Rt(),Fn()}}),hi=ue("#reduce-motion");hi.checked=matchMedia("(prefers-reduced-motion: reduce)").matches;document.documentElement.classList.toggle("reduce-motion",hi.checked);const An=Hv(ue("#scene"),Au,{onArrive(){ui=!1,ue("#intro").hidden=!0,ue("#app").hidden=!1,ue("#view-controls").hidden=!1,Rt(),xn?.reveal(),Fn()},onStatus:St,onDragActive(i){gi=i,Rt()},onTransfer(i,e){if(ui||ge.stage!=="sharing"||ge.pending)return!1;try{return Dt=i,Hn=e,Xi(Eo(ge,i,e)),!0}catch(t){return St(t.message),!1}},onPieceAction(i){if(ui||gi||ge.stage!=="sharing"||ge.pending)return!1;try{return Dt=Bi(ge,i)?.source??Dt,Xi(th(ge,i)),!0}catch(e){return St(e.message),!1}},onHint(i){ue("#gear-hint").textContent=i,ue("#gear-hint").hidden=!i},onBlocked(){St(ue("#answer-guidance")?.textContent||le("main.gear-movement-is-paused-at-this-step-use-reset-arrangement-to-re")),xn?.focusRequired()}});An.setReducedMotion(hi.checked);const cn=Vv;ue("#compact-build").textContent=`${cn.version} · ${cn.codename} · Build ${String(cn.ordinal).padStart(3,"0")}`;ue("#build-id").textContent=`Local Review • ${cn.id}`;ue("#build-provenance").textContent=`${cn.id}
Built: ${cn.builtAt}
Source: ${cn.revision}
Fingerprint: ${cn.fingerprint}
Scope: ${cn.scope}; Ordinal: ${cn.ordinal}; Mode: ${cn.mode}`;function St(i){ue("#feedback").textContent=i}function un(i){try{i()}catch(e){St(e.message),xn?.refresh(),xn?.focusRequired()}}function Fn(){ue("#stage-title").focus({preventScroll:!0})}const qv=()=>({prediction:le("main.what-is-your-prediction"),sharing:le("main.make-equal-shares"),calculation:le("main.connect-the-calculation"),explanation:le("main.explain-the-equal-share"),complete:le("main.shipment-complete")}),Gi=["A","B","C","D","E","F"];function Rt(){Wv.updateActivity(Ur?`layout-${ge.originals.length}`:ge.key);const i=document.activeElement?.dataset?.pallet,e=!!ge.pending||ui||gi,t=ge.stage==="sharing",n=So(ge);document.body.dataset.palletCount=String(ge.pallets.length),ue("#shipment-code").textContent=le("main.text-3",{v0:ws[ge.key].code,v1:ws[ge.key].title}),ue("#originals").innerHTML=ge.originals.map((r,s)=>le("main.pallet-2",{v0:gs[s].glyph,v1:Gi[s],v2:r})).join(""),ue("#prediction-record").hidden=ge.prediction===null,Ur&&(ue("#shipment-code").textContent=le("main.pallet-layout-review",{v0:ge.pallets.length})),ue("#prediction-record").textContent=le("main.first-prediction-units-per-pallet",{v0:ge.prediction}),ue("#loads").innerHTML=ge.pallets.map((r,s)=>{const a=r.at(-1);return le("main.pallet-current-load",{v0:s,v1:Gi[s],v2:n[s]/2,v3:a?le("main.top-piece-unit-from",{v0:Ts(a).name,v1:a.halves/2,v2:gs[a.origin].symbol}):le("main.empty"),v4:It===s,v5:!t||e?"disabled":"",v6:Gi[s],v7:Ki(n[s]),v8:a?le("main.top",{v0:Ts(a).name,v1:gs[a.origin].glyph,v2:a.halves===1?le("main.layer"):le("main.1-ring")}):le("main.empty-pallet")})}).join(""),ue("#loads").querySelectorAll("button").forEach(r=>r.addEventListener("click",()=>Au(Number(r.dataset.pallet)))),ue("#undo").disabled=e||!t||!ge.history.length;for(const r of["reset","replay","next","six-pallet-example"])ue(`#${r}`).disabled=e;for(const r of["overview","front-view"])ue(`#${r}`).disabled=e;if(ue("#next").textContent=ge.key==="whole"?le("main.try-half-rings"):le("main.try-whole-rings"),ue("#stage-title").textContent=qv()[ge.stage],document.querySelectorAll("#steps li").forEach(r=>{r.dataset.step===(ge.stage==="complete"?"explanation":ge.stage)?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),Qi!==ge.stage&&(Qi=ge.stage,Xv()),ue("#stage-content").querySelectorAll("button, input, select, textarea").forEach(r=>{r.disabled=e}),ue("#split")&&(ue("#split").disabled=e||ge.pallets[Dt]?.at(-1)?.halves!==2),ue("#merge")&&(ue("#merge").disabled=e||!wo(ge,Dt)),ue("#open-layout-review").disabled=e,ue("#source")&&(ue("#source").value=String(Dt),ue("#destination").value=String(Hn)),ue("#selection-note")&&(ue("#selection-note").textContent=It===null?le("main.drag-a-top-gear-to-another-pallet-or-select-a-source-and-destina"):le("main.pallet-selected-choose-a-destination-select-it-again-to-cancel",{v0:Gi[It]})),ue("#move")){const r=ge.pallets[Dt]?.at(-1);ue("#move").textContent=r?.halves===1?le("main.move-top-layer"):le("main.move-top-ring"),ue("#move").disabled=e||!r||Dt===Hn}An.sync(ge,It),i!==void 0&&!e&&t&&ue(`[data-pallet="${i}"]`)?.focus({preventScroll:!0})}function Xv(){const i=ue("#stage-content");if(xn=null,ge.stage==="prediction")i.innerHTML=le("main.imagine-sharing-all-the-cargo-equally-how-many-ring-units-might"),ue("#prediction-form").addEventListener("submit",e=>{e.preventDefault(),un(()=>{ge=eh(ge,ue("#prediction").value),St(le("main.prediction-recorded-explore-the-cargo-and-make-equal-shares")),Rt(),Fn()})}),ue("#prediction-form").noValidate=!0,xn=wa(ue("#prediction-form"),{checks:[{id:"prediction",label:le("main.your-predicted-share"),valid:e=>{const t=Qn(e);return Number.isFinite(t)&&t>=0&&t<=1e3}}],pendingMessage:le("main.gear-movement-is-paused-until-you-record-your-prediction-answer"),readyMessage:le("main.prediction-ready-choose-record-prediction-to-unlock-gear-movemen")});else if(ge.stage==="sharing"){const e=ge.pallets.map((t,n)=>le("main.pallet",{v0:n,v1:Gi[n]})).join("");i.innerHTML=le("main.from-to-move-top-ring-split-top-gear-into-halves-merge-matching",{v0:e,v1:e}),ue("#source").addEventListener("change",()=>{Dt=Number(ue("#source").value),It=Dt,Rt()}),ue("#destination").addEventListener("change",()=>{Hn=Number(ue("#destination").value),Rt()}),ue("#move").addEventListener("click",()=>un(()=>Xi(Eo(ge,Dt,Hn)))),ue("#split")?.addEventListener("click",()=>un(()=>Xi(Cc(ge,Dt)))),ue("#merge").addEventListener("click",()=>un(()=>Xi(Lc(ge,Dt))));for(const t of["split","merge"]){for(const n of["focus","mouseenter"])ue(`#${t}`).addEventListener(n,()=>An.previewAction(t,Dt));for(const n of["blur","mouseleave"])ue(`#${t}`).addEventListener(n,()=>An.previewAction(null))}ue("#dispatch").addEventListener("click",()=>un(()=>{const t=ah(ge);ge=t.state,It=null,St(t.message),Rt(),t.success&&Fn()}))}else if(ge.stage==="calculation"){i.innerHTML=le("main.your-loads-are-equal-use-the-original-shipment-to-complete-the-c"),ue("#calculation-form").addEventListener("submit",n=>{n.preventDefault(),un(()=>{const r=lh(ge,{total:ue("#total").value,count:ue("#count").value,mean:ue("#mean").value});ge=r.state,St(r.message),Rt(),r.success?Fn():(xn.refresh(),xn.focusRequired())})});const e=gr(ge)/2,t=ge.originals.length;xn=wa(ue("#calculation-form"),{checks:[{id:"total",label:le("main.total-gears"),valid:n=>Qn(n)===e},{id:"count",label:le("main.number-of-pallets"),valid:n=>Qn(n)===t},{id:"mean",label:le("main.gears-per-pallet"),valid:n=>Qn(n)===e/t}],pendingMessage:le("main.gear-movement-is-paused-while-you-record-the-equal-shares-answer"),readyMessage:le("main.all-three-answers-are-ready-choose-check-calculation-to-continue")})}else if(ge.stage==="explanation"){const e=gr(ge)/2/ge.originals.length;i.innerHTML=le("main.why-divide-by-pallets-what-changed-and-what-stayed-the-same-comp",{v0:ge.originals.join(" + "),v1:ge.originals.length,v2:Number.isInteger(e)?e:le("main.text-2",{v0:Ki(e*2),v1:e}),v3:ge.originals.length,v4:ge.prediction}),ue("#explanation-form").addEventListener("submit",t=>{t.preventDefault(),un(()=>{ge=ch(ge,ue("#explanation").value),St(le("main.equal-sharing-and-calculation-are-complete-keep-your-explanation")),Rt(),Fn()})}),xn=wa(ue("#explanation-form"),{checks:[{id:"explanation",label:le("main.your-explanation-or-discussion-notes"),valid:t=>!!t.trim()}],pendingMessage:le("main.gear-movement-stays-paused-to-keep-your-equal-shares-add-your-ex"),readyMessage:le("main.your-explanation-is-ready-choose-finish-shipment-to-complete-thi")})}else i.innerHTML=le("main.you-shared-the-total-equally-and-connected-it-to-the-mean-your-d"),ue("#completed-equation").textContent=le("main.text",{v0:gr(ge)/2,v1:ge.originals.length,v2:gr(ge)/2/ge.originals.length}),ue("#completed-explanation").textContent=ge.explanation}function Au(i){ui||gi||ge.stage!=="sharing"||ge.pending||un(()=>{if(It===null){if(!ge.pallets[i].length){St(le("main.this-pallet-is-empty-choose-a-source-with-cargo"));return}It=i,Dt=i,St(le("main.pallet-selected",{v0:Gi[i]})),Rt()}else It===i?(It=null,St(le("main.selection-canceled")),Rt()):(Hn=i,Xi(Eo(ge,It,i)))})}async function Xi(i){const e=document.activeElement?.id,t=document.activeElement?.dataset?.pallet,n=ge;ge=i,It=null,St(ge.pending.type==="split"?le("main.one-whole-gear-becomes-two-halves-the-quantity-stays-the-same"):ge.pending.type==="merge"?le("main.these-two-matching-halves-become-one-whole-gear-the-quantity-sta"):le("main.moving-gear-unit-the-original-pallet-records-stay-unchanged",{v0:Ki(ge.pending.halves)})),Rt();try{await An.animate(n,ge,hi.checked)}catch{St(le("main.the-cargo-animation-stopped-the-exact-move-is-complete-you-can-c"))}finally{ge=nh(ge),Rt(),e?document.getElementById(e)?.focus({preventScroll:!0}):t!==void 0&&ue(`[data-pallet="${t}"]`)?.focus({preventScroll:!0})}}ue("#undo").addEventListener("click",()=>un(()=>{ge=ih(ge),It=null,St(le("main.last-move-split-or-merge-undone")),Rt()}));ue("#reset").addEventListener("click",()=>un(()=>{ge=rh(ge),It=null,St(le("main.original-arrangement-restored-your-first-prediction-is-retained")),Rt()}));ue("#replay").addEventListener("click",()=>un(()=>{ge=sh(ge),It=null,Qi=null,St(le("main.same-shipment-fresh-prediction")),Rt(),Fn()}));ue("#next").addEventListener("click",()=>{ge.pending||gi||(ge=ji(ge.key==="whole"?"halves":"whole"),Ur=!1,It=null,Dt=ge.pallets.length-1,Hn=0,Qi=null,St(le("main.new-shipment-ready-start-with-a-prediction")),Rt(),Fn())});ue("#reference-button").addEventListener("click",()=>{const i=ue("#reference").hidden;ue("#reference").hidden=!i,ue("#reference-button").setAttribute("aria-expanded",String(i)),i&&ue("#close-reference").focus()});function Zo(){ue("#reference").hidden=!0,ue("#reference-button").setAttribute("aria-expanded","false"),ue("#reference-button").focus()}ue("#close-reference").addEventListener("click",Zo);ue("#enter-factory").addEventListener("click",()=>{ue("#enter-factory").disabled=!0,ue("#intro-title").textContent=le("main.entering-the-factory"),An.startIntro()});ue("#skip-intro").addEventListener("click",()=>An.skipIntro());hi.addEventListener("change",()=>{document.documentElement.classList.toggle("reduce-motion",hi.checked),An.setReducedMotion(hi.checked)});function Ru(i){if(ge.pending||gi||ui)return;const e=Tc[i];e&&(ge=ji("halves",e),Ur=!0,It=null,Dt=ge.pallets.length-1,Hn=0,Qi=null,ue("#reference").hidden||Zo(),St(le("main.pallet-example-ready-start-with-your-prediction",{v0:ge.pallets.length})),Rt(),Fn())}ue("#open-layout-review").addEventListener("click",()=>Ru(Number(ue("#review-pallet-count").value)));ue("#six-pallet-example").addEventListener("click",()=>Ru(6));ue("#overview").addEventListener("click",()=>{An.setView("overview"),ue("#overview").setAttribute("aria-pressed","true"),ue("#front-view").setAttribute("aria-pressed","false")});ue("#front-view").addEventListener("click",()=>{An.setView("front"),ue("#overview").setAttribute("aria-pressed","false"),ue("#front-view").setAttribute("aria-pressed","true")});document.addEventListener("keydown",i=>{i.key==="Escape"&&!ue("#reference").hidden&&Zo()});ue("#fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{St(le("main.fullscreen-is-unavailable-here-you-can-keep-using-the-window"))}});Rt();
