export type Stat = {
  value: string;
  label: string;
};

export type Pillar = {
  id: string;
  number: string;
  name: string;
  role: string;
  /** Label used in the primary nav and footer, which differs from `role`. */
  navLabel: string;
  tagline: string;
  description: string;
  bullets: string[];
  stat: Stat;
  href: string;
  /** Media, TLab and Social Enterprise live off-site; Hub and Institute
   *  are pages on this site. Drives target="_blank" + the external-link icon. */
  external: boolean;
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
  icon: string;
  photo: string;
  photoAlt: string;
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
    "Edfrica is a social enterprise working on entrepreneurship and leadership among young Africans. We have been running since 2017 and incorporated as Edfrica Solutions Limited in January 2025. The work now sits across five pillars: media, technical delivery, education, physical infrastructure, and CSR.",
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
    name: "Edfrica Media",
    role: "Media",
    navLabel: "Media",
    tagline: "Africa's opportunity intelligence platform",
    description:
      "Business news, scholarships, tech insights, and funding opportunities for African entrepreneurs. It is also how the rest of the Edfrica ecosystem finds the people it serves.",
    bullets: [
      "Curates funding, grant, and fellowship opportunities",
      "Connects SMEs with vetted business consultants",
      "Publishes business news and sector insights across Africa",
    ],
    stat: { value: "25,000+", label: "monthly platform users" },
    href: "https://media.edfrica.org",
    external: true,
    tone: "green",
    photo: "/photos/media-platform.jpg",
    photoAlt:
      "The Edfrica Media platform open on a laptop, showing curated funding and scholarship listings",
  },
  {
    id: "institute",
    number: "02",
    name: "Edfrica Institute",
    role: "Institute",
    navLabel: "Institute",
    tagline: "Institute for Innovation & Enterprise (EIIE)",
    description:
      "Nigeria's entrepreneurship (ESO) and innovation (ISO) support institute, headquartered in Abeokuta with a regional network across all 15 ECOWAS and Alliance of Sahel States countries.",
    bullets: [
      "ESO: business development, MSME advisory, grant & finance navigation, incubation",
      "ISO: innovation hub infrastructure, emerging-tech training, STEAM pipeline via TLab",
      "OGEII, the Ogun Enterprise & Innovation Institute chapter, based at The Edfrica Hub",
    ],
    stat: { value: "15-country", label: "regional network" },
    href: "/institute",
    external: false,
    tone: "indigo",
    photo: "/photos/business-consulting.jpg",
    photoAlt: "An Edfrica consultant leading a business training session",
  },
  {
    id: "education",
    number: "03",
    name: "TLab",
    role: "Education",
    navLabel: "TLab by Edfrica",
    tagline: "Africa's gamified STEAM platform for kids",
    description:
      "A safe, gamified STEAM learning ecosystem for African children aged 3 to 15, fully COPPA and GDPR-K compliant. Children earn XP and progress through five ranks.",
    bullets: [
      "Five ranks: Explorer, Innovator, Builder, Creator, Master Inventor",
      "STEAM Club · Brain Club · Art & Craft Club · Leadership Club",
      "Edfrica's clearest compliance proof point for child-safety-focused donors",
    ],
    stat: { value: "Ages 3–15", label: "COPPA / GDPR-K compliant" },
    href: "https://tlab.edfrica.org",
    external: true,
    tone: "parchment",
    photo: "/photos/robotics-workshop.jpg",
    photoAlt: "A student-built robotics project from a TLab STEAM session",
  },
  {
    id: "infrastructure",
    number: "04",
    name: "The Edfrica Hub",
    role: "Infrastructure",
    navLabel: "Innovation Hub",
    tagline: "A physical home for innovation",
    description:
      "A co-working, training, and event space in Sokenu, off Nawarudeen Road, Abeokuta South LGA. It is the operational base for OGEII and the wider Edfrica ecosystem.",
    bullets: [
      "Co-working floor, training rooms, event & multipurpose hall, incubation bay",
      "Home to OGEII, in-person TLab STEAM sessions, and independent members",
    ],
    stat: { value: "Abeokuta", label: "Ogun State, Nigeria" },
    href: "/hub",
    external: false,
    tone: "green",
    photo: "/photos/edfrica-building.jpg",
    photoAlt: "The Edfrica building in Sokenu, Abeokuta",
  },
  {
    id: "foundation",
    number: "05",
    name: "Edfrica Foundation",
    role: "Foundation",
    navLabel: "Social Enterprise",
    tagline: "CSR & inclusive innovation",
    description:
      "Routes corporate social responsibility and impact investment into inclusive innovation programming across the Edfrica ecosystem.",
    bullets: [
      "Corporate CSR and impact-investment partnerships",
      "Inclusive innovation programming",
    ],
    stat: { value: "CSR", label: "& inclusive innovation" },
    // The CSR pillar is delivered through the Dade Initiative.
    href: "https://dadeinitiative.com/",
    external: true,
    tone: "indigo",
    photo: "/photos/social-enterprise.jpg",
    photoAlt:
      "An Edfrica field officer supporting a trader at her market stall",
  },
];

export const partnerAudiences: PartnerAudience[] = [
  {
    title: "Entrepreneurs & MSMEs",
    body: "Connecting entrepreneurs and MSMEs with opportunities, grants, and loans.",
    icon: "star",
    photo: "/photos/market-assessment.jpg",
    photoAlt: "An Edfrica officer registering a market trader in Abeokuta",
  },
  {
    title: "NGOs",
    body: "Tap a network of 5,000+ members and 20,000+ MSMEs instead of building your own reach from scratch.",
    icon: "heart",
    photo: "/photos/community-outreach.jpg",
    photoAlt: "Edfrica volunteers and children at a community outreach event",
  },
  {
    title: "Corporates & foundations",
    body: "Put CSR and impact investment through a platform that reports what actually happened, not just what was spent.",
    icon: "briefcase",
    photo: "/photos/business-consulting.jpg",
    photoAlt: "An Edfrica consultant leading a business training session",
  },
  {
    title: "Government & public sector",
    body: "Run entrepreneurship and STEAM mandates at scale through OGEII, with monitoring built in from the start.",
    icon: "landmark",
    photo: "/photos/edfrica-building.jpg",
    photoAlt: "The Edfrica building in Sokenu, Abeokuta",
  },
  {
    title: "Academic & research institutions",
    body: "Build curricula with us and publish applied research through the Institute.",
    icon: "graduation",
    photo: "/photos/digital-platform.jpg",
    photoAlt: "Hands typing on a laptop displaying the Edfrica platform",
  },
];

export type Service = {
  slug: string;
  number: string;
  title: string;
  descriptor: string;
  icon: string;
  body: string;
  photo: string;
  photoAlt: string;
};

/**
 * Titles and descriptors are verbatim from the corporate profile PDF, page 07
 * ("Services, delivered end to end"). The longer `body` copy expands each one
 * from the ESO/ISO capability lists on page 06.
 */
export const services: Service[] = [
  {
    slug: "business-development",
    number: "01",
    title: "Business development",
    descriptor: "Strategy & operational support for MSMEs",
    icon: "briefcase",
    body: "We work alongside founders and management teams on strategy, operating models, and the day-to-day systems that let a small business grow without breaking. Advisory is delivered by consultants drawn from our 200-strong technical bench, matched to the sector and stage of the business.",
    photo: "/photos/business-development.jpg",
    photoAlt:
      "An Edfrica facilitator presenting a brand positioning session at the hub",
  },
  {
    slug: "market-assessments",
    number: "02",
    title: "Market assessments",
    descriptor: "Sector & market-entry studies",
    icon: "chart",
    body: "Sector mapping, competitor analysis, and market-entry studies for organisations moving into a new country, segment, or product line. The findings come from a 15-country network with people on the ground, not from desk research alone.",
    photo: "/photos/market-assessment.jpg",
    photoAlt: "An Edfrica officer surveying traders at a market in Abeokuta",
  },
  {
    slug: "financial-analysis",
    number: "03",
    title: "Financial analysis & modelling",
    descriptor: "Feasibility studies & forecasting",
    icon: "chart",
    body: "Financial models, feasibility studies, and forecasting built to the standard funders and lenders expect. Unit economics, scenario analysis, and the assumptions written down where a reviewer can actually check them.",
    photo: "/photos/business-consulting.jpg",
    photoAlt: "Financial documents reviewed during a consulting session",
  },
  {
    slug: "compliance-support",
    number: "04",
    title: "Compliance & regulatory support",
    descriptor: "Registration, licensing, safeguarding",
    icon: "shield",
    body: "Company registration, sector licensing, and safeguarding policy design. We run our own programmes against an active safeguarding/SEAH policy, so the guidance we give is the practice we use.",
    photo: "/photos/compliance.jpg",
    photoAlt: "A compliance and safeguarding briefing session at The Edfrica Hub",
  },
  {
    slug: "access-to-finance",
    number: "05",
    title: "Access to finance",
    descriptor: "Grants, loans & blended finance",
    icon: "seal",
    body: "We help you find the right grant, loan, or blended-finance facility, prepare the application, and manage the reporting that follows. Over ₦50M in financing facilitated to date.",
    photo: "/photos/access-to-finance.jpg",
    photoAlt:
      "An entrepreneur at an Edfrica financing session in front of the programme banner",
  },
  {
    slug: "investment-readiness",
    number: "06",
    title: "Investment readiness",
    descriptor: "Due diligence & capital-raise prep",
    icon: "star",
    body: "Getting a business to the point where it survives contact with an investor: data room, due-diligence pack, governance, and the capital-raise story. All of it ready before the first meeting, not during it.",
    photo: "/photos/digital-platform.jpg",
    photoAlt: "An investment readiness working session",
  },
  {
    slug: "cross-border-access",
    number: "07",
    title: "Cross-border market access",
    descriptor: "Trade facilitation across ECOWAS & Sahel",
    icon: "globe",
    body: "Trade and market entry across all 15 ECOWAS and Alliance of Sahel States countries. We handle the regulatory side, find you local partners, and deliver through our regional network.",
    photo: "/photos/cross-border-access.jpg",
    photoAlt:
      "An Edfrica-hosted virtual session with regional partners across the network",
  },
  {
    slug: "acceleration-incubation",
    number: "08",
    title: "Acceleration & incubation",
    descriptor: "Ideation through to scale",
    icon: "landmark",
    body: "Structured incubation and acceleration from first idea through to scale, run out of The Edfrica Hub in Abeokuta. Cohort programming, technical mentorship, workspace, and market linkage in one place.",
    photo: "/photos/acceleration-incubation.jpg",
    photoAlt: "Founders working through an incubation session at The Edfrica Hub",
  },
];

export type TrustSignal = {
  icon: string;
  title: string;
  body: string;
};

/**
 * From the corporate profile PDF, page 13 ("Compliance & Credentials"). The
 * CAC and TIN registration numbers on that page are deliberately not surfaced
 * here — they belong on request, not on the marketing site.
 */
export const trustSignals: TrustSignal[] = [
  {
    icon: "shield",
    title: "SCUML registered",
    body: "Special Control Unit Against Money Laundering",
  },
  {
    icon: "heart",
    title: "Safeguarding / SEAH policy",
    body: "In active use across grant-funded programming",
  },
  {
    icon: "compass",
    title: "AREM delivery framework",
    body: "Awareness, Responsibility, Engagement, Mobilization",
  },
  {
    icon: "chart",
    title: "Monitoring & Evaluation",
    body: "Logic frameworks built into every programme design",
  },
];

export type Network = {
  name: string;
  /** Expanded name, used as the tile caption and inside the image alt. */
  fullName: string;
  logo: string;
  /** Intrinsic dimensions of the supplied artwork, passed to next/image. */
  width: number;
  height: number;
  href?: string;
};

/**
 * Networks Edfrica belongs to. ISN membership used to sit in `trustSignals`;
 * it lives here now so the credential is stated once, with its mark.
 *
 * The AEIP artwork reads "Africa · Europe Innovation Platform", so that is the
 * name used here rather than the "AU-EU" phrasing of the review note.
 *
 * TODO: add each network's official `href` once the URLs are confirmed — the
 * tiles render unlinked rather than pointing at a guessed domain.
 */
export const networks: Network[] = [
  {
    name: "ISN Hubs",
    fullName: "Innovation Support Network",
    logo: "/logos/isn-hubs.webp",
    width: 256,
    height: 110,
  },
  {
    name: "AEIP",
    fullName: "Africa–Europe Innovation Platform",
    logo: "/logos/africa-europe-innovation-platform.webp",
    width: 492,
    height: 192,
  },
  {
    name: "AfriLabs",
    fullName: "AfriLabs",
    logo: "/logos/afrilabs.webp",
    width: 856,
    height: 300,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
};

/**
 * PLACEHOLDER — every quote below must be replaced with an approved,
 * attributable statement from a real partner before this site goes live.
 * Nothing here is a real quotation and no real organisation is named.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "TODO — replace with an approved quote from a government partner.",
    name: "Name to be confirmed",
    role: "Role to be confirmed",
    org: "Government agency partner",
  },
  {
    quote: "TODO — replace with an approved quote from a donor partner.",
    name: "Name to be confirmed",
    role: "Role to be confirmed",
    org: "Donor partner",
  },
  {
    quote:
      "TODO — replace with an approved quote from a programme beneficiary.",
    name: "Name to be confirmed",
    role: "Role to be confirmed",
    org: "MSME programme beneficiary",
  },
];

export type Insight = {
  title: string;
  excerpt: string;
  category: string;
  href: string;
  photo: string;
  photoAlt: string;
};

/**
 * PLACEHOLDER titles and excerpts — replace with real headlines pulled from
 * media.edfrica.org before launch. The `href` destination is real.
 */
export const insights: Insight[] = [
  {
    title: "TODO — replace with a real headline from Edfrica Media",
    excerpt:
      "Placeholder excerpt. Swap this card's copy for a live article once the media feed is wired up.",
    category: "Funding",
    href: "https://media.edfrica.org",
    photo: "/photos/digital-platform.jpg",
    photoAlt: "The Edfrica media platform open on a laptop",
  },
  {
    title: "TODO — replace with a real headline from Edfrica Media",
    excerpt:
      "Placeholder excerpt. Swap this card's copy for a live article once the media feed is wired up.",
    category: "Enterprise",
    href: "https://media.edfrica.org",
    photo: "/photos/business-consulting.jpg",
    photoAlt: "An Edfrica business advisory session",
  },
  {
    title: "TODO — replace with a real headline from Edfrica Media",
    excerpt:
      "Placeholder excerpt. Swap this card's copy for a live article once the media feed is wired up.",
    category: "STEAM",
    href: "https://media.edfrica.org",
    photo: "/photos/robotics-workshop.jpg",
    photoAlt: "A student-built robotics project from a TLab STEAM session",
  },
];

export const whyPartner: string[] = [
  "Faster mobilization, with no cold-start delay after award",
  "Lower delivery risk, with safeguarding and M&E built in",
  "Built-in visibility through our existing media audience",
  "Local reach at international standard, informed by GIZ, EU and World Bank practice",
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

/** Corporate profile PDF, page 06 — "Why EIIE exists". */
export const whyEiieExists =
  "Nigeria's entrepreneurship and innovation sector splits in two: institutions with grassroots reach but no technical depth, and consultancies with technical depth but no last-mile presence. EIIE was built to be both. We bring a community network of 5,000+ members and 20,000+ MSMEs into the room, backed by delivery standards drawn from World Bank/ECOWAS, GIZ, and GOPA-managed programmes.";

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
  /** Omitted where no headshot has been supplied — the avatar falls back to
   *  an initials monogram rather than a generic placeholder. */
  photo?: string;
};

/** Social URLs are per-person and confirmed; the ones left empty have no
 *  public profile, so the UI renders those icons as inert affordances. */
export const executiveTeam: ExecutiveMember[] = [
  {
    initials: "EO",
    name: "Dr. Emmanuel Odumusi",
    role: "Chief Executive Officer",
    photo: "/team/emmanuel-odumusi.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/emmanuelodumusi/",
      instagram: "https://www.instagram.com/ibkodumusi/",
    },
  },
  {
    initials: "MO",
    name: "Mathew Oguntayo",
    role: "Director",
    photo: "/team/mathew-oguntayo.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/mathewkunle/",
      instagram: "https://www.instagram.com/ogagunmathew/",
    },
  },
  {
    initials: "AO",
    name: "Abiodun Okeowo",
    role: "Director",
    photo: "/team/abiodun-okeowo.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/abiodun-okeowo-7792b77b/",
      instagram: "https://www.instagram.com/peterrichfield/",
    },
  },
  {
    initials: "OO",
    name: "Omolara Olaiya",
    role: "Legal Advisor",
    photo: "/team/omolara-olaiya.jpg",
    social: { linkedin: "https://www.linkedin.com/in/olaiyaifeoluwaomolara" },
  },
];

export type TeamMember = {
  name: string;
  photo?: string;
};

// Full names supplied by the team; no titles were given, so none are invented.
export const managementTeam: TeamMember[] = [
  { name: "Ebisemiju Omotayo" },
  { name: "Sarumi Olayinka", photo: "/team/sarumi-olayinka.jpg" },
  { name: "Ikusheka Oluwaferanmi", photo: "/team/ikusheka-oluwaferanmi.jpg" },
  { name: "Kuforiji Joseph", photo: "/team/kuforiji-joseph.jpg" },
  { name: "Halimat Adeyemi", photo: "/team/halimat-adeyemi.jpg" },
  { name: "Adegbola Kayode Joseph", photo: "/team/adegbola-kayode-joseph.jpg" },
  { name: "Eze Joshua", photo: "/team/eze-joshua.jpg" },
  { name: "Faith Desmond", photo: "/team/faith-desmond.jpg" },
];

export const teamComposition = {
  total: 12,
  femalePercent: 50,
  pwdPercent: 10,
};

export type HubFacility = {
  name: string;
  descriptor: string;
  icon: string;
};

/** Facilities and occupants are from the corporate profile PDF, page 09. */
export const hubFacilities: HubFacility[] = [
  {
    name: "Co-working floor",
    descriptor: "Daily & monthly desks",
    icon: "briefcase",
  },
  {
    name: "Training rooms",
    descriptor: "Workshops & bootcamps",
    icon: "graduation",
  },
  {
    name: "Event & multipurpose hall",
    descriptor: "Conferences & demo days",
    icon: "megaphone",
  },
  {
    name: "Incubation bay",
    descriptor: "Active venture support",
    icon: "star",
  },
];

export const hubOccupants: HubFacility[] = [
  {
    name: "OGEII",
    descriptor: "Ogun chapter of the Edfrica Institute, headquartered here",
    icon: "landmark",
  },
  {
    name: "TLab",
    descriptor: "In-person STEAM sessions for hub-based learners",
    icon: "graduation",
  },
  {
    name: "Independent members",
    descriptor: "Entrepreneurs, consultants & startups on flexible plans",
    icon: "person",
  },
];

export type HubPricingTier = {
  name: string;
  unit: string;
  price: string;
  includes: string[];
  featured?: boolean;
};

/**
 * PLACEHOLDER PRICING — no rates exist in the corporate profile or anywhere
 * else in this repo. Every `price` below is a deliberate TODO. Replace with
 * the real rate card before launch; do not publish invented figures.
 */
export const hubPricing: HubPricingTier[] = [
  {
    name: "Day pass",
    unit: "per day",
    price: "TODO",
    includes: [
      "Hot desk on the co-working floor",
      "Power & internet",
      "Shared meeting-room access",
    ],
  },
  {
    name: "Monthly desk",
    unit: "per month",
    price: "TODO",
    includes: [
      "Dedicated desk",
      "Power & internet",
      "Meeting-room hours included",
      "Mail handling",
    ],
    featured: true,
  },
  {
    name: "Training room",
    unit: "per session",
    price: "TODO",
    includes: [
      "Room set up for workshops & bootcamps",
      "Projector & whiteboard",
      "Technician on site",
    ],
  },
  {
    name: "Event hall",
    unit: "per day",
    price: "TODO",
    includes: [
      "Multipurpose hall for conferences & demo days",
      "AV and seating setup",
      "On-site support",
    ],
  },
];

export const contact = {
  email: "contact@edfrica.org",
  // The active office line leads.
  phones: ["+234 808 485 2235", "+234 806 674 9933"],
  location: "Abeokuta, Ogun State, Nigeria",
  offices: [
    {
      city: "Abeokuta",
      address: "Sokenu, off Nawarudeen Road, Abeokuta South LGA, Ogun State",
    },
  ],
};

/**
 * No real Edfrica social profiles have been supplied yet. The footer renders
 * an icon only when its URL is present, so this stays empty rather than
 * shipping dead links.
 */
export const orgSocials: SocialLinks = {};

export const companyNav = [
  {
    label: "Mission, Vision & Values",
    href: "/about#mission-vision",
    description: "What we're building and why",
    icon: "compass",
  },
  {
    label: "Leadership",
    href: "/team",
    description: "The team behind the ecosystem",
    icon: "person",
  },
  {
    label: "Impact",
    href: "/about#impact",
    description: "Reach, results and credentials",
    icon: "chart",
  },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Team", href: "/team" },
    { label: "Partner With Us", href: "/partner" },
    { label: "Contact", href: "/contact" },
  ],
  explore: [
    { label: "Services", href: "/services" },
    { label: "The Hub", href: "/hub" },
    { label: "The Institute", href: "/institute" },
    { label: "Who we serve", href: "/#who-we-serve" },
    // Restore once the homepage Insights section is re-enabled — the anchor
    // is dead while that section is commented out in app/page.tsx.
    // { label: "Insights", href: "/#insights" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Safeguarding Policy", href: "/safeguarding-policy" },
    { label: "Data Protection Policy", href: "/data-protection-policy" },
  ],
};
