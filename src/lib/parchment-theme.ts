/**
 * Prompt: arrange engine vertically — parchment, white, colorful random shadows
 * on each DOM mount; production-ready technical research UI tokens.
 */

/** Warm parchment surface palette (no dominant blue). */
export const PARCHMENT = {
  page: "#ebe4d4",
  pageTexture: "radial-gradient(ellipse at 20% 0%, #f8f4ec 0%, #ebe4d4 45%, #e2d9c8 100%)",
  card: "#fffdf8",
  cardInset: "#faf7f0",
  ink: "#2c2416",
  inkMuted: "#6b5d4a",
  inkFaint: "#9a8b78",
  rule: "#d8cdb8",
  accent: "#8b4513",
};

/** CHAR: fixed section accents — SSR/client stable (no Math.random hydration mismatch). */
export const SECTION_ACCENT_TINTS = {
  tissue: "#81b29a",
  engine: "#e07a5f",
  graph: "#118ab2",
} as const;

/** Shadow tint pool — deterministic picks per step via cardShadowForStep. */
export const SHADOW_TINTS = [
  "#e07a5f",
  "#f2cc8f",
  "#81b29a",
  "#9b5de5",
  "#f15bb5",
  "#00bbf9",
  "#06d6a0",
  "#ef476f",
  "#ffd166",
  "#118ab2",
] as const;

/** Pick a colorful box-shadow string for parchment cards (stable per § step). */
export function cardShadowForStep(step: number): string {
  const tint = SHADOW_TINTS[(step - 1) % SHADOW_TINTS.length];
  return `0 4px 6px ${tint}18, 0 14px 40px ${tint}28, 0 2px 4px rgba(44,36,22,0.06)`;
}

/** SVG / chip accent matched to a shadow tint. */
export function tintToAccent(hex: string): { fill: string; stroke: string; glow: string } {
  return {
    fill: `${hex}22`,
    stroke: hex,
    glow: `${hex}55`,
  };
}
