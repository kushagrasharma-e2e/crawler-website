import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crawler Docs",
  description: "Crawler test documentation page."
};

export default function DocsPage() {
  return (
    <main className="page narrow">
      <h1>Crawler test documentation</h1>
      <p>
        This page exists so crawlers have another internal route to discover
        through normal links and sitemap entries.
      </p>

      <h2>Expected crawler behavior</h2>
      <p>
        Crawlers should be able to fetch this page, parse the title,
        description, headings, paragraphs, and internal links.
      </p>

      <h2>Verification</h2>
      <p>
        Use server logs, Vercel analytics, or the crawler detector integration
        to verify crawler requests.
      </p>
    </main>
  );
}
