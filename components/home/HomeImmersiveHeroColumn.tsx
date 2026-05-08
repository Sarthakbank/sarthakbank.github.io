"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ProfilePortrait } from "@/components/media/ProfilePortrait";
import { DepthFrame } from "@/components/experiment/DepthFrame";
import { FadeIn } from "@/components/motion/FadeIn";
import { tempImagery } from "@/content/tempImagery";
import { cn } from "@/lib/cn";
import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";
import { motion, useReducedMotion } from "framer-motion";

const Hero3DStage = dynamic(
  () =>
    import("@/components/experiment/Hero3DStage").then((m) => ({
      default: m.Hero3DStage,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-full min-h-[280px] w-full animate-pulse bg-surface/10 dark:bg-elevated/10" />
    ),
  },
);

type ColumnMode = "default" | "lab-reduce" | "lab-motion";

function HeroSculptureColumn({ mode }: { mode: ColumnMode }) {
  const immersive = mode !== "default";
  const motionOn = mode === "lab-motion";

  const stageInner = (
    <div
      className={cn(
        "relative w-full",
        immersive
          ? "min-h-[min(50vh,500px)] sm:min-h-[min(52vh,560px)] lg:min-h-[min(56vh,680px)]"
          : "min-h-[min(46vh,520px)] sm:min-h-[min(50vh,580px)] lg:min-h-[min(52vh,620px)]",
      )}
    >
      {!immersive ? (
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-canvas via-surface/90 to-canvas dark:from-black dark:via-[#06080d] dark:to-black" />
      ) : null}

      {!immersive ? (
        <div className="absolute inset-0 opacity-[0.14] dark:opacity-[0.2]">
          <Image
            src={tempImagery.homeHeroAmbient}
            alt=""
            fill
            className="scale-110 object-cover object-center blur-3xl"
            sizes="(min-width: 1024px) 640px, 100vw"
            priority
          />
        </div>
      ) : null}

      <div className="absolute inset-0">
        <Hero3DStage preset="showcase" className="h-full min-h-[inherit] w-full" />
      </div>

      {immersive ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.22]"
          style={{
            background:
              "radial-gradient(ellipse 74% 58% at 50% 44%, color-mix(in srgb, var(--color-accent) 6%, transparent) 0%, transparent 72%)",
          }}
        />
      ) : null}

      {!immersive ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              boxShadow:
                "inset 0 0 120px 40px color-mix(in srgb, var(--color-canvas) 88%, transparent)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-canvas via-transparent to-transparent opacity-[0.92] dark:from-black dark:via-transparent dark:to-black/55" />
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.12] dark:opacity-[0.22]"
            style={{
              background:
                "radial-gradient(ellipse 78% 58% at 50% 22%, color-mix(in srgb, var(--color-accent) 16%, transparent) 0%, transparent 58%)",
            }}
          />
        </>
      ) : null}
    </div>
  );

  const stageChrome = immersive
    ? "relative w-full overflow-visible"
    : cn(
        "relative overflow-hidden rounded-[2rem] sm:rounded-[2.35rem] shadow-[0_60px_120px_-40px_rgba(0,0,0,0.55),0_24px_64px_-28px_color-mix(in_srgb,var(--color-accent)_18%,transparent)] dark:shadow-[0_72px_140px_-36px_rgba(0,0,0,0.85),0_28px_70px_-24px_color-mix(in_srgb,var(--color-accent)_22%,transparent)]",
      );

  const stageBlock = <div className={stageChrome}>{stageInner}</div>;

  const portraitInner = (
    <DepthFrame intensity={immersive ? 0.55 : 0.48} className="rounded-[1.35rem]">
      <ProfilePortrait
        className={cn(
          "w-[min(100%,300px)] sm:w-[min(100%,340px)]",
          immersive
            ? "shadow-[0_48px_120px_-26px_rgba(0,0,0,0.55)] ring-1 ring-white/22 dark:shadow-[0_56px_130px_-20px_rgba(0,0,0,0.78)] dark:ring-white/12"
            : "shadow-[0_40px_100px_-28px_rgba(0,0,0,0.5)] ring-1 ring-white/18 dark:shadow-[0_48px_110px_-22px_rgba(0,0,0,0.72)] dark:ring-white/10",
        )}
        priority
      />
    </DepthFrame>
  );

  const portraitWrapClass = cn(
    "-mt-[11%] flex justify-center px-3 pb-2 sm:-mt-[13%] sm:px-5 sm:pb-1 lg:-mt-[15%]",
    "lg:[transform:translateZ(42px)]",
  );

  const portraitBlock = (
    <div className="relative z-10 block">
      <div className={portraitWrapClass}>{portraitInner}</div>
    </div>
  );

  if (motionOn) {
    return (
      <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none lg:max-w-[min(100%,58rem)] lg:[perspective:2000px] lg:[transform-style:preserve-3d]">
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_64%_54%_at_50%_38%,color-mix(in_srgb,var(--color-accent)_6%,transparent)_0%,transparent_74%)] opacity-[0.22] blur-3xl dark:opacity-[0.32]" />

        <motion.div
          className={cn("relative overflow-visible lg:[transform:translateZ(8px)]")}
          initial={{ opacity: 0.88, y: 22, scale: 0.988 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {stageBlock}
        </motion.div>
        <motion.div
          className={portraitWrapClass}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.82,
            delay: 0.22,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {portraitInner}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none lg:[perspective:1900px] lg:[transform-style:preserve-3d]">
      {immersive ? (
        <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_66%_56%_at_50%_40%,color-mix(in_srgb,var(--color-accent)_5%,transparent)_0%,transparent_76%)] opacity-[0.18] blur-2xl dark:opacity-[0.28]" />
      ) : null}

      <div className={cn("relative", immersive && "lg:[transform:translateZ(4px)]")}>
        <motion.div
          className="relative overflow-visible"
          {...(!immersive
            ? {
                initial: { opacity: 0.94, y: 14 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-12% 0px", amount: 0.15 },
                transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
              }
            : {
                initial: { opacity: 1, y: 0 },
              })}
        >
          {stageBlock}
          {portraitBlock}
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Immersive lab — 3D sits on the page with minimal halo (no card frame).
 */
export function HomeImmersiveHeroColumn() {
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();

  if (!lab) {
    return (
      <FadeIn delay={0.08}>
        <HeroSculptureColumn mode="default" />
      </FadeIn>
    );
  }

  if (reduce) {
    return (
      <FadeIn delay={0.06}>
        <HeroSculptureColumn mode="lab-reduce" />
      </FadeIn>
    );
  }

  return <HeroSculptureColumn mode="lab-motion" />;
}
