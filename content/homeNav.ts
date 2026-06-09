import type { NavItem } from "./types";

/** Home page header nav — matches WhatsApp reference screenshot. */
export const homeNav: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#featured-project", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;
