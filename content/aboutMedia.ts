/**
 * About "Work in motion" media gallery.
 * Real captures where they exist; intentional placeholders elsewhere. Swap a
 * placeholder for an image/video/youtube of the same ratio with no layout change.
 */

import type { MediaGroup } from "@/content/media/types";

const EP = "/media/projects/escape-protocol";

export const aboutMedia: MediaGroup = {
  eyebrow: "Gallery",
  lead: "Work",
  title: "in motion",
  body: "Spaces, blockouts, and gameplay moments behind the design — captures, clips, and breakdowns.",
  layout: "grid",
  items: [
    {
      kind: "image",
      src: "/media/escape-protocol-thumbnail.png",
      alt: "Escape Protocol — gameplay still",
      ratio: "16/9",
      caption: "Escape Protocol — vertical-slice gameplay.",
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
    { kind: "placeholder", title: "Blockout flythrough", placeholderKind: "video", ratio: "16/9" },
    { kind: "placeholder", title: "Top-down level map", placeholderKind: "image", ratio: "16/9" },
    { kind: "placeholder", title: "Encounter breakdown", placeholderKind: "gif", ratio: "16/9" },
    { kind: "placeholder", title: "Lighting study", placeholderKind: "image", ratio: "16/9" },
  ],
};
