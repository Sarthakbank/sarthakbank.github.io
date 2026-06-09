import type { Metadata } from "next";
import { ResumePage } from "@/components/resume/ResumePage";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Sarthak Bankar — Level Designer & 3D Artist. Résumé and experience.",
};

export default function Page() {
  return <ResumePage />;
}
