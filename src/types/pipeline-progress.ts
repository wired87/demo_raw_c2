/**
 * Prompt: integrate loading component with live pipeline step yields (NDJSON stream).
 */
export type PipelineStepState = "pending" | "running" | "done";

export type PipelineProgressStep = {
  id: string;
  label: string;
  state: PipelineStepState;
  nodeCount?: number;
  edgeCount?: number;
};

export type PipelineStreamStarted = {
  type: "started";
  steps: { id: string; label: string }[];
  total: number;
  organ: string;
};

export type PipelineStreamProgress = {
  type: "progress";
  step: string;
  label: string;
  status: "running" | "done";
  index: number;
  total: number;
  elapsed_sec: number;
  node_count?: number;
  edge_count?: number;
};

export type PipelineStreamComplete = {
  type: "complete";
  run_id: string;
  meta: Record<string, unknown>;
  graph: Record<string, unknown>;
  viz: { nodes: unknown[]; edges: unknown[] };
};

export type PipelineStreamError = {
  type: "error";
  message: string;
};

export type PipelineStreamEvent =
  | PipelineStreamStarted
  | PipelineStreamProgress
  | PipelineStreamComplete
  | PipelineStreamError;

export type PipelineOverlayState = {
  visible: boolean;
  steps: PipelineProgressStep[];
  currentIndex: number;
  total: number;
  elapsedSec: number;
  organ?: string;
};
