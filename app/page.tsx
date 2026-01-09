"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: 24 }}>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setCount((c) => c + 1)}>+1</button>
        <button onClick={() => setCount((c) => c - 1)}>-1</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </main>
  );
}
