/** About page — opening & philosophy from profile facts; no invented roles or projects. */

export const aboutHero = {
  roles: "Level Designer · Game Designer · 3D Artist",
  primaryRole: "Level Designer",
  location: "Stoke-On-Trent, England",
  statement:
    "I design levels as systems of guidance, shaping what the player notices first, what feels safe, and how the environment quietly teaches through contrast, rhythm, and payoff. My background spans game and interactive media design, 3D art, and immersive gameplay development, with hands-on workflow across Unreal Engine, Maya, and Blender.",
};

export const aboutIntro = {
  background: {
    title: "Background",
    paragraphs: [
      "I design levels as systems of guidance: what the player sees first, what they believe is safe, and what the space quietly teaches through repetition, contrast, and payoff.",
      "My background spans game and interactive media design, 3D art, and immersive gameplay development — with hands-on workflow across Unreal Engine, Maya, and Blender for blockouts, assets, and iteration.",
    ],
  },
  approach: {
    title: "Approach",
    paragraphs: [
      "I design gameplay spaces that guide, challenge, and immerse — from greybox flow and encounter framing to the 3D craft that supports the level-design intent.",
      "Clarity comes first, landmarks earn their place, and playtesting tightens every beat before set dressing is allowed to compete for attention.",
    ],
  },
} as const;

export const aboutPhilosophy = [
  {
    title: "Readable Flow",
    subtitle: "Clarity before detail.",
    body: "Readable flow and encounter framing come before set dressing competes for attention.",
    gradient: "warm",
  },
  {
    title: "Spatial Signals",
    subtitle: "Landmarks with purpose.",
    body: "Orientation survives pressure when exits and objectives stay salient across beats.",
    gradient: "teal",
  },
  {
    title: "Iterative, Playtest-led Craft",
    subtitle: "Greybox → test → refine.",
    body: "Greybox and playtests tighten guidance — especially where alternate routes risk obscurity.",
    gradient: "pink",
  },
] as const;
