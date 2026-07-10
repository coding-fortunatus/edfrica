import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";

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
  metadataBase: new URL("https://edfrica.org"),
  openGraph: {
    title: "Edfrica — Turning African Ambition Into Impact",
    description:
      "A five-pillar social enterprise ecosystem for young Africans who build.",
    images: ["/logo-square.jpeg"],
    locale: "en_US",
    type: "website",
  },
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
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <CtaFooter />
      </body>
    </html>
  );
}
