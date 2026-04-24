import { NextRequest, NextResponse } from "next/server";

const crawlerPaywallApiBase =
  process.env.CRAWLER_PAYWALL_API_BASE || "https://crawler-paywall.vercel.app";

const crawlerPaywallSiteKey =
  process.env.CRAWLER_PAYWALL_SITE_KEY ||
  process.env.NEXT_PUBLIC_CRAWLER_PAYWALL_SITE_KEY ||
  "pk_live_JiwCYfPa2l8y0Tl7GOxqrEFJwrIbwIUu";

export async function POST(request: NextRequest) {
  const { token } = await request.json().catch(() => ({ token: null }));

  if (!token || typeof token !== "string") {
    return NextResponse.json(
      { ok: false, error: "Missing token" },
      { status: 400 }
    );
  }

  const response = await fetch(`${crawlerPaywallApiBase}/v1/verify`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      siteKey: crawlerPaywallSiteKey,
      token
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, result: { valid: false } },
      { status: response.status }
    );
  }

  const result = await response.json();

  return NextResponse.json({
    ok: Boolean(result.valid ?? result.ok),
    result
  });
}
