import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Edfrica Solutions Limited.",
};

export default function ContactPage() {
  return <ContactDetails />;
}
