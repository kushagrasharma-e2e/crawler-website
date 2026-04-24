import { NextRequest, NextResponse } from "next/server";

const crawlerPaywallApiBase =
  process.env.CRAWLER_PAYWALL_API_BASE || "https://crawler-paywall.vercel.app";

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}

export async function POST(request: NextRequest) {
  const body = await request.text();

  const response = await fetch(`${crawlerPaywallApiBase}/v1/attest`, {
    method: "POST",
    headers: {
      "content-type": request.headers.get("content-type") || "application/json",
      "accept-language": request.headers.get("accept-language") || ""
    },
    body,
    cache: "no-store"
  });

  const responseBody = await response.text();

  return new NextResponse(responseBody, {
    status: response.status,
    headers: {
      "content-type":
        response.headers.get("content-type") || "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}
