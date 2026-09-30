import * as THREE from 'three';
import { createSharedWorld } from './shared/world.js';
import { createPallet, createFoamRing, RING_THICKNESS } from './shared/cargo.js';
import { createLabel, disposeTree } from './shared/primitives.js';
import { PALETTE } from './shared/palette.js';
import { EXTERIOR_POSE, INTRO_DURATION_MS, sampleIntro } from './shared/camera.js';
import { stackLayout } from './piece-layout.js';
import { ORIGINS, loads, formatQuantity } from './math-state.js';

const letter = index => String.fromCharCode(65 + index);
const smooth = t => t * t * (3 - 2 * t);
export function createPresentation(container, onPalletClick, { onArrive, onStatus } = {}) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false }); }
  catch { queueMicrotask(() => { onArrive?.(); onStatus?.('The 3D view is unavailable. All sharing controls remain available.'); }); return { sync() {}, async animate() {}, startIntro() {}, skipIntro() {}, setReducedMotion() {}, setView() {} }; }
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
  let teachingPose;
  const floorY = 0.14;
  const rowZ = -7.1;
  const spacing = 2.7;
  const palletPosition = index => new THREE.Vector3(-14 + (index - (state.pallets.length - 1) / 2) * spacing, floorY, rowZ);

  function applyPose(pose) {
    camera.position.fromArray(pose.position); target.fromArray(pose.target);
    camera.up.set(0, 1, 0); camera.lookAt(target);
    if (pose.roll) camera.rotateZ(pose.roll);
    camera.updateMatrixWorld();
  }
  function fitTeachingView() {
    const left = document.querySelector('.shipment')?.getBoundingClientRect().right || (innerWidth <= 1050 ? 206 : 254);
    const right = document.querySelector('.activity')?.getBoundingClientRect().left || innerWidth - (innerWidth <= 1050 ? 292 : 336);
    const available = Math.max(360, right - left - 28);
    const rowWidth = ((state?.pallets.length || 3) - 1) * spacing + 2.5;
    const distance = Math.max(13.7, rowWidth / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect * available / innerWidth));
    const center = [-14, 1.2, rowZ];
    teachingPose = { position: view === 'front' ? [-14, 1.2 + distance * 0.24, rowZ + distance] : [-14 + distance * 0.22, 1.2 + distance * 0.57, rowZ + distance * 0.91], target: center, roll: 0 };
  }
  function fitOverlay(amount = 1) {
    const left = document.querySelector('.shipment')?.getBoundingClientRect().right || (innerWidth <= 1050 ? 206 : 254);
    const right = document.querySelector('.activity')?.getBoundingClientRect().left || innerWidth - (innerWidth <= 1050 ? 292 : 336);
    camera.setViewOffset(innerWidth, innerHeight, (innerWidth / 2 - (left + right) / 2) * amount, 28 * amount, innerWidth, innerHeight);
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
      const pallet = createPallet({ id: letter(index), label: `Pallet ${letter(index)}`, quantity: 0 });
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
    const object = createFoamRing({ identity: piece.id, color: origin.color, pattern: origin.relief, symbol: origin.glyph, fraction: piece.halves / 2 });
    object.userData.origin = piece.origin; object.userData.root = piece.root;
    cargo.add(object); ringObjects.set(piece.id, object); return object;
  }
  function updateLabels(next) {
    loads(next).forEach((quantity, index) => {
      if (pallets[index].userData.halfUnits === quantity) return;
      const old = pallets[index].getObjectByName('Quantity Tag'); if (old) disposeObject(old);
      const tag = createLabel(pallets[index], formatQuantity(quantity), 1.29, 0.83, [0, 0.62, 1.042], { subtitle: `Pallet ${letter(index)} • Current Load` });
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
  }
  function sync(next, selected) {
    state = next;
    if (currentKey !== next.key) {
      currentKey = next.key; createPallets(); lastPallets = null;
      if (phase === 'teaching') { fitTeachingView(); applyPose(teachingPose); fitOverlay(); }
    }
    if (!next.pending && next.pallets !== lastPallets) arrange(next);
    highlights.forEach((object, index) => { object.material.color.set(index === selected ? 0xc73d78 : ['calculation', 'explanation', 'complete'].includes(next.stage) ? 0x34865b : 0x547c7f); object.material.opacity = index === selected ? 1 : 0.5; });
    renderer.domElement.style.cursor = phase === 'teaching' && state.stage === 'sharing' && !state.pending ? 'pointer' : 'default';
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
    if (phase !== 'teaching' || state?.pending) return;
    view = nextView; fitTeachingView(); applyPose(teachingPose); fitOverlay(); render();
  }
  function setReducedMotion(value) { reducedMotion = value; if (value) { if (phase === 'entering') arrive(); activeMotion?.finish(); } }
  function squash(object, sy) { object.scale.set(1 / Math.sqrt(sy), sy, 1 / Math.sqrt(sy)); }
  async function animate(previous, next, reduceMotion) {
    if (reduceMotion || reducedMotion || contextLost) { arrange(next); render(); return; }
    const pending = next.pending;
    const layout = placements(next);
    const moving = ringObjects.get(pending.pieceId);
    if (!moving) { arrange(next); render(); return; }
    const start = moving.position.clone();
    const children = [];
    const duration = pending.type === 'split' ? 1150 : 620;
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
          squash(moving, t < 0.8 ? 1 + 0.16 * Math.sin(Math.PI * t) : 1 - 0.16 * Math.sin((t - 0.8) / 0.2 * Math.PI));
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
  renderer.domElement.addEventListener('click', event => {
    if (phase !== 'teaching' || state?.stage !== 'sharing' || state.pending) return;
    raycaster.setFromCamera(new THREE.Vector2(event.clientX / innerWidth * 2 - 1, 1 - event.clientY / innerHeight * 2), camera);
    for (const hit of raycaster.intersectObjects([...pallets, ...ringObjects.values()], true)) {
      let object = hit.object;
      while (object && object.userData.palletIndex === undefined) object = object.parent;
      if (object) { onPalletClick(object.userData.palletIndex); break; }
    }
  });
  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight; camera.clearViewOffset(); camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight);
    if (phase === 'teaching') { fitTeachingView(); applyPose(teachingPose); fitOverlay(); }
    render();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { if (phase === 'entering') arrive(); activeMotion?.finish(); } });
  renderer.domElement.addEventListener('webglcontextlost', event => { event.preventDefault(); contextLost = true; if (phase !== 'teaching') arrive(); activeMotion?.finish(); onStatus?.('The 3D view paused. Your exact quantities are safe; all sharing controls remain available.'); });
  renderer.domElement.addEventListener('webglcontextrestored', () => { contextLost = false; render(); onStatus?.('The 3D view is ready again.'); });
  // Read-only scene evidence for browser QA; no game-state mutations are exposed.
  window.__meanScene = Object.freeze({ snapshot() {
    return { phase, camera: { position: camera.position.toArray(), target: target.toArray(), fov: camera.fov, view: camera.view ? { ...camera.view } : null }, shellVisible: world.factoryShell.visible, contextLost,
      pallets: pallets.map(p => ({ id: p.userData.id, quantity: p.userData.quantity, position: p.position.toArray() })),
      rings: [...ringObjects.values()].filter(o => o.visible).map(o => ({ ...o.userData, position: o.position.toArray(), scale: o.scale.toArray() })),
      pickPoints: pallets.map(p => { const projected = p.position.clone().add(new THREE.Vector3(0, 1.1, 0)).project(camera); return { x: (projected.x + 1) * innerWidth / 2, y: (1 - projected.y) * innerHeight / 2 }; }) };
  } });
  applyPose(EXTERIOR_POSE); container.dataset.phase = phase; render();
  return { sync, animate, startIntro, skipIntro: arrive, setReducedMotion, setView };
}
