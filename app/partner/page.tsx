import type { Metadata } from "next";
import { PartnerWith } from "@/components/PartnerWith";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Why NGOs, donors, corporates, government agencies, and academic institutions partner with Edfrica to scale youth entrepreneurship and STEAM programs across Africa.",
  alternates: { canonical: "/partner" },
};

export default function PartnerPage() {
  return <PartnerWith />;
}
