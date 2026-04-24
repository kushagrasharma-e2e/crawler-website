import Link from "next/link";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Crawler Website Demo",
    url: "https://crawler-website.vercel.app",
    description:
      "A simple public website designed to be readable by AI tools and traditional web crawlers."
  };

  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="hero">
        <p className="eyebrow">Crawler friendly demo</p>
        <h1>Simple website for AI tools and web crawlers</h1>
        <p className="lead">
          This public demo site uses semantic HTML, crawlable content,
          metadata, robots.txt, sitemap.xml, and structured data.
        </p>
        <div className="actions">
          <Link href="/about">Read about this demo</Link>
          <Link href="/docs">View crawler docs</Link>
        </div>
      </section>

      <section className="grid" aria-label="Website highlights">
        <article>
          <h2>Readable HTML</h2>
          <p>
            Content is rendered server-side so crawlers can read the page
            without relying on client-side JavaScript.
          </p>
        </article>

        <article>
          <h2>Open crawling</h2>
          <p>
            The robots file allows common crawlers and points them to the
            sitemap for easier discovery.
          </p>
        </article>

        <article>
          <h2>Detector enabled</h2>
          <p>
            The crawler detector script is loaded in observe mode so visits can
            be detected without blocking readers.
          </p>
        </article>
      </section>
    </main>
  );
}
