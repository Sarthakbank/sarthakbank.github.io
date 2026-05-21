/** Home page copy — Group 13.pdf light editorial (Home only). */

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
  primary: { href: "#featured", label: "View Featured Project" },
  contact: { href: "/contact", label: "Contact" },
  /** Legacy scroll/static heroes — not used on Apple Home */
  secondary: { href: "/about", label: "About My Approach" },
  tertiary: { href: "/contact", label: "Contact" },
};

export type PrincipleAccentKey = keyof typeof principleAccents;

export type HeadlineHighlight = {
  text: string;
  colorClass: string;
};

export type HomeDesignPrinciple = {
  title: string;
  icon: "users" | "eye" | "refresh";
  accent: PrincipleAccentKey;
  headline: string;
  headlineHighlights: readonly HeadlineHighlight[];
  body: string;
};

export const homeDesignPrinciples: readonly HomeDesignPrinciple[] = [
  {
    title: "Player Centric",
    icon: "users",
    accent: "playerCentric",
    headline: "Designing spaces that react to the player.",
    headlineHighlights: [
      { text: "react", colorClass: principleAccents.playerCentric.highlightTeal },
      { text: "player", colorClass: principleAccents.playerCentric.highlightBlue },
    ],
    body: "I build spaces that react to the player, not the other way around. Every route, encounter, and decision point is crafted to support agency whether the player slips through unseen or storms the room head-on. The level bends to their intent, making every playstyle feel deliberate and rewarding.",
  },
  {
    title: "Readable Spaces",
    icon: "eye",
    accent: "readableSpaces",
    headline: "Readable layouts without hand-holding.",
    headlineHighlights: [
      { text: "Readable", colorClass: principleAccents.readableSpaces.highlightPurple },
      { text: "hand-holding", colorClass: principleAccents.readableSpaces.highlightBlue },
    ],
    body: "Clarity drives every layout choice I make. Sightlines, lighting, and spatial hierarchy work together to guide the player without UI markers or hand-holding. The environment quietly teaches the player how to move, where to look, and what to fear all through pure visual language.",
  },
  {
    title: "Iterative Craft",
    icon: "refresh",
    accent: "iterativeCraft",
    headline: "Iteration turns raw blockouts into polished gameplay.",
    headlineHighlights: [
      { text: "Iteration", colorClass: principleAccents.iterativeCraft.highlightOrange },
      { text: "polished", colorClass: principleAccents.iterativeCraft.highlightPink },
    ],
    body: "Every space goes through rigorous testing and refinement before it earns its place in the level. I iterate relentlessly testing, refining, and rebuilding until the space feels intuitive, challenging, and satisfying. Every encounter, route, and beat is shaped by player feedback, turning raw ideas into polished, purposeful gameplay.",
  },
] as const;

export const homeAboutPreview = {
  title: "About",
  accent: "from-[#0071e3] to-[#5ac8fa]",
  summary:
    "Spatial clarity under pressure. Focused on immersive, player-centered spaces that guide through pacing, layout, and encounter design.",
  href: "/about",
  cta: "View More",
};

export const homeCaseStudyCard = {
  title: "Case Study",
  accent: "from-[#af52de] to-[#ff9500]",
  summary:
    "Researching how AI tools reshape creativity and production workflows in game design.",
  href: "/case-study",
  cta: "View More",
};

export const homeFeaturedPreview = {
  sectionLabel: "Featured Project",
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

export const homeSkillGrid: readonly {
  skill: string;
  subtitle: string;
  accent: SkillAccentKey;
}[] = [
  { skill: "Level Design", subtitle: "Core space crafting", accent: "blue" },
  { skill: "Gameplay Scripting", subtitle: "Bringing mechanics alive", accent: "indigo" },
  { skill: "Blockouts", subtitle: "First-playable spaces", accent: "green" },
  { skill: "Encounter Design", subtitle: "Player challenge", accent: "orange" },
  { skill: "Environment Art Basics", subtitle: "Visual readability", accent: "purple" },
  { skill: "Worldbuilding", subtitle: "Player context", accent: "cyan" },
  { skill: "Navigation", subtitle: "Natural paths", accent: "teal" },
  { skill: "Systems Thinking", subtitle: "Player behavior", accent: "violet" },
  { skill: "Mechanical Prototyping", subtitle: "Fast idea tests", accent: "pink" },
  { skill: "Gameplay UX", subtitle: "Readable feedback", accent: "rose" },
  { skill: "Unity Workflow", subtitle: "Scene iteration", accent: "amber" },
  { skill: "Unreal Workflow", subtitle: "Engine-ready spaces", accent: "slate" },
] as const;

export const homeThinkInSpace = {
  title: "How I Think in Space",
  subtitle: "Designing gameplay spaces through clarity, rhythm, and player intuition.",
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
      href: "mailto:sarthakbankar647@gmail.com?subject=Resume%20request",
      label: "Download Resume",
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
