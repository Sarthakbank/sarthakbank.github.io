/**
 * Structured profile facts — sourced only from docs/profile-facts.md
 * Do not extend with invented roles, awards, or projects.
 */

import type { EducationItem, ExperienceItem } from "./types";

export const profileIdentity = {
  name: "Sarthak Bankar",
  primaryRole: "Level Designer",
  headline: "Game Designer and 3D artist",
  location: "Greater Stoke-on-Trent Area / Stoke-on-Trent, England, UK",
};

export const profileSummary =
  "Sarthak has a background in Game and Interactive Media Design with experience in 3D modeling, level design, and immersive gameplay development. He specializes in creating engaging, player-focused experiences using tools like Blender, Maya, and Unreal Engine.";

export const profileExperience: ExperienceItem[] = [
  {
    company: "Metastarter",
    role: "3D Modeler",
    duration: "January 2022 – June 2022",
    location: "India",
    summary:
      "Worked as a 3D Modeller, responsible for creating detailed and optimized 3D models for games and digital projects. Used tools such as Blender and Maya to develop assets while maintaining proper topology, textures, and performance standards. Collaborated with designers and artists to ensure assets matched the project’s visual style and technical requirements.",
  },
  {
    company: "Learning Yogi",
    role: "Freelance 3D Artist",
    duration: "February 2022 – March 2022",
    location: "India",
    summary:
      "Worked as a Freelance 3D Artist, creating high-quality 3D models, environments, and game-ready assets using Blender, Maya, and Unreal Engine. Collaborated with clients to understand project requirements, delivered optimized assets on time, and maintained visual quality aligned with creative goals.",
  },
];

export const profileEducation: EducationItem[] = [
  {
    institution: "University of Staffordshire",
    credential: "Master's degree, Game and Interactive Media Design",
    dates: "September 2024 – September 2025",
  },
  {
    institution: "Yashwantrao Chavan Maharashtra Open University",
    credential: "Bachelor's degree, Game and Interactive Media Design",
    dates: "2019 – 2022",
  },
  {
    institution: "Dr. Babasaheb Ambedkar Marathwada University (BAMU), Aurangabad",
    credential: "Diploma in engineering, Mechanical Engineering",
    dates: "August 2016 – May 2019",
  },
  {
    institution:
      "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
    credential: "Secondary school, Matriculation",
    dates: "July 2006 – March 2016",
  },
];

export const profileSkills = [
  "Level Design",
  "Gameplay Scripting",
  "Blockouts",
  "Encounter Design",
  "Environment Art Basics",
  "Texturing",
  "Sculpting",
  "Mechanic Prototyping",
  "Gameplay UX",
  "Agile Workflow",
] as const;

export type ProfileSkill = (typeof profileSkills)[number];

export const profileTools = [
  "Adobe Suite",
  "Maya",
  "Blender",
  "ZBrush",
  "Unreal Engine",
  "Unity",
  "Substance Painter",
  "SpeedTree",
  "After Effects",
  "Figma",
  "Miro",
] as const;
