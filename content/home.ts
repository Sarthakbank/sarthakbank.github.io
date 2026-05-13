/** Home page copy — PDF-aligned (Group 8 / 10 / 2) editorial presentation. */

export const homeHero = {
  name: "Sarthak Bankar",
  role: "Level Designer",
  tagline: "Designing gameplay spaces that guide, challenge, and immerse players.",
};

export const homeCtas = {
  primary: { href: "/case-study", label: "View Featured Project" },
  secondary: { href: "/about", label: "About My Approach" },
  tertiary: { href: "/contact", label: "Contact" },
};

export type HomeDesignPrinciple = {
  title: string;
  /** Lucide-style label for icon slot */
  icon: "users" | "eye" | "refresh";
  topGradient: string;
  border: string;
};

export const homeDesignPrinciples: readonly HomeDesignPrinciple[] = [
  {
    title: "Player-Centric Design",
    icon: "users",
    topGradient: "from-violet-400/90 via-fuchsia-400/75 to-indigo-400/85",
    border: "border-violet-200/70",
  },
  {
    title: "Readable Spaces",
    icon: "eye",
    topGradient: "from-sky-400/85 via-cyan-400/70 to-teal-400/80",
    border: "border-sky-200/70",
  },
  {
    title: "Iterative Craft",
    icon: "refresh",
    topGradient: "from-amber-400/85 via-orange-400/75 to-rose-400/70",
    border: "border-amber-200/65",
  },
] as const;

export const homeHighlights = [
  "Level flow & encounter framing",
  "Blockouts to readable spaces",
  "Gameplay scripting & prototyping",
  "Collaboration across art & design",
] as const;

export const homeAboutPreview = {
  title: "About",
  summary:
    "Immersive, intuitive, player-centered level design — balancing spatial clarity, encounter rhythm, and environmental storytelling.",
  href: "/about",
  cta: "View More",
};

export const homeCaseStudyCard = {
  title: "Case Study",
  summary:
    "AI in Game Design — how intelligent tooling and design process intersect to support iteration, readability, and player-first spaces.",
  href: "/case-study",
  cta: "View More",
};

export const homeFeaturedPreview = {
  sectionLabel: "Featured Project",
  title: "Escape Protocol",
  subtitle: "Stealth Action Level",
  description:
    "A tactical escape experience where clarity, tension, and player choice define every step.",
  metaLines: [
    { label: "Platform", value: "PC (Windows)" },
    { label: "Engine", value: "Unreal Engine 5" },
    { label: "Mode", value: "Single Player (PvE)" },
    { label: "Role", value: "Level Designer / Gameplay Designer" },
  ] as const,
  href: "/case-study",
  cta: "View More",
};

/** “How I think in space” — icon keys match SkillIcon map in components/icons/SkillIcon.tsx */
export const homeSkillGrid = [
  { skill: "Level Design", descriptor: "Flow, beats, and spatial storytelling." },
  { skill: "Gameplay Scripting", descriptor: "Blueprint logic and prototype interactions." },
  { skill: "Blockouts", descriptor: "Fast greybox to prove routes and reads." },
  { skill: "Encounter Design", descriptor: "Pressure, cover rhythm, and escalation." },
  { skill: "Environment Art Basics", descriptor: "Composition support without losing gameplay." },
  { skill: "Texturing", descriptor: "Material reads that reinforce navigation." },
  { skill: "Sculpting", descriptor: "Forms that sell scale and silhouette." },
  { skill: "Mechanic Prototyping", descriptor: "Test verbs early in greybox." },
  { skill: "Gameplay UX", descriptor: "What the player can parse under stress." },
  { skill: "Agile Workflow", descriptor: "Iteration loops with clear priorities." },
] as const;

export const homeThinkInSpace = {
  title: "How I Think in Space",
  subtitle:
    "Ten focus areas that show up in every blockout — from first greybox to final polish.",
};

export const homeConnectSection = {
  title: "LET’S CONNECT",
};

export const homeContactCta = {
  href: "/contact",
  label: "Contact Me",
};

export const homeFooter = {
  name: "Sarthak Bankar",
  explore: [
    { href: "/", label: "Home" },
    { href: "/case-study", label: "Featured project" },
    { href: "/about", label: "About" },
  ],
  connect: [
    { href: "/contact", label: "Contact" },
    { href: "/case-study", label: "Case study" },
  ],
  legal: "© {year} Sarthak Bankar. Portfolio & case study materials for presentation.",
};
