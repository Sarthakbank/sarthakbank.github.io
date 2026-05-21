import { contactChannels } from "@/content/contact";
import type { NavItem } from "./types";

/** Home page header only — Group 13.pdf nav (Projects / Resume / Contact). */
export const homeNav: readonly NavItem[] = [
  { href: "#featured", label: "Projects" },
  {
    href: `${contactChannels.email.href}?subject=Resume%20request`,
    label: "Resume",
  },
  { href: "/contact", label: "Contact" },
] as const;
