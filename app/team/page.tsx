import type { Metadata } from "next";
import { Leadership } from "@/components/Leadership";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the leadership and team behind Edfrica's five-pillar ecosystem.",
};

export default function TeamPage() {
  return <Leadership />;
}
