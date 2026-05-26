"use client";

/* ── Per-skill color config (matched from card-by-card screenshots) ── */

type SkillStyle = {
  iconColor: string;
  titleColor: string;
  descColor: string;
};

const skillStyles: Record<string, SkillStyle> = {
  "Level Design": { iconColor: "#9333EA", titleColor: "#1d1d1f", descColor: "#9333EA" },
  Texturing: { iconColor: "#2563EB", titleColor: "#1d1d1f", descColor: "#2563EB" },
  "Gameplay Scripting": { iconColor: "#2563EB", titleColor: "#2563EB", descColor: "#1d1d1f" },
  Sculpting: { iconColor: "#EA7E41", titleColor: "#EA7E41", descColor: "#EA7E41" },
  Blockouts: { iconColor: "#1D8A8A", titleColor: "#1D8A8A", descColor: "#1d1d1f" },
  "Mechanic Prototyping": { iconColor: "#3F3F46", titleColor: "#1d1d1f", descColor: "#52525b" },
  "Encounter Design": { iconColor: "#D97048", titleColor: "#1d1d1f", descColor: "#D97048" },
  "Gameplay UX": { iconColor: "#1d1d1f", titleColor: "#1D7A8A", descColor: "#1D7A8A" },
  "Environment Art Basics": { iconColor: "#2D7A2D", titleColor: "#1d1d1f", descColor: "#1d1d1f" },
  "Agile Workflow": { iconColor: "#9333EA", titleColor: "#9333EA", descColor: "#1d1d1f" },
};

/* ── Custom SVG icons (viewBox 56, rendered at 44px) ──────────────── */

function LevelDesignIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <path d="M28 14L40 21V35L28 42L16 35V21L28 14Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M16 21L28 28L40 21" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M28 28V42" stroke={color} strokeWidth="2.2" />
      <path d="M28 42V52" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 35L8 40" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M40 35L48 40" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function TexturingIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <path d="M14 8H42V22C42 22 36 26 28 22C20 18 14 22 14 22V8Z" fill={color} opacity="0.85" />
      <rect x="20" y="10" width="2" height="8" rx="1" fill="white" opacity="0.6" />
      <rect x="25" y="10" width="2" height="8" rx="1" fill="white" opacity="0.6" />
      <rect x="30" y="10" width="2" height="8" rx="1" fill="white" opacity="0.6" />
      <rect x="35" y="10" width="2" height="8" rx="1" fill="white" opacity="0.6" />
      <rect x="22" y="24" width="12" height="4" rx="1" fill={color} opacity="0.6" />
      <path d="M25 28H31V44C31 46 29 48 28 48C27 48 25 46 25 44V28Z" fill={color} opacity="0.7" />
    </svg>
  );
}

function ScriptingIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <rect x="8" y="8" width="40" height="40" rx="8" stroke={color} strokeWidth="2.2" opacity="0.45" />
      <path d="M20 18C17 18 16 20 16 22V25C16 26.5 14.5 28 13 28C14.5 28 16 29.5 16 31V34C16 36 17 38 20 38" stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M36 18C39 18 40 20 40 22V25C40 26.5 41.5 28 43 28C41.5 28 40 29.5 40 31V34C40 36 39 38 36 38" stroke={color} strokeWidth="2.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function SculptingIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <path d="M24 8C18 10 12 16 14 24C16 32 22 38 30 40C38 42 44 36 44 28C44 20 38 12 32 10C28 8.5 26 7.5 24 8Z" fill={color} />
    </svg>
  );
}

function BlockoutsIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <path d="M28 4L38 10V22L28 28L18 22V10L28 4Z" stroke={color} strokeWidth="2" strokeLinejoin="round" opacity="0.5" />
      <path d="M16 22L26 28V40L16 46L6 40V28L16 22Z" stroke={color} strokeWidth="2" strokeLinejoin="round" opacity="0.7" />
      <path d="M40 22L50 28V40L40 46L30 40V28L40 22Z" stroke={color} strokeWidth="2" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}

function MechanicIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <path d="M22 6V10.5M22 33.5V38M8.5 20H13M31 20H35.5M11.3 9.3L14.5 12.5M29.5 27.5L32.7 30.7M11.3 30.7L14.5 27.5M29.5 12.5L32.7 9.3" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="22" cy="20" r="9" fill={color} />
      <circle cx="22" cy="20" r="4" fill="white" />
      <path d="M40 24V27M40 41V44M33 34H36M44 34H47M35 28L37 30M43 38L45 40M35 40L37 38M43 30L45 28" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="40" cy="34" r="6" fill={color} />
      <circle cx="40" cy="34" r="2.5" fill="white" />
    </svg>
  );
}

function EncounterIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="18" stroke={color} strokeWidth="2.5" opacity="0.5" />
      <circle cx="28" cy="28" r="10" stroke={color} strokeWidth="2.2" opacity="0.7" />
      <path d="M28 4V16M28 40V52M4 28H16M40 28H52" stroke={color} strokeWidth="2.2" strokeLinecap="round" opacity="0.6" />
      <circle cx="28" cy="28" r="2.5" fill={color} />
    </svg>
  );
}

function GameplayUXIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <path d="M12 6L16 10" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M6 16L11 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 8L12 12" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 6L18 11" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M6 20L10 19" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 16L16 44L24 36L34 50L40 46L30 32L40 30L16 16Z" fill={color} stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function EnvironmentArtIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <rect x="6" y="10" width="44" height="36" rx="2" stroke={color} strokeWidth="2.5" />
      <path d="M6 40L18 22L28 36L34 28L50 40" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="40" cy="20" r="4" stroke={color} strokeWidth="2" />
    </svg>
  );
}

function AgileIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <path d="M42 18C42 12 38 6 28 6C18 6 12 14 12 20" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M46 20L42 14L38 20" fill={color} opacity="0.9" />
      <path d="M14 38C14 44 18 50 28 50C38 50 44 42 44 36" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M10 36L14 42L18 36" fill={color} opacity="0.9" />
    </svg>
  );
}

const skillIconMap: Record<string, React.FC<{ color: string }>> = {
  "Level Design": LevelDesignIcon,
  Texturing: TexturingIcon,
  "Gameplay Scripting": ScriptingIcon,
  Sculpting: SculptingIcon,
  Blockouts: BlockoutsIcon,
  "Mechanic Prototyping": MechanicIcon,
  "Encounter Design": EncounterIcon,
  "Gameplay UX": GameplayUXIcon,
  "Environment Art Basics": EnvironmentArtIcon,
  "Agile Workflow": AgileIcon,
};

/* ── Skill card ─────────────────────────────────────────────────── */

type Props = {
  skill: string;
  subtitle: string;
};

export function SkillCard({ skill, subtitle }: Props) {
  const style = skillStyles[skill] ?? { iconColor: "#3B82F6", titleColor: "#1d1d1f", descColor: "#1d1d1f" };
  const IconComponent = skillIconMap[skill] ?? LevelDesignIcon;

  return (
    <article
      className="flex flex-col rounded-[14px] border border-black/[0.04] bg-white transition-all duration-300 ease-out hover:-translate-y-[1px]"
      style={{
        padding: "20px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05), 0 8px 28px rgba(0,0,0,0.08)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.04)"; }}
    >
      <div className="shrink-0">
        <IconComponent color={style.iconColor} />
      </div>
      <h3
        className="mt-3 font-display leading-[1.12]"
        style={{ fontSize: "16px", fontWeight: 900, color: style.titleColor, letterSpacing: "-0.01em" }}
      >
        {skill}
      </h3>
      <p
        className="mt-1.5 leading-[1.5]"
        style={{ fontSize: "12.5px", fontWeight: 400, color: style.descColor }}
      >
        {subtitle}
      </p>
    </article>
  );
}
