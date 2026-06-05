/** Contact — aligned with docs/profile-facts.md (incl. GitHub URL you provided). */

export const contactHero = {
  title: "Let's work together",
  intro:
    "Level design roles, prototyping collaborations, and conversations about spatial gameplay and vertical slices are welcome — reach out through any channel below.",
};

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
    hint: "Best for opportunity details, timelines, and quick follow-ups.",
    cta: "Email Sarthak",
  },
  linkedIn: {
    label: "LinkedIn",
    value: "linkedin.com/in/sarthak-bankar-755652229",
    href: "https://www.linkedin.com/in/sarthak-bankar-755652229",
    hint: "Profile, recommendations, and professional history.",
    cta: "View LinkedIn",
  },
  artstation: {
    label: "ArtStation",
    value: "artstation.com/sarthakbankar2",
    href: "https://www.artstation.com/sarthakbankar2",
    hint: "3D environments, blockouts, and level art reference.",
    cta: "View ArtStation",
  },
  youtube: {
    label: "YouTube",
    value: "youtube.com/@sarthakbankar4989",
    href: "https://www.youtube.com/@sarthakbankar4989",
    hint: "Level walkthroughs, gameplay captures, and design breakdowns.",
    cta: "Watch on YouTube",
  },
  discord: {
    label: "Discord",
    value: "Direct message",
    href: "https://discord.com/users/1113958259175461045",
    hint: "Quick questions and casual design conversations.",
    cta: "Message on Discord",
  },
  github: {
    label: "GitHub",
    value: "github.com/Sarthakbank",
    href: "https://github.com/Sarthakbank",
    hint: "Code, experiments, and work-in-progress you can browse directly.",
    cta: "Open GitHub",
  },
} as const;

/** Phone / direct communication — tel + optional WhatsApp, region-labelled. */
export const contactPhones = {
  uk: {
    label: "Call UK",
    region: "United Kingdom",
    number: "+44 7823 853570",
    tel: "tel:+447823853570",
    whatsapp: "https://wa.me/447823853570",
  },
  india: {
    label: "Call India",
    region: "India",
    number: "+91 75592 89627",
    tel: "tel:+917559289627",
    whatsapp: "https://wa.me/917559289627",
  },
} as const;
