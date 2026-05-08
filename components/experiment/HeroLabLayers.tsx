"use client";

import { useImmersiveLab } from "./ImmersiveLabProvider";

/**
 * Static depth orbs + soft vignette — no looping keyframes (keeps motion restrained).
 */
export function HeroLabLayers() {
  const lab = useImmersiveLab();
  if (!lab) return null;

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-18%] top-[18%] h-[min(72vw,560px)] w-[min(72vw,560px)] rounded-full bg-accent/[0.06] blur-[130px] dark:bg-accent/[0.09]" />
        <div className="absolute right-[-12%] top-[-8%] h-[min(58vw,440px)] w-[min(58vw,440px)] rounded-full bg-success/[0.045] blur-[110px] dark:bg-success/[0.07]" />
        <div className="absolute bottom-[8%] left-[28%] h-72 w-72 rounded-full bg-warn/[0.035] blur-[90px] dark:bg-warn/[0.05]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.55]"
        style={{
          maskImage:
            "radial-gradient(ellipse 72% 65% at 50% 42%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 72% 65% at 50% 42%, black 0%, transparent 72%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-canvas/30 to-canvas/80 dark:via-black/25 dark:to-black" />
      </div>
    </>
  );
}
