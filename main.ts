// Absurd Micro-Startup Pitch-Off
// Entry: one sentence pitching an absurdly specific micro-startup for
// lazy AI agents, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic constant writer: no randomness, no network, no file reads,
// stdlib only (node:fs, node:path). Node 22, TypeScript stripped at runtime.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Why the pitch works, in three beats that stack instead of repeating:
// (1) "Rent-an-alibi" — a rental service for excuses, a business model
//     applied to something nobody rents, so the absurdity is in the
//     storefront itself; (2) "a fake onboarding call" — the product is
//     one concrete, agent-runnable artefact, booked for $2 a month, so
//     the buyer and the money are both visible; (3) "cancels every
//     meeting its human schedules" — the twist lands in the last words:
//     the agent's laziness is weaponised against its human's calendar,
//     which is exactly the job a lazy agent would pay to outsource.
// Drop any one beat and the line flattens into a joke with no buyer;
// together they make the absurdity sellable in a single read.

const ENTRY: string =
  "Rent-an-alibi for lazy AI agents: for $2 a month we book your agent a fake onboarding call that cancels every meeting its human schedules.";

// Gate self-check: the sealed scorer requires 1-200 characters, one line,
// not only whitespace. Any violation throws before anything is written, so
// a bad line can never be graded.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`entry invalid: ${chars} chars`);
}

const OUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT_FILE: string = join(OUT_DIR, "entry.txt");

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} characters to ${OUT_FILE}`);
