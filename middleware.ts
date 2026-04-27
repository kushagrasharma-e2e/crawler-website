import { NextRequest, NextResponse } from "next/server";

const CRAWLER_PAYWALL_SITE_KEY = "pk_live_JiwCYfPa2l8y0Tl7GOxqrEFJwrIbwIUu";
const CRAWLER_PAYWALL_API_BASE = "https://crawler-paywall.vercel.app";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.method === "GET" || request.method === "HEAD") {
    fetch(`${CRAWLER_PAYWALL_API_BASE}/v1/crawl-hit`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        siteKey: CRAWLER_PAYWALL_SITE_KEY,
        pageUrl: request.url,
        method: request.method,
        userAgent: request.headers.get("user-agent"),
        acceptLanguage: request.headers.get("accept-language"),
        secChUa: request.headers.get("sec-ch-ua"),
        ip:
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
          request.headers.get("x-real-ip"),
      }),
    }).catch(() => undefined);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
