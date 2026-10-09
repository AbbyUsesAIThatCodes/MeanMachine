// Mean-owned appearance choices. Quantity and original observation are separate.
// Families are assigned only at creation; destinations never change a piece.
export const GEAR_FAMILIES = Object.freeze([
  { name: 'Rose Gear', color: '#ef6684', profile: 'teeth', lobes: 12, hole: 'circle', windows: 0 },
  { name: 'Amber Sun', color: '#f2a12e', profile: 'petals', lobes: 10, hole: 'hexagon', windows: 0 },
  { name: 'Lemon Hex', color: '#e2cb38', profile: 'polygon', lobes: 6, hole: 'circle', windows: 6 },
  { name: 'Emerald Clover', color: '#44b877', profile: 'petals', lobes: 6, hole: 'diamond', windows: 0 },
  { name: 'Turquoise Cog', color: '#29b5c4', profile: 'teeth', lobes: 8, hole: 'hexagon', windows: 4 },
  { name: 'Blue Star', color: '#578fea', profile: 'star', lobes: 8, hole: 'circle', windows: 0 },
  { name: 'Indigo Wheel', color: '#8580dc', profile: 'polygon', lobes: 8, hole: 'diamond', windows: 8 },
  { name: 'Violet Flower', color: '#ce79cb', profile: 'petals', lobes: 8, hole: 'circle', windows: 4 },
].map(family => Object.freeze(family)));

export const startingFamily = (origin, ring) => (origin * 3 + ring) % GEAR_FAMILIES.length;
export function familyFor(piece) {
  const family = GEAR_FAMILIES[piece.family];
  if (!family) throw new Error('Unknown gear family.');
  return family;
}
