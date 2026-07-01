/* ============================================================
 * EXERCISE 5 — Classes: modifiers, inheritance, abstract,
 *              implements, getters
 * ============================================================
 *
 * Concepts: access modifiers (public/private/protected/readonly),
 * an interface a class `implements`, `abstract` base + subclass,
 * and a typed getter. No `any`. Run `npm run typecheck`.
 * ============================================================ */

/* ---- 5a. Interface a class must implement ----
 * `Averageable` requires an `average(): number` method. */

// TODO: declare the interface with an average(): number method
export interface Averageable {
  average(): number;
}

/* ---- 5b. Abstract base ----
 * `Assessment` is abstract. It holds a PROTECTED `scores: number[]`
 * (so subclasses can read it, outsiders cannot) and a public
 * readonly `title`. It declares an ABSTRACT method
 * `weight(): number` that subclasses must implement. It provides a
 * concrete `total(): number` = sum of scores. */

export abstract class Assessment implements Averageable {
  public readonly title: string;
  protected scores: number[];
  constructor(title: string, scores: number[]) {
    this.title = title;
    this.scores = scores;
  }

  abstract weight(): number;
  total(): number {
    return this.scores.reduce((s, n) => s + n, 0);
  }

  // TODO: implement average(): number from Averageable (0 if empty)
  average(): number {
    return this.scores.length === 0 ? 0 : this.total() / this.scores.length;
  }
}

/* ---- 5c. Concrete subclass ----
 * `Exam` extends Assessment with a fixed weight of 0.6.
 * It exposes a getter `weighted` = average() * weight(). */

export class Exam extends Assessment {
   weight(): number { return 0.6; }
  get weighted(): number { return this.average() * this.weight(); }
}

/* ---- 5d. Prove encapsulation ---- */

export const midterm = new Exam("Midterm", [70, 90]);
midterm.average(); // 80

// @ts-expect-error 'scores' is protected and not accessible here
console.log(midterm.scores);

// @ts-expect-error cannot assign to readonly 'title'
midterm.title = "Changed";
