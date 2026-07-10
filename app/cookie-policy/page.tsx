import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout, type LegalSection } from "@/components/LegalPageLayout";
import { orgName } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Edfrica uses cookies and similar technologies.",
  alternates: { canonical: "/cookie-policy" },
};

const sections: LegalSection[] = [
  {
    id: "what-are-cookies",
    heading: "1. What are cookies",
    body: (
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They help the site function, remember your preferences, and
        understand how the site is used.
      </p>
    ),
  },
  {
    id: "types-of-cookies",
    heading: "2. Types of cookies we use",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <span className="font-medium text-ink">Strictly necessary:</span>{" "}
          required for core site functionality (navigation, security). These
          cannot be disabled.
        </li>
        <li>
          <span className="font-medium text-ink">Performance & analytics:</span>{" "}
          help us understand how visitors use our platforms so we can improve
          them.
        </li>
        <li>
          <span className="font-medium text-ink">Functionality:</span> remember
          choices you make (such as display preferences) to provide a more
          personalized experience.
        </li>
        <li>
          <span className="font-medium text-ink">Advertising:</span> {orgName}{" "}
          does not currently use advertising or third-party ad-targeting
          cookies.
        </li>
      </ul>
    ),
  },
  {
    id: "first-vs-third-party",
    heading: "3. First-party vs. third-party cookies",
    body: (
      <p>
        First-party cookies are set directly by the Edfrica domain you are
        visiting. Third-party cookies may be set by service providers we use
        for analytics or embedded content (for example, a map on our Contact
        page). Third-party providers are responsible for their own cookie
        practices.
      </p>
    ),
  },
  {
    id: "how-long",
    heading: "4. How long cookies last",
    body: (
      <p>
        Session cookies expire when you close your browser. Persistent
        cookies remain on your device for a set period, or until you delete
        them, to remember your preferences across visits.
      </p>
    ),
  },
  {
    id: "managing-cookies",
    heading: "5. Managing your cookie preferences",
    body: (
      <p>
        Most browsers let you view, delete, and block cookies through their
        settings. Blocking strictly necessary cookies may affect how well our
        platforms function. Refer to your browser&rsquo;s help documentation
        for instructions specific to your browser.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "6. Changes to this policy",
    body: (
      <p>
        We may update this Cookie Policy from time to time to reflect changes
        in the cookies we use or for legal or regulatory reasons. See our{" "}
        <Link href="/privacy-policy" className="text-indigo hover:text-green-deep">
          Privacy Policy
        </Link>{" "}
        for how we handle personal data more broadly.
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated="July 2026"
      intro="This policy explains how Edfrica uses cookies and similar technologies across its platforms, and how you can manage your preferences."
      sections={sections}
    />
  );
}
