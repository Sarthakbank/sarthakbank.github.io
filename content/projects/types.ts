/**
 * Data-driven project / featured case-study model.
 * One typed `Project` object powers both `/case-study` (current) and
 * `/projects/[slug]` (future) — add a project by adding a data file + registry entry.
 */

/** Icon keys map to lucide icons inside the view (keeps content free of JSX). */
export type ProjectMetaIcon =
  | "genre"
  | "type"
  | "engine"
  | "tools"
  | "iterations"
  | "playtests"
  | "role";

export type ProjectMetaItem = {
  label: string;
  value: string;
  icon: ProjectMetaIcon;
};

export type ProjectNavItem = { id: string; label: string };

export type ProjectInspirationItem = {
  title: string;
  body: string;
  /** Optional landscape (16:9) reference image, rendered above the title. Text-only when absent. */
  image?: string;
  imageAlt?: string;
};

export type ProjectInspirationGroup = {
  category: string;
  items: readonly ProjectInspirationItem[];
};

export type ProjectDesignGoal = {
  title: string;
  body: string;
  /** Optional in-engine screenshot (16:10), rendered above the card content. */
  image?: string;
  imageAlt?: string;
};

export type ProjectTechnique = {
  title: string;
  method: string;
  execution: string;
  example: string;
  /** Optional real media (image/gif). When null, a premium placeholder renders. */
  media?: string | null;
  mediaPlaceholder?: string;
  /** Looping muted gameplay clip (mp4) + optional webm + poster still. */
  video?: string;
  videoWebm?: string;
  poster?: string;
};

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  /** Optional YouTube thumbnail / hero still. Null → "coming soon" placeholder. */
  heroImage?: string | null;
  heroImageAlt?: string;
  youtubeUrl?: string | null;
  videoComingSoonLabel?: string;
  meta: readonly ProjectMetaItem[];
  nav: readonly ProjectNavItem[];
  overview: {
    paragraphs: readonly string[];
    credit: string;
  };
  inspiration: readonly ProjectInspirationGroup[];
  designGoalsIntro: string;
  designGoals: readonly ProjectDesignGoal[];
  ldd: {
    body: string;
    /** When null, the download CTA renders as a disabled "PDF coming soon" button. */
    pdfUrl: string | null;
  };
  techniques: readonly ProjectTechnique[];
  cta: {
    eyebrow: string;
    title: string;
    body: string;
  };
};
