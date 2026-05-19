/** Piecewise scroll → frame mapping for Apple-style hero choreography. */

export type HeroSegment = "intro" | "enter" | "hold" | "rotate" | "exit" | "outro";

export type HeroArcKeyframes = {
  /** Last frame index (inclusive) during intro blank — object hidden. */
  introHold: number;
  enterEnd: number;
  holdEnd: number;
  rotateEnd: number;
  exitEnd: number;
  outroEnd: number;
};

/** Scroll-time share per segment (must sum to 1). Rotation gets the largest share. */
export const SEGMENT_SCROLL_SHARE: Record<HeroSegment, number> = {
  intro: 0.08,
  enter: 0.14,
  hold: 0.16,
  rotate: 0.4,
  exit: 0.2,
  outro: 0.02,
};

const SEGMENT_ORDER: HeroSegment[] = ["intro", "enter", "hold", "rotate", "exit", "outro"];

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

function lerpFrame(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * smoothstep(t));
}

function arcSegmentBounds(arc: HeroArcKeyframes) {
  return [
    { segment: "intro" as const, from: 0, to: arc.introHold },
    { segment: "enter" as const, from: arc.introHold, to: arc.enterEnd },
    { segment: "hold" as const, from: arc.enterEnd, to: arc.holdEnd },
    { segment: "rotate" as const, from: arc.holdEnd, to: arc.rotateEnd },
    { segment: "exit" as const, from: arc.rotateEnd, to: arc.exitEnd },
    { segment: "outro" as const, from: arc.exitEnd, to: arc.outroEnd },
  ];
}

export function getSegmentForFrame(index: number, arc: HeroArcKeyframes): HeroSegment {
  for (const seg of arcSegmentBounds(arc)) {
    if (index <= seg.to) return seg.segment;
  }
  return "outro";
}

export type HeroScrollState = {
  frameIndex: number;
  progress: number;
  segment: HeroSegment;
};

/**
 * Maps scroll progress (0–1 through the hero track) to frame index + segment.
 */
export function mapScrollProgressToHeroState(
  progress: number,
  arc: HeroArcKeyframes,
): HeroScrollState {
  const p = Math.min(1, Math.max(0, progress));
  const segments = arcSegmentBounds(arc).map((seg) => ({
    ...seg,
    weight: SEGMENT_SCROLL_SHARE[seg.segment],
  }));

  let cursor = 0;
  for (const seg of segments) {
    const end = cursor + seg.weight;
    if (p <= end || seg === segments[segments.length - 1]) {
      const local = seg.weight <= 0 ? 0 : (p - cursor) / seg.weight;
      return {
        frameIndex: lerpFrame(seg.from, seg.to, local),
        progress: p,
        segment: seg.segment,
      };
    }
    cursor = end;
  }

  return { frameIndex: arc.outroEnd, progress: p, segment: "outro" };
}

/** @deprecated Use mapScrollProgressToHeroState */
export function mapScrollProgressToFrame(progress: number, arc: HeroArcKeyframes): number {
  return mapScrollProgressToHeroState(progress, arc).frameIndex;
}

export { SEGMENT_ORDER };
