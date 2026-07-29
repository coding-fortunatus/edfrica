import {
  contact,
  executiveTeam,
  hubFacilities,
  missionVision,
  orgName,
  orgSocials,
  pillars,
  regionalNetwork,
  services,
} from "@/lib/content";
import { absoluteUrl, defaultDescription, siteName, siteUrl } from "@/lib/seo";

/**
 * Stable @id values. Every graph node references the organisation and website
 * through these rather than repeating the full object, which is what lets
 * Google stitch the per-page graphs into one entity.
 */
export const ORG_ID = `${siteUrl}/#organization`;
export const WEBSITE_ID = `${siteUrl}/#website`;
export const HUB_ID = `${siteUrl}/hub#place`;
export const INSTITUTE_ID = `${siteUrl}/institute#organization`;

type JsonLdNode = Record<string, unknown>;

/** The 15 ECOWAS + Alliance of Sahel States countries Edfrica operates in. */
const areaServed = regionalNetwork.map((member) => ({
  "@type": "Country",
  name: member.name,
}));

const sameAs = Object.values(orgSocials).filter(Boolean) as string[];

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: contact.offices[0].address,
  addressLocality: "Abeokuta",
  addressRegion: "Ogun State",
  addressCountry: "NG",
} as const;

export function organizationNode(): JsonLdNode {
  return {
    "@type": ["Organization", "NGO"],
    "@id": ORG_ID,
    name: siteName,
    legalName: orgName,
    alternateName: orgName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#logo`,
      url: absoluteUrl("/logo.png"),
      width: 1478,
      height: 448,
      caption: siteName,
    },
    image: { "@id": `${siteUrl}/#logo` },
    description: missionVision.intro,
    slogan: missionVision.mission,
    foundingDate: "2017",
    foundingLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: "Abeokuta", addressCountry: "NG" },
    },
    address: postalAddress,
    email: contact.email,
    telephone: contact.phones[0],
    areaServed,
    knowsAbout: [
      "Youth entrepreneurship",
      "MSME development",
      "STEAM education",
      "Innovation ecosystem support",
      "Business incubation",
      "Access to finance",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: contact.email,
        telephone: contact.phones[0],
        contactType: "customer service",
        areaServed: "Africa",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        email: contact.email,
        telephone: contact.phones[1],
        contactType: "partnerships",
        areaServed: "Africa",
        availableLanguage: ["en"],
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
    subOrganization: pillars.map((pillar) => ({
      "@type": "Organization",
      name: pillar.name,
      description: pillar.description,
      url: pillar.external ? pillar.href : absoluteUrl(pillar.href),
    })),
  };
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteUrl,
    name: siteName,
    description: defaultDescription,
    inLanguage: "en-NG",
    publisher: { "@id": ORG_ID },
  };
}

export type Crumb = { name: string; path: string };

/**
 * Breadcrumb list for a page. "Home" is prepended automatically, so callers
 * pass only the trail below it.
 */
export function breadcrumbNode(crumbs: Crumb[]): JsonLdNode {
  const trail = [{ name: "Home", path: "/" }, ...crumbs];

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(trail[trail.length - 1].path)}#breadcrumb`,
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

type WebPageInput = {
  path: string;
  name: string;
  description: string;
  /** Defaults to WebPage; pass AboutPage, ContactPage, CollectionPage, etc. */
  type?: string;
  crumbs?: Crumb[];
};

export function webPageNode({
  path,
  name,
  description,
  type = "WebPage",
  crumbs,
}: WebPageInput): JsonLdNode {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-NG",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(crumbs ? { breadcrumb: { "@id": `${absoluteUrl(path)}#breadcrumb` } } : {}),
  };
}

/**
 * Wraps nodes in a single @graph document. One script tag per page beats
 * several disconnected ones — the @id references only resolve within a graph.
 */
export function graph(nodes: JsonLdNode[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

/* ---------------------------------------------------------------------- */
/* Page-specific nodes                                                     */
/* ---------------------------------------------------------------------- */

/**
 * The Hub as a physical place. No geo coordinates are published because none
 * are recorded anywhere in this repo — inventing them would misplace the pin.
 */
export function hubPlaceNode(): JsonLdNode {
  return {
    "@type": ["LocalBusiness", "Place"],
    "@id": HUB_ID,
    name: "The Edfrica Hub",
    description:
      "Co-working, training, and event space in Sokenu, Abeokuta South LGA, Ogun State, home to OGEII and the wider Edfrica ecosystem.",
    url: absoluteUrl("/hub"),
    address: postalAddress,
    email: contact.email,
    telephone: contact.phones[0],
    parentOrganization: { "@id": ORG_ID },
    image: absoluteUrl("/photos/edfrica-building.jpg"),
    amenityFeature: hubFacilities.map((facility) => ({
      "@type": "LocationFeatureSpecification",
      name: facility.name,
      value: true,
    })),
  };
}

export function instituteNode(): JsonLdNode {
  const institute = pillars.find((pillar) => pillar.id === "institute");

  return {
    "@type": ["EducationalOrganization", "Organization"],
    "@id": INSTITUTE_ID,
    name: institute?.name ?? "Edfrica Institute for Innovation & Enterprise",
    description: institute?.description,
    url: absoluteUrl("/institute"),
    parentOrganization: { "@id": ORG_ID },
    address: postalAddress,
    areaServed,
  };
}

/** Each consulting service as a Service node, offered by the organisation. */
export function serviceListNode(): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/services")}#services`,
    name: "Edfrica services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.descriptor,
        url: `${absoluteUrl("/services")}#${service.slug}`,
        serviceType: service.title,
        provider: { "@id": ORG_ID },
        areaServed,
      },
    })),
  };
}

/** Leadership as Person nodes. Only names and roles are published. */
export function leadershipListNode(): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/team")}#leadership`,
    name: "Edfrica leadership",
    itemListElement: executiveTeam.map((member, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        worksFor: { "@id": ORG_ID },
        ...(member.photo ? { image: absoluteUrl(member.photo) } : {}),
        ...(Object.values(member.social).filter(Boolean).length
          ? { sameAs: Object.values(member.social).filter(Boolean) }
          : {}),
      },
    })),
  };
}

export function pillarListNode(): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/ecosystem")}#pillars`,
    name: "The Edfrica five-pillar ecosystem",
    itemListElement: pillars.map((pillar, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pillar.name,
      item: pillar.external ? pillar.href : absoluteUrl(pillar.href),
    })),
  };
}
