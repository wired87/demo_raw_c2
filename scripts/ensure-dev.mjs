/**
 * Prompt: avoid 404 on main-app.js / page.js — drop production .next before next dev.
 */
import { existsSync, readdirSync, rmSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = join(root, ".next");
const chunksDir = join(nextDir, "static", "chunks");
const appChunksDir = join(chunksDir, "app");

function listFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir);
}

const chunkFiles = listFiles(chunksDir);
const appFiles = listFiles(appChunksDir);

// CHAR: production hashes (main-app-abc123.js); dev serves unhashed main-app.js?v=…
const hasProdMain = chunkFiles.some((f) => /^main-app-[a-f0-9]+\.js$/.test(f));
const hasDevMain = chunkFiles.includes("main-app.js");
const hasProdPage = appFiles.some((f) => /^page-[a-f0-9]+\.js$/.test(f));
const hasDevPage = appFiles.includes("page.js");

if ((hasProdMain && !hasDevMain) || (hasProdPage && !hasDevPage)) {
  console.log("[ensure-dev] production build artifacts in .next — cleaning for next dev");
  rmSync(nextDir, { recursive: true, force: true });
}
