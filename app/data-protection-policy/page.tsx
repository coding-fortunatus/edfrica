import Link from "next/link";
import { LegalPageLayout, type LegalSection } from "@/components/LegalPageLayout";
import { contact, orgName } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/data-protection-policy";
const title = "Data Protection Policy";
const description =
  "Edfrica's data protection commitments under Nigeria's Data Protection Act.";

export const metadata = buildMetadata({ title, description, path });

const crumbs = [{ name: title, path }];

const sections: LegalSection[] = [
  {
    id: "legal-framework",
    heading: "1. Purpose & legal framework",
    body: (
      <p>
        This policy sets out how {orgName} meets its obligations under the
        Nigeria Data Protection Act 2023 (NDPA) and the Nigeria Data
        Protection Regulation (NDPR), and complements our{" "}
        <Link href="/privacy-policy" className="text-ink hover:text-green-deep">
          Privacy Policy
        </Link>
        .
      </p>
    ),
  },
  {
    id: "data-controller",
    heading: "2. Data controller",
    body: (
      <p>
        {orgName} is the data controller for personal data collected through
        the Edfrica ecosystem, headquartered in Abeokuta, Ogun State, Nigeria.
      </p>
    ),
  },
  {
    id: "lawful-basis",
    heading: "3. Lawful basis for processing",
    body: (
      <p>
        We process personal data based on consent, contractual necessity,
        legitimate interest, and legal obligation, consistent with the
        principles of lawfulness, fairness, purpose limitation, data
        minimization, accuracy, storage limitation, and accountability set
        out in the NDPA.
      </p>
    ),
  },
  {
    id: "data-subject-rights",
    heading: "4. Data subject rights under the NDPA",
    body: (
      <>
        <p>Data subjects in Nigeria have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Be informed about how their data is processed</li>
          <li>Access their personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request erasure or restriction of processing</li>
          <li>Object to processing based on legitimate interest</li>
          <li>Lodge a complaint with the Nigeria Data Protection Commission (NDPC)</li>
        </ul>
      </>
    ),
  },
  {
    id: "impact-assessments",
    heading: "5. Data protection impact assessments",
    body: (
      <p>
        For higher-risk processing activities — including TLab&rsquo;s
        processing of children&rsquo;s data — we conduct data protection
        impact assessments to identify and mitigate risks before launch and
        on an ongoing basis.
      </p>
    ),
  },
  {
    id: "breach-notification",
    heading: "6. Breach notification",
    body: (
      <p>
        In the event of a personal data breach likely to result in risk to
        data subjects, we will notify the Nigeria Data Protection Commission
        and affected individuals without undue delay, in line with NDPA
        requirements.
      </p>
    ),
  },
  {
    id: "dpo",
    heading: "7. Data Protection Officer",
    body: (
      <p>
        Questions, requests, or complaints regarding data protection can be
        directed to our Data Protection contact at{" "}
        <a href={`mailto:${contact.email}`} className="text-ink hover:text-green-deep">
          {contact.email}
        </a>
        .
      </p>
    ),
  },
  {
    id: "international-transfers",
    heading: "8. International transfers",
    body: (
      <p>
        Where personal data is transferred outside Nigeria — for example, to
        international donor or technical partners — we take reasonable steps
        to ensure recipients provide an adequate level of protection
        consistent with NDPA requirements.
      </p>
    ),
  },
  {
    id: "review",
    heading: "9. Review & updates",
    body: (
      <p>
        This policy is reviewed at least annually and updated to reflect
        changes in law, regulatory guidance, or our data processing
        activities.
      </p>
    ),
  },
];

export default function DataProtectionPolicyPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({ path, name: title, description, crumbs }),
          breadcrumbNode(crumbs),
        ])}
      />
      <LegalPageLayout
        title="Data Protection Policy"
        lastUpdated="July 2026"
        intro="How Edfrica Solutions Limited meets its data protection obligations under Nigeria's Data Protection Act 2023."
        sections={sections}
      />
    </>
  );
}
