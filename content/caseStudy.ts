/**
 * Black Tidemark — demo case study only (docs/portfolio-concept.md).
 * Extended Phase 2 DEMO copy / structure — replace with real materials when ready.
 * Label as demo throughout the UI.
 */

import type { CaseStudyNavItem } from "./types";
import type { TempImageryKey } from "./tempImagery";

export const caseStudyDemoLabel = "Demo case study";

export const caseStudyNav: CaseStudyNavItem[] = [
  { id: "hero", label: "Hero" },
  { id: "brief", label: "Brief" },
  { id: "facts", label: "Facts" },
  { id: "world", label: "World" },
  { id: "loop", label: "Loop" },
  { id: "intent", label: "Intent" },
  { id: "overview", label: "Player" },
  { id: "pillars", label: "Pillars" },
  { id: "walkthrough", label: "Beats" },
  { id: "techniques", label: "Craft" },
  { id: "process", label: "Process" },
  { id: "gallery", label: "Gallery" },
  { id: "iterations", label: "Iterate" },
  { id: "challenges", label: "Tests" },
  { id: "outcome", label: "Ship" },
  { id: "lessons", label: "Learn" },
  { id: "contact", label: "Hi" },
];

export const caseStudyMeta = {
  name: "Black Tidemark",
  genre: "Third-person stealth-action level design case study",
  engine: "Unreal Engine 5, Blueprints, Blender, Miro, Photoshop",
  duration: "9 weeks",
  team: "Solo project",
  role: "Level Designer",
};

export const caseStudySummary =
  "A storm-battered coastal relay station where the player must infiltrate the fortress, restore the signal beacon, and escape before the lower docks are flooded.";

/** DEMO — high-level pitch; refine with real GDD text later. */
export const caseStudyGameBrief = {
  title: "Game brief",
  paragraphs: [
    "Black Tidemark is a vertical-slice stealth-action level set around a failing relay station on a hostile coast. The player is under-equipped, outnumbered, and racing the tide—so every route choice, cover pocket, and sightline matters.",
    "The slice is scoped as a recruiter-readable proof of spatial craft: one cohesive location, one primary objective chain, and four authored beats that escalate tension without sacrificing readability.",
  ],
};

/** DEMO — situates the slice in a fictional ops context (not a shipped product claim). */
export const caseStudyProjectContext =
  "Presented as a solo academic / portfolio slice, the level treats the relay as a single ‘mission space’: perimeter approach, interior infiltration, central risk space, and vertical escape. Temp visuals and embeds below stand in for final captures.";

export const caseStudyWorldSetting = {
  title: "World & setting",
  paragraphs: [
    "The station sits on black rock shelves lashed by spray. Salt eats metal; fog eats distance. Interior volumes alternate between cramped service corridors and sudden, wind-cut courtyards where the beacon reads as the only honest landmark.",
    "Weather is not cosmetic—it compresses visibility, justifies tighter patrol loops, and sells the finale’s time pressure when the lower docks begin to flood.",
  ],
};

export const caseStudyPlayerObjective =
  "Infiltrate, reroute power to the beacon, climb, and escape before the lower ring is submerged—without forcing a fail state on first-time players.";

export const caseStudyGameplayLoop =
  "Read patrols → choose a stealth or traversal route → complete a light interactable (power reroute) → reposition for the next sightline contract → escalate vertically toward the beacon and exfil.";

export const caseStudyExperienceGoals = [
  "Minute 0–3: cautious, low information; teach patrol vocabulary.",
  "Minute 3–8: multiple viable routes; reward landmark checks.",
  "Minute 8–12: compressed risk in the courtyard; force commitment.",
  "Minute 12+: vertical clarity; beacon as promise and clock.",
] as const;

export const caseStudyEnvironmentFlow = {
  title: "Environment & flow",
  paragraphs: [
    "Flow is staged as a spiral: the player skirts the facility’s edge, slips inward through maintenance, trades horizontal safety for vertical leverage, then rides the beacon structure back outward above the flood line.",
    "Each transition is gated by a readable change in materials and audio cues (metal → concrete → open air) so navigation reinforces narrative without UI hand-holding.",
  ],
};

/** Maps to `tempImagery` / `demoMediaManifest` keys — swap files under `public/media/demo/gallery/`. */
export const caseStudyGallery: readonly {
  key: TempImageryKey;
  caption: string;
}[] = [
  { key: "galleryStormCoast", caption: "Demo · sea state" },
  { key: "galleryBrutalist", caption: "Demo · brutalist read" },
  { key: "galleryUrbanDepth", caption: "Demo · industrial depth" },
  { key: "galleryFogPath", caption: "Demo · fog layer" },
  { key: "galleryInteriorRhythm", caption: "Demo · service rhythm" },
  { key: "galleryPeaks", caption: "Demo · ridgeline scale" },
];

export const caseStudyGoal =
  "To create a tense but readable level that showcases landmark-based navigation, layered stealth routes, and a strong vertical finale.";

export const caseStudyTargetExperience =
  "The player should feel cautious at first, then increasingly confident as the level opens into multiple routes, clearer sightlines, and more deliberate choices.";

export const caseStudyPillars = [
  "Landmark-Driven Navigation",
  "Layered Stealth and Traversal Routes",
  "Fail-Forward Progression",
] as const;

export const caseStudyBeats = [
  "Cliffside arrival and first stealth read",
  "Service tunnel infiltration and power reroute",
  "Courtyard multi-route encounter",
  "Beacon tower ascent and escape sequence",
] as const;

export const caseStudyMechanics = [
  "Patrol-based stealth navigation",
  "Climb / vault / traversal pathing",
  "Simple power-routing puzzle interaction",
] as const;

export const caseStudyTechniques = [
  {
    title: "Landmark legibility",
    body: "Beacon and coastal silhouette anchor long sightlines through weather and verticality.",
  },
  {
    title: "Layered routes",
    body: "Stealth-forward paths complemented by traversal and optional risk/reward shortcuts.",
  },
  {
    title: "Pacing compression",
    body: "Courtyard and connector spaces tightened after pacing reads too slow in early tests.",
  },
] as const;

export const caseStudyProcess = [
  {
    title: "Pre-production framing",
    body: "Defined player fantasy, core loop, and vertical slice scope for a 12–15 minute experience.",
  },
  {
    title: "Spatial blockout",
    body: "Greybox focused on encounter order, stealth reads, and fail-forward objectives.",
  },
  {
    title: "Playtest loops",
    body: "Iteration driven by route readability, cover rhythm, and landmark salience.",
  },
] as const;

export const caseStudyIterations = [
  {
    title: "Courtyard pacing",
    body: "Compressed the courtyard and tightened travel time between encounters.",
  },
  {
    title: "Alternate route clarity",
    body: "Stronger beacon landmark, cover rhythm, and clearer side-route framing.",
  },
] as const;

export const caseStudyChallenges = [
  {
    title: "Middle section scale",
    body: "Initially too large and slowed pacing.",
  },
  {
    title: "Side route readability",
    body: "Alternate route was not clearly readable in early tests.",
  },
];

export const caseStudyOutcome =
  "A 12–15 minute vertical-slice level focused on stealth, readable exploration, and cinematic progression.";

export const caseStudyLessons =
  "The project improved understanding of pacing, sightline control, spatial readability, and how iteration feedback can strengthen player guidance.";
