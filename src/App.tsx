import { StudentCard, Panel } from "./exercises/06-react-props.tsx";

export function App() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "0 auto", padding: 24 }}>
      <h1>TypeScript Basics — Assessment</h1>
      <p>
        Complete every file in <code>src/exercises/</code>. Run{" "}
        <code>npm run typecheck</code> until zero errors, then <code>npm test</code>.
      </p>

      {/* These render only once exercise 6 is typed correctly. */}
      <Panel heading="Students">
        <StudentCard name="Naledi" mark={88} status="active" onSelect={(n) => console.log(n)} />
        <StudentCard name="Sipho" mark={91} status="graduated" note="Distinction" onSelect={(n) => console.log(n)} />
      </Panel>
    </main>
  );
}
