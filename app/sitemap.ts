import type { MetadataRoute } from "next";

const baseUrl = "https://edfrica.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const primaryRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ecosystem`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/partner`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const legalRoutes: MetadataRoute.Sitemap = [
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    "/safeguarding-policy",
    "/data-protection-policy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...primaryRoutes, ...legalRoutes];
}
