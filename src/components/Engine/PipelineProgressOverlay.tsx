"use client";

/**
 * Prompt: loading overlay while graph builds — live updates after each pipeline yield step.
 */
import type { PipelineOverlayState } from "@/types/pipeline-progress";
import { PARCHMENT } from "@/lib/parchment-theme";

type Props = {
  progress: PipelineOverlayState;
};

export function PipelineProgressOverlay({ progress }: Props) {
  if (!progress.visible) return null;

  const pct = progress.total > 0 ? Math.round((progress.currentIndex / progress.total) * 100) : 0;
  const doneCount = progress.steps.filter((s) => s.state === "done").length;

  return (
    <div className="acid-pipeline-overlay" role="dialog" aria-modal="true" aria-labelledby="pipeline-progress-title">
      <div className="acid-pipeline-card">
        <header className="acid-pipeline-header">
          <div>
            <h2 id="pipeline-progress-title" style={{ margin: 0, fontSize: 18, fontWeight: 600, color: PARCHMENT.ink }}>
              Building knowledge graph
            </h2>
            <p style={{ margin: "6px 0 0", fontSize: 13, color: PARCHMENT.inkMuted }}>
              {progress.organ ? `Organ: ${progress.organ}` : "Pipeline running"}
              {" · "}
              {doneCount}/{progress.total} steps
              {" · "}
              {progress.elapsedSec.toFixed(1)}s
            </p>
          </div>
          <div className="acid-pipeline-pulse" aria-hidden="true" />
        </header>

        <div className="acid-pipeline-bar" aria-hidden="true">
          <div className="acid-pipeline-bar-fill" style={{ width: `${pct}%` }} />
        </div>

        <ol className="acid-pipeline-steps">
          {progress.steps.map((step) => (
            <li
              key={step.id}
              className={`acid-pipeline-step acid-pipeline-step--${step.state}`}
              aria-current={step.state === "running" ? "step" : undefined}
            >
              <span className="acid-pipeline-step-icon" aria-hidden="true">
                {step.state === "done" ? "✓" : step.state === "running" ? "◉" : "○"}
              </span>
              <span className="acid-pipeline-step-label">{step.label}</span>
              {step.state === "done" && step.nodeCount != null && (
                <span className="acid-pipeline-step-meta">
                  {step.nodeCount} nodes · {step.edgeCount ?? 0} edges
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
