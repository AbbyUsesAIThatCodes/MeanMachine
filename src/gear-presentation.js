import * as THREE from 'three';
import { createFoamRing, RING_THICKNESS } from './shared/cargo.js';
import { familyFor } from './gear-families.js';

// An explicit Mean-owned extension of the frozen cargo adapter. Shared source,
// pallets, factory and camera remain byte-identical to the canonical handoff.
export function createGearGeometry(family, fraction = 1) {
  if (![0.5, 1].includes(fraction)) throw new Error('Expected a whole or half gear.');
  const shape = new THREE.Shape();
  const count = 192;
  for (let i = 0; i <= count; i++) {
    const angle = i / count * Math.PI * 2;
    const wave = Math.cos(family.lobes * angle);
    let radius;
    if (family.profile === 'polygon') {
      const sector = Math.PI * 2 / family.lobes;
      radius = 0.74 * Math.cos(Math.PI / family.lobes) / Math.cos((angle + Math.PI / family.lobes) % sector - Math.PI / family.lobes);
    } else if (family.profile === 'star') radius = 0.65 + 0.12 * wave;
    else if (family.profile === 'teeth') radius = 0.69 + 0.085 * Math.max(-0.65, Math.min(1, wave * 3));
    else radius = 0.69 + 0.075 * wave;
    const x = Math.cos(angle) * radius, y = Math.sin(angle) * radius;
    if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
  }
  const hole = new THREE.Path();
  if (family.hole === 'circle') hole.absarc(0, 0, 0.255, 0, Math.PI * 2, true);
  else {
    const sides = family.hole === 'diamond' ? 4 : 6;
    for (let i = 0; i <= sides; i++) {
      const angle = -i / sides * Math.PI * 2;
      const x = Math.cos(angle) * 0.285, y = Math.sin(angle) * 0.285;
      if (i === 0) hole.moveTo(x, y); else hole.lineTo(x, y);
    }
  }
  shape.holes.push(hole);
  for (let i = 0; i < family.windows; i++) {
    const angle = i / family.windows * Math.PI * 2;
    const window = new THREE.Path();
    window.absarc(Math.cos(angle) * 0.47, Math.sin(angle) * 0.47, 0.068, 0, Math.PI * 2, true);
    shape.holes.push(window);
  }
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: RING_THICKNESS * fraction, bevelEnabled: false, curveSegments: 16, steps: 1 });
  geometry.rotateX(-Math.PI / 2);
  return geometry;
}

export function createGear(piece, originGlyph) {
  const family = familyFor(piece);
  const object = createFoamRing({ identity: piece.id, color: family.color, pattern: 'smooth', symbol: originGlyph, fraction: piece.halves / 2 });
  // Retain the canonical material, fraction tag and group contract. Replace only
  // this consumer's profile and contours with the approved family appearance.
  const body = object.children.find(child => child.isMesh);
  const contours = object.children.find(child => child.isLineSegments);
  body.geometry.dispose();
  body.geometry = createGearGeometry(family, piece.halves / 2);
  contours.geometry.dispose(); contours.geometry = new THREE.EdgesGeometry(body.geometry, 35);
  Object.assign(object.userData, { family: piece.family, familyName: family.name, pattern: family.name, origin: piece.origin, root: piece.root });
  return object;
}
