/**
 * Data-driven project / featured case-study model.
 * One typed `Project` object powers both `/case-study` (current) and
 * `/projects/[slug]` (future) — add a project by adding a data file + registry entry.
 */

import type { MediaItem } from "@/content/media/types";

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

export type ProjectWalkthroughBeat = {
  /** e.g. "Beat 1 — Orientation" */
  title: string;
  /** Key gameplay summary line, e.g. "Tower 2 Interior · No Combat · Low Intensity" */
  summary: string;
  /** Beat description (front of the flip card). */
  body: string;
  /** YouTube id shown on the back of the flip card. */
  youtubeId: string;
};

export type ProjectWalkthrough = {
  intro: string;
  pacing: { image: string; imageAlt: string; caption?: string };
  levelMap: {
    image: string;
    imageAlt: string;
    caption?: string;
    legend?: readonly { label: string; color: string }[];
  };
  beats: readonly ProjectWalkthroughBeat[];
};

/** One iteration in a process beat — the Problem → Iteration → Solution → Outcome flow. */
export type ProjectProcessIteration = {
  problem: string;
  iteration?: string;
  solution: string;
  outcome?: string;
};

export type ProjectProcessBeat = {
  /** e.g. "Beat 1 — Movement Onboarding" */
  title: string;
  /** One-line summary of what this beat tackled. */
  summary: string;
  iterations: readonly ProjectProcessIteration[];
  /** Optional, GIF-ready media slot (image now, GIF/video later — no redesign). */
  media?: MediaItem;
};

export type ProjectProcess = {
  intro: string;
  beats: readonly ProjectProcessBeat[];
};

export type ProjectFullGameplay = {
  eyebrow: string;
  title: string;
  description: string;
  /** YouTube id for the full-playthrough video. */
  youtubeId: string;
  /** Local poster image shown before the lazy embed loads. */
  poster: string;
};

/** One spec card in the Playable Build release area. */
export type ProjectBuildCard = {
  icon: "format" | "size" | "platform" | "version";
  label: string;
  value: string;
};

export type ProjectPlayableBuild = {
  eyebrow: string;
  /** Gradient lead phrase of the heading. */
  lead: string;
  /** Black continuation of the heading. */
  title: string;
  description: string;
  downloadLabel: string;
  /**
   * External download URL (Google Drive). The packaged build is ~616 MB — far
   * above GitHub's 100 MB/file limit — so it is hosted off-repo, not in /public.
   */
  downloadUrl: string;
  /** Secondary, lower-emphasis action (e.g. "View Build Files"). */
  secondaryLabel: string;
  secondaryUrl: string;
  /** Spec cards (format / size / platform / version) shown below the CTA. */
  cards: readonly ProjectBuildCard[];
};

export type ProjectTechnicalChallenges = {
  intro: string;
  challenges: readonly { title: string; body: string }[];
  /** The design-decision resolution callout. */
  resolution: string;
};

export type ProjectReflection = {
  /** "Reflection" column paragraphs. */
  reflection: readonly string[];
  /** "What I Would Do Differently" column paragraphs. */
  differently: readonly string[];
  closingQuote?: string;
};

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  /** Optional YouTube thumbnail / hero still. Null → "coming soon" placeholder. */
  heroImage?: string | null;
  heroImageAlt?: string;
  youtubeUrl?: string | null;
  /** When set, the hero renders an inline lazy YouTube trailer (poster = heroImage). */
  trailerYouTubeId?: string | null;
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
    /** Route to the structured HTML version of the document. */
    documentUrl?: string | null;
  };
  techniques: readonly ProjectTechnique[];
  walkthrough?: ProjectWalkthrough;
  process?: ProjectProcess;
  fullGameplay?: ProjectFullGameplay;
  playableBuild?: ProjectPlayableBuild;
  technicalChallenges?: ProjectTechnicalChallenges;
  reflection?: ProjectReflection;
  cta: {
    eyebrow: string;
    title: string;
    body: string;
  };
};
