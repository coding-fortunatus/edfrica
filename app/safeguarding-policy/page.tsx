import { LegalPageLayout, type LegalSection } from "@/components/LegalPageLayout";
import { contact, orgName } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/safeguarding-policy";
const title = "Safeguarding & Child Protection Policy";
const description =
  "Edfrica's safeguarding and SEAH commitments, including child protection on the TLab STEAM platform and how to report a concern.";

export const metadata = buildMetadata({ title, description, path });

const crumbs = [{ name: title, path }];

const sections: LegalSection[] = [
  {
    id: "purpose-and-scope",
    heading: "1. Purpose & scope",
    body: (
      <p>
        This policy sets out {orgName}&rsquo;s commitment to protecting the
        wellbeing of everyone who takes part in our programmes, with
        particular emphasis on children aged 3&ndash;15 who use TLab, our
        gamified STEAM platform. It applies to all staff, volunteers,
        consultants, and partners engaged in Edfrica-run activities.
      </p>
    ),
  },
  {
    id: "our-commitment",
    heading: "2. Our commitment",
    body: (
      <p>
        Edfrica maintains an active Safeguarding / SEAH (Sexual Exploitation,
        Abuse and Harassment) policy across all grant-funded and
        donor-facing programming. We have zero tolerance for abuse,
        exploitation, or harassment of any participant, and we hold everyone
        acting on Edfrica&rsquo;s behalf to this standard.
      </p>
    ),
  },
  {
    id: "guiding-principles",
    heading: "3. Guiding principles",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>The best interests of the child guide every decision</li>
        <li>Every child has an equal right to protection, regardless of background</li>
        <li>Safeguarding is everyone&rsquo;s responsibility, not just designated staff</li>
        <li>Concerns are taken seriously, recorded, and acted on promptly</li>
      </ul>
    ),
  },
  {
    id: "staff-conduct",
    heading: "4. Staff & volunteer conduct",
    body: (
      <p>
        All staff, volunteers, and consultants working directly with children
        are subject to a code of conduct, background screening appropriate to
        their role, and safeguarding orientation before engaging with
        programme participants.
      </p>
    ),
  },
  {
    id: "online-safety",
    heading: "5. Online safety on TLab",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Accounts for children require verifiable parental or guardian consent</li>
        <li>We do not permit unmoderated direct messaging between child accounts</li>
        <li>Content and community features are moderated for age-appropriateness</li>
        <li>We collect only the minimum personal data needed to run the platform</li>
      </ul>
    ),
  },
  {
    id: "reporting-a-concern",
    heading: "6. Reporting a concern",
    body: (
      <p>
        Any staff member, parent, guardian, or participant with a safeguarding
        concern should report it immediately to{" "}
        <a href={`mailto:${contact.email}`} className="text-ink hover:text-green-deep">
          {contact.email}
        </a>
        . Reports are treated confidentially, and no one raising a genuine
        concern in good faith will face retaliation.
      </p>
    ),
  },
  {
    id: "responding-to-concerns",
    heading: "7. Responding to concerns",
    body: (
      <p>
        Every report is reviewed promptly by a designated safeguarding lead.
        Where a concern indicates risk of harm, we will take appropriate
        action, which may include referral to the relevant statutory
        authorities in Nigeria.
      </p>
    ),
  },
  {
    id: "review",
    heading: "8. Review & governance",
    body: (
      <p>
        This policy is owned by Edfrica&rsquo;s leadership team and reviewed
        at least annually, or sooner if required by changes in law, donor
        requirements, or lessons learned from practice.
      </p>
    ),
  },
];

export default function SafeguardingPolicyPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({ path, name: title, description, crumbs }),
          breadcrumbNode(crumbs),
        ])}
      />
      <LegalPageLayout
        title="Safeguarding & Child Protection Policy"
        lastUpdated="July 2026"
        intro="Our commitment to protecting children and vulnerable participants across every Edfrica programme, with particular focus on TLab's young learners."
        sections={sections}
      />
    </>
  );
}
