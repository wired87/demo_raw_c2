/**
 * Prompt: fix anatomical detail view — bundled UBERON atlas works without API.
 */
import atlasData from "@/data/anatomy-atlas.json";
import type { AnatomyAtlas, AnatomyRegionPayload, AnatomySubRegion } from "@/types/anatomy";

type RawRegion = {
  uberon_id: string;
  label: string;
  viewBox: string;
  sub_regions: AnatomySubRegion[];
};

/** Full atlas document (offline-safe). */
export function getLocalAtlas(): AnatomyAtlas {
  return atlasData as AnatomyAtlas;
}

/** Resolve human body-part id → anatomy detail slug. */
export function slugForBodyPart(partId: string): string | undefined {
  return (atlasData as AnatomyAtlas).body_part_slugs?.[partId];
}

/** Build region payload from bundled JSON — instant, no network. */
export function getLocalAnatomyRegion(slug: string): AnatomyRegionPayload | null {
  const raw = (atlasData as { regions: Record<string, RawRegion> }).regions[slug];
  if (!raw) return null;
  return {
    slug,
    uberon_id: raw.uberon_id,
    label: raw.label,
    viewBox: raw.viewBox,
    sub_regions: raw.sub_regions || [],
  };
}
