/**
 * REST client for BME DRF API (`server-dir`).
 *
 * Prompt: adapt anatomical structure — BRAIN_TERMS presets via GET /api/brain-terms/.
 * Prompt: NDJSON pipeline stream — live step yields for graph build loading overlay.
 */
import type { AnatomyAtlas, AnatomyRegionPayload } from "@/types/anatomy";
import type { PipelineStreamEvent } from "@/types/pipeline-progress";

const API_BASE =
  process.env.NEXT_PUBLIC_ACID_API_URL || "http://127.0.0.1:8001/api";

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = (data as { detail?: string }).detail || res.statusText;
    throw new Error(typeof msg === "string" ? msg : JSON.stringify(msg));
  }
  return data as T;
}

export type VizNode = { id: string; type: string; pos: number[]; color: string };
export type VizEdge = { src: string; trgt: string };

export type PipelineGraphResponse = {
  run_id: string;
  meta: Record<string, unknown>;
  graph: Record<string, unknown>;
  viz: { nodes: VizNode[]; edges: VizEdge[] };
};

export const acidApi = {
  health: () => request<{ status: string }>("/health/"),
  organs: () => request<{ organs: string[] }>("/organs/"),
  brainTerms: () => request<{ brain_terms: string[] }>("/brain-terms/"),
  getAnatomyAtlas: () => request<AnatomyAtlas>("/anatomy/"),
  getAnatomyRegion: (slug: string, enrich = false) => {
    const q = enrich ? "" : "?enrich=0";
    return request<AnatomyRegionPayload>(`/anatomy/${slug}/${q}`);
  },
  annotate: (prompt: string) =>
    request<{ function_annotations: string[] }>("/pipeline/annotate/", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    }),
  runPipeline: (body: Record<string, unknown>) =>
    request<PipelineGraphResponse>("/pipeline/run/", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  runPipelineStream: async (
    body: Record<string, unknown>,
    onEvent: (event: PipelineStreamEvent) => void,
  ): Promise<PipelineGraphResponse> => {
    const res = await fetch(`${API_BASE}/pipeline/run/stream/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      const msg = (data as { detail?: string }).detail || res.statusText;
      throw new Error(typeof msg === "string" ? msg : JSON.stringify(msg));
    }
    if (!res.body) {
      throw new Error("Pipeline stream returned no body");
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let complete: PipelineGraphResponse | null = null;

    // CHAR: parse NDJSON lines as they arrive from Django StreamingHttpResponse
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        const event = JSON.parse(trimmed) as PipelineStreamEvent;
        onEvent(event);
        if (event.type === "complete") {
          complete = {
            run_id: event.run_id,
            meta: event.meta,
            graph: event.graph,
            viz: event.viz as PipelineGraphResponse["viz"],
          };
        }
        if (event.type === "error") {
          throw new Error(event.message);
        }
      }
    }

    if (buffer.trim()) {
      const event = JSON.parse(buffer.trim()) as PipelineStreamEvent;
      onEvent(event);
      if (event.type === "complete") {
        complete = {
          run_id: event.run_id,
          meta: event.meta,
          graph: event.graph,
          viz: event.viz as PipelineGraphResponse["viz"],
        };
      }
      if (event.type === "error") {
        throw new Error(event.message);
      }
    }

    if (!complete) {
      throw new Error("Pipeline stream ended without complete event");
    }
    return complete;
  },
  getRun: (runId: string) =>
    request<PipelineGraphResponse>(`/pipeline/runs/${runId}/`),
  getNode: (runId: string, nodeId: string) =>
    request<{ node: Record<string, unknown> }>(
      `/pipeline/runs/${runId}/nodes/${encodeURIComponent(nodeId)}/`
    ),
};
