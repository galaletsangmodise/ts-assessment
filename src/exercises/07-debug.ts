/* ============================================================
 * EXERCISE 7 — Debug the Types (no scaffolding)
 * ============================================================
 *
 * This file leans on `any` and loose typing to silence the compiler.
 * Remove every `any`, give precise types, and fix the real bugs the
 * proper types reveal. Behaviour in each comment must still hold.
 *
 * Rules: zero `any`/`as any`/`@ts-ignore` when done. `npm run
 * typecheck` must pass. Do NOT change tsconfig.json.
 * ============================================================ */

// BUG: maps a student name (string) to their final mark (number).
export function buildReport(names: string[], marks: number[]): Record<string, number>  {
  const report: Record<string, number> = {};
  for (let i = 0; i < names.length; i++) {
    report[names[i]] = marks[i];
  }
  return report; // any = {} let TypeScript ignore the whole function. The fix was typing them as string[], number[], and Record<string, number>.
}

// BUG: should return only PASSING marks. Pass is >= 50.
// Type the parameter and fix the predicate.
export function passingMarks(marks: number[]): number[] {
  return marks.filter((m) => m >= 50);//The predicate was m > 50 — strictly greater than. So a student who scored exactly 50 (a pass) got filtered out. 
}

// BUG: untyped `student` hides the typo `naem`. Type it so the
// compiler flags the typo, then fix it.
export function describe(student: { name: string; mark: number }): string {
  return `${student.name} scored ${student.mark}`; //bug- the code read student.naem instead of student.name. Because student was typed as any, TypeScript didn't complain
}

//BUG: this is meant to return the HIGHEST mark in the list, but it
//has an initialisation bug that wrong typing hides. Type `marks` as
//number[], return a number, and fix the logic so highest([3,9,4])===9
//and highest([]) === 0.
export function highest(marks:number[]): number {
  let max = 0; //bug was `let max;` (undefined), so first comparison always failed silently
  for (const m of marks) if (m > max) max = m;
  return max;
}

//BUG: `lookup` should return the score for a code, or null if the
//code is absent. The current loose typing lets callers forget the
//null case. Type `sheet` as Record<string, number>, and the return
//as `number | null`. Fix the body so a missing key returns null
//(note: a present score of 0 must NOT be treated as missing).
export function lookup(sheet:  Record<string, number>, code: string): number | null {
  const value = sheet[code];
  return value === undefined ? null : value; //bug: `|null` treated a real 0 as falsy
}
