import type { Metadata } from "next";

/**
 * Single source of truth for the public origin. Set NEXT_PUBLIC_SITE_URL on
 * preview deployments so canonicals, OG URLs, sitemap and JSON-LD all point at
 * the environment being viewed instead of production.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://edfrica.org"
).replace(/\/$/, "");

export const siteName = "Edfrica";

export const defaultTitle = "Edfrica: Turning African Ambition Into Impact";

export const defaultDescription =
  "Edfrica is a five-pillar social enterprise equipping young Africans to lead and build, across all 15 ECOWAS and Alliance of Sahel States countries.";

/** Absolute URL for a site-relative path. Schema.org needs absolute URLs. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildMetadataInput = {
  /** Page title without the " · Edfrica" suffix — the template adds it. */
  title: string;
  description: string;
  /** Site-relative path, used for both the canonical and the OG URL. */
  path: string;
  /**
   * Longer, punchier title for social cards, which have no site suffix and
   * more room. Falls back to `title`.
   */
  socialTitle?: string;
  keywords?: string[];
};

/**
 * Builds a complete metadata object for a page.
 *
 * Next.js does not merge `openGraph` across segments — a page that omits it
 * inherits the root layout's block verbatim, which would give every page the
 * homepage's social title, description and URL. So every page builds its own
 * full OG and Twitter block here rather than relying on inheritance.
 */
export function buildMetadata({
  title,
  description,
  path,
  socialTitle,
  keywords,
}: BuildMetadataInput): Metadata {
  const social = socialTitle ?? title;

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title: social,
      description,
      url: path,
      siteName,
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: social,
      description,
    },
  };
}
