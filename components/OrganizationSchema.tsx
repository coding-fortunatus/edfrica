import { contact, missionVision, orgName, pillars } from "@/lib/content";

export function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Edfrica",
    legalName: orgName,
    url: "https://edfrica.org",
    logo: "https://edfrica.org/logo.png",
    description: missionVision.intro,
    foundingDate: "2017",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abeokuta",
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: contact.email,
        telephone: contact.phones[0],
        contactType: "customer service",
        areaServed: "Africa",
      },
    ],
    department: pillars.map((pillar) => ({
      "@type": "Organization",
      name: pillar.name,
      description: pillar.description,
      url: pillar.external ? pillar.href : `https://edfrica.org${pillar.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
