import type { Metadata } from "next";
import { Leadership } from "@/components/Leadership";

export const metadata: Metadata = {
  title: "Leadership & Team",
  description:
    "Meet the leadership and team driving Edfrica's five-pillar ecosystem for youth entrepreneurship and innovation across Africa.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return <Leadership />;
}
