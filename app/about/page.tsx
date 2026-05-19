import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About — Sarthak Bankar",
  description:
    "Level designer and 3D artist — background, philosophy, education, experience, and production stack.",
};

export default function Page() {
  return <AboutPage />;
}
