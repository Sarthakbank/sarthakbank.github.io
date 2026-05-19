/**
 * Facility Breach — level design case study (portfolio vertical slice).
 * Placeholder imagery is licensed reference only — not shipped-game marketing.
 */

import { demoBeatImages } from "./demoMediaManifest";
import { homeFeaturedMedia } from "./homeMedia";
import type { CaseStudyNavItem } from "./types";

export const caseStudyDemoLabel = "Portfolio sample";

export const caseStudyNav: CaseStudyNavItem[] = [
  { id: "hero", label: "Hero" },
  { id: "goal", label: "Goal" },
  { id: "overview", label: "Overview" },
  { id: "techniques", label: "Techniques" },
  { id: "beats", label: "Walkthrough" },
  { id: "process", label: "Process" },
  { id: "outcome", label: "Outcome" },
];

export const caseStudyMeta = {
  title: "Facility Breach",
  subtitle: "Stealth Infiltration Slice",
  summary:
    "A vertical-slice concept built to prove infiltration flow, cover rhythm, and readable threat lanes in a single continuous facility run — presented as portfolio work, not a shipped title.",
};

export const caseStudyFactsLines = [
  { label: "Platform", value: "PC (Windows)" },
  { label: "Engine", value: "Unreal Engine 5" },
  { label: "Mode", value: "Single Player (PvE)" },
  { label: "Role", value: "Level Designer / Gameplay Designer" },
  { label: "Status", value: "Vertical slice (demo)" },
  { label: "Scope", value: "Solo academic / portfolio piece" },
] as const;

export const caseStudyGoal = {
  intent:
    "Design a single-mission space that reads as a recruiter-friendly proof of craft: one location, one objective chain, and authored beats that escalate without losing spatial clarity.",
  experienceTarget:
    "Players start cautious — limited information, tight cover vocabulary — then gain confidence as routes open, landmarks clarify, and the exit read strengthens.",
  designGoals: [
    "Teach patrol and cover reads in the opening without UI hand-holding.",
    "Offer layered routes that reward exploration without breaking the critical path.",
    "Compress risk toward a vertical finale with a unmistakable exfil landmark.",
  ] as const,
};

export const caseStudyOverview = {
  setting:
    "A hardened facility under alert: service corridors, maintenance volumes, and a beacon-like landmark that sells the escape payoff. Materials distinguish maintenance (metal, pipes) from commitment spaces (open air, vertical shafts).",
  playerObjective:
    "Infiltrate, complete light interactables along the critical path, and reach exfil — with fail-forward routing so first-time players are never hard-stopped.",
  spatialFlow:
    "Edge approach → interior pressure → compressed risk space → vertical ascent to landmark exit. Each transition is gated by a readable change in scale, materials, and audio.",
};

export type CaseStudyTechnique = {
  title: string;
  body: string;
};

export const caseStudyTechniques: readonly CaseStudyTechnique[] = [
  {
    title: "Readability",
    body: "Sightlines, silhouette, and lighting are authored so threat, cover, and objectives parse under pressure — before any art pass.",
  },
  {
    title: "Route framing",
    body: "Primary path stays legible; optional branches use landmark checks and material shifts so exploration feels intentional, not confusing.",
  },
  {
    title: "Encounter pacing",
    body: "Greybox iteration tightened the mid beat after playtests read too slow — compression restores tension without shrinking player agency.",
  },
];

export type CaseStudyBeat = {
  id: string;
  title: string;
  objective: string;
  playerAction: string;
  designPurpose: string;
  image: string;
  imageNote: string;
};

export const caseStudyBeats: readonly CaseStudyBeat[] = [
  {
    id: "beat-01",
    title: "Perimeter approach",
    objective: "Establish patrol vocabulary and first stealth read.",
    playerAction: "Observe routes, identify cover rhythm, choose entry timing.",
    designPurpose: "Low information density teaches systems before interior pressure.",
    image: homeFeaturedMedia.hero,
    imageNote: "Placeholder · environment reference (Pexels)",
  },
  {
    id: "beat-02",
    title: "Service infiltration",
    objective: "Reach the first interactable without breaking stealth flow.",
    playerAction: "Navigate corridor cover, use maintenance sightlines, trigger light interactable.",
    designPurpose: "Corridor rhythm proves interior flow and encounter spacing.",
    image: homeFeaturedMedia.corridorDetail,
    imageNote: "Placeholder · corridor reference (Pexels)",
  },
  {
    id: "beat-03",
    title: "Risk compression",
    objective: "Commit through a tighter volume with fewer outs.",
    playerAction: "Cross exposed span or take optional flank with higher risk.",
    designPurpose: "Mid-level compression restores tension after routes opened too wide.",
    image: demoBeatImages[2],
    imageNote: "Placeholder · spatial beat still",
  },
  {
    id: "beat-04",
    title: "Landmark reorientation",
    objective: "Re-establish orientation toward the exfil landmark.",
    playerAction: "Gain height or vista check; read exit silhouette against sky/core light.",
    designPurpose: "Landmark salience survives weather, verticality, and partial occlusion.",
    image: homeFeaturedMedia.brutalistReference,
    imageNote: "Placeholder · massing reference (Pexels)",
  },
  {
    id: "beat-05",
    title: "Vertical exfil",
    objective: "Complete the escape sequence with clear final read.",
    playerAction: "Climb or traverse vertical beat; reach exfil trigger.",
    designPurpose: "Finale sells payoff — compressed risk, strong vertical clarity.",
    image: demoBeatImages[3],
    imageNote: "Placeholder · finale beat still",
  },
];

export type CaseStudyProcessStep = {
  title: string;
  body: string;
};

export const caseStudyProcess: readonly CaseStudyProcessStep[] = [
  {
    title: "Research",
    body: "Framed player fantasy, core loop, and target slice length (~12–15 min) from reference missions and level-design frameworks.",
  },
  {
    title: "Blockout",
    body: "Greybox focused on encounter order, stealth reads, and fail-forward objectives before any dressing.",
  },
  {
    title: "Playtest",
    body: "Recorded route choices, cover usage, and where players hesitated or misread threat lanes.",
  },
  {
    title: "Iteration",
    body: "Tightened mid-beat scale, strengthened optional-route landmarks, and adjusted patrol timing from feedback.",
  },
  {
    title: "Polish",
    body: "Lighting passes, material reads, and documentation for portfolio presentation — in-engine captures replace placeholders when ready.",
  },
];

export const caseStudyOutcome = {
  summary:
    "Demonstrates landmark-driven navigation, layered infiltration routes, deliberate pacing compression, and iteration discipline — packaged as an honest vertical-slice portfolio sample.",
  demonstrates: [
    "Spatial clarity under stealth pressure",
    "Authored beat progression with fail-forward objectives",
    "Playtest-driven greybox iteration",
    "Documentation-ready level design thinking",
  ] as const,
};
