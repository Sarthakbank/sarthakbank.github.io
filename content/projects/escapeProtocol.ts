/**
 * Escape Protocol — Featured Project content.
 * Source of truth: reference/Group 28_compressed.pdf (copy used verbatim).
 * PDF numbering and "INSERT GIF/PDF" markers are intentionally omitted from the site.
 */

import type { Project } from "./types";

export const escapeProtocol: Project = {
  slug: "escape-protocol",
  eyebrow: "Featured Project",
  title: "Escape Protocol",
  heroImage: "/media/escape-protocol-thumbnail.png",
  heroImageAlt: "Escape Protocol — gameplay thumbnail",
  youtubeUrl: null,
  videoComingSoonLabel: "Gameplay video coming soon",

  meta: [
    { label: "Genre", value: "Action-Adventure | Stealth", icon: "genre" },
    { label: "Type", value: "Blockout", icon: "type" },
    { label: "Engine", value: "Unreal Engine 5.7", icon: "engine" },
    { label: "Tools", value: "AGLS, Blueprint Visual Scripting", icon: "tools" },
    { label: "Iterations", value: "6+", icon: "iterations" },
    { label: "Playtests", value: "12+", icon: "playtests" },
    { label: "Role", value: "Level Designer", icon: "role" },
  ],

  nav: [
    { id: "hero", label: "Overview" },
    { id: "overview", label: "Project" },
    { id: "inspiration", label: "Inspiration" },
    { id: "goals", label: "Goals" },
    { id: "document", label: "Document" },
    { id: "techniques", label: "Techniques" },
  ],

  overview: {
    paragraphs: [
      "Escape Protocol is a single-player level built in Unreal Engine 5.7, designed around player choice, spatial exploration, and escalating tension. You play as a military officer trapped inside a prison under siege by a mafia gang attempting to free their boss. With helicopter extraction as your only way out, you must navigate through chaos — managing health, gear, and enemies while finding your path to the helipad.",
      "The level is built to support two distinct play styles. Players who prefer direct confrontation can fight through enemy encounters using the arsenal available throughout the level. Those who favour patience can slip through undetected using stealth and the environment to their advantage. Every major section offers both options — the choice always belongs to the player.",
    ],
    credit:
      "The locomotion system used in this project is AGLS by LongmireLocomotion (Jakub Woś). All level design, spatial layout, encounter design, pacing, and environmental storytelling is original work.",
  },

  inspiration: [
    {
      category: "Games",
      items: [
        {
          title: "The Last of Us Part I & II",
          body: "Shaped the core combat philosophy of Escape Protocol — stealth and aggression as equally valid approaches, with the environment providing opportunities for both. Player choice in every encounter was a direct design goal drawn from this.",
          image: "/media/projects/escape-protocol/inspiration/last-of-us.webp",
          imageAlt: "The Last of Us — stealth and combat as equally valid approaches",
        },
        {
          title: "Tomb Raider",
          body: "Influenced the exploration and traversal design. The sense of navigating a decaying, structurally compromised space — finding hidden passages, using the environment to progress — runs throughout the level, particularly in the cell block and collapsed sections.",
          image: "/media/projects/escape-protocol/inspiration/tomb-raider.webp",
          imageAlt: "Tomb Raider — exploration and traversal through compromised space",
        },
        {
          title: "A Way Out",
          body: "Provided the foundational reference for the prison setting itself — its remote location, institutional architecture, and the feeling of being trapped inside a system designed to contain you.",
          image: "/media/projects/escape-protocol/inspiration/a-way-out.webp",
          imageAlt: "A Way Out — institutional prison setting reference",
        },
        {
          title: "Until Dawn · Detroit: Become Human",
          body: "Informed how narrative is delivered without cutscenes. Readable notes, environmental monologues, and object interactions carry the story forward — the player uncovers the situation at their own pace.",
          image: "/media/projects/escape-protocol/inspiration/detroit-until-dawn.webp",
          imageAlt: "Detroit: Become Human — environmental narrative delivery",
        },
      ],
    },
    {
      category: "Film",
      items: [
        {
          title: "Escape Plan · Die Hard",
          body: "Provided atmospheric and tonal grounding — one man navigating a hostile building under siege, managing limited resources, using the environment as both cover and route.",
          image: "/media/projects/escape-protocol/inspiration/die-hard.webp",
          imageAlt: "Die Hard — one man navigating a building under siege",
        },
        {
          title: "Heat",
          body: "Influenced the tactical weight of combat encounters, where positioning and patience matter as much as firepower.",
        },
      ],
    },
  ],

  designGoalsIntro:
    "The primary goal of Escape Protocol was to design a level that felt alive with player agency — where no two play-throughs would feel identical, and where every decision made by the player carried real consequence. Five specific goals shaped every design decision:",

  designGoals: [
    {
      title: "Support Multiple Playstyles Without Forcing Either",
      body: "Every encounter and traversal space is designed to support both stealth and combat. Players are never punished for choosing one over the other — both paths are viable, challenging, and lead to the same destination.",
      image: "/media/projects/escape-protocol/goals/goal-1-playstyles.webp",
      imageAlt: "In-engine: player using cover during a combat encounter",
    },
    {
      title: "Use the Environment to Tell the Story",
      body: "Instead of cutscenes or heavy dialogue, the level delivers narrative through environmental storytelling: readable notes, proximity-based monologues, lighting cues, and spatial composition. Players uncover what happened to the prison through exploration, not exposition.",
      image: "/media/projects/escape-protocol/goals/goal-2-environment-story.webp",
      imageAlt: "In-engine: reading an environmental note in the level",
    },
    {
      title: "Reward Exploration Without Punishing Those Who Don't",
      body: "Optional routes offer meaningful rewards — a silenced weapon, a sniper rifle, or tactical intel from security monitors. Explorers gain advantages, but players who push forward still progress. Curiosity is rewarded, never required.",
      image: "/media/projects/escape-protocol/goals/goal-3-reward-exploration.webp",
      imageAlt: "In-engine: security monitor room rewarding exploration",
    },
    {
      title: "Build a Clear Escalation Curve",
      body: "The level progresses from movement and exploration in Beat 1, to early combat in Beat 2, and finally to full tactical encounters by Beat 6. Each beat introduces a new layer of complexity while reinforcing what the player has already learned.",
      image: "/media/projects/escape-protocol/goals/goal-4-escalation.webp",
      imageAlt: "In-engine: escalating combat encounter",
    },
    {
      title: "Create Genuine Tension Through Spatial Design",
      body: "Tension comes from layout, not enemy count: tight corridors, darkness, broken navigation cues, and point-of-no-return moments. Difficulty emerges from uncertainty, limited resources, and the feeling that every choice matters.",
      image: "/media/projects/escape-protocol/goals/goal-5-tension.webp",
      imageAlt: "In-engine: collapsed, rubble-strewn tension space",
    },
  ],

  ldd: {
    body: "This Level Design Document outlines the full design process behind my Prison Break level, including goals, blockouts, beats, encounters, and iteration. It highlights how I structure gameplay flow, communicate intent, and refine spaces through testing. The PDF provides maps, diagrams, and the complete breakdown of the final experience.",
    pdfUrl: null,
  },

  techniques: [
    {
      title: "Environmental Guidance Through Light",
      method:
        "I used red emergency lighting as the primary navigation system throughout the level. Rather than waypoints or minimaps, the red light acts as a silent guide — players follow it instinctively without being told to.",
      execution:
        "Red light is present at every key decision point and transition. In Beat 3 I deliberately removed the red light cue temporarily to create disorientation and tension. When it reappears, the relief the player feels reinforces how much they had come to rely on it.",
      example:
        'The notice board in Beat 1 explicitly states "Follow Red Light For Emergency Exit" — establishing the rule early so the rest of the level can use it without explanation.',
      media: "/media/projects/escape-protocol/technique-1-light-guidance.webp",
      video: "/media/projects/escape-protocol/technique-1-clip.mp4",
      videoWebm: "/media/projects/escape-protocol/technique-1-clip.webm",
      poster: "/media/projects/escape-protocol/technique-1-poster.webp",
      mediaPlaceholder: "GIF coming soon",
    },
    {
      title: "Risk vs Reward Path Design",
      method:
        "Throughout the level, optional paths offer tangible rewards — better weapons, tactical information — but require more time, risk, or skill to access.",
      execution:
        "In Beat 3, one landing path gives a silenced weapon enabling stealth but offers no progression. The other gives progression but no reward. In Beat 4, a dark room requires the player to navigate without light in exchange for a sniper rifle. In Beat 5, security monitors reward curious players with advance knowledge of escape routes.",
      example:
        "The silenced pistol vs progression split in Beat 3 is the clearest expression of this — the player chooses their playstyle through a single spatial decision.",
      media: "/media/projects/escape-protocol/technique-2-risk-reward.webp",
      video: "/media/projects/escape-protocol/technique-2-clip.mp4",
      videoWebm: "/media/projects/escape-protocol/technique-2-clip.webm",
      poster: "/media/projects/escape-protocol/technique-2-poster.webp",
      mediaPlaceholder: "GIF coming soon",
    },
    {
      title: "Escalating Combat Introduction",
      method:
        "Combat is introduced gradually across beats — never overwhelming the player before they are ready, always giving them the tools before the threat.",
      execution:
        "Beat 1 has zero combat. Beat 2 introduces a harmless enemy with a monologue prompt before the first real encounter. Weapon storage and practice dummies appear before the first gunfight. By Beat 6 the player is equipped and experienced enough for the level's most demanding encounters.",
      example:
        "The weapon storage room in Beat 2 — ammo, weapons, and practice dummies all placed before any real threat — ensures the player never feels thrown into combat unprepared.",
      media: "/media/projects/escape-protocol/technique-3-combat-intro.webp",
      video: "/media/projects/escape-protocol/technique-3-clip.mp4",
      videoWebm: "/media/projects/escape-protocol/technique-3-clip.webm",
      poster: "/media/projects/escape-protocol/technique-3-poster.webp",
      mediaPlaceholder: "GIF coming soon",
    },
    {
      title: "Environmental Storytelling Through Readable Objects",
      method:
        "Narrative is delivered entirely through the environment — notes, fax documents, monologues, and spatial context — never through cutscenes or forced exposition.",
      execution:
        "Two key notes carry the story. The first, found in Beat 2, establishes the threat: mafia gunmen sweeping the prison — stay quiet, stay alive. The second, a formal fax document found in the Beat 5 control room, reveals the extraction point for the first time — Tower 1 Helipad, last scheduled extraction, proceed without delay. Together they give the player all the narrative information they need at exactly the right moments.",
      example:
        "The fax document is the narrative turning point of the entire level. Up to that moment the player was surviving on instinct. After reading it they have a clear objective and a sense of urgency.",
      media: "/media/projects/escape-protocol/technique-4-storytelling.webp",
      video: "/media/projects/escape-protocol/technique-4-clip.mp4",
      videoWebm: "/media/projects/escape-protocol/technique-4-clip.webm",
      poster: "/media/projects/escape-protocol/technique-4-poster.webp",
      mediaPlaceholder: "GIF coming soon",
    },
    {
      title: "Dual Path Climax",
      method:
        "The final beat offers two genuinely different routes to the same extraction point — one favouring stealth, one favouring combat — both requiring skill and both delivering the same conclusion.",
      execution:
        "The stealth path uses cover objects on the bridge, requires patience and crouch movement, and rewards players who maintained a quiet approach throughout. The combat path rewards players who built their arsenal across all previous beats. Neither path is easier — they are balanced differently for different playstyles.",
      example:
        "The annotated top-down map of Beat 6 shows both routes clearly — red for stealth, orange for combat — demonstrating the dual path design was intentional and planned.",
      media: "/media/projects/escape-protocol/technique-5-dual-path.webp",
      video: "/media/projects/escape-protocol/technique-5-clip.mp4",
      videoWebm: "/media/projects/escape-protocol/technique-5-clip.webm",
      poster: "/media/projects/escape-protocol/technique-5-poster.webp",
      mediaPlaceholder: "GIF coming soon",
    },
  ],

  cta: {
    eyebrow: "Next step",
    title: "Want to talk through the level design?",
    body: "Explore more of the portfolio or reach out for level design conversations.",
  },
};
