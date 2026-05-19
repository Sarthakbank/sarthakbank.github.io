"use client";

import { useEffect, useState, type RefObject } from "react";
import {
  mapScrollProgressToHeroState,
  type HeroArcKeyframes,
  type HeroScrollState,
} from "@/lib/heroScrollMap";

type Options = {
  frameCount: number;
  arc?: HeroArcKeyframes;
  frameStep?: number;
  disabled?: boolean;
};

const INITIAL: HeroScrollState = { frameIndex: 0, progress: 0, segment: "intro" };

export function useScrollFrameIndex(
  containerRef: RefObject<HTMLElement | null>,
  { frameCount, arc, frameStep = 1, disabled = false }: Options,
): HeroScrollState {
  const [state, setState] = useState<HeroScrollState>(INITIAL);

  useEffect(() => {
    if (disabled || frameCount < 1) return;

    const el = containerRef.current;
    if (!el) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress =
        scrollable <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / scrollable));

      let mapped: HeroScrollState;
      if (arc) {
        mapped = mapScrollProgressToHeroState(progress, arc);
      } else {
        const raw = Math.round(progress * (frameCount - 1));
        mapped = { frameIndex: raw, progress, segment: "rotate" };
      }

      const frameIndex =
        frameStep > 1
          ? Math.min(
              frameCount - 1,
              Math.max(0, Math.round(mapped.frameIndex / frameStep) * frameStep),
            )
          : Math.min(frameCount - 1, Math.max(0, mapped.frameIndex));

      setState((prev) => {
        if (
          prev.frameIndex === frameIndex &&
          prev.segment === mapped.segment &&
          Math.abs(prev.progress - progress) < 0.002
        ) {
          return prev;
        }
        return { frameIndex, progress, segment: mapped.segment };
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [containerRef, frameCount, arc, frameStep, disabled]);

  return state;
}
