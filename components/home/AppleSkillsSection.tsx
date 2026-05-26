"use client";

import { motion } from "framer-motion";
import { SkillCard } from "@/components/home/AppleSkillCarouselCard";
import { homeSkillGrid, homeThinkInSpace } from "@/content/home";
import { appleSection } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-32px" },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

/* ── Intro card decorative icons (dark navy #2E3A67) ────────────── */

const N = "#2E3A67";

function DecorPlanet() {
  return (
    <svg width="78" height="78" viewBox="0 0 70 70" fill="none" className="absolute bottom-2 right-[44px]">
      <defs>
        <linearGradient id="pgrad" x1="35" y1="10" x2="35" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3B4F8A" />
          <stop offset="1" stopColor="#1E2A4A" />
        </linearGradient>
      </defs>
      <circle cx="35" cy="35" r="20" fill="url(#pgrad)" />
      <ellipse cx="35" cy="35" rx="32" ry="9" stroke={N} strokeWidth="1.8" opacity="0.4" transform="rotate(-20 35 35)" />
    </svg>
  );
}

function DecorMolecule() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" className="absolute bottom-1 left-1">
      <circle cx="18" cy="18" r="4" fill={N} opacity="0.55" />
      <circle cx="8" cy="8" r="2.5" fill={N} opacity="0.35" />
      <circle cx="28" cy="8" r="2.5" fill={N} opacity="0.35" />
      <circle cx="8" cy="28" r="2.5" fill={N} opacity="0.35" />
      <circle cx="28" cy="28" r="2.5" fill={N} opacity="0.35" />
      <circle cx="18" cy="4" r="2" fill={N} opacity="0.3" />
      <path d="M18 14V6M14 16L10 10M22 16L26 10M14 20L10 26M22 20L26 26" stroke={N} strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
    </svg>
  );
}

function DecorSparkle() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" className="absolute bottom-2 left-[52px]">
      <path d="M14 2L16 11L25 14L16 17L14 26L12 17L3 14L12 11L14 2Z" fill={N} opacity="0.45" />
      <path d="M22 4L23 8L27 9L23 10L22 14L21 10L17 9L21 8L22 4Z" fill={N} opacity="0.28" />
    </svg>
  );
}

function DecorLayers() {
  return (
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" className="absolute right-1 top-1">
      <path d="M18 6L30 13L18 20L6 13L18 6Z" stroke={N} strokeWidth="2" strokeLinejoin="round" opacity="0.4" />
      <path d="M6 18L18 25L30 18" stroke={N} strokeWidth="2" strokeLinejoin="round" opacity="0.3" />
      <path d="M6 23L18 30L30 23" stroke={N} strokeWidth="2" strokeLinejoin="round" opacity="0.2" />
    </svg>
  );
}

function DecorCompass() {
  return (
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" className="absolute bottom-1 right-1">
      <circle cx="18" cy="18" r="14" stroke={N} strokeWidth="2" opacity="0.4" />
      <path d="M18 6L20 16L18 18L16 16L18 6Z" fill={N} opacity="0.45" />
      <path d="M18 30L16 20L18 18L20 20L18 30Z" fill={N} opacity="0.22" />
      <circle cx="18" cy="18" r="2" fill={N} opacity="0.45" />
    </svg>
  );
}

/* ── Section ────────────────────────────────────────────────────── */

export function AppleSkillsSection() {
  const row1 = homeSkillGrid.slice(0, 5);
  const row2 = homeSkillGrid.slice(5, 10);

  return (
    <section className={cn(appleSection)} style={{ background: "#F0F0F3" }}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <motion.div {...fadeUp}>
          {/* CSS Grid: intro col 270px + 5 × 1fr, 2 rows, intro spans both */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: "270px repeat(5, 1fr)",
              gridTemplateRows: "auto auto",
              gap: "14px",
            }}
          >
            {/* ── Intro card (spans row 1 + row 2) ───────────────── */}
            <div
              className="relative flex flex-col overflow-hidden rounded-[14px] border border-black/[0.04] bg-white"
              style={{
                gridRow: "1 / 3",
                gridColumn: "1 / 2",
                padding: "24px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              <div>
                <h2
                  className="font-display leading-[1.06]"
                  style={{ fontSize: "26px", letterSpacing: "-0.025em" }}
                >
                  <span style={{ fontWeight: 400, color: "#1d1d1f" }}>How I </span>
                  <span
                    style={{
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #2E3A67 0%, #6D28D9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Think In
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Space
                  </span>
                </h2>
                <p className="mt-3 leading-[1.5]" style={{ fontSize: "13px", color: "#86868b" }}>
                  {homeThinkInSpace.subtitle}
                </p>
              </div>

              {/* Decorative icons area — bottom-right */}
              <div className="relative mt-auto pt-8" aria-hidden>
                <div className="relative h-[110px]">
                  <DecorMolecule />
                  <DecorSparkle />
                  <DecorPlanet />
                  <DecorLayers />
                  <DecorCompass />
                </div>
              </div>
            </div>

            {/* ── Row 1: 5 skill cards ────────────────────────────── */}
            {row1.map((row) => (
              <SkillCard key={row.skill} skill={row.skill} subtitle={row.subtitle} />
            ))}

            {/* ── Row 2: 5 skill cards ────────────────────────────── */}
            {row2.map((row) => (
              <SkillCard key={row.skill} skill={row.skill} subtitle={row.subtitle} />
            ))}
          </div>
        </motion.div>

        {/* ── Mobile/tablet fallback (hidden on lg+) ──────────────── */}
        <style>{`
          @media (max-width: 1023px) {
            .grid[style] {
              display: flex !important;
              flex-direction: column !important;
              gap: 14px !important;
            }
            .grid[style] > *:first-child {
              grid-row: unset !important;
              grid-column: unset !important;
            }
          }
          @media (min-width: 640px) and (max-width: 1023px) {
            .grid[style] {
              display: grid !important;
              grid-template-columns: repeat(3, 1fr) !important;
              grid-template-rows: unset !important;
            }
            .grid[style] > *:first-child {
              grid-column: 1 / -1 !important;
              grid-row: unset !important;
            }
          }
          @media (max-width: 639px) {
            .grid[style] {
              display: grid !important;
              grid-template-columns: repeat(2, 1fr) !important;
              grid-template-rows: unset !important;
            }
            .grid[style] > *:first-child {
              grid-column: 1 / -1 !important;
              grid-row: unset !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
