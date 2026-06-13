/**
 * Prompt: swipe to anatomically precise holographic detail — UBERON atlas types.
 */

export type AnatomySubRegion = {
  id: string;
  uberon_id: string;
  label: string;
  d?: string | null;
  ols_only?: boolean;
  /** Label anchor x in viewBox coords */
  lx?: number;
  /** Label anchor y in viewBox coords */
  ly?: number;
};

export type AnatomyRegionPayload = {
  slug: string;
  uberon_id: string;
  label: string;
  viewBox: string;
  sub_regions: AnatomySubRegion[];
};

export type AnatomyAtlas = {
  version: string;
  body_part_slugs: Record<string, string>;
  regions: Record<string, { uberon_id: string; label: string }>;
};
