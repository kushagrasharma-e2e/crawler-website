# Crawler Website Demo

Bare minimum crawler-friendly website for Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Crawler script

The site only loads the maintainer-provided script:

```html
<script
  async
  src="https://crawler-paywall.vercel.app/detector.js"
  data-site-key="pk_live_JiwCYfPa2l8y0Tl7GOxqrEFJwrIbwIUu"
  data-mode="observe"
  data-api-base="https://crawler-paywall.vercel.app">
</script>
```

There is no local verification route, attestation proxy, secret key handling, or
npm crawler package in this repo. The hosted script handles crawler behavior.

Production URL: https://crawler-website.vercel.app
