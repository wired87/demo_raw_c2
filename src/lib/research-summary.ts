/**
 * Research summary types — mirrors server/pipeline/research_summary.py
 *
 * Prompt: align GUI with drug stack + ephys API payloads.
 */

export type DrugStackSummary = {
  id: string;
  members?: string[];
  industrial_score?: number;
  stack_score?: number;
  rank_index?: number;
  harmony_score?: number;
  potency_score?: number;
  gtop_validated?: boolean;
  ddi_severity_max?: string;
  target_coverage?: number;
};

export type EphysFrequencySummary = {
  id: string;
  frequency_hz?: number;
  frequency_score?: number;
  protocol_id?: string;
  channel_family?: string;
  stack_id?: string;
  drug_actions?: string[];
};

export type ResearchSummary = {
  drug_stacks?: DrugStackSummary[];
  ephys_frequencies?: EphysFrequencySummary[];
  treatment_molecules?: Array<{ id: string; name?: string; potency_score?: number }>;
  counts?: Record<string, number>;
};

/** Pull summary from API meta or rebuild from stripped graph nodes. */
export function researchSummaryFromResponse(
  meta: Record<string, unknown> | null,
  graph?: Record<string, unknown>,
): ResearchSummary | null {
  if (meta?.research_summary && typeof meta.research_summary === "object") {
    return meta.research_summary as ResearchSummary;
  }
  const nodes = (graph?.nodes as Array<Record<string, unknown>>) || [];
  if (!nodes.length) return null;

  const stacks: DrugStackSummary[] = [];
  const frequencies: EphysFrequencySummary[] = [];

  for (const n of nodes) {
    const t = n.type as string;
    if (t === "DRUG_STACK") {
      stacks.push({
        id: String(n.id),
        members: n.members as string[],
        industrial_score: n.industrial_score as number,
        stack_score: n.stack_score as number,
        rank_index: n.rank_index as number,
        harmony_score: n.harmony_score as number,
        potency_score: n.potency_score as number,
        gtop_validated: n.gtop_validated as boolean,
        ddi_severity_max: n.ddi_severity_max as string,
        target_coverage: n.target_coverage as number,
      });
    } else if (t === "EPHYS_FREQUENCY") {
      frequencies.push({
        id: String(n.id),
        frequency_hz: n.frequency_hz as number,
        frequency_score: n.frequency_score as number,
        protocol_id: n.protocol_id as string,
        channel_family: n.channel_family as string,
        stack_id: n.stack_id as string,
        drug_actions: n.drug_actions as string[],
      });
    }
  }

  if (!stacks.length && !frequencies.length) return null;

  stacks.sort(
    (a, b) =>
      Number(b.industrial_score ?? b.stack_score ?? 0) -
      Number(a.industrial_score ?? a.stack_score ?? 0),
  );
  frequencies.sort((a, b) => Number(b.frequency_score ?? 0) - Number(a.frequency_score ?? 0));

  return { drug_stacks: stacks, ephys_frequencies: frequencies };
}
