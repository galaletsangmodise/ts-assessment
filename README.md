# TypeScript Basics — Assessment

Tests the TypeScript fundamentals from the two prerequisite videos, then pushes
into the next layer: generics, discriminated unions, and typing real-world data.

## Setup

```bash
npm install
```

## What you have to do

Open `src/exercises/` and work through the files **in order**. Every spot you
must change is marked `// TODO`; replace each `___` placeholder with the correct
type or code.

1. `01-basics.ts` — types, inference, `as const`, arrays, **readonly arrays**, tuples, **rest tuples**
2. `02-unions-enums.ts` — unions, literals, enums, `typeof` narrowing, **discriminant narrowing**
3. `03-objects-interfaces.ts` — interfaces, optional & readonly, **`extends`**, **index signatures**
4. `04-functions.ts` — typed functions, **rest params**, default/optional params, void, **call signatures**
5. `05-classes.ts` — modifiers, **`protected`**, **`abstract`**, **`implements`**, **getters**
6. `06-react-props.tsx` — typed props, union props, **callback props**, **children**
7. `07-debug.ts` — remove every `any`, fix the bugs the proper types reveal
8. `08-generics.ts` — **generic functions, constraints, `keyof`, generic unions**
9. `09-discriminated-unions.ts` — **tagged unions + `never` exhaustiveness**
10. `10-real-world.ts` — **capstone: type a realistic API blob and write functions over it**

## Rules

- **No `any`, no `as any`, no `@ts-ignore`.** Using them to silence the compiler
  is an automatic fail on that exercise. (`07-debug.ts` starts full of `any` —
  removing every one is the task.)
- **Do not edit `tsconfig.json`.** Strict mode stays on. Fix types, not config.
- Lines with `// @ts-expect-error` are there on purpose to prove a rule is
  enforced (readonly, wrong literal, malformed union). Follow the comment.

## How you are graded

You must pass **all three**:

```bash
npm run typecheck   # zero errors
npm test            # all tests passing
npm run dev         # app renders without type errors
```

## Deliverable

1. Your completed project (zipped, or a Git repo link).
2. A write-up answering the QUESTION comments and explaining, in your own words:
   `interface` vs `type`; what type narrowing is; why `any` defeats TypeScript;
   what a generic is and why it beats `any`; and how the `never` exhaustiveness
   check protects you when a union grows.
