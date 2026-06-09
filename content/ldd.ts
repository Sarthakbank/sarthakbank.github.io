/**
 * Level Design Document content — structured from
 * new docs/Level Design Document.pdf. Source of truth for the
 * /level-design-document HTML article; the original PDF is downloadable.
 */

export type LddBlock =
  | { type: "p"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "table"; headers: readonly string[]; rows: readonly (readonly string[])[] };

export type LddSection = { id: string; title: string; blocks: readonly LddBlock[] };

export const ldd = {
  title: "Escape Protocol",
  subtitle: "Level Design Document",
  pdf: {
    href: "/escape-protocol-level-design-document.pdf",
    downloadName: "Escape_Protocol_Level_Design_Document.pdf",
  },
  caseStudyHref: "/projects/escape-protocol",
  meta: [
    { label: "Designer", value: "Sarthak Bankar" },
    { label: "Genre", value: "Action-Adventure / Stealth" },
    { label: "Type", value: "Blockout" },
    { label: "Tools", value: "AGLS, Blueprint Visual Scripting" },
    { label: "Iterations", value: "6+" },
    { label: "Playtests", value: "12+" },
    { label: "Engine", value: "Unreal Engine 5.7" },
    { label: "Version", value: "Final" },
  ],
  sections: [
    {
      id: "level-concept",
      title: "Level Concept",
      blocks: [
        {
          type: "p",
          text: "A military officer is trapped inside a prison overtaken by a mafia gang attempting to free their boss. All exits are blocked. The only way out is the helicopter extraction point on Tower 1. The player must navigate through four towers, a hostile courtyard, and escalating enemy presence — managing limited resources and making real-time decisions under pressure.",
        },
        {
          type: "p",
          text: "The level is designed around one core promise: every major decision belongs to the player. Stealth and combat are equally valid at every encounter. Exploration is rewarded but never required. The environment guides without instructing.",
        },
      ],
    },
    {
      id: "design-pillars",
      title: "Design Pillars",
      blocks: [
        {
          type: "list",
          items: [
            "Player Agency — Every major encounter and traversal section supports both stealth and combat. The player is never forced into a single approach; both paths are challenging, both valid, both lead to the same destination.",
            "Environment as Teacher — No waypoints, no mini-maps. The environment communicates through lighting, spatial design, and prop placement. The player learns through observation and action, not instruction.",
            "Deliberate Escalation — Intensity builds across all six beats, introducing mechanics one at a time and layering complexity only after the player has demonstrated understanding.",
            "Exploration Has Value — Optional routes reward players with better weapons and tactical information. Players who push straight through still progress. Curiosity is rewarded, never required.",
            "Narrative Through Space — No cutscenes, no forced dialogue. The story is told through readable notes, proximity-triggered monologues, environmental lighting, and spatial context.",
          ],
        },
      ],
    },
    {
      id: "player-fantasy",
      title: "Player Fantasy",
      blocks: [
        {
          type: "p",
          text: "The player should feel like a tactical military officer — calm under pressure, resourceful, and always one decision ahead of the chaos around them. Not a superhero, not helpless. Someone who reads a room, makes a call, and lives with the consequences.",
        },
      ],
    },
    {
      id: "level-layout",
      title: "Level Layout",
      blocks: [
        { type: "subheading", text: "Macro structure" },
        {
          type: "p",
          text: "Escape Protocol is organised around four towers — T1, T2, T3, T4 — connected by bridges, with an open central courtyard between them. The prison sits in a remote canyon, completely isolated.",
        },
        {
          type: "table",
          headers: ["Tower", "Role", "Position"],
          rows: [
            ["Tower 1", "Extraction — Helipad", "Top Right"],
            ["Tower 2", "Start — Interior, Cell Block", "Top Left"],
            ["Tower 3", "Mid — Office Floors, Control Room", "Bottom Left"],
            ["Tower 4", "Late — Exterior Climb, Zipline", "Bottom Right"],
          ],
        },
        { type: "subheading", text: "Connections" },
        {
          type: "list",
          items: [
            "T2 → T3 via bridge (Beat 3 exit)",
            "T3 → Ground via slant drop (Beat 5)",
            "Ground → T4 via courtyard (Beat 6)",
            "T4 → T1 via dual ziplines (Beat 6 climax)",
          ],
        },
      ],
    },
    {
      id: "player-flow",
      title: "Player Flow",
      blocks: [
        {
          type: "p",
          text: "Flow runs Tower 2 → Tower 3 → ground level → Tower 4 → Tower 1, each transition tied to a beat and a traversal mechanic. The structure keeps the player oriented at the macro level — they always know they are heading toward Tower 1 — while leaving room for local uncertainty as they choose routes and approaches.",
        },
        {
          type: "p",
          text: "The player is never lost at the macro level, only uncertain at the micro level — the balance that keeps tension high without becoming frustration.",
        },
      ],
    },
    {
      id: "beat-sheet",
      title: "Beat Sheet",
      blocks: [
        {
          type: "table",
          headers: ["Beat", "Location", "Mechanics & focus", "Reward", "Intensity"],
          rows: [
            ["1", "T1 Floors", "Movement onboarding — walk, run, jump, ledge grab, torch, crouch, crawl", "Direction (silent setup)", "Low"],
            ["2", "T2 Floors + Interiors", "Stealth takedown, first combat, weapon storage", "Ammo, firearms, practice area", "Low → Medium"],
            ["3", "T2 Cell Block", "Traversal, risk-vs-reward split, ladder climbing; red light removed", "Silenced weapon (optional)", "Medium"],
            ["4", "T3 Office Floors", "Open combat, multi-path navigation, torch use; first exterior view", "AK-47, Sniper Rifle", "Medium → High"],
            ["5", "T3 Control Room + Ground", "Ledge climbing (camera + grab), control-room puzzle, vent escape; fax reveals extraction", "CCTV tactical intel", "High"],
            ["6", "Ground + T4 + T1", "Dual-path extraction, zipline, final climb", "Helipad arrival", "High"],
          ],
        },
      ],
    },
    {
      id: "encounter-design",
      title: "Encounter Design",
      blocks: [
        {
          type: "p",
          text: "Combat encounters are designed around positioning and patience, not enemy volume. Players are never outnumbered to the point of being overwhelmed, and every encounter has a stealth bypass available.",
        },
        {
          type: "p",
          text: "Enemy presence is introduced gradually. Beat 2 opens with a single stationary guard — harmless until approached — a controlled, low-stakes introduction to combat. Two armed gunmen follow, separated vertically across the upper floor. By Beat 4 the player faces multiple guards in an open arena with multiple sightlines — the same skills from Beat 2 tested at higher intensity. Beat 6 delivers the most demanding encounters, including a surprise patrol enemy and a final guard sequence balanced across both stealth and combat paths.",
        },
        {
          type: "p",
          text: "Enemy weapons are assigned to separate data slots from the player to prevent disproportionate damage output. Health and damage values were tuned through the AGLS data table after playtesting revealed default enemy settings were too punishing.",
        },
      ],
    },
    {
      id: "navigation",
      title: "Navigation & Wayfinding",
      blocks: [
        { type: "subheading", text: "Primary system — red emergency light" },
        {
          type: "p",
          text: "Red light is the level's core navigation tool — players follow it instinctively without being told to. It is present at every key decision point and transition. The rule is established explicitly in Beat 1 by a notice board: “Follow red light for emergency exit.” From that point the system operates silently.",
        },
        { type: "subheading", text: "Deliberate disruption" },
        {
          type: "p",
          text: "In Beat 3 the red light is intentionally removed. The player experiences genuine disorientation; when it reappears, the relief confirms how fully they had internalised the system.",
        },
        { type: "subheading", text: "Exterior orientation & secondary tools" },
        {
          type: "list",
          items: [
            "Large exterior tower signage, added after playtesters could not identify towers from outside — orientation problems resolved immediately.",
            "CCTV monitors in Beat 5 show escape platforms ahead, rewarding curious players with advance knowledge.",
            "Proximity monologues provide directional and narrative context at key transitions.",
            "Lighting contrast between indoor red light and outdoor daylight keeps interior/exterior orientation clear.",
          ],
        },
      ],
    },
    {
      id: "spatial-pacing",
      title: "Spatial Pacing",
      blocks: [
        {
          type: "p",
          text: "The level deliberately alternates tight and open spaces across all six beats to control tension and emotion. Tower 2 opens with narrow corridors and low ceilings, building claustrophobic pressure early. Beat 3 pushes further with a dark, disorienting cell block that removes the red light entirely.",
        },
        {
          type: "p",
          text: "Beat 4 breaks the tension — a bridge delivers the first full exterior view: open sky, canyon, and all four towers visible at once, functioning as both reward and orientation reset. The central courtyard in Beat 6 is the largest space in the level; after five beats of tight interiors, open ground feels both liberating and exposed — exactly the tension required for the final push to extraction.",
        },
      ],
    },
    {
      id: "reward-structure",
      title: "Reward Structure",
      blocks: [
        {
          type: "p",
          text: "All rewards are optional. Players who explore gain advantages — better weapons, tactical information — but players who push straight through still complete the level. Stealth players find suppressors; combat players find rifles. Every reward reinforces the playstyle the player has already chosen rather than pushing them toward a new one.",
        },
      ],
    },
    {
      id: "environmental-storytelling",
      title: "Environmental Storytelling",
      blocks: [
        {
          type: "p",
          text: "No cutscenes, no forced stops. The story is told entirely through readable notes, fax documents, proximity monologues, and the environment itself — collapsed structures, debris, and siege damage communicate the prison's state without a single line of exposition. The fax document in Beat 5 is the narrative turning point: up to that moment the player was surviving on instinct; afterward they have a clear destination and a sense of urgency.",
        },
      ],
    },
    {
      id: "lighting-design",
      title: "Lighting Design",
      blocks: [
        {
          type: "p",
          text: "Red emergency lighting serves as both atmosphere and navigation throughout interior spaces. Outdoors, natural canyon daylight creates immediate contrast — the player always knows whether they are inside or outside. Subtle red cues mark optional reward locations for attentive players without making them obvious. Beat 3 removes red light entirely, using darkness as a deliberate tension mechanic.",
        },
      ],
    },
    {
      id: "traversal-design",
      title: "Traversal Design",
      blocks: [
        {
          type: "p",
          text: "Every traversal mechanic is introduced in Beat 1 through environmental design — each required to progress, each encountered before it becomes critical later. Ledge-climbing complexity increases deliberately: Beats 1–4 use linear sequences, while Beat 5 places ledges directly opposite each other, requiring simultaneous camera movement and grab input. Players who built instinct through earlier beats navigated this naturally, without a single prompt.",
        },
      ],
    },
    {
      id: "technical-notes",
      title: "Technical Notes",
      blocks: [
        {
          type: "p",
          text: "Built in Unreal Engine 5.7 using AGLS by LongmireLocomotion for all locomotion and animation systems. All interactive logic, triggered sequences, and monologue systems were built with Blueprint Visual Scripting.",
        },
        {
          type: "p",
          text: "AGLS does not include a native health-pickup system. Rather than engineering a workaround, encounters were restructured so skilled players would rarely lose health — reducing enemy numbers, simplifying combat sequences, and shifting focus toward traversal and spatial clarity. The constraint produced a cleaner, more intentional encounter structure than the original design intended.",
        },
      ],
    },
  ] satisfies readonly LddSection[],
} as const;
