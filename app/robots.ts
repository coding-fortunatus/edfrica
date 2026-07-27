import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  /**
   * Preview and staging deployments must never be indexed — a duplicate copy
   * of the site on a *.vercel.app host competes with the real one. Vercel sets
   * VERCEL_ENV on every deployment; when it is absent (self-hosted, local
   * build) fall back to checking the configured origin.
   */
  const vercelEnv = process.env.VERCEL_ENV;
  const isProduction = vercelEnv
    ? vercelEnv === "production"
    : siteUrl === "https://edfrica.org";

  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Next's build output and image optimiser add nothing to the index.
        disallow: ["/api/", "/_next/static/chunks/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
