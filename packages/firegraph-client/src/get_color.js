/**
 * Node/edge colours for ThreeScene.
 * Prompt: firegraph-client — from wired87/bb_front get_color.js
 */
export function getNodeColor(state) {
  if (state === "ALIVE") return "#149414";
  if (state === "DEAD") return "#cc0000";
  return "#004999";
}

export function getEdgeColor() {
  return "#ffffff";
}
