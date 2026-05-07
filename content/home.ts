/** Home page copy — aligned with docs/portfolio-concept.md; facts defer to profile-facts in layout/footer. */

export const homeHero = {
  name: "Sarthak Bankar",
  role: "Level Designer",
  tagline:
    "Designing gameplay spaces that guide, challenge, and immerse players.",
};

export const homeCtas = {
  primary: { href: "/case-study", label: "View featured project" },
  secondary: { href: "/about", label: "About my approach" },
};

export const homeHighlights = [
  "Level flow & encounter framing",
  "Blockouts to readable spaces",
  "Gameplay scripting & prototyping",
  "Collaboration across art & design",
] as const;

export const homeAboutPreview = {
  paragraphs: [
    "I’m a Level Designer focused on immersive, player-centered spaces. My work combines level flow, encounter design, gameplay scripting, and environmental storytelling to create intuitive and memorable player experiences.",
    "I care about readability under pressure: sightlines, landmarks, pacing, and the moment-to-moment choices a player can reasonably parse.",
  ],
};

export const homeFeaturedPreview = {
  eyebrow: "Black Tidemark — Demo case study · Third-person stealth-action",
  title: "Black Tidemark",
  description:
    "A storm-battered coastal relay station where the player infiltrates a fortress, restores a signal beacon, and escapes before the lower docks flood.",
  meta:
    "Built in Unreal Engine 5 with Blueprints, supported by Blender, Miro, and Photoshop · 9 weeks · Solo · Level Designer",
  href: "/case-study",
};

export const homeContactCta = {
  body: "If you’re hiring for level design—or want to talk spatial gameplay and vertical slices—let’s connect.",
  href: "/contact",
  label: "Get in touch",
};
