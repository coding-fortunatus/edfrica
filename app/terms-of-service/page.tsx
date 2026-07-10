import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout, type LegalSection } from "@/components/LegalPageLayout";
import { contact, orgName, pillars } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of Edfrica's platforms and services.",
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    heading: "1. Acceptance of terms",
    body: (
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of {orgName} (&ldquo;Edfrica&rdquo;) and its affiliated
        platforms. By accessing any Edfrica platform, you agree to be bound
        by these Terms. If you do not agree, please discontinue use.
      </p>
    ),
  },
  {
    id: "the-ecosystem",
    heading: "2. About the Edfrica ecosystem",
    body: (
      <>
        <p>
          Edfrica operates a five-pillar ecosystem. Each pillar is a
          distinct, independently operated platform and may carry its own
          supplementary terms:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          {pillars.map((pillar) => (
            <li key={pillar.id}>
              <span className="font-medium text-ink">{pillar.role}</span> —{" "}
              {pillar.name} ({new URL(pillar.href).host})
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "eligibility",
    heading: "3. Eligibility & accounts",
    body: (
      <p>
        Most Edfrica services are intended for users aged 18 and older, or
        organizations acting through an authorized representative. TLab is
        the exception, built specifically for children aged 3&ndash;15 under
        parental or guardian consent and supervision, as described in our{" "}
        <Link href="/privacy-policy" className="text-indigo hover:text-green-deep">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/safeguarding-policy" className="text-indigo hover:text-green-deep">
          Safeguarding & Child Protection Policy
        </Link>
        . You are responsible for maintaining the confidentiality of any
        account credentials.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    heading: "4. Acceptable use",
    body: (
      <>
        <p>When using Edfrica platforms, you agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide false or misleading information</li>
          <li>Interfere with or disrupt the security or performance of any platform</li>
          <li>Attempt to access data or accounts you are not authorized to access</li>
          <li>Use the platforms for unlawful, fraudulent, or harmful purposes</li>
          <li>Harass, exploit, or endanger any user, particularly minors on TLab</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "5. Intellectual property",
    body: (
      <p>
        All content, branding, and materials published by Edfrica — including
        the Edfrica name, logo, and platform content — are the property of{" "}
        {orgName} or its licensors and are protected by applicable
        intellectual property laws. You may not reproduce or redistribute
        this content without prior written consent.
      </p>
    ),
  },
  {
    id: "third-party-links",
    heading: "6. Third-party platforms & links",
    body: (
      <p>
        Our platforms link to one another and to third-party resources
        (partners, funders, service providers). Edfrica is not responsible
        for the content, policies, or practices of third-party sites, and
        linking does not imply endorsement.
      </p>
    ),
  },
  {
    id: "disclaimers",
    heading: "7. Disclaimers",
    body: (
      <p>
        Edfrica platforms and content are provided &ldquo;as is&rdquo; and
        &ldquo;as available&rdquo; without warranties of any kind, express or
        implied. We do not guarantee that funding, grant, or programme
        opportunities listed on our platforms will result in any particular
        outcome.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    heading: "8. Limitation of liability",
    body: (
      <p>
        To the maximum extent permitted by law, {orgName} shall not be liable
        for any indirect, incidental, special, or consequential damages
        arising from your use of, or inability to use, our platforms or
        services.
      </p>
    ),
  },
  {
    id: "termination",
    heading: "9. Termination",
    body: (
      <p>
        We may suspend or terminate access to any Edfrica platform at our
        discretion, without notice, for conduct that we believe violates
        these Terms or is otherwise harmful to other users, Edfrica, or third
        parties.
      </p>
    ),
  },
  {
    id: "governing-law",
    heading: "10. Governing law",
    body: (
      <p>
        These Terms are governed by the laws of the Federal Republic of
        Nigeria. Any disputes arising from these Terms shall be subject to
        the exclusive jurisdiction of the courts of Ogun State, Nigeria.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "11. Changes to these terms",
    body: (
      <p>
        We may revise these Terms from time to time. Continued use of any
        Edfrica platform after changes take effect constitutes acceptance of
        the revised Terms.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "12. Contact us",
    body: (
      <p>
        Questions about these Terms can be directed to{" "}
        <a href={`mailto:${contact.email}`} className="text-indigo hover:text-green-deep">
          {contact.email}
        </a>
        .
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="July 2026"
      intro="These terms govern your use of edfrica.org and the affiliated Institute, Education, Infrastructure, and Foundation platforms."
      sections={sections}
    />
  );
}
