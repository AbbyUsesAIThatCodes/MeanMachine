import * as THREE from 'three';

// This seam deliberately contains no competing factory, pallet or ring models.
// The canonical Median Depot asset package will supply the shared implementation.
export function createPresentation(container, onPalletClick) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
  catch { return { sync() {}, async animate() {} }; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  container.append(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 150);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x9faaa0, 2));
  camera.position.set(0, 8, 15);
  camera.lookAt(0, 2, 0);
  function render() { renderer.render(scene, camera); }
  window.addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); render(); });
  render();
  return { sync() { render(); }, async animate(previous, next, reduceMotion) { if (!reduceMotion) await new Promise(resolve => setTimeout(resolve, next.pending.type === 'split' ? 850 : 420)); } };
}
