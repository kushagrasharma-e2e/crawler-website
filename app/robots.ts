import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://crawler-website.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: "GPTBot",
        allow: "/"
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/"
      },
      {
        userAgent: "ClaudeBot",
        allow: "/"
      },
      {
        userAgent: "PerplexityBot",
        allow: "/"
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
