import type { Metadata } from "next";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";

export const metadata: Metadata = {
  title: "Facility Breach — Level design case study",
  description:
    "Portfolio case study for Facility Breach: stealth infiltration vertical slice — goals, beats, techniques, and process.",
};

export default function Page() {
  return <CaseStudyView />;
}
