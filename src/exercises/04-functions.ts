/* ============================================================
 * EXERCISE 4 — Functions
 * ============================================================
 *
 * Concepts: typed params/returns, optional & default params, void,
 * function-type aliases, rest params, and a call-signature object.
 *
 * No `any`. Run `npm run typecheck`.
 * ============================================================ */

import type { Student } from "./03-objects-interfaces.ts";

/* ---- 4a. Rest parameters ----
 * `average` accepts any number of scores as individual args:
 *   average(80, 90, 100) -> 90 ;  average() -> 0
 * Use a rest parameter typed as numbers. */

// TODO: rest param of numbers, returns number
export function average(...scores: number[]): number {
  if (scores.length === 0) return 0;
  return scores.reduce((sum, n) => sum + n, 0) / scores.length;
}

/* ---- 4b. Optional + default param ---- */

// TODO: greeting defaults to "Hello"; returns string
export function greet(student: Student, greeting: string = "Hello"): string {
  return `${greeting}, ${student.name}`;
}

/* ---- 4c. void ---- */

// TODO: return type
export function logResult(message: string): void {
  console.log(`[RESULT] ${message}`);
}

/* ---- 4d. Function-type alias + implementation ---- */

// TODO: (score: number) => number
export type ScoreTransformer = (score: number) => number;

// TODO: annotate with ScoreTransformer
export const curveUp: ScoreTransformer = (score) => Math.min(score + 5, 100);

/* ---- 4e. Object with a call signature ----
 * `Validator` is an object you can CALL like `validator(85)` to get a
 * boolean, AND it carries a `.label` string property.
 * Implement `passValidator` (true when mark >= 50, label "pass>=50").
 *
 *   interface Validator {
 *     (mark: number): boolean;
 *     label: string;
 *   }
 */

// TODO: define the Validator interface with a call signature
export interface Validator {
  (mark: number): boolean;
  label: string;
}

// TODO: implement and attach the label
export const passValidator: Validator = Object.assign(
  (mark: number) => mark >= 50,
  { label: "pass>=50" }
);