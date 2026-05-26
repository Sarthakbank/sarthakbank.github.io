"use client";

import { motion } from "framer-motion";
import { homeDesignPrinciples } from "@/content/home";
import { appleSection } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";
import { PrincipleCard } from "@/components/home/ApplePrincipleCarouselCard";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-32px" },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

export function AppleDesignPrinciplesSection() {
  return (
    <section id="principles" className={cn(appleSection, "scroll-mt-24")} style={{ background: "#F0F0F3" }}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <motion.div {...fadeUp}>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {/* ── Intro gradient card ─────────────────────── */}
            <div
              className="flex flex-col justify-end overflow-hidden rounded-[24px]"
              style={{
                minHeight: "440px",
                padding: "36px 32px",
                background: "linear-gradient(to bottom, #FF9F43 0%, #F47B8E 45%, #C56CD6 100%)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08), 0 12px 40px rgba(0,0,0,0.12)",
              }}
            >
              <h2
                className="font-display uppercase leading-[1.05] tracking-[-0.02em] text-white"
                style={{ fontSize: "clamp(32px, 2.8vw, 40px)", fontWeight: 800 }}
              >
                Design
                <br />
                Principles
              </h2>
            </div>

            {/* ── 3 principle flip cards ───────────────────── */}
            {homeDesignPrinciples.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i + 1) * 0.06 }}
                style={{ minHeight: "440px" }}
              >
                <PrincipleCard principle={p} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Responsive overrides ─────────────────────── */}
        <style>{`
          @media (max-width: 1023px) {
            #principles .grid[style] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            #principles .grid[style] > * {
              min-height: 360px !important;
            }
          }
          @media (max-width: 639px) {
            #principles .grid[style] {
              grid-template-columns: 1fr !important;
              gap: 14px !important;
            }
            #principles .grid[style] > * {
              min-height: 320px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
