"use client";

/**
 * Prompt: rename frontend to BME (Brainmaster Engine).
 * Prompt: improve overall GUI design — production engine chrome, API health, nav.
 */
import { useEffect, useState } from "react";
import { acidApi } from "@/lib/acid-api";
import { PARCHMENT } from "@/lib/parchment-theme";

type Props = {
  onJump?: (sectionId: string) => void;
};

export function EngineHeader({ onJump }: Props) {
  const [apiOk, setApiOk] = useState<boolean | null>(null);

  useEffect(() => {
    acidApi
      .health()
      .then(() => setApiOk(true))
      .catch(() => setApiOk(false));
  }, []);

  const nav = [
    { id: "tissue-selector", label: "Brain" },
    { id: "query-engine", label: "Engine" },
    { id: "graph-lookup", label: "Graph" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255,253,248,0.94)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${PARCHMENT.rule}`,
        boxShadow: "0 1px 0 rgba(44,36,22,0.04)",
      }}
    >
      {/* CHAR: accent rail — brand identity without heavy chrome */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${PARCHMENT.accent}, #f2cc8f, #81b29a)` }} />

      <div
        style={{
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: PARCHMENT.ink,
              color: "#f2cc8f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 18,
              fontFamily: "var(--acid-font-mono)",
              boxShadow: "0 4px 12px rgba(44,36,22,0.18)",
            }}
            aria-hidden="true"
          >
            B
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: PARCHMENT.ink, letterSpacing: "-0.02em" }}>
              BME
            </h1>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: PARCHMENT.inkMuted }}>
              Brainmaster Engine
            </p>
          </div>
        </div>

        <nav style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              className="acid-nav-btn"
              onClick={() => onJump?.(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            fontFamily: "var(--acid-font-mono)",
            color: PARCHMENT.inkMuted,
            padding: "6px 12px",
            borderRadius: 999,
            border: `1px solid ${PARCHMENT.rule}`,
            background: PARCHMENT.cardInset,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: apiOk === null ? "#c4b89a" : apiOk ? "#81b29a" : "#e07a5f",
              boxShadow: apiOk ? "0 0 6px #81b29a88" : undefined,
            }}
          />
          API {apiOk === null ? "…" : apiOk ? "online" : "offline"}
        </div>
      </div>
    </header>
  );
}
