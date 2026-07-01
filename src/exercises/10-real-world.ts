/* ============================================================
 * EXERCISE 10 — Type the Real-World Data (capstone)
 * ============================================================
 *
 * You are given an untyped blob that looks like a JSON API response
 * for a class of students. Your job: write precise types for it and
 * a couple of typed functions over it. This pulls together objects,
 * optional fields, unions, arrays, and narrowing.
 *
 * No `any`. Run `npm run typecheck` AND `npm test`.
 * ============================================================ */

/* ---- 10a. Write the types ----
 * The shape (study the data below):
 *
 *   ClassRoster = {
 *     courseCode: string
 *     term: "2026-S1" | "2026-S2"          // only these two
 *     students: StudentRow[]
 *   }
 *
 *   StudentRow = {
 *     id: number
 *     name: string
 *     email?: string                        // may be absent
 *     enrolment: "full-time" | "part-time"
 *     marks: number[]                        // may be empty
 *   }
 */

// TODO: define StudentRow
export type StudentRow = {
  id: number
  name: string
  email?: string
  enrolment: "full-time" | "part-time"
  marks: number[]
}

// TODO: define ClassRoster
export type ClassRoster = {
  courseCode: string
  term: "2026-S1" | "2026-S2"
  students: StudentRow[]
}


/* ---- 10b. The data (do not change it). It must satisfy your types. */
export const roster: ClassRoster = {
  courseCode: "TS101",
  term: "2026-S1",
  students: [
    { id: 1, name: "Naledi", email: "naledi@x.com", enrolment: "full-time", marks: [88, 73, 95] },
    { id: 2, name: "Sipho", enrolment: "part-time", marks: [] },
    { id: 3, name: "Lerato", email: "lerato@x.com", enrolment: "full-time", marks: [60, 51] },
  ],
};

/* ---- 10c. Typed functions over the data ---- */

// Returns each student's average mark (0 if they have no marks),
// as an array of { name: string; average: number }, in roster order.
// TODO: type the return as { name: string; average: number }[]
export function classAverages(r: ClassRoster): { name: string; average: number }[] {
  return r.students.map((s) => ({
    name: s.name,
    average: s.marks.length === 0 ? 0 : s.marks.reduce((a, m) => a + m, 0) / s.marks.length,
  }));
}

// Returns the names of students who are part-time. The return type
// must be string[].
// TODO
export function partTimeNames(r: ClassRoster): string[] {
  return r.students.filter((s) => s.enrolment === "part-time").map((s) => s.name);
}

// Returns the email if present, otherwise the string "no-email".
// `student` is a StudentRow. Handle the optional field with narrowing
// (do NOT use `!`).
// TODO
export function emailOrFallback(student: StudentRow): string {
return student.email !== undefined ? student.email : "no-email";
}
