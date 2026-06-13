import type { CSSProperties } from "react";

export type VizNode = {
  id: string;
  type?: string;
  pos: number[];
  color: string;
};

export type VizEdge = {
  src: string;
  trgt: string;
};

export function ThreeScene(props: {
  nodes: VizNode[];
  edges: VizEdge[];
  onNodeClick?: (nodeId: string) => void;
  style?: CSSProperties;
}): JSX.Element;

export function getNodeColor(state?: string): string;
export function getEdgeColor(): string;
