import type { Metadata } from "next";
import { DesignDocument } from "@/components/case-study/DesignDocument";

export const metadata: Metadata = {
  title: "Level Design Document — Escape Protocol",
  description:
    "The full level design document for Escape Protocol: concept, pillars, layout, beat sheet, encounters, navigation, and technical notes.",
};

export default function Page() {
  return <DesignDocument />;
}
