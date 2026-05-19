---
name: Obsidian Blueprint
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#859399'
  outline-variant: '#3c494e'
  surface-tint: '#4cd6ff'
  primary: '#a4e6ff'
  on-primary: '#003543'
  primary-container: '#00d1ff'
  on-primary-container: '#00566a'
  inverse-primary: '#00677f'
  secondary: '#c6c6cf'
  on-secondary: '#2f3037'
  secondary-container: '#45464e'
  on-secondary-container: '#b4b4bd'
  tertiary: '#dcdcdc'
  on-tertiary: '#2f3131'
  tertiary-container: '#bfc0c0'
  on-tertiary-container: '#4d4e4f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b7eaff'
  primary-fixed-dim: '#4cd6ff'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e60'
  secondary-fixed: '#e2e1eb'
  secondary-fixed-dim: '#c6c6cf'
  on-secondary-fixed: '#1a1b22'
  on-secondary-fixed-variant: '#45464e'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-tech:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 160px
---

## Brand & Style
The design system is engineered for a high-end Level Designer portfolio, evoking the precision of architectural blueprints mixed with the cinematic immersion of AAA gaming environments. The brand personality is authoritative, technical, and premium. It targets game directors and studio leads who value structural clarity and atmospheric storytelling.

The visual style is a fusion of **Minimalism** and **Glassmorphism**. It utilizes deep, "infinite" black voids to create depth, allowing high-fidelity project renders to take center stage. The aesthetic mimics high-end hardware interfaces—clean lines, technical precision, and a sense of "quiet power."

**Emotional Response:**
- **Prestige:** High-contrast visuals and generous whitespace suggest a luxury tier of work.
- **Precision:** Mathematical grid alignment and technical typography evoke engineering mastery.
- **Atmosphere:** Deep dark modes and glowing accents simulate a high-tech command center.

## Colors
The palette is rooted in an "Ultra-Black" philosophy to maximize the dynamic range of the display. 

- **Backgrounds:** Use `#000000` for the main canvas to achieve true-black depth on OLED screens. Use `#0A0A0A` for elevated surfaces and containers.
- **Primary Accent:** Electric Blue (`#00D1FF`) is used sparingly for interactive triggers, progress indicators, and "active" states. It should feel like a light source in a dark room.
- **Highlights:** Silver (`#A1A1AA`) is reserved for secondary metadata and technical labels, while pure white (`#FFFFFF`) is used for primary headings to ensure maximum readability.
- **Functional Gradients:** Use subtle linear gradients (e.g., `#0A0A0A` to `#161616`) for glassmorphic cards to simulate light catching on a physical edge.

## Typography
The typography system balances the editorial feel of luxury marketing with the functional aesthetic of development environments.

- **Headlines:** Use **Hanken Grotesk** for a sharp, contemporary look. Large display type should be tightly kerned for a "massive" feel, while smaller sub-headers benefit from increased letter spacing to enhance the premium, airy quality.
- **Body:** **Inter** provides maximum legibility for long-form case studies. Maintain a comfortable line height (1.6x) to ensure text-heavy sections remain approachable.
- **Technical Metadata:** **JetBrains Mono** is used for "technical readouts" like coordinates, engine stats, or level metrics, reinforcing the "Level Designer" identity.

## Layout & Spacing
The layout follows a strict **12-column fixed grid** for desktop and a **4-column fluid grid** for mobile. 

- **Rhythm:** An 8px base unit governs all padding and margins. 
- **White Space:** Use aggressive vertical spacing (`160px`+) between project sections to create a rhythmic, scroll-triggered experience. This allows the user to focus on one "scene" at a time.
- **Asymmetry:** Occasionally break the grid with large-scale imagery that bleeds off the edge of the screen, creating a sense of scale typical of open-world game design.
- **Safe Zones:** Ensure all interactive elements have at least 48px of clear space to maintain the minimalist integrity.

## Elevation & Depth
In a dark UI, depth is created through **Backdrop Blurs** and **Tonal Layering** rather than traditional drop shadows.

- **Surface Levels:** 
  - Level 0: `#000000` (Main background).
  - Level 1: `#0A0A0A` (Card containers, navigation bars).
  - Level 2: `#161616` (Hover states and active elements).
- **Glassmorphism:** Use a `20px` backdrop-blur on navigation headers and floating overlays. Apply a `1px` solid border with `0.1` opacity white to simulate the "knife-edge" of a glass pane.
- **Glow Effects:** Use "Ambient Glows"—soft, large-radius radial gradients of the Primary color (`#00D1FF`) at 5-10% opacity—placed behind key project assets to create a sense of light-bleed.

## Shapes
The shape language is sophisticated and "Hard-Surface."

- **Corner Radius:** Elements use a "Soft" (`0.25rem`) radius for small components like tags and inputs, while larger cards use `0.5rem` (`rounded-lg`). 
- **Geometric Precision:** Avoid circles or overly rounded "bubbly" shapes. Rectilinear forms with subtle rounding suggest industrial design and structural blueprints.
- **Interactive States:** Use "clipped corner" shapes or subtle 45-degree chamfers for buttons to reinforce the gaming/technical theme.

## Components
Consistent execution of these components ensures the "Apple-quality" premium feel.

- **Glassmorphic Cards:** Background: `#0A0A0A` with 60% opacity. Border: 1px linear gradient (Top-left: White 20%, Bottom-right: White 0%). 
- **Buttons:** 
  - *Primary:* Solid Black background, 1px Primary Blue border, Blue text. On hover, the background fills with Primary Blue and text turns Black.
  - *Secondary:* No border, JetBrains Mono text with a "+" icon prefix.
- **Project Grid:** Use a high-fidelity masonry or Bento-style grid. Images should have a subtle zoom-in parallax effect on hover.
- **Interactive Flip-Cards:** For "Before/After" level design shots (Whitebox vs. Final Render), use a smooth 3D flip animation with a 0.6s ease-out-expo timing.
- **Input Fields:** Bottom-border only, 1px Silver. Label shifts to a technical "readout" style above the field when active.
- **Scroll Progress:** A thin (2px) Primary Blue bar at the very top of the screen that expands as the user scrolls through a case study.
- **Micro-interactions:** Every click should feel tactile. Use subtle haptic-style animations where elements scale down slightly (0.98x) upon pressing.