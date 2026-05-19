import manifestJson from "../public/media/hero-blockout-sequence-clean/manifest.json";
import type { HeroArcKeyframes } from "@/lib/heroScrollMap";

export type HeroBlockoutManifest = {
  frameCount: number;
  fps: number;
  frames: string[];
  poster: string;
  arc: HeroArcKeyframes;
  segments?: {
    blankStart: [number, number];
    enter: [number, number];
    hold: [number, number];
    rotation: [number, number];
    exit: [number, number];
    blankEnd: [number, number];
  };
  scrollVh: { desktop: number; mobile: number };
};

const DEFAULT_ARC: HeroArcKeyframes = {
  introHold: 3,
  enterEnd: 11,
  holdEnd: 35,
  rotateEnd: 71,
  exitEnd: 87,
  outroEnd: 95,
};

const FALLBACK_POSTER = "/media/hero-blockout-sequence-clean/frame-0036.webp";
const FALLBACK_STILL = "/media/hero-blockout-sequence-clean/frame-0048.webp";

function normalizeManifest(raw: unknown): HeroBlockoutManifest {
  const m = raw as Partial<HeroBlockoutManifest>;
  const frames = Array.isArray(m.frames) ? m.frames.filter((f) => typeof f === "string") : [];
  const frameCount = frames.length > 0 ? frames.length : 1;
  const arc = m.arc ?? DEFAULT_ARC;

  return {
    frameCount,
    fps: typeof m.fps === "number" ? m.fps : 12,
    frames: frames.length > 0 ? frames : [FALLBACK_POSTER],
    poster: typeof m.poster === "string" ? m.poster : FALLBACK_POSTER,
    arc: {
      introHold: arc.introHold ?? DEFAULT_ARC.introHold,
      enterEnd: arc.enterEnd ?? DEFAULT_ARC.enterEnd,
      holdEnd: arc.holdEnd ?? DEFAULT_ARC.holdEnd,
      rotateEnd: arc.rotateEnd ?? DEFAULT_ARC.rotateEnd,
      exitEnd: arc.exitEnd ?? DEFAULT_ARC.exitEnd,
      outroEnd: arc.outroEnd ?? DEFAULT_ARC.outroEnd,
    },
    segments: m.segments,
    scrollVh: {
      desktop: m.scrollVh?.desktop ?? 340,
      mobile: m.scrollVh?.mobile ?? 280,
    },
  };
}

export const heroBlockoutManifest = normalizeManifest(manifestJson);

/** Best still for static / reduced-motion hero. */
export const heroBlockoutStill =
  heroBlockoutManifest.frames[Math.min(47, heroBlockoutManifest.frameCount - 1)] ??
  FALLBACK_STILL;
