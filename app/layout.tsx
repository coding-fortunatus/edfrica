import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { OrganizationSchema } from "@/components/OrganizationSchema";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Edfrica — Turning African Ambition Into Impact",
    template: "%s · Edfrica",
  },
  description:
    "Edfrica is a five-pillar social enterprise ecosystem — media, institute, education, infrastructure, and foundation — equipping young Africans to lead and build across all 15 ECOWAS and Alliance of Sahel States countries.",
  keywords: [
    "Edfrica",
    "youth entrepreneurship Africa",
    "ECOWAS innovation",
    "African innovation hub",
    "MSME support Nigeria",
    "STEAM education Africa",
    "Abeokuta innovation hub",
    "social enterprise Africa",
  ],
  metadataBase: new URL("https://edfrica.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Edfrica — Turning African Ambition Into Impact",
    description:
      "A five-pillar social enterprise ecosystem for young Africans who build.",
    url: "/",
    siteName: "Edfrica",
    images: ["/logo-square.jpeg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edfrica — Turning African Ambition Into Impact",
    description:
      "A five-pillar social enterprise ecosystem for young Africans who build.",
    images: ["/logo-square.jpeg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2f8f3c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${fraunces.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <OrganizationSchema />
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <CtaFooter />
      </body>
    </html>
  );
}
