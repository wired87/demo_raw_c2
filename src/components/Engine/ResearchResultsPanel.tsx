"use client";

/**
 * Top drug stacks + electrophysiology frequencies from pipeline meta / graph.
 *
 * Prompt: align frontend with drug stack and ephys scoring from backend.
 */
import { PARCHMENT } from "@/lib/parchment-theme";
import type { ResearchSummary } from "@/lib/research-summary";

type Props = {
  summary: ResearchSummary | null;
  onSelectNode?: (nodeId: string) => void;
};

export function ResearchResultsPanel({ summary, onSelectNode }: Props) {
  if (!summary) return null;
  const stacks = summary.drug_stacks || [];
  const freqs = summary.ephys_frequencies || [];
  if (!stacks.length && !freqs.length) return null;

  return (
    <div
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      }}
    >
      {stacks.length > 0 && (
        <div
          style={{
            padding: 14,
            borderRadius: 10,
            border: `1px solid ${PARCHMENT.rule}`,
            background: PARCHMENT.cardInset,
          }}
        >
          <h4 style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 600 }}>Top drug stacks</h4>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 12 }}>
            {stacks.slice(0, 5).map((s) => (
              <li
                key={s.id}
                style={{
                  padding: "8px 0",
                  borderBottom: `1px solid ${PARCHMENT.rule}`,
                  cursor: onSelectNode ? "pointer" : "default",
                }}
                onClick={() => onSelectNode?.(s.id)}
              >
                <div style={{ fontFamily: "ui-monospace, monospace" }}>
                  #{s.rank_index ?? "—"} · industrial {String(s.industrial_score ?? s.stack_score ?? "—")}
                </div>
                <div style={{ color: PARCHMENT.inkMuted, marginTop: 4 }}>
                  {(s.members || []).join(" + ")}
                </div>
                <div style={{ color: PARCHMENT.inkFaint, fontSize: 11, marginTop: 2 }}>
                  harmony {String(s.harmony_score ?? "—")} · DDI {String(s.ddi_severity_max ?? "none")}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {freqs.length > 0 && (
        <div
          style={{
            padding: 14,
            borderRadius: 10,
            border: `1px solid ${PARCHMENT.rule}`,
            background: PARCHMENT.cardInset,
          }}
        >
          <h4 style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 600 }}>Top test frequencies (BBP)</h4>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 12 }}>
            {freqs.slice(0, 6).map((f) => (
              <li
                key={f.id}
                style={{
                  padding: "8px 0",
                  borderBottom: `1px solid ${PARCHMENT.rule}`,
                  cursor: onSelectNode ? "pointer" : "default",
                }}
                onClick={() => onSelectNode?.(f.id)}
              >
                <div>
                  <strong>{f.frequency_hz} Hz</strong> · score {String(f.frequency_score ?? "—")}
                </div>
                <div style={{ color: PARCHMENT.inkMuted, marginTop: 4 }}>
                  {f.protocol_id} · {f.channel_family}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
