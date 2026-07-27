import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/**
 * Bumped by hand when marketing copy changes materially. A build timestamp
 * would tell crawlers every page changed on every deploy, which trains them
 * to ignore `lastModified` altogether.
 */
const lastContentUpdate = new Date("2026-07-27");

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const primaryRoutes: Route[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ecosystem", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/institute", changeFrequency: "monthly", priority: 0.8 },
  { path: "/partner", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hub", changeFrequency: "monthly", priority: 0.7 },
  { path: "/team", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
];

const legalRoutes: Route[] = [
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/safeguarding-policy",
  "/data-protection-policy",
].map((path) => ({ path, changeFrequency: "yearly" as const, priority: 0.3 }));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...primaryRoutes, ...legalRoutes].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: lastContentUpdate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
