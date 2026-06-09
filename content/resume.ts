/**
 * Resume content — transcribed from new docs/Sarthak_Bankar_Resume.pdf.
 * Source of truth for the /resume HTML page; the original PDF is downloadable.
 */

export const resume = {
  name: "Sarthak Bankar",
  role: "Level Designer • 3D Artist",
  contact: {
    email: "sarthakbankar647@gmail.com",
    location: "Stoke-on-Trent, England, UK",
    website: "sarthakbank.github.io",
  },
  pdf: { href: "/Sarthak_Bankar_Resume.pdf", downloadName: "Sarthak_Bankar_Resume.pdf" },

  summary:
    "Level designer and 3D artist with a background in game and interactive media design, environment art, and immersive gameplay development. Designs levels as systems of guidance — using environmental cues, spatial contrast, and iterative playtesting to direct player behaviour without explicit UI markers. Holds an MSc in Game and Interactive Media Design from the University of Staffordshire (UK), with a stealth-action level design project as the primary portfolio deliverable.",

  featured: {
    title: "Escape Protocol",
    context: "MSc Dissertation Project — University of Staffordshire",
    period: "2024 – 2025",
    intro:
      "Third-person stealth-action PvE level built in Unreal Engine 5. A 4-tower facility with 10+ rooms and passages, designed to deliver 15+ minutes of gameplay for an experienced player.",
    bullets: [
      "Guided player navigation entirely through environmental cues — red lighting placed at decision points and exits to direct flow without UI markers or waypoints; validated through 12+ playtesting sessions before finalising placement.",
      "Designed stealth encounter layout by mapping enemy patrol routes and cover positions iteratively; playtesting drove the final placement of cover objects to ensure stealth was genuinely viable across multiple approach paths, not just theoretically possible.",
      "Planned tension and relief rhythm from the first blockout pass — alternating tight corridors with open areas to control pacing; the structure held through all playtests with no significant changes required.",
      "Delivered the full level as a greybox blockout using UE5 primitives, keeping the focus on spatial and design intent rather than surface art.",
    ],
    caseStudyHref: "/projects/escape-protocol",
  },

  experience: [
    {
      role: "3D Game Designer",
      company: "Zimension",
      period: "Jan 2024 – Mar 2024",
      location: "India",
      bullets: [
        "Designed and iterated on 3D game assets and environment layouts across multiple interactive projects, working directly to level design briefs.",
        "Built game-ready assets with correct topology and performance budgets, ensuring compatibility with the team's Unreal Engine pipeline.",
        "Reviewed environment builds against gameplay intent and flagged spatial issues during team iteration reviews.",
      ],
    },
    {
      role: "3D Modeler",
      company: "Metastarter",
      period: "Jan 2022 – Jun 2022",
      location: "India",
      bullets: [
        "Produced optimised 3D models for games and digital products in Blender and Maya, meeting polygon budgets and texture-resolution targets.",
        "Handled UV unwrapping, texturing, and LOD preparation to ensure assets were pipeline-ready without additional rework.",
        "Worked to art-direction briefs, adapting models to match the project's established visual style across multiple asset types.",
      ],
    },
    {
      role: "Freelance 3D Artist",
      company: "Learning Yogi",
      period: "Feb – Mar 2022",
      location: "India",
      bullets: [
        "Delivered game-ready 3D models and environments in Blender, Maya, and Unreal Engine to client briefs, on time and to specification.",
      ],
    },
  ],

  skills: [
    {
      group: "Level Design",
      items: "Blockouts, Encounter Design, Pacing & Sightlines, Environmental Storytelling, Greybox Iteration, Spatial Signalling, Landmark Placement, Playtesting",
    },
    {
      group: "Gameplay & Systems",
      items: "Gameplay Scripting, Mechanic Prototyping, Gameplay UX, Iterative Design",
    },
    {
      group: "3D & Visual Craft",
      items: "Environment Art, Sculpting, Texturing, Asset Optimisation, Topology, UV Unwrapping",
    },
    {
      group: "Engines & DCC Tools",
      items: "Unreal Engine 5, Unity, Maya, Blender, ZBrush, Substance Painter, SpeedTree",
    },
    {
      group: "Collaboration & Workflow",
      items: "Agile Workflow, Jira, Figma, Miro, Adobe Suite, After Effects",
    },
  ],

  education: [
    {
      degree: "MSc — Game and Interactive Media Design",
      school: "University of Staffordshire, UK",
      period: "Sep 2024 – Sep 2025",
    },
    {
      degree: "BSc — Game and Interactive Media Design",
      school: "Yashwantrao Chavan Maharashtra Open University",
      period: "2019 – 2022",
      note: "Three-year undergraduate degree in game design — international equivalent to a UK BSc.",
    },
  ],
} as const;
