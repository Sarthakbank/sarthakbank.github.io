/** Home page copy — reference-aligned (Group 15/18/22 PDFs). */

import type { SkillAccentKey } from "@/lib/appleHomeTokens";
import { principleAccents } from "@/lib/appleHomeTokens";

export const homeHero = {
  name: "Sarthak Bankar",
  role: "Level Designer",
  tagline: "Designing gameplay spaces that guide, challenge, and immerse players.",
};

export const homeHeroChips = [
  "Player Flow",
  "Readable Routes",
  "Encounter Rhythm",
] as const;

export const homeCtas = {
  primary: { href: "#projects", label: "View Projects" },
  contact: { href: "/contact", label: "Contact" },
  secondary: { href: "/about", label: "About My Approach" },
  tertiary: { href: "/contact", label: "Contact" },
};

/* ── Design Principles (Group 18.pdf) ─────────────────────────── */

export type PrincipleAccentKey = keyof typeof principleAccents;

export type HomeDesignPrinciple = {
  title: string;
  icon: "users" | "eye" | "refresh";
  accent: PrincipleAccentKey;
  body: string;
};

export const homeDesignPrinciples: readonly HomeDesignPrinciple[] = [
  {
    title: "Player Centric, Intent Driven Design",
    icon: "users",
    accent: "playerCentric",
    body: "I build spaces that react to the player, not the other way around. Every route, encounter, and decision point is crafted to support agency — whether the player slips through unseen or storms the room head‑on. The level bends to their intent, making every playstyle feel deliberate and rewarding.",
  },
  {
    title: "Clear, Readable, Guided Spaces",
    icon: "eye",
    accent: "readableSpaces",
    body: "Clarity drives every layout choice I make. Sightlines, lighting, and spatial hierarchy work together to guide the player without UI markers or hand‑holding. The environment quietly teaches the player how to move, where to look, and what to fear — all through pure visual language.",
  },
  {
    title: "Iterative, Playtest Led Craft",
    icon: "refresh",
    accent: "iterativeCraft",
    body: "Every space goes through rigorous testing and refinement before it earns its place in the level. I iterate relentlessly — testing, refining, and rebuilding until the space feels intuitive, challenging, and satisfying. Every encounter, route, and beat is shaped by player feedback, turning raw ideas into polished, purposeful gameplay.",
  },
] as const;

/* ── Projects section (WhatsApp reference) ────────────────────── */

export const homeProjectsSection = {
  sectionLabel: "Projects",
  items: [
    {
      label: "Project",
      title: "Escape Protocol",
      href: "/case-study",
    },
    {
      label: "Case Study",
      title: "",
      href: "/case-study",
    },
  ],
} as const;

/* ── About + Case Study cards (Group 15.pdf — verbatim) ───────── */

export const homeAboutPreview = {
  title: "About",
  accent: "from-[#0071e3] to-[#5ac8fa]",
  summary:
    "Designing clear, readable spaces under pressure. Focused on player‑driven flow, pacing, and encounters that feel intuitive. Crafting environments that guide through design, not instructions.",
  href: "/about",
  cta: "View More",
};

export const homeCaseStudyCard = {
  title: "Case Study",
  accent: "from-[#af52de] to-[#ff9500]",
  summary:
    "Exploring how AI reshapes game‑development workflows. A focused study on creativity, iteration, and production efficiency with modern AI tools. Breaking down where AI helps — and where it still falls short.",
  href: "/case-study",
  cta: "View More",
};

/* ── Legacy featured preview (kept for backward compat) ───────── */

export const homeFeaturedPreview = {
  sectionLabel: "Projects",
  title: "Escape Protocol",
  subtitle: "Stealth Action Level",
  description:
    "A tactical escape experience where clarity, tension, and player choice define every step.",
  chip: "Gameplay",
  chipColor: "#0071e3",
  metaLines: [
    { label: "Platform", value: "PC (Windows)" },
    { label: "Engine", value: "Unreal Engine 5" },
    { label: "Mode", value: "Single Player (PvE)" },
    { label: "Role", value: "Level Designer / Gameplay Designer" },
  ] as const,
  href: "/case-study",
  cta: "View More",
};

/* ── Skills / How I Think in Space (Group 22.pdf) ─────────────── */

export const homeSkillGrid: readonly {
  skill: string;
  subtitle: string;
  accent: SkillAccentKey;
}[] = [
  { skill: "Level Design", subtitle: "Designing spaces that guide, challenge, and communicate through pure spatial storytelling.", accent: "blue" },
  { skill: "Texturing", subtitle: "Adding material definition that enhances clarity, tone, and mood.", accent: "amber" },
  { skill: "Gameplay Scripting", subtitle: "Bringing mechanics to life through logic, triggers, and responsive interactions.", accent: "indigo" },
  { skill: "Sculpting", subtitle: "Shaping believable forms that support the world's visual identity.", accent: "purple" },
  { skill: "Blockouts", subtitle: "Building early shapes that define flow, pacing, and player movement.", accent: "green" },
  { skill: "Mechanic Prototyping", subtitle: "Testing ideas fast to validate gameplay feel and player interaction.", accent: "pink" },
  { skill: "Encounter Design", subtitle: "Building early shapes that define flow, pacing, and player movement.", accent: "orange" },
  { skill: "Gameplay UX", subtitle: "Designing feedback that feels intuitive, readable, and responsive.", accent: "rose" },
  { skill: "Environment Art Basics", subtitle: "Supporting gameplay with forms, silhouettes, and visual clarity.", accent: "cyan" },
  { skill: "Agile Workflow", subtitle: "Iterating quickly through cycles of testing, feedback, and refinement.", accent: "slate" },
] as const;

export const homeThinkInSpace = {
  title: "How I Think In Space",
  subtitle: "Designing gameplay spaces through clarity, rhythm and player intuition.",
};

/** Shared by About / Case Study — unchanged for non-Home pages */
export const homeContactCta = {
  href: "/contact",
  label: "Contact Me",
};

/** Legacy blockout copy — used by StaticFrameHero only (not Home redesign) */
export const homeBlockout = {
  phaseLabel: "Level Design Process",
  title: "The Blockout Phase",
  description:
    "Greybox first: prove routes, cover rhythm, and encounter reads before art pass. Every wall exists to test pacing, pressure, and player intent.",
  figureCaption: "Greybox still · Unreal blockout · portfolio work-in-progress",
  pillars: [
    {
      title: "Geometry & flow",
      text: "Routes, choke points, and traversal beats are locked before dressing.",
    },
    {
      title: "Sightlines & readability",
      text: "Players read threat, cover, and objectives under pressure—not after polish.",
    },
    {
      title: "Encounter pacing",
      text: "Spacing and escalation are tuned in greybox, then validated in playtest.",
    },
  ] as const,
  chips: ["Greybox", "Sightlines", "Encounter flow", "Playtest loop"] as const,
};

export const homeConnectSection = {
  title: "Let's Connect",
  buttons: [
    { href: "/contact", label: "Contact Me", variant: "primary" as const },
    {
      href: "/resume",
      label: "View Résumé",
      variant: "secondary" as const,
    },
    {
      href: "https://www.linkedin.com/in/sarthak-bankar-755652229",
      label: "LinkedIn",
      variant: "ghost" as const,
      external: true,
    },
  ],
};

export const homeFooter = {
  name: "Sarthak Bankar",
  tagline: "Level Design Portfolio",
  explore: [
    { href: "/", label: "Home" },
    { href: "/case-study", label: "Featured Project" },
    { href: "/about", label: "About" },
  ],
};
