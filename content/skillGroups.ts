/**
 * Presentation-only grouping of skills from profile.ts (no new skills added).
 */

import type { ProfileSkill } from "./profile";

export type SkillGroup = {
  title: string;
  subtitle: string;
  skills: readonly ProfileSkill[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Level Design",
    subtitle: "Spatial flow & encounters",
    skills: ["Level Design", "Blockouts", "Encounter Design"],
  },
  {
    title: "Gameplay / Systems",
    subtitle: "Scripts, UX, prototypes",
    skills: ["Gameplay Scripting", "Mechanic Prototyping", "Gameplay UX"],
  },
  {
    title: "3D / Visual Craft",
    subtitle: "Art support for spaces",
    skills: ["Environment Art Basics", "Texturing", "Sculpting"],
  },
  {
    title: "Workflow",
    subtitle: "Delivery & collaboration",
    skills: ["Agile Workflow"],
  },
];
