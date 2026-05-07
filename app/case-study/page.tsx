import type { Metadata } from "next";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";

export const metadata: Metadata = {
  title: "Featured project — Black Tidemark (demo)",
  description:
    "Demo case study: third-person stealth-action level design breakdown for Black Tidemark.",
};

export default function Page() {
  return <CaseStudyView />;
}
