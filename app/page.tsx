import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page">
      <p>Crawler friendly demo</p>
      <h1>Test demo for AI tools and web crawlers</h1>
      <p>
        This public page keeps the crawler integration to the maintainer script
        tag and plain HTML content.
      </p>
      <Link href="/docs">View crawler docs</Link>
    </main>
  );
}
