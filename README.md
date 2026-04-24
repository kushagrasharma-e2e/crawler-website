# Crawler Website Demo

Simple crawler-friendly website for Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

Push this folder to GitHub, import the repo in Vercel, then add these
environment variables in the Vercel project settings:

```bash
CRAWLER_PAYWALL_SECRET=your_rotated_secret
CRAWLER_PAYWALL_API_BASE=https://crawler-paywall.vercel.app
CRAWLER_PAYWALL_SITE_KEY=pk_live_JiwCYfPa2l8y0Tl7GOxqrEFJwrIbwIUu
```

The included `vercel.json` config tells Vercel to deploy this as a Next.js app
with `npm install` and `npm run build`.

The site uses the hosted verification endpoint at `/v1/verify`; no
`@crawler-paywall/server` package is required.

Production URL used in metadata/sitemap: https://crawler-website.vercel.app
