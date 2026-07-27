This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SEO

Everything search- and social-facing is driven from two files:

- `lib/seo.ts` — the site origin plus `buildMetadata()`, which every page calls
  to produce its title, description, canonical, Open Graph and Twitter blocks.
  Next.js does **not** merge `openGraph` across segments, so a page that skips
  the helper silently inherits the homepage's social card.
- `lib/schema.ts` — the JSON-LD entity graph. The organisation and website
  nodes are emitted once in the root layout; each page adds its own nodes
  (`WebPage`, `BreadcrumbList`, and page-specific ones) referencing them by
  `@id`.

Social cards are generated at build time from `lib/og.tsx`; each route's
`opengraph-image.tsx` supplies the copy. Add one whenever you add a route —
without it, the route falls back to the site-wide card.

`app/sitemap.ts` carries a hand-maintained `lastContentUpdate` date. Bump it
when marketing copy changes materially, and add the route to `primaryRoutes`
when you add a page.

### Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin used for canonicals, sitemap, OG URLs and JSON-LD. Defaults to `https://edfrica.org`. Set it on preview deployments so they don't emit production canonicals. |

Non-production Vercel deployments serve a `Disallow: /` robots.txt
automatically, keyed off `VERCEL_ENV`.

### Launch checklist

- [ ] Verify the domain in Google Search Console and Bing Webmaster Tools, then
      submit `https://edfrica.org/sitemap.xml`.
- [ ] Populate `orgSocials` in `lib/content.ts` — those URLs become the
      `sameAs` array, which is how search engines confirm the entity.
- [ ] Replace the placeholder testimonials and Hub pricing in `lib/content.ts`.
      No review or offer schema is emitted while they are placeholders, on
      purpose.
- [ ] Run the live URLs through the
      [Rich Results Test](https://search.google.com/test/rich-results).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
