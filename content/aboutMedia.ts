/**
 * About "Work in motion" media gallery — in-engine captures from Escape Protocol
 * plus one looping gameplay clip. All real assets (no placeholders).
 */

import type { MediaGroup } from "@/content/media/types";

const EP = "/media/projects/escape-protocol";
const G = `${EP}/gallery`;

export const aboutMedia: MediaGroup = {
  eyebrow: "Gallery",
  lead: "Work",
  title: "in motion",
  body: "Spaces, blockouts, and gameplay moments from Escape Protocol — built and captured in Unreal Engine 5.",
  layout: "grid",
  items: [
    {
      kind: "image",
      src: `${G}/shot-01.webp`,
      alt: "Escape Protocol — four-tower facility and central courtyard",
      ratio: "16/9",
      caption: "Macro layout — four towers around the central courtyard.",
    },
    {
      kind: "video",
      src: `${EP}/technique-1-clip.mp4`,
      webm: `${EP}/technique-1-clip.webm`,
      poster: `${EP}/technique-1-poster.webp`,
      alt: "Environmental light-guidance clip",
      ratio: "16/9",
      caption: "Red emergency lighting silently leading the player toward the exit.",
    },
    {
      kind: "image",
      src: `${G}/shot-04.webp`,
      alt: "Greybox encounter space with cover objects",
      ratio: "16/9",
      caption: "Encounter space — cover and approach paths planned in blockout.",
    },
    {
      kind: "image",
      src: `${G}/shot-05.webp`,
      alt: "Dark room with a single lit exit",
      ratio: "16/9",
      caption: "Darkness and a single light cue — tension through spatial design.",
    },
    {
      kind: "image",
      src: `${G}/shot-06.webp`,
      alt: "Control room with security monitors",
      ratio: "16/9",
      caption: "Control room — monitors reveal the route ahead for curious players.",
    },
    {
      kind: "image",
      src: `${G}/shot-08.webp`,
      alt: "Tight corridor lit by emergency light",
      ratio: "16/9",
      caption: "Pacing — a tight corridor between the level's open beats.",
    },
  ],
};
