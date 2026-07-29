import type { Metadata, Viewport } from "next";
import { Lato, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { JsonLd } from "@/components/JsonLd";
import { orgName } from "@/lib/content";
import { graph, organizationNode, websiteNode } from "@/lib/schema";
import { defaultDescription, defaultTitle, siteName, siteUrl } from "@/lib/seo";

/**
 * Lato carries both display and body type. It ships no 500 or 600 cut, so the
 * markup uses `font-normal` / `font-bold` directly rather than Tailwind's
 * medium/semibold, which would silently resolve to those same 400 and 700 cuts.
 */
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s · Edfrica",
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "Edfrica",
    "youth entrepreneurship Africa",
    "ECOWAS innovation",
    "African innovation hub",
    "MSME support Nigeria",
    "STEAM education Africa",
    "Abeokuta innovation hub",
    "social enterprise Africa",
    "entrepreneurship support organisation",
    "business incubation Ogun State",
  ],
  authors: [{ name: orgName, url: siteUrl }],
  creator: orgName,
  publisher: orgName,
  category: "Social enterprise",
  alternates: {
    canonical: "/",
  },
  /**
   * `max-image-preview: large` is what unlocks full-size thumbnails in Google
   * results and Discover; without it Google defaults to a small preview.
   */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Stops iOS Safari from auto-linking numbers in body copy as phone numbers.
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    title: defaultTitle,
    description:
      "A five-pillar social enterprise ecosystem for young Africans who build.",
    url: "/",
    siteName,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "A five-pillar social enterprise ecosystem for young Africans who build.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Matches the paper/background tokens so the mobile browser chrome tracks
  // whichever theme the visitor is in.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#100d2e" },
  ],
};

/**
 * Runs before first paint so a dark-mode visitor never sees a white flash.
 * The storage key must match THEME_STORAGE_KEY in components/ThemeToggle.tsx.
 */
const themeBootstrap = `
(function(){try{
var p=localStorage.getItem('edfrica-theme')||'system';
var d=p==='dark'||(p==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);
document.documentElement.classList.toggle('dark',d);
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${lato.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        {/* Site-wide entity graph. Page-level graphs reference these by @id. */}
        <JsonLd data={graph([organizationNode(), websiteNode()])} />
        <a
          href="#main"
          className="sr-only rounded-full bg-indigo px-5 py-3 text-sm font-bold text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <CtaFooter />
      </body>
    </html>
  );
}
