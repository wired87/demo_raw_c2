/**
 * Prompt: map NDJSON pipeline stream events into overlay state for loading UI.
 */
import type {
  PipelineOverlayState,
  PipelineStreamEvent,
  PipelineStreamProgress,
} from "@/types/pipeline-progress";

export function overlayFromStreamEvent(
  prev: PipelineOverlayState | null,
  event: PipelineStreamEvent,
): PipelineOverlayState | null {
  if (event.type === "started") {
    return {
      visible: true,
      steps: event.steps.map((s) => ({ id: s.id, label: s.label, state: "pending" })),
      currentIndex: 0,
      total: event.total,
      elapsedSec: 0,
      organ: event.organ,
    };
  }

  if (event.type === "progress") {
    return applyProgressEvent(prev, event);
  }

  return prev;
}

function applyProgressEvent(
  prev: PipelineOverlayState | null,
  event: PipelineStreamProgress,
): PipelineOverlayState | null {
  const base: PipelineOverlayState = prev ?? {
    visible: true,
    steps: [{ id: event.step, label: event.label, state: "pending" }],
    currentIndex: 0,
    total: event.total,
    elapsedSec: event.elapsed_sec,
  };

  const steps = base.steps.map((s) => {
    if (s.id !== event.step) return s;
    if (event.status === "running") {
      return { ...s, state: "running" as const };
    }
    return {
      ...s,
      state: "done" as const,
      nodeCount: event.node_count,
      edgeCount: event.edge_count,
    };
  });

  const currentIndex =
    event.status === "done" ? event.index : Math.max(0, event.index - 1);

  return {
    ...base,
    visible: true,
    steps,
    currentIndex,
    total: event.total,
    elapsedSec: event.elapsed_sec,
  };
}
