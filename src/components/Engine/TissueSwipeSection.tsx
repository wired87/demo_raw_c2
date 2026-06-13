"use client";

/**
 * Prompt: adapt anatomical structure — BRAIN_TERMS presets; whole brain or sub-parts only (BME).
 *
 * Prompt: onclick on a sub region (e.g. thalamus) remove the body part (e.g. brain).
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnatomyHologram } from "@/components/Engine/AnatomyHologram";
import { CfgTags } from "@/components/Engine/CfgTags";
import { acidApi } from "@/lib/acid-api";
import {
  atlasLabelForBrainTerm,
  BRAIN_TERMS,
  WHOLE_BRAIN_TERM,
} from "@/lib/brain-terms";
import { getLocalAnatomyRegion } from "@/lib/anatomy-local";
import type { AnatomyRegionPayload } from "@/types/anatomy";
import { PARCHMENT } from "@/lib/parchment-theme";

type Props = {
  selectedOrgans: string[];
  onToggleOrgan: (label: string) => void;
  onToggleSubRegion: (subLabel: string, parentLabels: string[]) => void;
  onSelectWholeBrain: () => void;
  onRemoveOrgan: (tag: string) => void;
  onClearTissue: () => void;
  accentHex: string;
};

export function TissueSwipeSection({
  selectedOrgans,
  onToggleOrgan,
  onToggleSubRegion,
  onSelectWholeBrain,
  onRemoveOrgan,
  onClearTissue,
  accentHex,
}: Props) {
  const [brainRegion, setBrainRegion] = useState<AnatomyRegionPayload | null>(null);
  const [brainTerms, setBrainTerms] = useState<string[]>([...BRAIN_TERMS]);
  const [detailError, setDetailError] = useState("");

  const atlasLabels = useMemo(
    () => (brainRegion?.sub_regions ?? []).map((r) => r.label),
    [brainRegion],
  );

  // CHAR: bundled brain atlas + optional API enrich on mount
  useEffect(() => {
    const local = getLocalAnatomyRegion("brain");
    if (!local) {
      setDetailError("Brain atlas not found.");
      return;
    }
    setBrainRegion(local);
    setDetailError("");

    acidApi
      .getAnatomyRegion("brain", false)
      .then((remote) => {
        if (remote?.sub_regions?.length) {
          const ids = new Set(local.sub_regions.map((r) => r.id));
          const extra = remote.sub_regions.filter((r) => !ids.has(r.id));
          if (extra.length) {
            setBrainRegion({ ...local, sub_regions: [...local.sub_regions, ...extra] });
          }
        }
      })
      .catch(() => {
        /* offline — bundled atlas already shown */
      });

    acidApi
      .brainTerms()
      .then((data) => {
        if (data.brain_terms?.length) setBrainTerms(data.brain_terms);
      })
      .catch(() => {
        /* offline — BRAIN_TERMS mirror in brain-terms.ts */
      });
  }, []);

  const handleBrainTermChip = useCallback(
    (term: string) => {
      if (term === WHOLE_BRAIN_TERM) {
        onSelectWholeBrain();
        return;
      }
      const atlasLabel = atlasLabelForBrainTerm(term, atlasLabels);
      if (atlasLabel) {
        onToggleSubRegion(atlasLabel, [WHOLE_BRAIN_TERM]);
        return;
      }
      onToggleOrgan(term);
    },
    [atlasLabels, onSelectWholeBrain, onToggleOrgan, onToggleSubRegion],
  );

  const handleHologramToggle = useCallback(
    (subLabel: string) => {
      onToggleSubRegion(subLabel, [WHOLE_BRAIN_TERM, brainRegion?.label ?? WHOLE_BRAIN_TERM]);
    },
    [brainRegion?.label, onToggleSubRegion],
  );

  const chipActive = useCallback(
    (term: string) => {
      if (term === WHOLE_BRAIN_TERM) {
        return selectedOrgans.includes(WHOLE_BRAIN_TERM);
      }
      const atlasLabel = atlasLabelForBrainTerm(term, atlasLabels);
      if (atlasLabel) return selectedOrgans.includes(atlasLabel);
      return selectedOrgans.includes(term);
    },
    [atlasLabels, selectedOrgans],
  );

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
        {brainTerms.map((term) => {
          const active = chipActive(term);
          const isWhole = term === WHOLE_BRAIN_TERM;
          return (
            <button
              key={`brain-${term}`}
              type="button"
              onClick={() => handleBrainTermChip(term)}
              style={{
                borderRadius: 999,
                padding: isWhole ? "7px 16px" : "6px 14px",
                fontSize: isWhole ? 13 : 12,
                cursor: "pointer",
                border: `1px solid ${active ? accentHex : PARCHMENT.rule}`,
                background: active ? `${accentHex}22` : PARCHMENT.card,
                color: PARCHMENT.ink,
                fontWeight: active || isWhole ? 600 : 400,
              }}
            >
              {term}
            </button>
          );
        })}
      </div>

      {brainRegion ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            padding: 16,
            borderRadius: 14,
            border: `1px solid ${accentHex}44`,
            background: PARCHMENT.cardInset,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: PARCHMENT.ink }}>
              {brainRegion.label} · whole organ or sub-parts
            </span>
            <span style={{ fontSize: 11, color: PARCHMENT.inkFaint, fontFamily: "var(--acid-font-mono)" }}>
              {brainRegion.uberon_id}
            </span>
          </div>

          <AnatomyHologram
            region={brainRegion}
            selected={selectedOrgans}
            onToggle={handleHologramToggle}
            accentHex={accentHex}
          />

          <p style={{ margin: 0, fontSize: 12, color: PARCHMENT.inkMuted, textAlign: "center" }}>
            Tap <strong>{WHOLE_BRAIN_TERM}</strong> for the entire organ, or pick mapped sub-regions on the figure /
            chips above.
          </p>
        </div>
      ) : (
        <p style={{ margin: 0, fontSize: 13, color: PARCHMENT.inkMuted, textAlign: "center" }}>
          Loading brain atlas…
        </p>
      )}

      {detailError && (
        <p role="alert" style={{ margin: 0, fontSize: 13, color: "#b33", textAlign: "center" }}>
          {detailError}
        </p>
      )}

      <div style={{ width: "100%", maxWidth: 560, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
        <CfgTags
          title="Selected brain regions"
          tags={selectedOrgans}
          onRemove={onRemoveOrgan}
          accentHex={accentHex}
          emptyHint="Select whole brain or sub-parts via chips or hologram"
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: PARCHMENT.inkMuted, fontFamily: "var(--acid-font-mono)" }}>
            {selectedOrgans.length} region{selectedOrgans.length === 1 ? "" : "s"} selected
          </span>
          {selectedOrgans.length > 0 && (
            <button type="button" onClick={onClearTissue} style={backBtn}>
              Clear selection
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const backBtn: React.CSSProperties = {
  background: PARCHMENT.card,
  border: `1px solid ${PARCHMENT.rule}`,
  color: PARCHMENT.inkMuted,
  borderRadius: 8,
  padding: "6px 12px",
  fontSize: 12,
  cursor: "pointer",
};
