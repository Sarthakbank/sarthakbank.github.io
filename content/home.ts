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
  /** Collapsed card teaser — Stitch handoff */
  summary: string;
  detail: string;
  bullets?: readonly string[];
};

export const homeDesignPrinciples: readonly HomeDesignPrinciple[] = [
  {
    title: "Player-Centric Design",
    icon: "users",
    topGradient: "from-[#7c3aed] via-[#a855f7] to-[#6366f1]",
    border: "border-violet-500/30",
    summary:
      "Designing spaces that intuitively guide the player without explicit hand-holding.",
    detail:
      "Every route, vista, and encounter is judged by what players read under pressure—intent, risk, and reward stay legible before polish.",
    bullets: ["Flow-first greybox", "Readable objectives", "Playtest-driven iteration"],
  },
  {
    title: "Readable Spaces",
    icon: "eye",
    topGradient: "from-[#0ea5e9] via-[#06b6d4] to-[#14b8a6]",
    border: "border-cyan-500/30",
    summary: "Ensuring combat arenas and puzzle rooms have clear affordances and sightlines.",
    detail:
      "Silhouette, lighting, and pacing work together so navigation feels intuitive—players always know where they are and what the space is asking.",
    bullets: ["Strong landmarks", "Clear encounter reads", "Rhythm across beats"],
  },
  {
    title: "Iterative Craft",
    icon: "refresh",
    topGradient: "from-[#f59e0b] via-[#f97316] to-[#f43f5e]",
    border: "border-amber-500/30",
    summary: "Rapid prototyping and playtesting to refine the core loop before committing to art.",
    detail:
      "Blockouts ship fast, feedback lands early, and each pass tightens mechanics, metrics, and mood without losing the core design intent.",
    bullets: ["Rapid blockout loops", "Cross-discipline reviews", "Ship-ready documentation"],
  },
] as const;

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

export const homeHighlights = [
  "Level flow & encounter framing",
  "Blockouts to readable spaces",
  "Gameplay scripting & prototyping",
  "Collaboration across art & design",
] as const;

export const homeAboutPreview = {
  title: "About",
  summary:
    "I’m a Level Designer focused on creating intuitive, immersive gameplay spaces. I build levels that guide players naturally through flow, pacing, and smart encounter design.",
  href: "/about",
  cta: "View More",
};

export const homeCaseStudyCard = {
  title: "Case Study",
  summary:
    "My research explored how AI tools impact modern game design workflows, evaluating whether they genuinely improve creativity, efficiency, and production quality.",
  href: "/case-study",
  cta: "View More",
};

export const homeFeaturedPreview = {
  sectionLabel: "Featured Project",
  sampleLabel: "Portfolio sample",
  title: "Facility Breach",
  subtitle: "Stealth Infiltration Slice",
  description:
    "A vertical-slice concept focused on infiltration routes, cover rhythm, and readable threat lanes—built to prove level flow before a full art pass. Environment stills are licensed placeholders for presentation, not official shipped-game marketing.",
  metaLines: [
    { label: "Platform", value: "PC (Windows)" },
    { label: "Engine", value: "Unreal Engine 5" },
    { label: "Mode", value: "Single Player (PvE)" },
    { label: "Role", value: "Level Designer / Gameplay Designer" },
    { label: "Status", value: "Vertical slice (demo)" },
  ] as const,
  href: "/case-study",
  cta: "View case study",
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
  subtitle: "Designing gameplay spaces through clarity, rhythm, and player intuition.",
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
    { href: "/case-study", label: "Featured Project" },
    { href: "/about", label: "About" },
  ],
  connect: [
    { href: "/contact", label: "Contact" },
    { href: "/case-study", label: "Case study" },
  ],
  legal: "© {year} Sarthak Bankar. Portfolio & case study materials for presentation.",
};
