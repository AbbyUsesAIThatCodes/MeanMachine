import { message as contentMessage } from './content-runtime.js';
import * as THREE from 'three';
import { createSharedWorld } from './shared/world.js';
import { createPallet, RING_THICKNESS } from './shared/cargo.js';
import { createGear } from './gear-presentation.js';
import { createLabel, disposeTree } from './shared/primitives.js';
import { PALETTE } from './shared/palette.js';
import { EXTERIOR_POSE, INTRO_DURATION_MS, sampleIntro } from './shared/camera.js';
import { stackLayout } from './piece-layout.js';
import { ORIGINS, loads, formatQuantity, pieceAction } from './math-state.js';
import { palletLayout } from './pallet-layout.js';
import { createLevelDrag, projectLevelDrag } from './drag-plane.js';

const letter = index => String.fromCharCode(65 + index);
const smooth = t => t * t * (3 - 2 * t);
export function createPresentation(container, onPalletClick, { onArrive, onStatus, onTransfer, onDragActive, onPieceAction, onHint, onBlocked } = {}) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false }); }
  catch { queueMicrotask(() => { onArrive?.(); onStatus?.(contentMessage("scene.the-3d-view-is-unavailable-all-sharing-controls-remain-available")); }); return { sync() {}, async animate() {}, startIntro() {}, skipIntro() {}, setReducedMotion() {}, setView() {}, previewAction() {} }; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(PALETTE.sky);
  container.append(renderer.domElement);
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(PALETTE.sky, 48, 115);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x829a71, 2.3));
  const sun = new THREE.DirectionalLight(0xfff3d7, 3.2);
  sun.position.set(-7, 24, 18); sun.target.position.set(-10, 0, -5);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -38, right: 38, top: 35, bottom: -35, near: 1, far: 80 });
  sun.shadow.normalBias = 0.03; scene.add(sun, sun.target);
  const world = createSharedWorld(); scene.add(world.root);
  const camera = new THREE.PerspectiveCamera(EXTERIOR_POSE.fov, innerWidth / innerHeight, 0.1, 180);
  const target = new THREE.Vector3();
  const cargo = new THREE.Group(); cargo.name = 'Mean Machine Observations'; scene.add(cargo);
  const ringObjects = new Map();
  let pallets = [], highlights = [], state = null, currentKey = null, lastPallets = null;
  let phase = 'exterior', introStarted = null, reducedMotion = false, contextLost = false, activeMotion = null, view = 'overview';
  let teachingPose, fittedArea = null;
  let gesture = null, hovered = null, dropTarget = null, suppressClick = false;
  let press = null, completedPress = null, pendingClick = null, hoverAction = null, hoverKey = '';
  const glows = Array.from({ length: 2 }, () => {
    const glow = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial({ color: 0xffe598, transparent: true, opacity: 0.34, depthWrite: false, side: THREE.DoubleSide }));
    glow.visible = false; glow.renderOrder = 4; scene.add(glow); return glow;
  });
  renderer.domElement.style.touchAction = 'none';
  const floorY = 0.14;
  const rowZ = -7.1;
  const spacing = 2.7;
  const palletPosition = index => { const p = palletLayout(state.pallets.length)[index]; return new THREE.Vector3(p.x, p.y, p.z); };
  function teachingArea() {
    const left = document.querySelector('.shipment')?.getBoundingClientRect().right || 254;
    const right = document.querySelector('.activity')?.getBoundingClientRect().left || innerWidth - 336;
    const bottom = document.querySelector('#loads')?.getBoundingClientRect().top || innerHeight - 245;
    return { left: left + 18, right: right - 18, top: 167, bottom: Math.max(407, bottom - 18) };
  }

  function applyPose(pose) {
    camera.position.fromArray(pose.position); target.fromArray(pose.target);
    camera.up.set(0, 1, 0); camera.lookAt(target);
    if (pose.roll) camera.rotateZ(pose.roll);
    camera.updateMatrixWorld();
  }
  function fitTeachingView() {
    if (state?.pallets.length > 3) {
      const positions = palletLayout(state.pallets.length), area = fittedArea ||= teachingArea();
      // Fit once from immutable shipment quantities, never the current stacks.
      // Keep the normal shipment prominent, with one extra gear of headroom.
      // Reserving all 18 gears on every pallet made the six-pallet view too distant.
      const height = Math.max(...state.originals) + (state.pallets.length === 6 ? 1 : 0);
      const min = new THREE.Vector3(Math.min(...positions.map(p => p.x)) - 1.4, floorY, Math.min(...positions.map(p => p.z)) - 1.2);
      const max = new THREE.Vector3(Math.max(...positions.map(p => p.x)) + 1.4, floorY + 0.29 + height * RING_THICKNESS + 0.25, Math.max(...positions.map(p => p.z)) + 1.8);
      const center = min.clone().add(max).multiplyScalar(0.5);
      const direction = (state.pallets.length === 6
        ? new THREE.Vector3(...(view === 'front' ? [0, 0.6, 1] : [0.22, 0.57, 0.91]))
        : new THREE.Vector3(0, view === 'front' ? 0.62 : 0.72, view === 'front' ? 0.78 : 0.69)).normalize();
      const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), direction).normalize(), up = new THREE.Vector3().crossVectors(direction, right);
      const tanY = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const fitX = tanY * camera.aspect * Math.max(280, area.right - area.left) / innerWidth;
      const fitY = tanY * Math.max(220, area.bottom - area.top) / innerHeight;
      let distance = 0;
      for (const x of [min.x, max.x]) for (const y of [min.y, max.y]) for (const z of [min.z, max.z]) {
        const relative = new THREE.Vector3(x, y, z).sub(center), towardCamera = relative.dot(direction);
        distance = Math.max(distance, Math.abs(relative.dot(right)) / fitX + towardCamera, Math.abs(relative.dot(up)) / fitY + towardCamera);
      }
      teachingPose = { position: center.clone().addScaledVector(direction, distance * 1.04).toArray(), target: center.toArray(), roll: 0 };
      return;
    }
    const left = document.querySelector('.shipment')?.getBoundingClientRect().right || (innerWidth <= 1050 ? 206 : 254);
    const right = document.querySelector('.activity')?.getBoundingClientRect().left || innerWidth - (innerWidth <= 1050 ? 292 : 336);
    const available = Math.max(360, right - left - 28);
    const rowWidth = ((state?.pallets.length || 3) - 1) * spacing + 2.5;
    const distance = Math.max(13.7, rowWidth / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect * available / innerWidth));
    const center = [-14, 1.2, rowZ];
    teachingPose = { position: view === 'front' ? [-14, 1.2 + distance * 0.6, rowZ + distance] : [-14 + distance * 0.22, 1.2 + distance * 0.57, rowZ + distance * 0.91], target: center, roll: 0 };
  }
  function fitOverlay(amount = 1) {
    if (state?.pallets.length > 3) {
      const area = fittedArea || teachingArea();
      camera.setViewOffset(innerWidth, innerHeight, (innerWidth / 2 - (area.left + area.right) / 2) * amount, (innerHeight / 2 - (area.top + area.bottom) / 2) * amount, innerWidth, innerHeight);
      camera.updateProjectionMatrix(); return;
    }
    const left = document.querySelector('.shipment')?.getBoundingClientRect().right || (innerWidth <= 1050 ? 206 : 254);
    const right = document.querySelector('.activity')?.getBoundingClientRect().left || innerWidth - (innerWidth <= 1050 ? 292 : 336);
    camera.setViewOffset(innerWidth, innerHeight, (innerWidth / 2 - (left + right) / 2) * amount, 50 * amount, innerWidth, innerHeight);
    camera.updateProjectionMatrix();
  }
  function render() { if (!contextLost) renderer.render(scene, camera); }
  function disposeObject(object) { object.removeFromParent(); disposeTree(object); }
  function clearCargo() {
    for (const object of [...cargo.children]) disposeObject(object);
    ringObjects.clear(); pallets = []; highlights = [];
  }
  function createPallets() {
    clearCargo();
    state.pallets.forEach((_, index) => {
      const pallet = createPallet({ id: letter(index), label: contentMessage("scene.pallet", { v0: letter(index) }), quantity: 0 });
      // Move only the generated display board forward, so it cannot mask the
      // lowest rings. Frozen source geometry and the pallet footprint stay intact.
      const board = pallet.children.find(child => child.isMesh && child.position.z === 0.99 && child.position.y === 0.62);
      if (board) {
        board.position.z += 0.4; board.position.y = state.pallets.length > 3 ? 0.48 : 0.35;
        board.scale.y = state.pallets.length > 3 ? 0.9 : 0.75;
        if (state.pallets.length > 3) { board.scale.x = 1.22; board.rotation.x = -Math.PI / 4; }
      }
      pallet.userData.palletIndex = index; pallet.position.copy(palletPosition(index));
      cargo.add(pallet); pallets.push(pallet);
      const halo = new THREE.Mesh(new THREE.RingGeometry(1.19, 1.29, 64), new THREE.MeshBasicMaterial({ color: 0x547c7f, transparent: true, opacity: 0.5, side: THREE.DoubleSide }));
      halo.rotation.x = -Math.PI / 2; halo.position.copy(pallet.position).add(new THREE.Vector3(0, 0.013, 0)); cargo.add(halo); highlights.push(halo);
    });
  }
  function placements(next) {
    const result = new Map();
    next.pallets.forEach((pieces, index) => stackLayout(pieces, RING_THICKNESS, 0.29).forEach(placement => {
      result.set(placement.id, { ...placement, pallet: index, position: palletPosition(index).add(new THREE.Vector3(0, placement.y, 0)) });
    }));
    return result;
  }
  function addRing(piece) {
    const origin = ORIGINS[piece.origin];
    const object = createGear(piece, origin.glyph);
    object.userData.origin = piece.origin; object.userData.root = piece.root;
    cargo.add(object); ringObjects.set(piece.id, object); return object;
  }
  function updateLabels(next) {
    loads(next).forEach((quantity, index) => {
      if (pallets[index].userData.halfUnits === quantity) return;
      const old = pallets[index].getObjectByName('Quantity Tag'); if (old) disposeObject(old);
      const large = next.pallets.length > 3;
      const tag = large
        ? createLabel(pallets[index], contentMessage("scene.text", { v0: letter(index), v1: formatQuantity(quantity) }), 1.55, 0.747, [0, 0.517, 1.427])
        : createLabel(pallets[index], formatQuantity(quantity), 1.29, 0.6225, [0, 0.35, 1.442], { subtitle: contentMessage("scene.pallet-current-load", { v0: letter(index) }) });
      if (large) tag.rotation.x = -Math.PI / 4;
      tag.name = 'Quantity Tag'; pallets[index].userData.halfUnits = quantity;
      pallets[index].userData.quantity = quantity / 2;
    });
  }
  function arrange(next) {
    const layout = placements(next);
    for (const [id, object] of ringObjects) if (!layout.has(id)) { disposeObject(object); ringObjects.delete(id); }
    for (const piece of next.pallets.flat()) {
      const object = ringObjects.get(piece.id) || addRing(piece);
      const placement = layout.get(piece.id);
      object.position.copy(placement.position); object.scale.set(1, 1, 1); object.rotation.set(0, 0, 0); object.visible = true;
      object.userData.palletIndex = placement.pallet;
    }
    updateLabels(next); lastPallets = next.pallets;
    // Cargo changes never replace the chosen camera pose or view offset.
  }
  function sync(next, selected) {
    if (state && (next.pending || next.stage !== state.stage || next.pallets !== state.pallets)) clearClickIntent();
    if (gesture && (next.pending || next.stage !== 'sharing' || next.key !== state?.key || next.pallets[gesture.source]?.at(-1)?.id !== gesture.pieceId)) cancelDrag(contentMessage("scene.pickup-canceled"));
    state = next;
    if (next.pending || next.stage !== 'sharing') showHover(null);
    const layoutKey = `${next.key}:${next.originals.join(',')}`;
    if (currentKey !== layoutKey) {
      currentKey = layoutKey; fittedArea = null; createPallets(); lastPallets = null;
      if (phase === 'teaching') { fitTeachingView(); applyPose(teachingPose); fitOverlay(); }
    }
    if (!next.pending && next.pallets !== lastPallets) arrange(next);
    highlights.forEach((object, index) => { object.material.color.set(index === selected ? 0xc73d78 : ['calculation', 'explanation', 'complete'].includes(next.stage) ? 0x34865b : 0x547c7f); object.material.opacity = index === selected ? 1 : 0.5; });
    renderer.domElement.style.cursor = gesture?.moved ? 'grabbing' : hovered ? 'grab' : phase === 'teaching' && state.stage === 'sharing' && !state.pending ? 'pointer' : 'default';
    render();
  }
  function arrive() {
    if (phase === 'teaching') return;
    phase = 'teaching'; introStarted = null; world.factoryShell.visible = false;
    // Reveal overlays before measuring the usable teaching viewport.
    container.dataset.phase = phase; onArrive?.();
    fitTeachingView(); applyPose(teachingPose); fitOverlay(); render();
  }
  function startIntro() {
    if (phase !== 'exterior') return;
    if (reducedMotion) { arrive(); return; }
    phase = 'entering'; container.dataset.phase = phase; introStarted = performance.now();
    requestAnimationFrame(frame);
  }
  function frame(now) {
    if (phase === 'entering') {
      const elapsed = now - introStarted;
      fitTeachingView(); const pose = sampleIntro('mean', elapsed, teachingPose);
      applyPose(pose); world.factoryShell.visible = elapsed < INTRO_DURATION_MS * 0.6;
      if (elapsed > INTRO_DURATION_MS * 0.6) fitOverlay(smooth(Math.min(1, (elapsed / INTRO_DURATION_MS - 0.6) / 0.4)));
      render(); if (pose.complete) arrive(); else requestAnimationFrame(frame);
    }
  }
  function setView(nextView) {
    if (phase !== 'teaching' || state?.pending || gesture?.moved) return;
    view = nextView; fitTeachingView(); applyPose(teachingPose); fitOverlay(); render();
  }
  function setReducedMotion(value) { reducedMotion = value; if (value) { if (phase === 'entering') arrive(); activeMotion?.finish(); } }
  function squash(object, sy) { object.scale.set(1 / Math.sqrt(sy), sy, 1 / Math.sqrt(sy)); }
  async function animate(previous, next, reduceMotion) {
    if (reduceMotion || reducedMotion || contextLost) { arrange(next); render(); return; }
    const pending = next.pending;
    const layout = placements(next);
    updateLabels(next);
    const moving = ringObjects.get(pending.pieceId);
    if (!moving) { arrange(next); render(); return; }
    const start = moving.position.clone();
    const children = [];
    const duration = pending.type === 'split' ? 1150 : pending.type === 'merge' ? 750 : 520;
    const mergeParts = pending.type === 'merge' ? pending.children.map(id => ({ object: ringObjects.get(id), start: ringObjects.get(id).position.clone() })) : [];
    await new Promise(resolve => {
      const started = performance.now();
      let finished = false;
      function finish() {
        if (finished) return; finished = true; activeMotion = null; arrange(next); render(); resolve();
      }
      activeMotion = { finish };
      function step(now) {
        if (finished) return;
        const t = Math.min(1, (now - started) / duration);
        if (pending.type === 'move') {
          moving.position.lerpVectors(start, layout.get(pending.pieceId).position, smooth(t));
          moving.position.y += Math.sin(Math.PI * t) * 1.1;
          squash(moving, t < 0.72 ? 1 + 0.2 * Math.sin(Math.PI * t / 0.72) : 1 - 0.24 * Math.sin((t - 0.72) / 0.28 * Math.PI));
          moving.rotation.z = Math.sin(Math.PI * t) * 0.16 * Math.sign(layout.get(pending.pieceId).position.x - start.x || 1);
        } else if (pending.type === 'merge') {
          if (t < 0.65) {
            const p = t / 0.65;
            mergeParts.forEach(({ object, start: origin }, index) => {
              object.position.copy(origin); object.position.y += Math.sin(Math.PI * p) * (index ? 0.5 : 0.15);
              object.position.x += (index ? 1 : -1) * Math.sin(Math.PI * p) * 0.13;
              object.rotation.z = (index ? 1 : -1) * Math.sin(Math.PI * p) * 0.05;
            });
          } else {
            if (!children.length) {
              mergeParts.forEach(({ object }) => { object.visible = false; });
              children.push(addRing(next.pallets.flat().find(piece => piece.id === pending.mergedId)));
            }
            const whole = children[0], p = (t - 0.65) / 0.35;
            whole.position.copy(layout.get(pending.mergedId).position);
            squash(whole, 1 - 0.16 * Math.sin(Math.PI * p));
          }
        } else if (t < 0.2) {
          squash(moving, 1 - 0.3 * Math.sin(t / 0.2 * Math.PI / 2));
        } else {
          if (!children.length) {
            moving.visible = false;
            for (const id of pending.children) children.push(addRing(next.pallets.flat().find(piece => piece.id === id)));
          }
          const p = (t - 0.2) / 0.8;
          children.forEach((object, index) => {
            object.position.copy(layout.get(object.userData.identity).position);
            object.position.y += Math.sin(Math.PI * p) * (index ? 1.55 : 0.78) + Math.sin(3 * Math.PI * p) * 0.12 * (1 - p);
            object.position.x += (index ? 1 : -1) * Math.sin(Math.PI * p) * 0.32;
            squash(object, 1 + Math.sin(3 * Math.PI * p) * 0.25 * (1 - p));
            object.rotation.z = (index ? 1 : -1) * Math.sin(2 * Math.PI * p) * 0.08 * (1 - p);
          });
        }
        render(); if (t >= 1) finish(); else requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  const raycaster = new THREE.Raycaster();
  function aim(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    raycaster.setFromCamera(new THREE.Vector2((event.clientX - rect.left) / rect.width * 2 - 1, 1 - (event.clientY - rect.top) / rect.height * 2), camera);
  }
  function canPick() { return phase === 'teaching' && state?.stage === 'sharing' && !state.pending && !contextLost; }
  function hitRing(event) {
    aim(event);
    for (const hit of raycaster.intersectObjects([...ringObjects.values()], true)) {
      // Decorative line raycasts have a wide world-unit threshold. They must
      // never turn an adjacent/lower piece into a top-piece pickup target.
      if (!hit.object.isMesh) continue;
      let object = hit.object;
      while (object && !object.userData.identity) object = object.parent;
      if (!object) continue;
      return object;
    }
    return null;
  }
  function ringAt(event) {
    const object = hitRing(event);
    return object && state.pallets[object.userData.palletIndex]?.at(-1)?.id === object.userData.identity ? object : null;
  }
  function hoverAt(event) {
    const object = hitRing(event);
    return object && (state.pallets[object.userData.palletIndex]?.at(-1)?.id === object.userData.identity || pieceAction(state, object.userData.identity)) ? object : null;
  }
  function palletAt(event, ignoredId = null) {
    if (document.elementFromPoint(event.clientX, event.clientY) !== renderer.domElement) return null;
    aim(event);
    const objects = [...pallets, ...[...ringObjects.values()].filter(object => object.userData.identity !== ignoredId)];
    for (const hit of raycaster.intersectObjects(objects, true)) {
      if (!hit.object.isMesh) continue;
      let object = hit.object;
      while (object && object.userData.palletIndex === undefined) object = object.parent;
      if (object) return object.userData.palletIndex;
    }
    return null;
  }
  function showHover(object) {
    const action = object ? pieceAction(state, object.userData.identity) : null;
    const key = object ? `${object.userData.identity}:${action?.type}:${action?.pieceIds.join(',')}` : '';
    if (hovered === object && hoverKey === key) return;
    hovered = object; hoverAction = action; hoverKey = key;
    const affected = action ? action.pieceIds.map(id => ringObjects.get(id)) : object ? [object] : [];
    glows.forEach((glow, index) => {
      glow.geometry.dispose(); const targetObject = affected[index];
      if (targetObject) {
        glow.geometry = targetObject.children.find(child => child.isMesh).geometry.clone();
        glow.position.copy(targetObject.position); glow.position.y += 0.006; glow.scale.set(1.055, 1.07, 1.055);
      }
      glow.visible = Boolean(targetObject);
    });
    onHint?.(action?.type === 'split' ? contentMessage("scene.double-click-to-split-this-gear-drag-to-move-it") : action?.type === 'merge' ? contentMessage("scene.double-click-either-highlighted-half-to-merge-this-top-pair") : object ? contentMessage("scene.drag-this-half-to-move-it-merging-needs-its-matching-half-beside") : '');
    renderer.domElement.style.cursor = gesture?.moved ? 'grabbing' : object ? 'grab' : canPick() ? 'pointer' : 'default';
    render();
  }
  function previewAction(type, source) {
    const object = type && canPick() ? ringObjects.get(state.pallets[source]?.at(-1)?.id) : null;
    showHover(object && pieceAction(state, object.userData.identity)?.type === type ? object : null);
  }
  function clearClickIntent() {
    if (pendingClick) clearTimeout(pendingClick.timer);
    pendingClick = null; completedPress = null;
  }
  function showDestination(index) {
    dropTarget = index;
    highlights.forEach((object, i) => {
      object.material.color.set(i === index ? 0x2dd6a0 : i === gesture?.source ? 0xc73d78 : 0x547c7f);
      object.material.opacity = i === index || i === gesture?.source ? 1 : 0.4;
      object.scale.setScalar(i === index ? 1.08 : 1);
    });
  }
  function releaseGesture() {
    const previous = gesture; gesture = null; dropTarget = null; showHover(null);
    highlights.forEach(object => object.scale.setScalar(1));
    if (previous && renderer.domElement.hasPointerCapture(previous.pointerId)) renderer.domElement.releasePointerCapture(previous.pointerId);
    if (previous?.moved) onDragActive?.(false);
    return previous;
  }
  function cancelDrag(message = contentMessage("scene.pickup-canceled-the-same-piece-returned-to-its-stack")) {
    press = null; clearClickIntent();
    if (!gesture) return;
    const moved = gesture.moved; suppressClick = true;
    releaseGesture(); arrange(state); showDestination(null); render();
    if (moved) onStatus?.(message);
  }
  renderer.domElement.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0 || gesture) return;
    if (!canPick()) { clearClickIntent(); if (phase === 'teaching' && !state?.pending) { event.preventDefault(); onBlocked?.(); } return; }
    suppressClick = false;
    completedPress = null;
    const hitObject = hitRing(event);
    press = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, pieceId: hitObject?.userData.identity || null, moved: false };
    const object = ringAt(event); if (!object) return;
    const height = Math.max(floorY + 0.29, ...[...ringObjects.values()].map(ring => ring.position.y + RING_THICKNESS * ring.userData.fraction)) + 0.18;
    const drag = createLevelDrag(raycaster.ray, object.position, height); if (!drag) return;
    gesture = { pointerId: event.pointerId, source: object.userData.palletIndex, pieceId: object.userData.identity, object, x: event.clientX, y: event.clientY, drag, moved: false };
    renderer.domElement.setPointerCapture(event.pointerId);
  });
  renderer.domElement.addEventListener('pointermove', event => {
    if (press && press.pointerId === event.pointerId && Math.hypot(event.clientX - press.x, event.clientY - press.y) >= 5) {
      press.moved = true; suppressClick = true; clearClickIntent();
    }
    if (gesture) {
      if (event.pointerId !== gesture.pointerId) return;
      if (!gesture.moved && Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) < 5) return;
      if (!gesture.moved) { gesture.moved = true; suppressClick = true; showHover(null); onDragActive?.(true); onStatus?.(contentMessage("scene.gear-picked-up-drop-on-another-pallet-or-press-escape-to-cancel")); }
      aim(event);
      const hit = projectLevelDrag(raycaster.ray, gesture.drag);
      if (hit) gesture.object.position.copy(hit);
      const destination = palletAt(event, gesture.pieceId);
      showDestination(destination === gesture.source ? null : destination);
      renderer.domElement.style.cursor = 'grabbing'; event.preventDefault(); render();
    } else if (canPick()) showHover(hoverAt(event)); else showHover(null);
  });
  renderer.domElement.addEventListener('pointerup', event => {
    if (press?.pointerId === event.pointerId) { completedPress = press; press = null; }
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    if (!gesture.moved) { releaseGesture(); return; }
    const destination = palletAt(event, gesture.pieceId);
    if (destination === null || destination === gesture.source) { cancelDrag(contentMessage("scene.drop-canceled-choose-a-different-pallet-no-cargo-changed")); return; }
    const completed = releaseGesture(); suppressClick = true; clearClickIntent();
    try {
      if (!onTransfer?.(completed.source, destination)) { arrange(state); showDestination(null); render(); }
    } catch { arrange(state); showDestination(null); render(); onStatus?.(contentMessage("scene.drop-canceled-your-cargo-is-unchanged")); }
  });
  renderer.domElement.addEventListener('pointercancel', () => cancelDrag());
  renderer.domElement.addEventListener('lostpointercapture', () => { if (gesture || press) cancelDrag(); });
  renderer.domElement.addEventListener('pointerleave', () => { if (!gesture) showHover(null); });
  window.addEventListener('blur', () => { cancelDrag(); showHover(null); activeMotion?.finish(); });
  document.addEventListener('pointerdown', event => { if (event.target !== renderer.domElement) clearClickIntent(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && (gesture || press || pendingClick)) { event.preventDefault(); cancelDrag(); showHover(null); }
    else if (event.target !== renderer.domElement) clearClickIntent();
  });
  renderer.domElement.addEventListener('click', event => {
    const completed = completedPress; completedPress = null;
    if (suppressClick) { suppressClick = false; clearClickIntent(); return; }
    if (!canPick() || !completed || completed.moved) { clearClickIntent(); return; }
    const object = hitRing(event), pieceId = object?.userData.identity || null;
    if (pieceId !== completed.pieceId) { clearClickIntent(); return; }
    const source = palletAt(event); if (source === null) return;
    const action = pieceId ? pieceAction(state, pieceId) : null;
    const key = action ? `${action.type}:${action.source}:${action.pieceIds.join(',')}` : pieceId;
    if (event.detail === 2) {
      const first = pendingClick;
      const matches = first && first.key === key && first.pallets === state.pallets;
      clearClickIntent(); event.preventDefault();
      if (matches && action) onPieceAction?.(pieceId);
      else if (pieceId) onStatus?.(contentMessage("scene.split-a-whole-top-gear-or-merge-its-matching-halves-together-at"));
      return;
    }
    clearClickIntent();
    // Triple/repeated clicks, and a click after dragging, cannot become a new
    // transform. A transform requires two clean presses on the same preview.
    if (event.detail !== 1) return;
    if (!pieceId) { onPalletClick(source); return; }
    const candidate = { key, source, pallets: state.pallets, timer: null };
    candidate.timer = setTimeout(() => {
      if (pendingClick !== candidate) return;
      pendingClick = null;
      if (canPick() && state.pallets === candidate.pallets) onPalletClick(candidate.source);
    }, 500);
    pendingClick = candidate;
  });
  renderer.domElement.addEventListener('dblclick', event => event.preventDefault());
  window.addEventListener('resize', () => {
    cancelDrag(); showHover(null);
    fittedArea = null; camera.aspect = innerWidth / innerHeight; camera.clearViewOffset(); camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight);
    if (phase === 'teaching') { fitTeachingView(); applyPose(teachingPose); fitOverlay(); }
    render();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { cancelDrag(); if (phase === 'entering') arrive(); activeMotion?.finish(); } });
  renderer.domElement.addEventListener('webglcontextlost', event => { event.preventDefault(); cancelDrag(); contextLost = true; if (phase !== 'teaching') arrive(); activeMotion?.finish(); onStatus?.(contentMessage("scene.the-3d-view-paused-your-exact-quantities-are-safe-all-sharing-co")); });
  renderer.domElement.addEventListener('webglcontextrestored', () => { contextLost = false; render(); onStatus?.(contentMessage("scene.the-3d-view-is-ready-again")); });
  // Read-only scene evidence for browser QA; no game-state mutations are exposed.
  window.__meanScene = Object.freeze({ snapshot() {
    return { phase, camera: { position: camera.position.toArray(), target: target.toArray(), fov: camera.fov, view: camera.view ? { ...camera.view } : null }, shellVisible: world.factoryShell.visible, contextLost,
      stage: state.stage, pending: state.pending ? { ...state.pending } : null, originals: [...state.originals],
      interaction: { held: gesture?.moved ? gesture.pieceId : null, heldBounds: gesture?.moved ? (() => { const bounds = new THREE.Box3().setFromObject(gesture.object); return { min: bounds.min.toArray(), max: bounds.max.toArray() }; })() : null, hovered: hovered?.userData.identity || null, destination: dropTarget, actionPreview: hoverAction ? { ...hoverAction } : null, pendingSingleClick: Boolean(pendingClick) },
      pallets: pallets.map(p => ({ id: p.userData.id, quantity: p.userData.quantity, position: p.position.toArray() })),
      palletLabelBounds: pallets.map(pallet => {
        const tag = pallet.getObjectByName('Quantity Tag'); tag.geometry.computeBoundingBox();
        const { min, max } = tag.geometry.boundingBox;
        const points = [new THREE.Vector3(min.x, min.y, 0), new THREE.Vector3(min.x, max.y, 0), new THREE.Vector3(max.x, min.y, 0), new THREE.Vector3(max.x, max.y, 0)]
          .map(point => { const p = tag.localToWorld(point).project(camera); return { x: (p.x + 1) * innerWidth / 2, y: (1 - p.y) * innerHeight / 2 }; });
        return { id: pallet.userData.id, points, width: Math.max(...points.map(p => p.x)) - Math.min(...points.map(p => p.x)), height: Math.max(...points.map(p => p.y)) - Math.min(...points.map(p => p.y)) };
      }),
      rings: [...ringObjects.values()].filter(o => o.visible).map(o => ({ ...o.userData, position: o.position.toArray(), scale: o.scale.toArray(), rotation: [o.rotation.x, o.rotation.y, o.rotation.z] })),
      ringSurfacePoints: [...ringObjects.values()].map(object => { const projected = object.position.clone().add(new THREE.Vector3(0, RING_THICKNESS * object.userData.fraction / 2, 0.7)).project(camera); return { identity: object.userData.identity, x: (projected.x + 1) * innerWidth / 2, y: (1 - projected.y) * innerHeight / 2 }; }),
      topPickPoints: state.pallets.map(pieces => { const object = ringObjects.get(pieces.at(-1)?.id); if (!object) return null; const projected = object.position.clone().add(new THREE.Vector3(0, RING_THICKNESS * object.userData.fraction, 0.45)).project(camera); return { x: (projected.x + 1) * innerWidth / 2, y: (1 - projected.y) * innerHeight / 2, identity: object.userData.identity }; }),
      pickPoints: pallets.map(p => { const projected = p.position.clone().add(state.pallets.length > 3 ? new THREE.Vector3(0, 0.35, 1.442) : new THREE.Vector3(0, 1.1, 0)).project(camera); return { x: (projected.x + 1) * innerWidth / 2, y: (1 - projected.y) * innerHeight / 2 }; }) };
  } });
  applyPose(EXTERIOR_POSE); container.dataset.phase = phase; render();
  return { sync, animate, startIntro, skipIntro: arrive, setReducedMotion, setView, previewAction };
}
