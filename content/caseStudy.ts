/**
 * Black Tidemark — demo case study only (docs/portfolio-concept.md).
 * Label as demo throughout the UI.
 */

import type { CaseStudyNavItem } from "./types";

export const caseStudyDemoLabel = "Demo case study";

export const caseStudyNav: CaseStudyNavItem[] = [
  { id: "hero", label: "Hero" },
  { id: "facts", label: "Facts" },
  { id: "goal", label: "Goal" },
  { id: "overview", label: "Overview" },
  { id: "pillars", label: "Pillars" },
  { id: "walkthrough", label: "Beats" },
  { id: "techniques", label: "Techniques" },
  { id: "process", label: "Process" },
  { id: "iterations", label: "Iterations" },
  { id: "challenges", label: "Challenges" },
  { id: "outcome", label: "Outcome" },
  { id: "lessons", label: "Lessons" },
  { id: "contact", label: "Contact" },
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
