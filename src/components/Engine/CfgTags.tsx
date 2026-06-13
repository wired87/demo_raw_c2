"use client";

/**
 * Prompt: parchment cfg tags — removable chips on white card surfaces.
 */
import { PARCHMENT } from "@/lib/parchment-theme";

type Props = {
  title: string;
  tags: string[];
  onRemove: (tag: string) => void;
  accentHex?: string;
  emptyHint?: string;
};

export function CfgTags({ title, tags, onRemove, accentHex = "#81b29a", emptyHint }: Props) {
  return (
    <section
      style={{
        borderRadius: 12,
        border: `1px solid ${PARCHMENT.rule}`,
        background: PARCHMENT.cardInset,
        padding: 14,
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: PARCHMENT.inkFaint,
          fontFamily: "ui-monospace, monospace",
        }}
      >
        {title}
      </h3>
      {tags.length === 0 ? (
        <p style={{ margin: 0, fontSize: 13, color: PARCHMENT.inkFaint }}>
          {emptyHint || "No tags yet"}
        </p>
      ) : (
        <ul style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: 0, padding: 0, listStyle: "none" }}>
          {tags.map((tag) => (
            <li key={tag}>
              <button
                type="button"
                onClick={() => onRemove(tag)}
                title={`Remove ${tag}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  borderRadius: 999,
                  padding: "5px 12px",
                  fontSize: 13,
                  cursor: "pointer",
                  border: `1px solid ${accentHex}55`,
                  background: `${accentHex}18`,
                  color: PARCHMENT.ink,
                }}
              >
                <span>{tag}</span>
                <span aria-hidden style={{ opacity: 0.45 }}>×</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
