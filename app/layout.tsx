import type { Metadata } from "next";
import "./styles.css";

const siteUrl = "https://crawler-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Crawler Website Demo",
    template: "%s | Crawler Website Demo"
  },
  description:
    "A simple public website designed to be readable by AI tools and traditional web crawlers.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Crawler Website Demo",
    description:
      "A simple public website designed to be readable by AI tools and traditional web crawlers.",
    url: siteUrl,
    siteName: "Crawler Website Demo",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteKey =
    process.env.CRAWLER_PAYWALL_SITE_KEY ||
    process.env.NEXT_PUBLIC_CRAWLER_PAYWALL_SITE_KEY ||
    "pk_live_JiwCYfPa2l8y0Tl7GOxqrEFJwrIbwIUu";

  const apiBase =
    process.env.CRAWLER_PAYWALL_API_BASE ||
    process.env.NEXT_PUBLIC_CRAWLER_PAYWALL_API_BASE ||
    "https://crawler-paywall.vercel.app";

  return (
    <html lang="en">
      <body>
        {children}

        <script
          id="crawler-paywall-detector"
          async
          src={`${apiBase}/detector.js`}
          data-site-key={siteKey}
          data-mode="observe"
          data-api-base=""
        />
      </body>
    </html>
  );
}
