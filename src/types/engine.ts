/**
 * Prompt: yesterday, you coded a anatomical human with clickable nodes.
 * bring it back — types for futuristic human tissue selector.
 */

/** Single anatomical region exposed on the futuristic human SVG. */
export type BodyPart = {
  id: string;
  label: string;
  d: string;
  /** Higher z → drawn on top (better hit target when regions overlap). */
  z?: number;
};
