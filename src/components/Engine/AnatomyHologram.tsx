"use client";

/**
 * Prompt: fix anatomical detail selectability — hit targets, z-order, pointer events.
 * Prompt: fix anatomical representation — clear labelled holographic UBERON figure.
 */
import { useCallback, useId, useMemo, useState } from "react";
import type { AnatomyRegionPayload } from "@/types/anatomy";
import { PARCHMENT } from "@/lib/parchment-theme";

type Props = {
  region: AnatomyRegionPayload;
  selected: string[];
  onToggle: (label: string) => void;
  accentHex: string;
};

function parseViewBox(vb: string): { w: number; h: number; cx: number; cy: number } {
  const p = vb.split(/\s+/).map(Number);
  const w = p[2] ?? 280;
  const h = p[3] ?? 320;
  return { w, h, cx: w / 2, cy: h / 2 };
}

/** Rough bbox area from path d-string for paint order (smaller regions on top). */
function pathAreaHint(d: string): number {
  const nums = d.match(/-?\d*\.?\d+/g)?.map(Number) ?? [];
  if (nums.length < 4) return 1e6;
  let minX = nums[0], maxX = nums[0], minY = nums[1] ?? 0, maxY = nums[1] ?? 0;
  for (let i = 0; i < nums.length; i += 2) {
    const x = nums[i];
    const y = nums[i + 1] ?? minY;
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }
  return (maxX - minX) * (maxY - minY);
}

export function AnatomyHologram({ region, selected, onToggle, accentHex }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const uid = useId().replace(/:/g, "");
  const vb = useMemo(() => parseViewBox(region.viewBox), [region.viewBox]);

  const drawable = useMemo(
    () =>
      region.sub_regions
        .filter((r) => r.d)
        .sort((a, b) => pathAreaHint(a.d!) - pathAreaHint(b.d!)),
    [region.sub_regions],
  );

  const isActive = useCallback((label: string) => selected.includes(label), [selected]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, width: "100%" }}>
      <p style={{ margin: 0, fontSize: 12, color: PARCHMENT.inkMuted, textAlign: "center" }}>
        {region.label} · {drawable.length} mapped sub-regions · tap or use chips below
      </p>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 480,
          padding: 16,
          borderRadius: 16,
          background: `linear-gradient(160deg, ${accentHex}0a 0%, ${PARCHMENT.cardInset} 55%, ${PARCHMENT.card} 100%)`,
          border: `1px solid ${PARCHMENT.rule}`,
          boxShadow: `0 8px 32px ${accentHex}22`,
        }}
      >
        <svg
          viewBox={region.viewBox}
          role="img"
          aria-label={`${region.label} anatomical map`}
          style={{
            width: "100%",
            height: "auto",
            minHeight: 280,
            display: "block",
            touchAction: "manipulation",
          }}
        >
          <defs>
            <linearGradient id={`holoFill-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={accentHex} stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f2cc8f" stopOpacity="0.35" />
            </linearGradient>
            <filter id={`holoGlow-${uid}`}>
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <ellipse
            cx={vb.cx}
            cy={vb.cy}
            rx={vb.w * 0.42}
            ry={vb.h * 0.44}
            fill="none"
            stroke={`${accentHex}55`}
            strokeWidth="1"
            strokeDasharray="5 6"
            pointerEvents="none"
          />

          {drawable.map((part) => {
            const active = isActive(part.label);
            const hover = hovered === part.id;
            const hitStroke = active || hover ? 2.2 : 14;
            return (
              <g key={part.id}>
                <path
                  d={part.d!}
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth={hitStroke}
                  style={{ cursor: "pointer", pointerEvents: "stroke" }}
                  onPointerUp={(e) => {
                    e.preventDefault();
                    onToggle(part.label);
                  }}
                  onMouseEnter={() => setHovered(part.id)}
                  onMouseLeave={() => setHovered((h) => (h === part.id ? null : h))}
                />
                <path
                  d={part.d!}
                  tabIndex={0}
                  role="button"
                  aria-label={part.label}
                  aria-pressed={active}
                  style={{ cursor: "pointer", outline: "none", pointerEvents: "all" }}
                  fill={active ? `url(#holoFill-${uid})` : hover ? `${accentHex}30` : `${accentHex}14`}
                  stroke={active || hover ? accentHex : `${accentHex}88`}
                  strokeWidth={active ? 2.2 : hover ? 1.6 : 1.1}
                  filter={active || hover ? `url(#holoGlow-${uid})` : undefined}
                  onPointerUp={(e) => {
                    e.preventDefault();
                    onToggle(part.label);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onToggle(part.label);
                    }
                  }}
                  onMouseEnter={() => setHovered(part.id)}
                  onMouseLeave={() => setHovered((h) => (h === part.id ? null : h))}
                />
                {part.lx != null && part.ly != null && (
                  <text
                    x={part.lx}
                    y={part.ly}
                    textAnchor="middle"
                    style={{
                      fontSize: 9,
                      fontFamily: "ui-monospace, monospace",
                      fill: active ? PARCHMENT.ink : `${PARCHMENT.ink}99`,
                      pointerEvents: "none",
                      fontWeight: active ? 700 : 500,
                    }}
                  >
                    {part.label.split(" ")[0]}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          margin: 0,
          padding: 0,
          listStyle: "none",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {drawable.map((part) => {
          const active = isActive(part.label);
          return (
            <li key={`chip-${part.id}`}>
              <button
                type="button"
                onClick={() => onToggle(part.label)}
                style={{
                  borderRadius: 999,
                  padding: "5px 12px",
                  fontSize: 12,
                  cursor: "pointer",
                  border: `1px solid ${active ? accentHex : PARCHMENT.rule}`,
                  background: active ? `${accentHex}22` : PARCHMENT.card,
                  color: PARCHMENT.ink,
                }}
              >
                {part.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
