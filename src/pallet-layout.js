// Mean-owned layout only; canonical shared pallets, cargo and factory stay frozen.
export function palletLayout(count) {
  if (!Number.isInteger(count) || count < 1 || count > 6) throw new Error('Display one to six pallets.');
  if (count <= 3) return Array.from({ length: count }, (_, index) => ({ x: -14 + (index - (count - 1) / 2) * 2.7, y: 0.14, z: -7.1, row: 0 }));
  const frontCount = Math.ceil(count / 2);
  const positions = Array.from({ length: count }, (_, index) => {
    const back = index >= frontCount;
    const position = back ? index - frontCount : index;
    return { x: (position - (frontCount - 1) / 2 + (back ? 0.5 : 0)) * 3.3, y: 0.14, z: -7.1 + (back ? -2.15 : 2.15), row: back ? 1 : 0 };
  });
  const center = (Math.min(...positions.map(p => p.x)) + Math.max(...positions.map(p => p.x))) / 2;
  return positions.map(p => ({ ...p, x: -14 + p.x - center }));
}
