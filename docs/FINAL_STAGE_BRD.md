# Final Stage BRD — Sarthak Bankar Portfolio

**Status:** Final polish / production readiness  
**Audience:** Implementing agent + stakeholder review  
**Design authority:** `Group 8.pdf`, `Group 10.pdf` (layout ≈ Figma spec)

---

## 1. Objective

Ship a **premium, light, editorial portfolio** on GitHub Pages that matches approved PDFs, showcases **Escape Protocol** as the featured project, and uses the provided **level blockout GLB** in the home hero—without dark sci-fi UI, PS5/hardware placeholders, or performance regressions.

---

## 2. Success criteria

- [ ] Visual match to PDFs on desktop, tablet, and mobile (spacing, hierarchy, card style)
- [ ] Home hero GLB feels **integrated** (no box/frame/crop); transparent canvas
- [ ] Light mode is the **primary** approved look; dark mode remains readable
- [ ] `npm run build` passes; static export deploys to `sarthakbank.github.io`
- [ ] No dependency on `NEXT_PUBLIC_IMMERSIVE_LAB` for the public site
- [ ] No horizontal scroll, nav overflow, or duplicate footers
- [ ] Real Escape Protocol imagery can replace temp plates without structural changes

---

## 3. Page requirements

### 3.1 Home (`/`)

**Section order (mandatory):**

1. Hero  
2. Design Principles  
3. Featured Project  
4. About + Case Study cards  
5. How I Think in Space  
6. Let’s Connect / Footer  

**Hero — left**

| Element | Content |
|---------|---------|
| Name | Sarthak Bankar |
| Role | Level Designer |
| Tagline | Designing gameplay spaces that guide, challenge, and immerse players. |
| CTAs | View Featured Project → `/case-study` · About My Approach → `/about` · Contact → `/contact` |

**Hero — right**

- **Only** `sarthak-level-blockout.glb` via R3F
- Transparent background; no card/panel/vignette behind model
- Subtle studio lighting; soft motion; reduced-motion = static

**Design Principles (3 cards)**

| Card | Notes |
|------|--------|
| Player-Centric Design | Gradient top, white bottom strip, centered icon + title, plus circle |
| Readable Spaces | Same pattern |
| Iterative Craft | Same pattern |
| Layout | Equal card heights on desktop; soft shadow |

**Featured Project**

| Field | Value |
|-------|--------|
| Title | Escape Protocol |
| Subtitle | Stealth Action Level |
| Description | A tactical escape experience where clarity, tension, and player choice define every step. |
| Platform | PC (Windows) |
| Engine | Unreal Engine 5 |
| Mode | Single Player (PvE) |
| Role | Level Designer / Gameplay Designer |
| CTA | View More → case study |
| Media | Large image right; **temporary** until final in-engine shots |

**Support cards**

- **About:** I’m a Level Designer focused on creating intuitive, immersive gameplay spaces. I build levels that guide players naturally through flow, pacing, and smart encounter design.  
- **Case Study:** My research explored how AI tools impact modern game design workflows, evaluating whether they genuinely improve creativity, efficiency, and production quality.  

**How I Think in Space**

- Subtitle: Designing gameplay spaces through clarity, rhythm, and player intuition.  
- Grid (10): Level Design, Gameplay Scripting, Blockouts, Encounter Design, Environment Art Basics, Texturing, Sculpting, Mechanic Prototyping, Gameplay UX, Agile Workflow  

**Connect / Footer**

- LET’S CONNECT · Contact Me · Featured Project · GitHub  
- Footer: name, role line, Explore + Connect links, copyright  

---

### 3.2 Featured Project / Case Study (`/case-study`)

Same light editorial system as Home.

**Structure:**

1. Hero (title, genre, summary, hero image)  
2. Facts / metadata  
3. Overview / concept  
4. Design principles / pillars  
5. Visual / gameplay support media  
6. Process / design thinking  
7. Outcome / CTA  
8. Inline editorial footer  

**Navigation**

- `FloatingSectionNav` allowed if lightweight  
- Mobile: bottom jump bar must not obscure outcome CTA (padding/safe area)  
- If buggy, simplify—no heavy sticky dock  

---

### 3.3 About (`/about`)

- Match Home light surfaces and typography  
- Sections: intro, education, experience, skills, tools, process, closing CTA  
- No dark lab mesh overlays in default (non-lab) build  
- Cards aligned; mobile/tablet stable  

---

### 3.4 Contact (`/contact`)

- Match light system  
- Email, LinkedIn, GitHub channel cards  
- Featured project CTA block  
- Long emails/URLs: `break-all` / wrap  
- Global footer (layout `Footer`) visible here  

---

### 3.5 Header (global)

| Link | Route |
|------|--------|
| Home | `/` |
| About | `/about` |
| Featured Project | `/case-study` |
| Contact | `/contact` |

- Theme toggle retained  
- Mobile: drawer/menu; no crowding/overflow  

---

## 4. 3D technical requirements

| Requirement | Implementation hint |
|-------------|-------------------|
| Model path | `public/models/sarthak-level-blockout.glb` |
| URL | `/models/sarthak-level-blockout.glb` |
| Canvas | `alpha: true`, clear color alpha 0 |
| Fit | Center + auto-scale; no over-zoom/crop |
| Lighting | Ambient + hemisphere + directional; RoomEnvironment IBL |
| Performance | `dpr={[1,1.5]}`, preload, Suspense fallback |
| Motion | Slow float; soft pointer; respect `prefers-reduced-motion` |
| Editorial hero | `contactShadow={false}` (no mat/box shadow) |
| Avoid | Particles, postprocessing, scroll-driven 3D on home |

---

## 5. Theme

| Mode | Requirement |
|------|-------------|
| **Light** | Primary; PDF-aligned forced surfaces on editorial routes (`dark:` mirrors light on Home/Case Study shells) |
| **Dark** | Intentional on About/Contact tokens; 3D materials/lights boosted so blockout stays visible |

---

## 6. Non-functional requirements

- **Performance:** Smooth on Mac, iPhone, iPad; minimal Framer Motion; no heavy scroll listeners  
- **Responsive:** No horizontal scroll; CTA wrap; 3D not cropped on mobile  
- **A11y:** Reduced motion honored for 3D float/pointer  
- **Deploy:** Do not change `next.config` / workflow unless broken  
- **Assets:** Commit GLB; do not gitignore `public/models/sarthak-level-blockout.glb`  

---

## 7. Out of scope (unless user requests)

- New pages (e.g. `/projects`) not in PDF spec  
- Redesign / new visual direction  
- PS5 or hardware 3D  
- Heavy immersive lab as default  
- Figma/code-connect sync (separate initiative)  

---

## 8. Asset replacement backlog

| Asset | Current | Target |
|-------|---------|--------|
| Featured hero image | `tempImagery.featuredCaseHero` | Escape Protocol in-engine frame |
| Case study gallery | `tempImagery.*` keys | Project screenshots/video |
| Profile portrait | `public/media/profile/` | Approved headshot if different |
| 3D blockout | User GLB | Refine/export only if art direction changes |

---

## 9. Acceptance checklist (pre-merge)

1. Side-by-side PDF check: Home sections 1–6  
2. Hero 3D: no visible box; full silhouette; light + dark theme check  
3. `npm run build` green  
4. Mobile: nav drawer, skill grid, case study jump bar clearance  
5. About/Contact: footer once; no lab mesh in default build  
6. Grep: no `ps5`, `sketchfab`, `d788de`  
7. Confirm GLB tracked in git  
