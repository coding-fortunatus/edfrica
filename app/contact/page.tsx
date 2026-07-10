import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Edfrica Solutions Limited — based in Abeokuta, Ogun State, Nigeria.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactDetails />;
}
