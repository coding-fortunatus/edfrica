import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout, type LegalSection } from "@/components/LegalPageLayout";
import { contact, orgName } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Edfrica Solutions Limited collects, uses, and protects personal data.",
  alternates: { canonical: "/privacy-policy" },
};

const sections: LegalSection[] = [
  {
    id: "introduction",
    heading: "1. Introduction",
    body: (
      <>
        <p>
          This Privacy Policy explains how {orgName} (&ldquo;Edfrica,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, discloses, and
          protects personal data across the Edfrica ecosystem, including
          edfrica.org and the affiliated Institute, Education (TLab),
          Infrastructure, and Foundation platforms.
        </p>
        <p>
          By using any Edfrica platform, you agree to the collection and use
          of information in accordance with this policy. If you do not agree,
          please do not use our platforms.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "2. Information we collect",
    body: (
      <>
        <p>We collect information in the following categories:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">
              Information you provide:
            </span>{" "}
            name, email, phone number, organization, and any details submitted
            through forms, applications, or consultations.
          </li>
          <li>
            <span className="font-medium text-ink">Usage data:</span> pages
            visited, time on site, referring URLs, and device/browser
            information, collected automatically.
          </li>
          <li>
            <span className="font-medium text-ink">Cookies:</span> as
            described in our{" "}
            <Link href="/cookie-policy" className="text-indigo hover:text-green-deep">
              Cookie Policy
            </Link>
            .
          </li>
          <li>
            <span className="font-medium text-ink">
              Children&rsquo;s data (TLab):
            </span>{" "}
            limited account and progress data for learners aged 3&ndash;15,
            collected under parental/guardian consent — see Section 5.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    heading: "3. How we use your information",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>To operate, maintain, and improve our platforms and programmes</li>
        <li>To respond to inquiries and deliver requested services</li>
        <li>To communicate updates, opportunities, and programme news</li>
        <li>To meet donor, grant, and regulatory reporting obligations</li>
        <li>To safeguard users and detect misuse or fraud</li>
      </ul>
    ),
  },
  {
    id: "legal-basis",
    heading: "4. Legal basis for processing",
    body: (
      <p>
        We process personal data on the basis of your consent, the
        performance of a contract or service you have requested, our
        legitimate interests in operating and improving the Edfrica
        ecosystem, and compliance with applicable legal obligations,
        including Nigeria&rsquo;s Data Protection Act 2023.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    heading: "5. Children's privacy (TLab)",
    body: (
      <>
        <p>
          TLab serves children aged 3&ndash;15 and is designed to be
          COPPA and GDPR-K aligned. We collect only the minimum data
          necessary to operate a safe learning experience, require verifiable
          parental or guardian consent before collecting personal data from a
          child, and do not knowingly permit direct messaging between
          children on the platform.
        </p>
        <p>
          Parents and guardians may review, correct, or request deletion of
          their child&rsquo;s data at any time by contacting{" "}
          <a href={`mailto:${contact.email}`} className="text-indigo hover:text-green-deep">
            {contact.email}
          </a>
          . See also our{" "}
          <Link href="/safeguarding-policy" className="text-indigo hover:text-green-deep">
            Safeguarding & Child Protection Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "6. Cookies & tracking",
    body: (
      <p>
        We use cookies and similar technologies to operate our platforms and
        understand usage. Full detail, including how to manage your
        preferences, is available in our{" "}
        <Link href="/cookie-policy" className="text-indigo hover:text-green-deep">
          Cookie Policy
        </Link>
        .
      </p>
    ),
  },
  {
    id: "sharing",
    heading: "7. Sharing & disclosure",
    body: (
      <>
        <p>
          We do not sell personal data. We may share information with vetted
          service providers who support our operations (hosting, analytics,
          email delivery), donor and partner organizations where required for
          programme reporting, and regulators or law enforcement where
          legally required.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    heading: "8. Data retention",
    body: (
      <p>
        We retain personal data only as long as necessary to fulfil the
        purposes described in this policy, meet legal or reporting
        obligations, and resolve disputes. Data no longer needed is securely
        deleted or anonymized.
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "9. Your rights",
    body: (
      <>
        <p>Subject to applicable law, you have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict certain processing</li>
          <li>Request a portable copy of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise any of these rights, contact{" "}
          <a href={`mailto:${contact.email}`} className="text-indigo hover:text-green-deep">
            {contact.email}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    heading: "10. International data transfers",
    body: (
      <p>
        As a pan-African organization operating across the ECOWAS region and
        the Alliance of Sahel States, and working with international donor
        and technical partners, your data may be processed outside Nigeria.
        Where this occurs, we take reasonable steps to ensure an equivalent
        standard of protection.
      </p>
    ),
  },
  {
    id: "security",
    heading: "11. Data security",
    body: (
      <p>
        We apply administrative, technical, and physical safeguards designed
        to protect personal data against unauthorized access, alteration,
        disclosure, or destruction. No method of transmission or storage is
        completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "12. Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. Material changes will
        be reflected by an updated &ldquo;Last updated&rdquo; date on this
        page.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "13. Contact us",
    body: (
      <p>
        Questions about this policy or our data practices can be directed to{" "}
        <a href={`mailto:${contact.email}`} className="text-indigo hover:text-green-deep">
          {contact.email}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="July 2026"
      intro="This policy explains what personal data Edfrica collects across its media, institute, education, infrastructure, and foundation platforms, why we collect it, and the choices and rights available to you."
      sections={sections}
    />
  );
}
