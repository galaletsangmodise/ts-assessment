/* ============================================================
 * EXERCISE 9 — Discriminated Unions & Exhaustiveness
 * ============================================================
 *
 * Concepts: a tagged union, narrowing on the discriminant in a
 * switch, and compile-time EXHAUSTIVENESS via the `never` type.
 *
 * No `any`. Run `npm run typecheck`.
 * ============================================================ */

/* ---- 9a. Model the union ----
 * A notification is one of three shapes, each tagged by `type`:
 *
 *   { type: "email"; address: string }
 *   { type: "sms";   phone: string }
 *   { type: "push";  deviceId: string; badge: number }
 */

// TODO: define each member, then the union `Notification`
export type EmailNote = {
  type:"email";
  address: string;
};

export type SmsNote = {
  type: "sms";
  phone: string;
};

export type PushNote = {
  type: "push";
  deviceId: string;
  badge: number;
};

export type Notification = EmailNote | SmsNote | PushNote;

/* ---- 9b. Exhaustive handler ----
 * `describe` returns a human string for each notification type.
 * You MUST handle every case in a switch on `type`, and include a
 * `default` branch that assigns the value to a `never` variable so
 * that if someone later ADDS a new notification type and forgets to
 * handle it here, this file FAILS TO COMPILE.
 *
 * Expected outputs:
 *   email -> `Email to <address>`
 *   sms   -> `SMS to <phone>`
 *   push  -> `Push to <deviceId> (badge <badge>)`
 */

export function describe(n: Notification): string {
  switch (n.type) {
    case "email":
      return `Email to ${n.address}`;
    case "sms":
      return `SMS to ${n.phone}`;
    case "push":
      return `Push to ${n.deviceId} (badge ${n.badge})`;
    default: {
      const _exhaustive: never = n;
      throw new Error(`Unhandled notification: ${_exhaustive}`);
    }
  }
}

/* ---- 9c. Prove it ----
 * Once 9a/9b are correct, these compile and `describe` returns the
 * strings above (the test harness checks the outputs). */

export const e: Notification = { type: "email", address: "a@b.com" };
export const s: Notification = { type: "sms", phone: "0820000000" };
export const p: Notification = { type: "push", deviceId: "dev-1", badge: 3 };
