import type { Metadata } from "next";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";

export const metadata: Metadata = {
  title: "Featured project — Escape Protocol",
  description:
    "Editorial case study: level design breakdown for Escape Protocol — spatial flow, pillars, and process.",
};

export default function Page() {
  return <CaseStudyView />;
}
