/**
 * Escape Protocol — featured level design case study (portfolio presentation).
 * Replace imagery keys / remote art with final in-engine captures when ready.
 */

import type { CaseStudyNavItem } from "./types";
import type { TempImageryKey } from "./tempImagery";

export const caseStudyDemoLabel = "Portfolio case study";

export const caseStudyNav: CaseStudyNavItem[] = [
  { id: "hero", label: "Hero" },
  { id: "facts", label: "Facts" },
  { id: "brief", label: "Overview" },
  { id: "pillars", label: "Pillars" },
  { id: "world", label: "Visuals" },
  { id: "process", label: "Process" },
  { id: "outcome", label: "Outcome" },
];

export const caseStudyFactsLines = [
  { label: "Platform", value: "PC (Windows)" },
  { label: "Engine", value: "Unreal Engine 5" },
  { label: "Mode", value: "Single Player (PvE)" },
  { label: "Role", value: "Level Designer / Gameplay Designer" },
  { label: "Duration", value: "9 weeks" },
  { label: "Team", value: "Solo project" },
] as const;

export const caseStudyMeta = {
  name: "Escape Protocol",
  genre: "Stealth Action Level",
  engine: "Unreal Engine 5, Blueprints, Blender, Miro, Photoshop",
  duration: "9 weeks",
  team: "Solo project",
  role: "Level Designer / Gameplay Designer",
};

export const caseStudySummary =
  "A tactical escape experience where clarity, tension, and player choice define every step.";

/** High-level pitch */
export const caseStudyGameBrief = {
  title: "Overview",
  paragraphs: [
    "Escape Protocol frames a single mission space as a recruiter-readable proof of craft: one cohesive location, a clear objective chain, and authored beats that escalate without losing readability.",
    "The slice prioritises spatial clarity — where to go next should be inferable from the environment, not from on-screen prompts.",
  ],
};

export const caseStudyProjectContext =
  "Presented as a solo academic / portfolio piece, the level treats the facility as one continuous escape run: approach, interior pressure, risk space, and vertical exit. Placeholder imagery below stands in for final captures.";

export const caseStudyWorldSetting = {
  title: "World & setting",
  paragraphs: [
    "The environment reads as a hardened facility under alert — tight service corridors, sudden volumetric reads, and a beacon-like landmark that sells the finale.",
    "Lighting and materials support navigation: metal reads as maintenance, open air signals commitment, verticality signals payoff.",
  ],
};

export const caseStudyPlayerObjective =
  "Navigate authored beats, complete light interactables, and reach exfil — with fail-forward routing so first-time players are never hard-stopped.";

export const caseStudyGameplayLoop =
  "Read space → choose route → resolve encounter beat → reposition → climb toward landmark exit.";

export const caseStudyExperienceGoals = [
  "Opening: low information, teach patrol and cover vocabulary.",
  "Mid: multiple viable routes; reward landmark checks.",
  "Finale: compressed risk and vertical clarity toward exfil.",
] as const;

export const caseStudyEnvironmentFlow = {
  title: "Spatial flow",
  paragraphs: [
    "Flow moves from edge to core to vertical exit — each transition gated by a readable change in space, materials, and audio.",
    "Alternate routes reward exploration without punishing the critical path.",
  ],
};

/** Gallery still uses local demo plates until Escape Protocol shots exist */
export const caseStudyGallery: readonly {
  key: TempImageryKey;
  caption: string;
}[] = [
  { key: "galleryStormCoast", caption: "Placeholder · atmosphere" },
  { key: "galleryBrutalist", caption: "Placeholder · structure" },
  { key: "galleryUrbanDepth", caption: "Placeholder · depth" },
];

export const caseStudyGoal =
  "Deliver a readable, tense slice that showcases landmark navigation, layered routes, and deliberate pacing.";

export const caseStudyTargetExperience =
  "Cautious at first, then confident as the level opens into clearer choices and stronger sightlines toward the exit.";

export const caseStudyPillars = [
  "Landmark-driven navigation",
  "Layered combat / traversal routes",
  "Fail-forward structure",
] as const;

export const caseStudyBeats = [
  "Perimeter approach and first stealth read",
  "Interior infiltration and interactable beat",
  "Compressed risk space — commitment required",
  "Vertical ascent and escape sequence",
] as const;

export const caseStudyMechanics = [
  "Patrol-aware navigation",
  "Traversal and climb routing",
  "Light environmental interactables",
] as const;

export const caseStudyTechniques = [
  {
    title: "Landmark legibility",
    body: "Primary landmark visible across multiple beats so orientation survives weather and verticality.",
  },
  {
    title: "Layered routes",
    body: "Stealth-forward paths plus optional risk/reward shortcuts for replay reads.",
  },
  {
    title: "Pacing compression",
    body: "Mid-level beats tightened after playtests read too slow in early greybox.",
  },
] as const;

export const caseStudyProcess = [
  {
    title: "Framing",
    body: "Defined player fantasy, core loop, and slice length for a 12–15 minute experience.",
  },
  {
    title: "Spatial blockout",
    body: "Greybox focused on encounter order, stealth reads, and fail-forward objectives.",
  },
  {
    title: "Iteration",
    body: "Playtests on route readability, cover rhythm, and landmark salience.",
  },
] as const;

export const caseStudyIterations = [
  {
    title: "Risk space pacing",
    body: "Compressed middle beat to restore tension after routes opened too wide.",
  },
  {
    title: "Alternate route clarity",
    body: "Stronger landmark framing for optional paths without breaking the critical line.",
  },
] as const;

export const caseStudyChallenges = [
  {
    title: "Middle section scale",
    body: "Initial greybox over-scaled the mid beat and slowed the loop.",
  },
  {
    title: "Side route readability",
    body: "Optional path not salient enough in first playtests — addressed with silhouette and lighting.",
  },
];

export const caseStudyOutcome =
  "A 12–15 minute vertical slice focused on escape fantasy, readable exploration, and authored progression.";

export const caseStudyLessons =
  "Sharpened pacing, sightline discipline, and how iteration feedback strengthens player guidance without extra UI.";
