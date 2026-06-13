/**
 * Persist pipeline graph bundles and cfg in browser localStorage.
 *
 * Prompt: arrange engine vertically — production-ready persistence for
 * graph lookup and tissue / prompt configuration.
 */
import type { VizEdge, VizNode } from "@/lib/acid-api";

export const GRAPH_STORAGE_KEY = "acid-master-graph";

export type StoredGraphBundle = {
  run_id: string;
  meta: Record<string, unknown>;
  graph: Record<string, unknown>;
  viz: { nodes: VizNode[]; edges: VizEdge[] };
};

/** Load persisted graph bundle — null when nothing stored or parse fails. */
export function loadStoredGraph(): StoredGraphBundle | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(GRAPH_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredGraphBundle;
    if (!parsed?.viz?.nodes?.length) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Save full graph response from DRF into localStorage. */
export function saveStoredGraph(bundle: StoredGraphBundle): void {
  if (typeof window === "undefined") return;
  if (!bundle.viz?.nodes?.length) return;
  window.localStorage.setItem(GRAPH_STORAGE_KEY, JSON.stringify(bundle));
}

/** True when a non-empty viz graph exists in persistent storage. */
export function hasStoredGraph(): boolean {
  return loadStoredGraph() !== null;
}

/** Remove persisted graph so graph lookup section stays empty. */
export function clearStoredGraph(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(GRAPH_STORAGE_KEY);
}

export const CFG_STORAGE_KEY = "acid-master-cfg";

export type StoredCfg = {
  selectedOrgans: string[];
  functionTags: string[];
  prompt: string;
  diseaseTags: string;
};

export function loadStoredCfg(): StoredCfg | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CFG_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredCfg) : null;
  } catch {
    return null;
  }
}

export function saveStoredCfg(cfg: StoredCfg): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CFG_STORAGE_KEY, JSON.stringify(cfg));
}
