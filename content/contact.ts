/** Contact — aligned with docs/profile-facts.md (incl. GitHub URL you provided). */

export const contactIntro = {
  title: "Contact",
  subtitle:
    "For level design opportunities or a conversation about spatial gameplay and vertical slices.",
};

/** Presentation-only CTA copy — does not change factual channels below. */
export const contactOpportunity = {
  eyebrow: "Open to opportunities",
  headline: "Let's work together",
  supporting:
    "Level design roles, prototyping collaborations, and thoughtful conversations about spatial gameplay are welcome — reach out through any channel below.",
} as const;

export const contactChannels = {
  email: {
    label: "Email",
    value: "sarthakbankar647@gmail.com",
    href: "mailto:sarthakbankar647@gmail.com",
  },
  linkedIn: {
    label: "LinkedIn",
    value: "linkedin.com/in/sarthak-bankar-755652229",
    href: "https://www.linkedin.com/in/sarthak-bankar-755652229",
  },
  github: {
    label: "GitHub",
    value: "github.com/Sarthakbank",
    href: "https://github.com/Sarthakbank",
  },
} as const;
