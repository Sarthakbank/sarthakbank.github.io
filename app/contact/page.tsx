import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Sarthak Bankar",
  description:
    "Get in touch for level design opportunities — email, LinkedIn, and GitHub.",
};

export default function Page() {
  return <ContactPage />;
}
