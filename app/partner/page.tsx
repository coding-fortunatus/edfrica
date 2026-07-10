import type { Metadata } from "next";
import { PartnerWith } from "@/components/PartnerWith";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Why NGOs, corporates, government agencies, and academic institutions partner with Edfrica.",
};

export default function PartnerPage() {
  return <PartnerWith />;
}
