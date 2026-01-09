import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Next TS Foundation</h1>
      <ul>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
      </ul>
    </main>
  );
}
