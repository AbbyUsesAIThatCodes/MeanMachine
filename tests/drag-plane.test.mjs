import test from 'node:test';
import assert from 'node:assert/strict';
import { PerspectiveCamera, Ray, Raycaster, Vector2, Vector3 } from 'three';
import { createLevelDrag, projectLevelDrag } from '../src/drag-plane.js';

test('front/back dragging remains level across perspective angles, distances and zoom factors', () => {
  for (const direction of [[0.22, 0.57, 0.91], [0, 0.6, 1]]) for (const distance of [8, 18, 32]) for (const zoom of [0.75, 1, 1.5]) {
    const camera = new PerspectiveCamera(35, 16 / 9, 0.1, 180), target = new Vector3(0, 1, 0);
    camera.position.copy(target).addScaledVector(new Vector3(...direction).normalize(), distance);
    camera.zoom = zoom; camera.setViewOffset(1366, 768, 41, 50, 1366, 768); camera.lookAt(target); camera.updateProjectionMatrix(); camera.updateMatrixWorld();
    const raycaster = new Raycaster();
    const rayAt = point => { const projected = point.clone().project(camera); raycaster.setFromCamera(new Vector2(projected.x, projected.y), camera); return raycaster.ray; };
    for (const sourceZ of [-2, 2]) {
      const position = new Vector3(-1, 0.95, sourceZ), height = 1.91;
      const drag = createLevelDrag(rayAt(position), position, height); assert.ok(drag);
      const pickup = projectLevelDrag(rayAt(position), drag);
      assert.ok(Math.abs(pickup.x - position.x) < 1e-10 && Math.abs(pickup.z - position.z) < 1e-10);
      for (const z of [-4, -2, 0, 2, 4]) {
        const world = new Vector3(1, height, z), carried = projectLevelDrag(rayAt(world), drag);
        assert.equal(carried.y, height);
        assert.ok(Math.abs(carried.x - world.x - drag.offset.x) < 1e-10);
        assert.ok(Math.abs(carried.z - world.z - drag.offset.z) < 1e-10);
      }
    }
  }
});

test('a ray parallel to or pointing away from the carry plane cannot produce an invalid position', () => {
  const position = new Vector3(0, 1, 0);
  const parallel = new Ray(new Vector3(0, 4, 0), new Vector3(1, 0, 0));
  assert.equal(createLevelDrag(parallel, position, 2), null);
  const drag = createLevelDrag(new Ray(new Vector3(0, 4, 0), new Vector3(0, -1, 0)), position, 2);
  assert.equal(projectLevelDrag(parallel, drag), null);
  assert.equal(projectLevelDrag(new Ray(new Vector3(0, 4, 0), new Vector3(0, 1, 0)), drag), null);
});
