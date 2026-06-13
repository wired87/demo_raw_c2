"use client";

/**
 * Prompt: improve overall GUI design — parchment cards with accent rail and shadow.
 */
import type { ReactNode } from "react";
import { PARCHMENT, cardShadowForStep } from "@/lib/parchment-theme";

type Props = {
  step: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
  id?: string;
};

export function ParchmentCard({ step, title, subtitle, children, id }: Props) {
  // CHAR: deterministic shadow per § step — SSR-safe, no post-mount style flip
  const shadow = cardShadowForStep(step);

  return (
    <section
      id={id}
      style={{
        background: PARCHMENT.card,
        borderRadius: 16,
        border: `1px solid ${PARCHMENT.rule}`,
        boxShadow: shadow,
        padding: "28px 32px",
        marginBottom: 28,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* CHAR: left accent rail ties section to step number */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: `linear-gradient(180deg, ${PARCHMENT.accent} 0%, #f2cc8f 100%)`,
          opacity: 0.85,
        }}
        aria-hidden="true"
      />

      <header style={{ marginBottom: 20, borderBottom: `1px solid ${PARCHMENT.rule}`, paddingBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: PARCHMENT.inkFaint,
              fontFamily: "var(--acid-font-mono)",
            }}
          >
            §{String(step).padStart(2, "0")}
          </span>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 600, color: PARCHMENT.ink, letterSpacing: "-0.02em" }}>
            {title}
          </h2>
        </div>
        {subtitle && (
          <p style={{ margin: "8px 0 0", fontSize: 14, color: PARCHMENT.inkMuted, lineHeight: 1.55 }}>{subtitle}</p>
        )}
      </header>
      {children}
    </section>
  );
}
