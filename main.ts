// The joke about the demo — one-line joke about working beside an AI coding agent.
// Writes exactly one line of UTF-8 text to /output/entry.txt. No network access.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const JOKE =
  "My AI coding agent does the work of ten juniors, the gaslighting of one senior, and the live-demo confidence of an intern.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE + "\n", "utf8");

const chars = [...JOKE].length;
if (chars < 1 || chars > 280) {
  throw new Error(`Joke must be 1-280 characters, got ${chars}`);
}
if (!JOKE.trim()) {
  throw new Error("Joke must not be only whitespace");
}
if (JOKE.includes("\n")) {
  throw new Error("Joke must be a single line");
}

console.log(`Wrote ${chars} characters to ${outFile}`);
