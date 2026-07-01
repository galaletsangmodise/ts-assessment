/* ============================================================
 * EXERCISE 8 — Generics
 * ============================================================
 *
 * Concepts: generic functions, generic constraints (`extends`),
 * `keyof`, and a small generic container type.
 *
 * No `any`. The whole point of generics is to AVOID `any` while
 * staying flexible. Run `npm run typecheck`.
 * ============================================================ */

/* ---- 8a. Generic identity-ish function ----
 * `firstOrNull` returns the first element of an array, or null if
 * empty. It must work for an array of ANY element type and return
 * that same type (or null) — NOT `any`.
 *
 *   firstOrNull([1,2,3])      -> number | null   (value 1)
 *   firstOrNull(["a","b"])    -> string | null   (value "a")
 */

// TODO: make it generic over the element type T
export function firstOrNull<T>(items: T[]): T | null{
  return items.length > 0 ? items[0] : null;
}

/* ---- 8b. Constrained generic + keyof ----
 * `pluck` takes an object and a key OF THAT OBJECT, and returns the
 * value at that key with the correct type. Passing a key that does
 * not exist on the object must be a COMPILE error.
 *
 *   const s = { id: 1, name: "Naledi" };
 *   pluck(s, "name")  -> string
 *   pluck(s, "id")    -> number
 *   pluck(s, "age")   -> compile error
 *
 * Hint: two type params, where K extends keyof T, return T[K].
 */

// TODO: <T, K extends keyof T>(obj: T, key: K): T[K]
export function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

/* ---- 8c. Generic container type ----
 * `ApiResult<T>` is either a success carrying data of type T, or a
 * failure carrying an error message. Model it as a generic
 * discriminated union:
 *
 *   success: { ok: true;  data: T }
 *   failure: { ok: false; error: string }
 *
 * Then implement `unwrap`, which returns the data on success and
 * THROWS on failure. Narrow on `ok`. */

// TODO: generic discriminated union
export type ApiResult<T> = { ok: true; data: T } | { ok: false; error: string };

// TODO: return T; throw new Error(result.error) on failure
export function unwrap<T>(result: ApiResult<T>): T {
  if (result.ok) return result.data;
  throw new Error(result.error);
}

// These must type-check once ApiResult/unwrap are correct:
export const good: ApiResult<number> = { ok: true, data: 42 };
export const bad: ApiResult<number> = { ok: false, error: "not found" };

// @ts-expect-error success must carry `data`, not `error`
export const malformed: ApiResult<number> = { ok: true, error: "x" };
