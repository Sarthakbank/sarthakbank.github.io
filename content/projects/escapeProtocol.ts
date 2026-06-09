/**
 * Escape Protocol — Featured Project content.
 * Source of truth: reference/Group 28_compressed.pdf (copy used verbatim).
 * PDF numbering and "INSERT GIF/PDF" markers are intentionally omitted from the site.
 */

import type { Project } from "./types";

/** Gallery (in-engine greybox captures) base path. */
const G = "/media/projects/escape-protocol/gallery";

export const escapeProtocol: Project = {
  slug: "escape-protocol",
  eyebrow: "Featured Project",
  title: "Escape Protocol",
  heroImage: "/media/projects/escape-protocol/hero-trailer.webp",
  heroImageAlt: "Escape Protocol — the officer in the besieged four-tower facility",
  youtubeUrl: null,
  trailerYouTubeId: "Mqm-6DOhrQM",
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
    { id: "walkthrough", label: "Walkthrough" },
    { id: "process", label: "Process" },
    { id: "gameplay", label: "Gameplay" },
    { id: "challenges", label: "Challenges" },
    { id: "reflection", label: "Reflection" },
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
          image: "/media/projects/escape-protocol/inspiration/heat.webp",
          imageAlt: "Heat — tactical weight and patience in combat encounters",
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
    body: "This Level Design Document outlines the full design process behind Escape Protocol, including goals, blockouts, beats, encounters, and iteration. It highlights how I structure gameplay flow, communicate intent, and refine spaces through testing. Read the structured version online, or download the full PDF with maps and diagrams.",
    pdfUrl: "/escape-protocol-level-design-document.pdf",
    documentUrl: "/level-design-document",
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

  walkthrough: {
    intro:
      "Escape Protocol is built across six escalating beats — from quiet orientation to a dual-path climax. The pacing graph maps the intensity curve, the top-down map shows the routes, and each beat below flips to its gameplay clip.",
    pacing: {
      image: "/media/projects/escape-protocol/walkthrough/pacing-graph.webp",
      imageAlt:
        "Escape Protocol pacing graph — intensity rising across Beats 1–6 to the climax",
      caption:
        "Every beat was designed with a deliberate intensity curve — starting slow to onboard the player, then escalating toward extraction.",
    },
    levelMap: {
      image: "/media/projects/escape-protocol/walkthrough/level-map.webp",
      imageAlt:
        "Top-down level map — dual stealth and combat routes through the prison courtyard",
      caption:
        "Two ground-level routes through the courtyard in Beat 6 — stealth and combat — converge on the same extraction.",
      legend: [
        { label: "Stealth route", color: "#ff3b30" },
        { label: "Combat route", color: "#34c759" },
      ],
    },
    beats: [
      {
        title: "Beat 1 — Orientation",
        summary: "Tower 2 Interior · No Combat · Low Intensity",
        body: "The level opens in flickering red emergency light. The player is given the first instruction of the entire level — follow the red light for the emergency exit. From this point forward the red light becomes the player's silent guide through the prison.",
        youtubeId: "EOQm8XCy0LY",
      },
      {
        title: "Beat 2 — First Contact",
        summary: "Tower 2 Upper Floors · Stealth + Combat Introduction · Low → Medium",
        body: "The player opens a door into a storage area and picks up a weapon — the first narrative beat, and the first time they are told to stay quiet. Exiting storage they meet a harmless first enemy, then a cache of ammo, firearms, and practice dummies. Two path options appear before the first real fight — armed enemies guarding the upper floor. After clearing them, a blocked route forces a way upward through ledge climbing, and the beat ends.",
        youtubeId: "dm6qDA5rYKE",
      },
      {
        title: "Beat 3 — Into the Dark",
        summary: "Cell Block · Exploration + Risk / Reward · Medium",
        body: "Two landing choices greet the player — one rewards a silenced weapon, the other gives progression only; the player must explore to learn what each offers. Ladder climbing is introduced, then the red light disappears and the player feels lost. New pathways through the cell block eventually reveal red-light traces again. The beat ends with the player back on track — but having experienced real disorientation for the first time.",
        youtubeId: "2YpZIRlXeVM",
      },
      {
        title: "Beat 4 — The World Opens",
        summary: "Tower 3 Office Floors · Escalating Combat + Discovery · Medium → High",
        body: "A risky slide down a slanted platform opens Beat 4 with immediate momentum, and the full scale of the environment is revealed and labelled. Paths split — a continuation route from Beat 3, one reward-only path with an AK-47, and a dark room that demands navigation without light and rewards a sniper rifle. High tension followed by high reward — the beat ends with the player well-armed and moving.",
        youtubeId: "gia6K16zXik",
      },
      {
        title: "Beat 5 — Point of No Return",
        summary: "Descent to Ground Level · Narrative Turn · High",
        body: "Red light returns, restoring the player's confidence. A large slant drops them to ground level — the first time they have been on the street. Security monitors show escape platforms ahead, a visual reward for curious players. A fax document reveals the extraction point for the first time: Tower 1 Helipad, last scheduled extraction, proceed without delay. An interactable object reveals a vent escape route.",
        youtubeId: "eiXL4G3tg1g",
      },
      {
        title: "Beat 6 — Extraction",
        summary: "Ground Level · Tower 4 · Tower 1 · Final Combat + Dual Path · Climax",
        body: "A patrolling armed enemy greets the player at the exit — the most dangerous surprise encounter of the level. Two routes to extraction exist: the stealth path moves quietly from Tower 4 toward Tower 1, while the combat path clears ground level aggressively and climbs the opposite bridge. Both converge at the Tower 4 exterior climbing trail to the rooftop, where Tower 1 comes into view. A final climb delivers the player to the helipad. Extraction complete.",
        youtubeId: "bYWvDzrU2oo",
      },
    ],
  },

  process: {
    intro:
      "Escape Protocol was developed across 6+ iterations, each driven by playtesting feedback and personal observation. The process followed a consistent loop — build, test, identify problems, solve, repeat.",
    beats: [
      {
        title: "Beat 1 — Movement Onboarding",
        summary: "Teaching movement without UI — turning a failure point into the tutorial.",
        media: {
          kind: "image",
          src: `${G}/shot-08.webp`,
          alt: "Greybox traversal space with a slope and emergency light",
          ratio: "16/9",
        },
        iterations: [
          {
            problem:
              "Early playtests showed players frequently falling into gaps after standard walk-jumps.",
            iteration:
              "I redesigned the platform to teach movement progressively — introducing a short jump before a long jump, adding a runway for momentum, and placing an on-screen prompt before the larger gap.",
            solution:
              "Players still fell into the pit. Rather than removing the challenge I turned it into a teaching moment — adding ledge-grab surfaces inside the pit so players discovered the mechanic naturally.",
            outcome: "From that point forward no further ledge indicators were needed.",
          },
        ],
      },
      {
        title: "Beat 2 — Narrative Timing + Enemy Layout",
        summary: "Sequencing story and combat so players understand before they're tested.",
        media: {
          kind: "image",
          src: `${G}/shot-04.webp`,
          alt: "Greybox encounter space with a figure and cover objects",
          ratio: "16/9",
        },
        iterations: [
          {
            problem:
              "The narrative letter originally appeared after the first enemy encounter, disrupting the story flow.",
            solution:
              "After testing I moved it before the encounter so players understood the situation before facing danger.",
          },
          {
            problem: "The first enemy was originally patrolling, but the space was too tight for new players.",
            solution:
              "I replaced him with a stationary guard and used narrative text to introduce stealth takedowns.",
          },
          {
            problem: "Two patrolling gunmen on the same floor overwhelmed players.",
            solution:
              "I introduced vertical separation, placing them on an upper floor with an ammunition room below.",
          },
          {
            problem:
              "A rifle pickup made the encounter too easy, and the hidden silenced pistol was being missed due to ledge placement.",
            solution:
              "I removed the rifle, limiting the player to a pistol, and redesigned the area to force exploration so players discovered the silenced pistol naturally.",
          },
        ],
      },
      {
        title: "Beat 3 — Rifle Placement + Visual Cues",
        summary: "Placing the rifle for narrative logic, then making it discoverable.",
        media: {
          kind: "image",
          src: `${G}/shot-05.webp`,
          alt: "Dark room with a single lit object and an exit",
          ratio: "16/9",
        },
        iterations: [
          {
            problem: "The rifle was originally placed immediately after Beat 2, breaking narrative urgency.",
            iteration:
              "I moved it later — after all traversal in Tower 2 was complete — and hid it in a chest near the bridge to Tower 3.",
            solution:
              "Playtesters missed it due to darkness, so I added a red-light cue to draw attention while still rewarding exploration.",
            outcome:
              "This strengthened narrative logic — the player receives a long-range weapon right before entering open ground, where it becomes essential.",
          },
          {
            problem:
              "One tester could not find the silenced pistol because there was no ledge guiding them to that floor — the reward was being completely missed.",
            solution: "I added the ledge and redesigned the approach.",
            outcome: "The item became discoverable without being handed to the player.",
          },
        ],
      },
      {
        title: "Beat 4 — Arena Reveal + Sequence Control",
        summary: "Stopping the skip and previewing the arena before the fight.",
        media: {
          kind: "image",
          src: `${G}/shot-03.webp`,
          alt: "Multi-level greybox interior arena",
          ratio: "16/9",
        },
        iterations: [
          {
            problem:
              "Players discovered they could jump directly from the broken bridge into the final combat arena, skipping an entire beat and entering unprepared.",
            solution:
              "I added blocking volumes to prevent this, and to preserve the intended preview moment I added a triggered sequence showing the arena layout, enemy positions and scale before the player entered.",
          },
          {
            problem: "The sniper rifle on this floor was initially too hidden.",
            solution:
              "I added a subtle red-light cue — consistent with the lighting language established in Beat 1 — encouraging players to use their torch to find it.",
          },
        ],
      },
      {
        title: "Beat 5 — Control Room + Traversal",
        summary: "Breaking repetition and clarifying direction in the control room.",
        media: {
          kind: "image",
          src: `${G}/shot-06.webp`,
          alt: "Control room with monitors and orange lighting",
          ratio: "16/9",
        },
        iterations: [
          {
            problem: "The ledge-climbing section was too similar to Beat 2 and felt repetitive.",
            solution:
              "I added a central column blocking the vent from view, forcing players to explore the control room before finding the route.",
          },
          {
            problem: "Players were confused about where to go after entering the arena.",
            solution: "I added CCTV monitors showing clear pathways ahead.",
          },
          {
            problem: "The narrative letter format was repeated from Beat 2.",
            solution:
              "I replaced it with a fax document — a different format, with stronger urgency and a clearer objective.",
          },
          {
            problem: "Players attempted to backtrack through the vent, causing fall damage.",
            solution:
              "I added a monologue preventing backtracking and reduced the vent size to make it one-directional.",
          },
        ],
      },
      {
        title: "Final Beat — Enemy Tuning + Spatial Clarity",
        summary: "Tuning enemies to be fair and labelling towers for orientation.",
        media: {
          kind: "image",
          src: `${G}/shot-01.webp`,
          alt: "Exterior courtyard with labelled towers",
          ratio: "16/9",
        },
        iterations: [
          {
            problem:
              "Enemies were too difficult — players retried multiple times due to excessive damage and health. They were using the same weapon stats as the player, making them disproportionately powerful.",
            solution:
              "I reassigned their weapons to separate data slots and used the AGLS data table to reduce enemy damage and adjust health values.",
            outcome: "The final encounter became fair, challenging and satisfying.",
          },
          {
            problem:
              "Players outside could not identify which tower had the helipad — the fax stated Tower 1, but all towers looked identical from ground level.",
            solution:
              "I added large exterior tower labels — Tower 1 through Tower 4 — visible from ground level and across the open yard.",
            outcome: "Immediately players oriented themselves correctly and the final push felt purposeful.",
          },
        ],
      },
    ],
  },

  fullGameplay: {
    eyebrow: "Full playthrough",
    title: "Full Gameplay Walkthrough",
    description:
      "Watch the complete Escape Protocol experience from start to finish, including traversal, combat encounters, environmental storytelling, and the final extraction sequence.",
    youtubeId: "L7Uo6yBY-b0",
    poster: "/media/projects/escape-protocol/full-gameplay-poster.webp",
  },

  technicalChallenges: {
    intro: "Two significant technical problems were encountered during development.",
    challenges: [
      {
        title: "Lighting across indoor and outdoor spaces",
        body: "Balancing the atmospheric red emergency lighting indoors against the natural daylight of the exterior environment required continuous iteration to maintain visual consistency and player readability across both contexts.",
      },
      {
        title: "Working with AGLS",
        body: "AGLS — the Advanced Game Locomotion System — had limited documentation and was complex; key features required significant time to understand and implement correctly. One major gap was the absence of a health-pickup system, which the system architecture made prohibitively time-consuming to add.",
      },
    ],
    resolution:
      "Rather than spending development time solving a complex technical problem, I made a design decision: I restructured the level progression so that even a player with low combat skill would rarely lose health. Enemy encounters were reduced in number, combat sequences were simplified, and the focus was placed firmly on level design, traversal, and pacing. This constraint ultimately strengthened the design — forcing clarity and intention in every encounter rather than relying on combat volume.",
  },

  reflection: {
    reflection: [
      "Across playtesting, the level kept proving itself in small moments. In Beat 1, players found the hidden passage on their own — the closed stairs and the flashlight nearby were enough to guide them without a single prompt.",
      "After Beat 1, players naturally looked for an alternative route when the bridge was blocked, exactly as the design intended. By Beat 5, most testers climbed through the ledge sequence without hesitation — a sequence I had deliberately made more complex than anything before it, requiring camera movement and grabbing simultaneously. They figured it out because the earlier beats had already built that instinct in them.",
      "That progression — players carrying skills forward without realising it — was the clearest sign the level was working as a whole.",
    ],
    differently: [
      "Given more time, the first priority would be a proper health and inventory system. The absence of health pickups in AGLS forced a design workaround — structuring encounters so players rarely died rather than giving them tools to survive a harder fight. A full system would have opened the door to more competitive survival scenarios and richer resource management.",
      "More time would also mean larger spaces. With that constraint removed, exploration sections could expand significantly — giving the narrative more room and rewarding thorough players with richer environmental storytelling.",
    ],
    closingQuote:
      "Escape Protocol is the foundation of something bigger. The core systems work — the next step is building on this prototype with the production features it needs to become a complete experience.",
  },

  cta: {
    eyebrow: "Next step",
    title: "Want to talk through the level design?",
    body: "Explore more of the portfolio or reach out for level design conversations.",
  },
};
