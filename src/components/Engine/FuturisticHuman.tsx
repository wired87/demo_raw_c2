"use client";

/**
 * Prompt: fix anatomy figure selectability — z-order, pointer events, touch-friendly hits.
 * Prompt: parchment technical UI — anatomical human with warm tones.
 */
import { useCallback, useMemo, useState } from "react";
import { BODY_PARTS } from "@/components/Engine/bodyParts";
import { PARCHMENT } from "@/lib/parchment-theme";

type Props = {
  selected: string[];
  onToggle: (label: string) => void;
  accentHex?: string;
};

export function FuturisticHuman({ selected, onToggle, accentHex = "#e07a5f" }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  const parts = useMemo(
    () => [...BODY_PARTS].sort((a, b) => (a.z ?? 0) - (b.z ?? 0)),
    [],
  );

  const isActive = useCallback((label: string) => selected.includes(label), [selected]);

  const activate = useCallback(
    (label: string) => {
      onToggle(label);
    },
    [onToggle],
  );

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: 320,
        margin: "0 auto",
      }}
    >
      <div
        aria-hidden
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          borderRadius: 16,
          opacity: 0.35,
          backgroundImage:
            `linear-gradient(${accentHex}14 1px, transparent 1px), linear-gradient(90deg, ${accentHex}14 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <svg
        viewBox="0 0 200 420"
        role="img"
        aria-label="Interactive anatomical selector"
        style={{
          position: "relative",
          zIndex: 1,
          height: "min(52vh, 440px)",
          width: "100%",
          maxWidth: 280,
          display: "block",
          touchAction: "manipulation",
          filter: `drop-shadow(0 8px 24px ${accentHex}33)`,
        }}
      >
        <defs>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5efe3" />
            <stop offset="100%" stopColor="#e8dcc8" />
          </linearGradient>
          <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentHex} stopOpacity="0.45" />
            <stop offset="100%" stopColor="#f2cc8f" stopOpacity="0.35" />
          </linearGradient>
          <filter id="warmGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse
          cx="100"
          cy="210"
          rx="78"
          ry="198"
          fill="none"
          stroke={`${accentHex}44`}
          strokeWidth="0.7"
          strokeDasharray="4 6"
          pointerEvents="none"
        />

        {parts.map((part) => {
          const active = isActive(part.label);
          const hover = hovered === part.id;
          return (
            <g key={part.id}>
              {/* CHAR: wide transparent stroke = easy click / touch target */}
              <path
                d={part.d}
                fill="transparent"
                stroke="transparent"
                strokeWidth={18}
                style={{ cursor: "pointer", pointerEvents: "stroke" }}
                onPointerUp={(e) => {
                  e.preventDefault();
                  activate(part.label);
                }}
                onMouseEnter={() => setHovered(part.id)}
                onMouseLeave={() => setHovered((h) => (h === part.id ? null : h))}
              />
              <path
                d={part.d}
                tabIndex={0}
                role="button"
                aria-label={part.label}
                aria-pressed={active}
                style={{ cursor: "pointer", outline: "none", pointerEvents: "all" }}
                fill={active ? "url(#activeGrad)" : hover ? "#f0e6d4" : "url(#skinGrad)"}
                stroke={active || hover ? accentHex : "#b8a88e"}
                strokeWidth={active ? 1.8 : hover ? 1.4 : 0.9}
                filter={active || hover ? "url(#warmGlow)" : undefined}
                onPointerUp={(e) => {
                  e.preventDefault();
                  activate(part.label);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    activate(part.label);
                  }
                }}
                onMouseEnter={() => setHovered(part.id)}
                onMouseLeave={() => setHovered((h) => (h === part.id ? null : h))}
                onFocus={() => setHovered(part.id)}
                onBlur={() => setHovered((h) => (h === part.id ? null : h))}
              />
            </g>
          );
        })}

        <line
          x1="100"
          y1="118"
          x2="100"
          y2="278"
          stroke={`${accentHex}33`}
          strokeWidth="0.8"
          strokeDasharray="2 4"
          pointerEvents="none"
        />
      </svg>

      {hovered && (
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            borderRadius: 8,
            border: `1px solid ${accentHex}66`,
            background: PARCHMENT.card,
            padding: "6px 14px",
            fontSize: 12,
            letterSpacing: "0.1em",
            color: PARCHMENT.ink,
            boxShadow: `0 4px 16px ${accentHex}33`,
          }}
        >
          {BODY_PARTS.find((p) => p.id === hovered)?.label}
        </div>
      )}
    </div>
  );
}
