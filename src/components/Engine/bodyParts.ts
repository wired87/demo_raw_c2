/**
 * Prompt: adapt anatomical structure — brain-only BME selector; BRAIN_TERMS in brain-terms.ts.
 */
import type { BodyPart } from "@/types/engine";
/** Compact path set — one path per region, shared viewBox 0 0 200 420. */
export const BODY_PARTS: BodyPart[] = [
  { id: "head", label: "Head", z: 1, d: "M100 18 C72 18 58 42 58 68 C58 88 72 102 100 102 C128 102 142 88 142 68 C142 42 128 18 100 18 Z" },
  { id: "neck", label: "Neck", z: 2, d: "M88 102 L88 118 L112 118 L112 102 Z" },
  { id: "chest", label: "Chest", z: 3, d: "M68 118 C58 118 52 132 52 148 L52 188 L148 188 L148 148 C148 132 142 118 132 118 Z" },
  { id: "abdomen", label: "Abdomen", z: 4, d: "M58 188 L58 248 L142 248 L142 188 Z" },
  { id: "pelvis", label: "Pelvis", z: 5, d: "M68 248 L68 278 L132 278 L132 248 Z" },
  { id: "left_arm", label: "Left Arm", z: 6, d: "M52 122 L28 132 L22 168 L38 172 L52 148 Z" },
  { id: "right_arm", label: "Right Arm", z: 6, d: "M148 122 L172 132 L178 168 L162 172 L148 148 Z" },
  { id: "left_forearm", label: "Left Forearm", z: 7, d: "M22 168 L14 210 L32 214 L38 172 Z" },
  { id: "right_forearm", label: "Right Forearm", z: 7, d: "M178 168 L186 210 L168 214 L162 172 Z" },
  { id: "left_hand", label: "Left Hand", z: 8, d: "M14 210 L8 238 L26 242 L32 214 Z" },
  { id: "right_hand", label: "Right Hand", z: 8, d: "M186 210 L192 238 L174 242 L168 214 Z" },
  { id: "left_thigh", label: "Left Thigh", z: 9, d: "M68 278 L62 338 L88 340 L92 278 Z" },
  { id: "right_thigh", label: "Right Thigh", z: 9, d: "M132 278 L138 338 L112 340 L108 278 Z" },
  { id: "left_leg", label: "Left Leg", z: 10, d: "M62 338 L58 388 L82 392 L88 340 Z" },
  { id: "right_leg", label: "Right Leg", z: 10, d: "M138 338 L142 388 L118 392 L112 340 Z" },
  { id: "left_foot", label: "Left Foot", z: 11, d: "M48 388 L42 408 L86 412 L82 392 Z" },
  { id: "right_foot", label: "Right Foot", z: 11, d: "M152 388 L158 408 L114 412 L118 392 Z" },
  // CHAR: smaller organs on top for reliable clicks
  { id: "brain", label: "Brain", z: 20, d: "M100 32 C82 32 72 48 72 64 C72 78 84 88 100 88 C116 88 128 78 128 64 C128 48 118 32 100 32 Z" },
  { id: "heart", label: "Heart", z: 21, d: "M100 138 C92 128 78 132 78 146 C78 158 100 172 100 172 C100 172 122 158 122 146 C122 132 108 128 100 138 Z" },
  { id: "lung", label: "Lung", z: 22, d: "M68 128 C58 128 54 148 54 168 L68 178 L92 168 L92 128 Z M108 128 L108 168 L132 178 L146 168 C146 148 142 128 132 128 Z" },
  { id: "liver", label: "Liver", z: 23, d: "M98 198 L98 232 L148 228 L142 192 Z" },
  { id: "kidney", label: "Kidney", z: 24, d: "M72 200 L72 228 L96 232 L96 200 Z M104 200 L104 232 L128 228 L128 200 Z" },
];

/** @deprecated Full-body figure retained for FuturisticHuman; BME uses brain hologram only. */
export const PIPELINE_ORGAN_CHIPS = ["Brain"] as const;

/** @deprecated Sub-regions now driven by BRAIN_TERMS + anatomy atlas. */
export const BRAIN_SUBREGION_CHIPS = [] as const;
