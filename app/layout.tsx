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
  return (
    <html lang="en">
      <body>
        {children}

        <script
          async
          src="https://crawler-paywall.vercel.app/detector.js"
          data-site-key="pk_live_JiwCYfPa2l8y0Tl7GOxqrEFJwrIbwIUu"
          data-mode="observe"
          data-api-base="https://crawler-paywall.vercel.app"
        />
      </body>
    </html>
  );
}
