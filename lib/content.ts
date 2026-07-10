export type Stat = {
  value: string;
  label: string;
};

export type Pillar = {
  id: string;
  number: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  bullets: string[];
  stat: Stat;
  href: string;
  tone: "green" | "indigo" | "parchment";
  photo: string;
  photoAlt: string;
};

export type TimelineEntry = {
  year: string;
  text: string;
};

export type PartnerAudience = {
  title: string;
  body: string;
};

export type LeadershipMember = {
  initials: string;
  name: string;
  role: string;
};

export const orgName = "Edfrica Solutions Limited";

export const stats: Stat[] = [
  { value: "5,000+", label: "Community members" },
  { value: "20,000+", label: "MSMEs supported" },
  { value: "200+", label: "Technical consultants" },
  { value: "₦50M+", label: "Financing facilitated" },
];

export const missionVision = {
  intro:
    "Edfrica is a dynamic social enterprise committed to fostering entrepreneurship and leadership among young Africans. Operating since 2017 and formally incorporated as Edfrica Solutions Limited in January 2025, Edfrica has grown into a five-pillar ecosystem spanning media, technical delivery, education, physical infrastructure, and CSR.",
  mission:
    "Toward a continent where youth believe and exhibit right entrepreneurial and leadership value.",
  vision:
    "A continent with accountable leaders and value-driven entrepreneurs.",
};

export const timeline: TimelineEntry[] = [
  { year: "2017", text: "Leadership Conference anchors our youth leadership focus" },
  {
    year: "2019–21",
    text: "Ogun SME Conference and Growth Series expand reach into the MSME ecosystem",
  },
  {
    year: "2022–23",
    text: "Support delivered to 50+ Entrepreneurship Support Organizations across Africa",
  },
  {
    year: "2024",
    text: "Innovation Hub and business incubation programme launch in Abeokuta",
  },
  {
    year: "2025",
    text: "Edfrica Solutions Limited implementing projects and delivering business and digitalization support",
  },
  {
    year: "2026",
    text: "Five-pillar ecosystem launches: Institute, TLab, Hub & Foundation",
  },
];

export const pillars: Pillar[] = [
  {
    id: "media",
    number: "01",
    name: "Edfrica.org",
    role: "Media",
    tagline: "Africa's opportunity intelligence platform",
    description:
      "The leading platform for African entrepreneurs, providing business news, scholarships, tech insights, and funding opportunities across the continent. It is the beneficiary pipeline and dissemination engine for the entire Edfrica ecosystem.",
    bullets: [
      "Curates funding, grant, and fellowship opportunities",
      "Connects SMEs with vetted business consultants",
      "Publishes business news and sector insights across Africa",
    ],
    stat: { value: "25,000+", label: "monthly platform users" },
    href: "https://news.edfrica.org",
    tone: "green",
    photo: "/photos/digital-platform.jpg",
    photoAlt: "Hands typing on a laptop displaying the Edfrica platform",
  },
  {
    id: "institute",
    number: "02",
    name: "Edfrica Institute",
    role: "Institute",
    tagline: "Institute for Innovation & Enterprise (EIIE)",
    description:
      "Nigeria's entrepreneurship (ESO) and innovation (ISO) support institute, headquartered in Abeokuta with a regional network across all 15 ECOWAS and Alliance of Sahel States countries.",
    bullets: [
      "ESO: business development, MSME advisory, grant & finance navigation, incubation",
      "ISO: innovation hub infrastructure, emerging-tech training, STEAM pipeline via TLab",
      "OGEII — Ogun Enterprise & Innovation Institute chapter, based at The Edfrica Hub",
    ],
    stat: { value: "15-country", label: "regional network" },
    href: "https://institute.edfrica.org",
    tone: "indigo",
    photo: "/photos/business-consulting.jpg",
    photoAlt: "An Edfrica consultant leading a business training session",
  },
  {
    id: "education",
    number: "03",
    name: "TLab",
    role: "Education",
    tagline: "Africa's gamified STEAM platform for kids",
    description:
      "A safe, gamified STEAM learning ecosystem for African children aged 3 to 15, fully COPPA and GDPR-K compliant. Children earn XP and progress through five ranks.",
    bullets: [
      "Five ranks: Explorer, Innovator, Builder, Creator, Master Inventor",
      "STEM Club · Brain Club · Art & Craft Club · Leadership Club",
      "Edfrica's clearest compliance proof point for child-safety-focused donors",
    ],
    stat: { value: "Ages 3–15", label: "COPPA / GDPR-K compliant" },
    href: "https://education.edfrica.org",
    tone: "parchment",
    photo: "/photos/robotics-workshop.jpg",
    photoAlt: "A student-built robotics project from a TLab STEAM session",
  },
  {
    id: "infrastructure",
    number: "04",
    name: "The Edfrica Hub",
    role: "Infrastructure",
    tagline: "A physical home for innovation",
    description:
      "A co-working, training, and event space in Sokenu, off Nawairudeen Road, Abeokuta South LGA — the operational base for OGEII and the wider Edfrica ecosystem.",
    bullets: [
      "Co-working floor, training rooms, event & multipurpose hall, incubation bay",
      "Home to OGEII, in-person TLab STEAM sessions, and independent members",
    ],
    stat: { value: "Abeokuta", label: "Ogun State, Nigeria" },
    href: "https://infrastructure.edfrica.org",
    tone: "green",
    photo: "/photos/hub-exterior.jpg",
    photoAlt: "The Edfrica Hub building exterior in Sokenu, Abeokuta",
  },
  {
    id: "foundation",
    number: "05",
    name: "Edfrica Foundation",
    role: "Foundation",
    tagline: "CSR & inclusive innovation",
    description:
      "Channels corporate social responsibility and impact investment into inclusive innovation programming across the Edfrica ecosystem.",
    bullets: [
      "Corporate CSR and impact-investment partnerships",
      "Inclusive innovation programming",
    ],
    stat: { value: "CSR", label: "& inclusive innovation" },
    href: "https://foundation.edfrica.org",
    tone: "indigo",
    photo: "/photos/community-outreach.jpg",
    photoAlt: "Edfrica volunteers and children at a community outreach event",
  },
];

export const partnerAudiences: PartnerAudience[] = [
  {
    title: "NGOs & donors",
    body: "Leverage an established network of 5,000+ members and 20,000+ MSMEs without building infrastructure from scratch.",
  },
  {
    title: "Corporates & foundations",
    body: "Channel CSR and impact investment through a trusted, results-driven platform with measurable outcomes.",
  },
  {
    title: "Government & public sector",
    body: "Deploy entrepreneurship and STEM mandates at scale through OGEII, with built-in monitoring.",
  },
  {
    title: "Academic & research institutions",
    body: "Co-create curricula and publish applied research through the Institute.",
  },
];

export const whyPartner: string[] = [
  "Faster mobilization — no cold-start delay after award",
  "Lower delivery risk — safeguarding & M&E built in",
  "Built-in visibility — reaches our existing media audience",
  "Local plus international standard — GIZ, EU, World Bank-informed practice",
];

export type RegionalMember = {
  name: string;
  bloc: "ECOWAS" | "AES";
};

// The PDF's "15 ECOWAS and Alliance of Sahel States countries" reflects the
// 2024–2025 split: 12 current ECOWAS members plus the 3 AES states that
// formally exited ECOWAS in January 2025.
export const regionalNetwork: RegionalMember[] = [
  { name: "Benin", bloc: "ECOWAS" },
  { name: "Cabo Verde", bloc: "ECOWAS" },
  { name: "Côte d'Ivoire", bloc: "ECOWAS" },
  { name: "Gambia", bloc: "ECOWAS" },
  { name: "Ghana", bloc: "ECOWAS" },
  { name: "Guinea", bloc: "ECOWAS" },
  { name: "Guinea-Bissau", bloc: "ECOWAS" },
  { name: "Liberia", bloc: "ECOWAS" },
  { name: "Nigeria", bloc: "ECOWAS" },
  { name: "Senegal", bloc: "ECOWAS" },
  { name: "Sierra Leone", bloc: "ECOWAS" },
  { name: "Togo", bloc: "ECOWAS" },
  { name: "Burkina Faso", bloc: "AES" },
  { name: "Mali", bloc: "AES" },
  { name: "Niger", bloc: "AES" },
];

export const tlabRanks: string[] = [
  "Explorer",
  "Innovator",
  "Builder",
  "Creator",
  "Master Inventor",
];

export const esoServices: string[] = [
  "Business development & MSME advisory",
  "Grant, fellowship & finance navigation",
  "Incubation & acceleration",
  "Market linkage & enterprise financing",
];

export const isoServices: string[] = [
  "Innovation hub & co-working infrastructure",
  "Emerging-tech training: AI, IoT, cloud, data",
  "STEAM talent pipeline via TLab",
  "Applied research & digital transformation advisory",
];

export type SocialLinks = {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
};

export type ExecutiveMember = LeadershipMember & {
  social: SocialLinks;
};

/**
 * No real social profile URLs exist yet — left empty on purpose so the UI
 * renders the icons as inert "coming soon" affordances rather than dead links.
 */
export const executiveTeam: ExecutiveMember[] = [
  {
    initials: "EO",
    name: "Dr. Emmanuel Odumusi",
    role: "Chief Executive Officer",
    social: {},
  },
  { initials: "MO", name: "Matthew Oguntayo", role: "Director", social: {} },
  { initials: "OE", name: "Abiodun Okeowo", role: "Director", social: {} },
  { initials: "OO", name: "Omolara Olaiya", role: "Legal Advisor", social: {} },
];

// The source corporate profile gives first names only for the management
// team, with no titles — shown as name + photo placeholder, no invented roles.
export const managementTeam: string[] = [
  "Faith",
  "Tayo",
  "Adebola",
  "Halima",
  "Rachel",
  "Blessing",
  "Joseph",
  "Deborah",
];

export const teamComposition = {
  total: 12,
  femalePercent: 50,
  pwdPercent: 10,
};

export const contact = {
  email: "contact@edfrica.org",
  phones: ["+234 806 674 9933", "+234 808 485 2235"],
  location: "Abeokuta, Ogun State, Nigeria",
};

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Team", href: "/team" },
    { label: "Partner With Us", href: "/partner" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Safeguarding Policy", href: "/safeguarding-policy" },
    { label: "Data Protection Policy", href: "/data-protection-policy" },
  ],
};
