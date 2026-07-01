/* ============================================================
 * EXERCISE 1 — Types, Inference, Arrays & Tuples
 * ============================================================
 *
 * Concepts: annotations, inference, arrays, readonly arrays,
 * tuples (including a rest tuple), and `as const`.
 *
 * Fix every `// TODO`. No `any`, no `as any`, no `@ts-ignore`.
 * Run `npm run typecheck` until there are zero errors.
 * ============================================================ */

/* ---- 1a. Annotate. Pick the NARROWEST correct type. ---- */

// TODO: type these three
export const courseName: string = "Full Stack Development";
export const totalModules: number = 12;
export const isEnrolled: boolean = true;

/* ---- 1b. Inference vs annotation ----
 * Leave `inferredScore` un-annotated. `frozenScore` uses `as const`. */

const inferredScore = 87;
const frozenScore = 87 as const;
export { inferredScore, frozenScore };

// QUESTION (write-up): `inferredScore` is inferred as `number`, but
// `frozenScore` is inferred as the literal `87`. Explain the
// difference and give one situation where the literal type matters.

/* ---- 1c. Arrays vs readonly arrays ----
 * `FIXED_WEIGHTS` must be IMMUTABLE — `.push()` on it must be a
 * compile error. Use a readonly array type. */

export const moduleScores: number[] = [88, 73, 95, 60];

// TODO: type so that mutation is rejected
export const FIXED_WEIGHTS: readonly number [] = [0.2, 0.3, 0.5];

// This MUST error once FIXED_WEIGHTS is readonly. Keep the directive.
// @ts-expect-error cannot push onto a readonly array
FIXED_WEIGHTS.push(0.1);

/* ---- 1d. Tuples ----
 * `StudentRecord` is exactly [name: string, finalMark: number].
 * `GradedRow` starts with a name (string) then ANY NUMBER of marks
 * (number...). Use a rest element. */

// TODO: tuple [string, number]
export type StudentRecord = [string, number];
export const topStudent: StudentRecord = ["Lerato", 95];

// TODO: tuple [string, ...number[]]
export type GradedRow =  [string, ...number[]];
export const row1: GradedRow = ["Thabo", 60, 75, 80];
export const row2: GradedRow = ["Sipho"]; // zero marks allowed

// This MUST error — marks must be numbers, not strings.
// @ts-expect-error marks must be numbers
export const badRow: GradedRow = ["Naledi", "A+"];
