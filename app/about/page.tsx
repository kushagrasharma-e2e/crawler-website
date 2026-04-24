import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About the crawler-friendly demo website."
};

export default function AboutPage() {
  return (
    <main className="page narrow">
      <h1>About this website</h1>
      <p>
        This site is intentionally simple. It is built with Next.js and can be
        deployed on Vercel with clean URLs, server-rendered content, metadata,
        and crawler discovery files.
      </p>

      <h2>Purpose</h2>
      <p>
        The goal is to test whether AI tools, search crawlers, and ordinary
        browsers can access and understand the public content.
      </p>
    </main>
  );
}
