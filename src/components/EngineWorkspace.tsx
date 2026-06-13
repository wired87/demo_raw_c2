"use client";

/**
 * BME (Brainmaster Engine) — vertical production layout.
 *
 * Prompt: adapt anatomical structure — BRAIN_TERMS presets; whole brain or sub-parts (BME).
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ThreeScene } from "firegraph-client";
import { acidApi, type VizEdge, type VizNode } from "@/lib/acid-api";
import { BRAIN_TERMS, WHOLE_BRAIN_TERM } from "@/lib/brain-terms";
import {
  clearStoredGraph,
  loadStoredCfg,
  loadStoredGraph,
  saveStoredCfg,
  saveStoredGraph,
} from "@/lib/graph-storage";
import { PARCHMENT, SECTION_ACCENT_TINTS } from "@/lib/parchment-theme";
import { TissueSwipeSection } from "@/components/Engine/TissueSwipeSection";
import { FunctionAnnotationInput } from "@/components/Engine/FunctionAnnotationInput";
import { ParchmentCard } from "@/components/Engine/ParchmentCard";
import { EngineHeader } from "@/components/Engine/EngineHeader";
import { ResearchResultsPanel } from "@/components/Engine/ResearchResultsPanel";
import { PipelineProgressOverlay } from "@/components/Engine/PipelineProgressOverlay";
import { researchSummaryFromResponse, type ResearchSummary } from "@/lib/research-summary";
import { overlayFromStreamEvent } from "@/lib/pipeline-progress";
import type { PipelineOverlayState } from "@/types/pipeline-progress";

function pipelineOrganPayload(selected: string[]): { organ: string; sub_area: string[] } {
  const brainSet = new Set<string>(BRAIN_TERMS);
  const primary =
    selected.find((s) => s === WHOLE_BRAIN_TERM) ||
    selected.find((s) => brainSet.has(s)) ||
    selected[0] ||
    WHOLE_BRAIN_TERM;
  return { organ: primary, sub_area: selected.filter((s) => s !== primary) };
}

export function EngineWorkspace() {
  const [selectedOrgans, setSelectedOrgans] = useState<string[]>([]);
  const [functionTags, setFunctionTags] = useState<string[]>([]);
  const [prompt, setPrompt] = useState("");
  const [diseaseTags, setDiseaseTags] = useState("");
  const [nodes, setNodes] = useState<VizNode[]>([]);
  const [edges, setEdges] = useState<VizEdge[]>([]);
  const [runId, setRunId] = useState<string | null>(null);
  const [meta, setMeta] = useState<Record<string, unknown> | null>(null);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState("");
  const [nodeJson, setNodeJson] = useState<Record<string, unknown> | null>(null);
  const [nodeLoading, setNodeLoading] = useState(false);
  const [hasGraph, setHasGraph] = useState(false);
  const [nodeSearch, setNodeSearch] = useState("");
  const [copyOk, setCopyOk] = useState(false);
  const [researchSummary, setResearchSummary] = useState<ResearchSummary | null>(null);
  const [storedGraph, setStoredGraph] = useState<Record<string, unknown> | null>(null);
  const [pipelineProgress, setPipelineProgress] = useState<PipelineOverlayState | null>(null);
  const graphRef = useRef<HTMLElement>(null);

  // CHAR: fixed section accents — same on server and client (no hydration warning)
  const tissueTint = SECTION_ACCENT_TINTS.tissue;
  const engineTint = SECTION_ACCENT_TINTS.engine;
  const graphTint = SECTION_ACCENT_TINTS.graph;

  // CHAR: hydrate graph + cfg from persistent storage
  useEffect(() => {
    const stored = loadStoredGraph();
    if (stored) {
      setRunId(stored.run_id);
      setMeta(stored.meta);
      setStoredGraph(stored.graph);
      setNodes(stored.viz.nodes);
      setEdges(stored.viz.edges);
      setHasGraph(true);
      setResearchSummary(researchSummaryFromResponse(stored.meta, stored.graph));
    }
    const cfg = loadStoredCfg();
    if (cfg) {
      setSelectedOrgans(cfg.selectedOrgans || []);
      setFunctionTags(cfg.functionTags || []);
      setPrompt(cfg.prompt || "");
      setDiseaseTags(cfg.diseaseTags || "");
    }
  }, []);

  // CHAR: persist cfg whenever user edits tissue / prompt state
  useEffect(() => {
    saveStoredCfg({ selectedOrgans, functionTags, prompt, diseaseTags });
  }, [selectedOrgans, functionTags, prompt, diseaseTags]);

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleOrgan = useCallback((label: string) => {
    setSelectedOrgans((prev) =>
      prev.includes(label) ? prev.filter((o) => o !== label) : [...prev, label],
    );
  }, []);

  // Prompt: onclick on a sub region (e.g. thalamus) remove the body part (e.g. brain)
  const toggleSubRegion = useCallback((subLabel: string, parentLabels: string[]) => {
    setSelectedOrgans((prev) => {
      if (prev.includes(subLabel)) {
        return prev.filter((o) => o !== subLabel);
      }
      const parents = new Set(parentLabels.filter(Boolean));
      return [...prev.filter((o) => !parents.has(o)), subLabel];
    });
  }, []);

  const removeOrgan = useCallback((tag: string) => {
    setSelectedOrgans((prev) => prev.filter((o) => o !== tag));
  }, []);

  // CHAR: whole-brain chip replaces sub-parts; toggles off when already sole selection
  const selectWholeBrain = useCallback(() => {
    setSelectedOrgans((prev) => {
      if (prev.length === 1 && prev[0] === WHOLE_BRAIN_TERM) return [];
      return [WHOLE_BRAIN_TERM];
    });
  }, []);

  const removeFunctionTag = useCallback((tag: string) => {
    setFunctionTags((prev) => prev.filter((t) => t !== tag));
  }, []);

  const splitTags = (raw: string) =>
    raw.split(",").map((s) => s.trim()).filter(Boolean);

  const canSubmit =
    !running && (selectedOrgans.length > 0 || prompt.trim().length > 0 || functionTags.length > 0);

  const handleAnnotate = async () => {
    setError("");
    try {
      const data = await acidApi.annotate(prompt);
      setFunctionTags((prev) => Array.from(new Set([...prev, ...(data.function_annotations || [])])));
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setRunning(true);
    setError("");
    setNodeJson(null);
    setPipelineProgress({
      visible: true,
      steps: [],
      currentIndex: 0,
      total: 0,
      elapsedSec: 0,
    });
    const { organ, sub_area } = pipelineOrganPayload(selectedOrgans);
    try {
      const data = await acidApi.runPipelineStream(
        {
          organ,
          sub_area,
          prompt: prompt || undefined,
          function_annotations: functionTags.length ? functionTags : splitTags(prompt),
          disease_annotation: splitTags(diseaseTags),
        },
        (event) => {
          setPipelineProgress((prev) => overlayFromStreamEvent(prev, event) ?? prev);
        },
      );
      const vizNodes = data.viz?.nodes || [];
      const vizEdges = data.viz?.edges || [];
      setRunId(data.run_id);
      setMeta(data.meta);
      setStoredGraph(data.graph);
      setResearchSummary(researchSummaryFromResponse(data.meta, data.graph));
      setNodes(vizNodes);
      setEdges(vizEdges);
      if (vizNodes.length) {
        saveStoredGraph({
          run_id: data.run_id,
          meta: data.meta,
          graph: data.graph,
          viz: { nodes: vizNodes, edges: vizEdges },
        });
        setHasGraph(true);
        setTimeout(() => graphRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      } else {
        setHasGraph(false);
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setRunning(false);
      setPipelineProgress((prev) => (prev ? { ...prev, visible: false } : null));
    }
  };

  const handleNodeClick = useCallback(
    async (nodeId: string) => {
      if (!runId) return;
      setNodeLoading(true);
      setNodeJson(null);
      setNodeSearch(nodeId);
      try {
        const data = await acidApi.getNode(runId, nodeId);
        setNodeJson(data.node);
      } catch (e) {
        setNodeJson({ error: (e as Error).message, node_id: nodeId });
      } finally {
        setNodeLoading(false);
      }
    },
    [runId],
  );

  const handleLookupNode = async () => {
    const q = nodeSearch.trim();
    if (!q || !runId) return;
    const match = nodes.find(
      (n) => n.id === q || n.id.toLowerCase().includes(q.toLowerCase()) || n.type.toLowerCase().includes(q.toLowerCase()),
    );
    if (match) await handleNodeClick(match.id);
  };

  const handleCopyNode = async () => {
    if (!nodeJson) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(nodeJson, null, 2));
      setCopyOk(true);
      setTimeout(() => setCopyOk(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleClearGraph = () => {
    clearStoredGraph();
    setHasGraph(false);
    setNodes([]);
    setEdges([]);
    setRunId(null);
    setMeta(null);
    setNodeJson(null);
    setNodeSearch("");
    setResearchSummary(null);
    setStoredGraph(null);
  };

  const handleClearTissue = () => setSelectedOrgans([]);

  const filteredNodeCount = useMemo(() => {
    const q = nodeSearch.trim().toLowerCase();
    if (!q) return nodes.length;
    return nodes.filter((n) => n.id.toLowerCase().includes(q) || n.type.toLowerCase().includes(q)).length;
  }, [nodes, nodeSearch]);

  return (
    <div className="acid-shell">
      {pipelineProgress?.visible && <PipelineProgressOverlay progress={pipelineProgress} />}
      <EngineHeader onJump={jumpTo} />

      <div className="acid-main">
        <div className="acid-hero">
          <h2>Brain → query → graph</h2>
          <p>
            Select whole brain or anatomical sub-parts, describe biological intent, run the pipeline, then explore
            ranked drug stacks and the knowledge graph in one vertical research flow.
          </p>
        </div>

        {/* §01 Brain tissue selector — top of vertical stack */}
        <ParchmentCard
          id="tissue-selector"
          step={1}
          title="Brain Tissue Selector"
          subtitle="Choose the entire brain or mapped sub-regions via BRAIN_TERMS presets and the UBERON hologram."
        >
          <TissueSwipeSection
            selectedOrgans={selectedOrgans}
            onToggleOrgan={toggleOrgan}
            onToggleSubRegion={toggleSubRegion}
            onSelectWholeBrain={selectWholeBrain}
            onRemoveOrgan={removeOrgan}
            onClearTissue={handleClearTissue}
            accentHex={tissueTint}
          />
        </ParchmentCard>

        {/* §02 Query engine */}
        <ParchmentCard
          id="query-engine"
          step={2}
          title="Query Engine"
          subtitle="Describe biological intent, derive keywords, and submit to the BME pipeline."
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <FunctionAnnotationInput
              tags={functionTags}
              onTagsChange={setFunctionTags}
              onRemove={removeFunctionTag}
              accentHex={engineTint}
              disabled={running}
            />

            <label style={labelStyle}>Research prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              placeholder="Describe the biological process, pathway, or research question…"
              style={inputStyle}
            />

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <button type="button" onClick={handleAnnotate} disabled={running || !prompt.trim()} style={secondaryBtn(engineTint)}>
                Add keywords
              </button>
              <button type="button" onClick={handleSubmit} disabled={!canSubmit} style={primaryBtn(engineTint)}>
                {running ? "Running pipeline…" : "Submit to engine"}
              </button>
            </div>

            <label style={labelStyle}>Disease tags (optional)</label>
            <input
              value={diseaseTags}
              onChange={(e) => setDiseaseTags(e.target.value)}
              placeholder="comma-separated disease terms"
              style={inputStyle}
            />

            {error && (
              <p role="alert" style={{ margin: 0, fontSize: 13, color: "#c0392b", padding: "10px 12px", background: "#fdecea", borderRadius: 8 }}>
                {error}
              </p>
            )}

            {meta && (
              <div
                style={{
                  fontSize: 12,
                  fontFamily: "ui-monospace, monospace",
                  color: PARCHMENT.inkMuted,
                  padding: 12,
                  background: PARCHMENT.cardInset,
                  borderRadius: 8,
                  border: `1px solid ${PARCHMENT.rule}`,
                }}
              >
                <div>run_id: {String(meta.run_id)}</div>
                <div>nodes: {String(meta.node_count)} · edges: {String(meta.edge_count)}</div>
                <div>elapsed: {String(meta.elapsed_sec)}s · organ: {String(meta.organ || "—")}</div>
              </div>
            )}

            <ResearchResultsPanel
              summary={researchSummary ?? researchSummaryFromResponse(meta, storedGraph ?? undefined)}
              onSelectNode={(id) => handleNodeClick(id)}
            />
          </div>
        </ParchmentCard>

        {/* §03 Graph lookup */}
        <section ref={graphRef}>
          <ParchmentCard
            id="graph-lookup"
            step={3}
            title="Graph Lookup"
            subtitle="Explore the knowledge graph returned by the pipeline. Click nodes or search by id / type."
          >
            {!hasGraph ? (
              <div
                style={{
                  padding: "48px 24px",
                  textAlign: "center",
                  color: PARCHMENT.inkFaint,
                  background: PARCHMENT.cardInset,
                  borderRadius: 12,
                  border: `1px dashed ${PARCHMENT.rule}`,
                }}
              >
                <p style={{ margin: 0, fontSize: 15 }}>No graph loaded yet.</p>
                <p style={{ margin: "8px 0 0", fontSize: 13 }}>Complete §01 and §02, then submit a query.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                  <input
                    value={nodeSearch}
                    onChange={(e) => setNodeSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLookupNode()}
                    placeholder="Search node id or type…"
                    style={{ ...inputStyle, flex: "1 1 200px", margin: 0 }}
                  />
                  <button type="button" onClick={handleLookupNode} disabled={!nodeSearch.trim() || nodeLoading} style={secondaryBtn(graphTint)}>
                    Lookup node
                  </button>
                  <button type="button" onClick={handleClearGraph} style={ghostBtn}>
                    Clear graph
                  </button>
                </div>

                <p style={{ margin: 0, fontSize: 12, color: PARCHMENT.inkMuted, fontFamily: "var(--acid-font-mono)" }}>
                  {nodes.length} nodes · {edges.length} edges
                  {nodeSearch.trim() ? ` · ${filteredNodeCount} match filter` : ""}
                </p>

                <div
                  style={{
                    height: "min(58vh, 520px)",
                    borderRadius: 12,
                    overflow: "hidden",
                    border: `1px solid ${PARCHMENT.rule}`,
                    background: "#1a1814",
                  }}
                >
                  <ThreeScene nodes={nodes} edges={edges} onNodeClick={handleNodeClick} />
                </div>

                {(nodeJson || nodeLoading) && (
                  <div
                    style={{
                      borderRadius: 12,
                      border: `1px solid ${PARCHMENT.rule}`,
                      background: PARCHMENT.cardInset,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 16px",
                        borderBottom: `1px solid ${PARCHMENT.rule}`,
                      }}
                    >
                      <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Node detail</h3>
                      <div style={{ display: "flex", gap: 8 }}>
                        {nodeJson && (
                          <button type="button" onClick={handleCopyNode} style={ghostBtn}>
                            {copyOk ? "Copied" : "Copy JSON"}
                          </button>
                        )}
                        <button type="button" onClick={() => setNodeJson(null)} style={ghostBtn}>
                          Close
                        </button>
                      </div>
                    </div>
                    <pre
                      style={{
                        margin: 0,
                        padding: 16,
                        maxHeight: 280,
                        overflow: "auto",
                        fontSize: 12,
                        fontFamily: "var(--acid-font-mono)",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        color: PARCHMENT.ink,
                      }}
                    >
                      {nodeLoading ? "Loading node from API…" : JSON.stringify(nodeJson, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </ParchmentCard>
        </section>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: PARCHMENT.inkFaint,
  fontFamily: "var(--acid-font-mono)",
};

const inputStyle: React.CSSProperties = {
  background: PARCHMENT.card,
  color: PARCHMENT.ink,
  border: `1px solid ${PARCHMENT.rule}`,
  borderRadius: 10,
  padding: "10px 12px",
  resize: "vertical",
  width: "100%",
  lineHeight: 1.5,
};

const ghostBtn: React.CSSProperties = {
  background: "transparent",
  border: `1px solid ${PARCHMENT.rule}`,
  color: PARCHMENT.inkMuted,
  borderRadius: 8,
  padding: "6px 12px",
  fontSize: 12,
  cursor: "pointer",
};

function primaryBtn(tint: string): React.CSSProperties {
  return {
    background: tint,
    color: "#fffdf8",
    border: "none",
    borderRadius: 10,
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 14,
    boxShadow: `0 4px 14px ${tint}44`,
  };
}

function secondaryBtn(tint: string): React.CSSProperties {
  return {
    background: `${tint}18`,
    color: PARCHMENT.ink,
    border: `1px solid ${tint}55`,
    borderRadius: 10,
    padding: "10px 16px",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: 14,
  };
}
