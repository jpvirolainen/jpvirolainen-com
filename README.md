# jpvirolainen.com

Minimal static site built with Astro 5 using the Neon Dark Borderless Nordic layout (with a Daylight toggle), custom neon blueprint SVG diagrams, automatic RSS and XML sitemap, `Person` and `BlogPosting` JSON-LD structured data, and `llms.txt`.

## Local Preview

Requires Node 20.3+ or Node 22+ (`.nvmrc` is pinned to `22`).

```bash
npm install
npm run dev
```

Build production output into `dist/`:

```bash
npm run build
```

## Deploy to Cloudflare Pages

1. Push this directory to a GitHub repository (private or public).
2. In **Cloudflare Dashboard -> Compute (Workers & Pages) -> Create application -> Pages -> Import an existing Git repository**, select the repository.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `22`
4. Open the deployed project's **Custom domains** tab and add `jpvirolainen.com`. Because DNS is already on Cloudflare, routing configures automatically. Leave all existing `MX` and `TXT` email records untouched.

## Identity Linking Checklist

1. Copy `GITHUB_PROFILE_README.md` into your `jpvirolainen/jpvirolainen` GitHub profile repo and set `https://jpvirolainen.com` as your GitHub Website URL.
2. Link `https://jpvirolainen.com` on your LinkedIn Contact Info / Featured section.
3. Submit `https://jpvirolainen.com/sitemap-index.xml` to Google Search Console and Bing Webmaster Tools.
