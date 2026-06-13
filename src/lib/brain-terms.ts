/**
 * Prompt: adapt GUI anatomical structure — BRAIN_TERMS presets for whole brain vs sub-parts (BME).
 * Synced with core/app_utils.py BRAIN_TERMS; API GET /api/brain-terms/ is authoritative when online.
 */

/** Offline-safe mirror of core.app_utils.BRAIN_TERMS */
export const BRAIN_TERMS = [
  "Brain",
  "CNS",
  "Nervous system",
  "Limbic system",
  "Brain cortex",
  "Cerebellum",
  "Hippocampus",
  "Hypothalamus",
  "Brain stem",
  "Spinal cord",
  "Ganglion",
  "Glial cell",
  "Neuron",
  "Microglia",
  "Astrocyte",
] as const;

export type BrainTerm = (typeof BRAIN_TERMS)[number];

export const WHOLE_BRAIN_TERM: BrainTerm = "Brain";

/** Map BRAIN_TERMS chip labels → bundled brain atlas sub-region labels */
export const BRAIN_TERM_ATLAS_ALIAS: Partial<Record<BrainTerm, string>> = {
  "Brain cortex": "Cerebral cortex",
  "Brain stem": "Brainstem",
};

/** Resolve a BRAIN_TERMS chip to an atlas sub-region label when one exists */
export function atlasLabelForBrainTerm(term: string, atlasLabels: string[]): string | null {
  const alias = BRAIN_TERM_ATLAS_ALIAS[term as BrainTerm];
  const candidate = alias ?? term;
  return atlasLabels.includes(candidate) ? candidate : null;
}
