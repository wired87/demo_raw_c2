# firegraph-client

Three.js graph viewer for Acid Master / Firegraph pipelines.

Prompt: within gui npm install firegraph-client — analyze bb_front README and replace local graph viewer.

> Source: [wired87/bb_front](https://github.com/wired87/bb_front) (`ThreeScene`, `get_color`).

## Install

```bash
# published npm (when available)
npm install firegraph-client

# local (this repo)
npm install file:./packages/firegraph-client
```

## Graph payload

Same shape as DRF `graph_export.node_link_to_bb_front()`:

```json
{
  "nodes": [{ "id": "KW-1", "type": "KEYWORD", "pos": [1.2, 3.4, 5.6], "color": "#fff176" }],
  "edges": [{ "src": "KW-1", "trgt": "P12345" }]
}
```

## Usage (React / Next.js)

```tsx
"use client";
import { ThreeScene } from "firegraph-client";

<ThreeScene
  nodes={viz.nodes}
  edges={viz.edges}
  onNodeClick={(nodeId) => fetchNodeJson(nodeId)}
/>
```

## Exports

| Export | Description |
|--------|-------------|
| `ThreeScene` | Interactive 3D graph canvas (orbit, hover, click) |
| `getNodeColor(state?)` | Status colour (`ALIVE` / `DEAD` / default) |
| `getEdgeColor()` | Edge line colour (`#ffffff`) |

## Peer deps

`react`, `react-dom`, `three` — must be installed by the host app (`gui/`).
