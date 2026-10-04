import { Plane, Vector3 } from 'three';

// Carry cargo parallel to the factory floor. A camera-facing plane changes
// world height when the pointer travels between front and rear pallets.
export function createLevelDrag(ray, position, height) {
  const plane = new Plane(new Vector3(0, 1, 0), -height);
  const hit = ray.intersectPlane(plane, new Vector3());
  if (!hit) return null;
  const offset = position.clone().sub(hit); offset.y = 0;
  return { plane, offset, height };
}

export function projectLevelDrag(ray, drag) {
  const hit = ray.intersectPlane(drag.plane, new Vector3());
  if (!hit) return null;
  hit.add(drag.offset); hit.y = drag.height;
  return hit;
}
