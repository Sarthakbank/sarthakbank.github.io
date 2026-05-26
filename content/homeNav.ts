import { contactChannels } from "@/content/contact";
import type { NavItem } from "./types";

/** Home page header nav — matches WhatsApp reference screenshot. */
export const homeNav: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#projects", label: "Projects" },
  {
    href: `${contactChannels.email.href}?subject=Resume%20request`,
    label: "Resume",
  },
  { href: "/contact", label: "Contact" },
] as const;
