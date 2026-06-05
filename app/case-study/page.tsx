import type { Metadata } from "next";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { escapeProtocol } from "@/content/projects";

export const metadata: Metadata = {
  title: "Escape Protocol — Level design case study",
  description:
    "Escape Protocol: a single-player Unreal Engine 5.7 prison-break level — overview, inspiration, design goals, level design document, and technique highlights.",
};

export default function Page() {
  return <CaseStudyView project={escapeProtocol} />;
}
