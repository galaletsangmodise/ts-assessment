/* Runtime self-check. Run: npm test
 * Types are checked separately with `npm run typecheck`.
 * You need BOTH to pass. */

/// <reference types="node" />

import { formatId, toLetter } from "../exercises/02-unions-enums.ts";
import { average, curveUp, greet, passValidator } from "../exercises/04-functions.ts";
import { Exam } from "../exercises/05-classes.ts";
import { buildReport, passingMarks, highest, lookup } from "../exercises/07-debug.ts";
import { firstOrNull, pluck, unwrap } from "../exercises/08-generics.ts";
import { describe as describeNote } from "../exercises/09-discriminated-unions.ts";
import { classAverages, partTimeNames, emailOrFallback, roster } from "../exercises/10-real-world.ts";

let passed = 0;
let failed = 0;

function check(name: string, actual: unknown, expected: unknown): void {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) { passed++; console.log(`  \u2713 ${name}`); }
  else { failed++; console.log(`  \u2717 ${name}\n      expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`); }
}

function checkThrows(name: string, fn: () => unknown): void {
  try { fn(); failed++; console.log(`  \u2717 ${name}\n      expected it to throw, but it did not`); }
  catch { passed++; console.log(`  \u2713 ${name}`); }
}

console.log("\nExercise 2 — narrowing");
check("formatId number", formatId(1), "STU-0001");
check("formatId string", formatId("stu-0009"), "STU-0009");
check("toLetter mark 75 -> A", toLetter({ kind: "mark", value: 75 }), "A");
check("toLetter mark 49 -> F", toLetter({ kind: "mark", value: 49 }), "F");
check("toLetter letter passthrough", toLetter({ kind: "letter", value: "C" }), "C");

console.log("\nExercise 4 — functions");
check("average(80,90,100)", average(80, 90, 100), 90);
check("average() -> 0", average(), 0);
check("curveUp caps at 100", curveUp(98), 100);
check("greet default", greet({ id: 1, name: "Naledi", email: "n@x.com", status: "active" }), "Hello, Naledi");
check("validator pass", passValidator(85), true);
check("validator fail", passValidator(40), false);
check("validator label", passValidator.label, "pass>=50");

console.log("\nExercise 5 — classes");
const exam = new Exam("Midterm", [70, 90]);
check("exam average", exam.average(), 80);
check("exam weighted (avg*0.6)", exam.weighted, 48);

console.log("\nExercise 7 — debug");
check("buildReport", buildReport(["Thabo", "Lerato"], [60, 95]), { Thabo: 60, Lerato: 95 });
check("passingMarks >= 50", passingMarks([50, 49, 80]), [50, 80]);
check("highest([3,9,4])", highest([3, 9, 4]), 9);
check("highest([]) -> 0", highest([]), 0);
check("lookup present", lookup({ MOD: 88 }, "MOD"), 88);
check("lookup present zero (not missing)", lookup({ MOD: 0 }, "MOD"), 0);
check("lookup missing -> null", lookup({ MOD: 88 }, "NOPE"), null);

console.log("\nExercise 8 — generics");
check("firstOrNull number", firstOrNull([1, 2, 3]), 1);
check("firstOrNull empty -> null", firstOrNull([]), null);
check("pluck name", pluck({ id: 1, name: "Naledi" }, "name"), "Naledi");
check("unwrap success", unwrap({ ok: true, data: 42 }), 42);
checkThrows("unwrap failure throws", () => unwrap({ ok: false, error: "x" }));

console.log("\nExercise 9 — discriminated unions");
check("describe email", describeNote({ type: "email", address: "a@b.com" }), "Email to a@b.com");
check("describe sms", describeNote({ type: "sms", phone: "0820000000" }), "SMS to 0820000000");
check("describe push", describeNote({ type: "push", deviceId: "dev-1", badge: 3 }), "Push to dev-1 (badge 3)");

console.log("\nExercise 10 — real world");
check("classAverages", classAverages(roster), [
  { name: "Naledi", average: 85.33333333333333 },
  { name: "Sipho", average: 0 },
  { name: "Lerato", average: 55.5 },
]);
check("partTimeNames", partTimeNames(roster), ["Sipho"]);
check("emailOrFallback present", emailOrFallback(roster.students[0]), "naledi@x.com");
check("emailOrFallback absent", emailOrFallback(roster.students[1]), "no-email");

console.log(`\n${passed} passed, ${failed} failed.\n`);
if (failed > 0) throw new Error(`${failed} tests failed`);
