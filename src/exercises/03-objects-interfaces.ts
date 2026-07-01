/* ============================================================
 * EXERCISE 3 — Objects, Interfaces, Aliases,
 *              Optional / Readonly, Index Signatures & Extends
 * ============================================================
 *
 * Concepts: interfaces, optional & readonly, an index signature,
 * and interface extension. No `any`. Run `npm run typecheck`.
 * ============================================================ */

/* ---- 3a. Interface with readonly + optional ---- */

// TODO: complete: readonly id:number, name:string, email:string,
//       phone?:string, status:"active"|"graduated"
export interface Student {
 readonly id: number;
  name: string;
  email: string;
  phone?: string;
  status: "active" | "graduated";
}

export const student1: Student = {
  id: 1,
  name: "Naledi",
  email: "naledi@example.com",
  status: "active",
};

// @ts-expect-error cannot assign to a readonly property
student1.id = 999;

/* ---- 3b. Interface extension ----
 * A `TutorStudent` is a Student that ALSO has `subjects: string[]`.
 * Use `extends` — do NOT retype every field. */

// TODO: extend Student
export interface TutorStudent extends Student { 
  subjects: string[];
}

export const tutor1: TutorStudent = {
  id: 2,
  name: "Sipho",
  email: "sipho@example.com",
  status: "active",
  subjects: ["TypeScript", "React"],
};

/* ---- 3c. Index signature ----
 * `ScoreSheet` maps ANY module code (string) to a number score.
 * e.g. sheet["MOD101"] = 88. Use an index signature. */

// TODO: { [code: string]: number }
export type ScoreSheet = { [code: string]: number };

export const sheet: ScoreSheet = { MOD101: 88, MOD102: 73 };

// @ts-expect-error values must be numbers
export const badSheet: ScoreSheet = { MOD103: "high" };

/* ---- 3d. Nested object typing ---- */

// TODO: student:Student, course:string, scores:number[]
export interface Enrolment {
  student: Student; course: string; scores: number[];
}

export const enrolment1: Enrolment = {
  student: student1,
  course: "TypeScript Fundamentals",
  scores: [80, 91, 76],
};
