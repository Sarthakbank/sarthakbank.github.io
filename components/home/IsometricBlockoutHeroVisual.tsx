/**
 * Handcrafted static “miniature blockout” for the home hero (right column).
 * Pure CSS — approximates a light isometric gameplay-space maquette from the approved PDFs.
 * Replace with a proper render or SVG trace from Group PDFs when available.
 */
export function IsometricBlockoutHeroVisual() {
  return (
    <div
      aria-hidden
      className="relative mx-auto flex min-h-[min(320px,52vw)] w-full max-w-[540px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-black/[0.07] bg-gradient-to-b from-[#fefefe] via-[#f4f4f6] to-[#e8eaee] shadow-[0_28px_72px_-36px_rgba(0,0,0,0.12)]"
    >
      <p className="sr-only">
        Decorative isometric level-blockout miniature composed of white and light-grey volumes
      </p>
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,transparent_0%,rgba(255,255,255,0.5)_55%,rgba(0,0,0,0.04)_100%)]" />

      <div
        className="relative h-[280px] w-[min(100%,340px)] sm:h-[320px] sm:w-[380px]"
        style={{ perspective: "820px" }}
      >
        <div
          className="absolute left-1/2 top-[46%] w-[220px] -translate-x-1/2 -translate-y-1/2 sm:w-[260px]"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(56deg) rotateZ(-44deg)",
          }}
        >
          {/* Ground plate */}
          <div
            className="absolute left-1/2 top-0 h-[100px] w-[200px] -translate-x-1/2 rounded-lg border border-neutral-300/80 bg-gradient-to-br from-white to-neutral-100 shadow-[0_8px_0_rgba(0,0,0,0.06),0_18px_40px_rgba(0,0,0,0.08)]"
            style={{ transform: "translateZ(0px)" }}
          />
          {/* Low platform / “courtyard” */}
          <div
            className="absolute left-[24px] top-[28px] h-[36px] w-[92px] rounded-md border border-neutral-200/90 bg-white shadow-md"
            style={{ transform: "translateZ(14px)" }}
          />
          {/* Tall read block */}
          <div
            className="absolute left-[118px] top-[8px] h-[72px] w-[44px] rounded-md border border-neutral-200/90 bg-white shadow-lg"
            style={{ transform: "translateZ(36px)" }}
          />
          {/* Connector / corridor */}
          <div
            className="absolute left-[72px] top-[48px] h-[22px] w-[64px] rounded-sm border border-neutral-200/80 bg-neutral-50 shadow"
            style={{ transform: "translateZ(20px)" }}
          />
          {/* Second mass */}
          <div
            className="absolute left-[8px] top-[52px] h-[48px] w-[56px] rounded-md border border-neutral-200/90 bg-white shadow-md"
            style={{ transform: "translateZ(26px)" }}
          />
          {/* Accent slab — teal hint (approved accent) */}
          <div
            className="absolute left-[132px] top-[62px] h-[10px] w-[48px] rounded-full bg-[#5ac8c8]/35 shadow-sm ring-1 ring-[#5ac8c8]/25"
            style={{ transform: "translateZ(38px)" }}
          />
          {/* Orange waypoint ring */}
          <div
            className="absolute left-[48px] top-[18px] h-[14px] w-[14px] rounded-full border-2 border-[#ff9500]/70 bg-white/90 shadow-sm"
            style={{ transform: "translateZ(42px)" }}
          />
          {/* Blue path stripe */}
          <div
            className="absolute left-[40px] top-[78px] h-[6px] w-[100px] rounded-full bg-[#0071e3]/20"
            style={{ transform: "translateZ(18px) rotateZ(8deg)" }}
          />
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-[#86868b]">
        Handcrafted blockout miniature · replace with PDF-matched asset
      </p>
    </div>
  );
}
