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
        This page exists so AI tools and crawlers have a simple internal route
        to discover and scroll.
      </p>

      <h2>Integration</h2>
      <p>
        The website only loads the hosted detector script from
        https://crawler-paywall.vercel.app/detector.js with the public site key.
      </p>

      <h2>Expected crawler behavior</h2>
      <p>
        Crawlers should be able to fetch this page, parse the headings and
        paragraphs, and continue scrolling without any local verification code.
      </p>
    </main>
  );
}
