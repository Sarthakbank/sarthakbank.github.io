---
name: Kinetic Architecture
colors:
  surface: '#111418'
  surface-dim: '#111418'
  surface-bright: '#36393e'
  surface-container-lowest: '#0b0e12'
  surface-container-low: '#191c20'
  surface-container: '#1d2024'
  surface-container-high: '#272a2e'
  surface-container-highest: '#323539'
  on-surface: '#e1e2e8'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#e1e2e8'
  inverse-on-surface: '#2e3135'
  outline: '#859399'
  outline-variant: '#3c494e'
  surface-tint: '#4cd6ff'
  primary: '#a4e6ff'
  on-primary: '#003543'
  primary-container: '#00d1ff'
  on-primary-container: '#00566a'
  inverse-primary: '#00677f'
  secondary: '#aac7ff'
  on-secondary: '#003064'
  secondary-container: '#3e90ff'
  on-secondary-container: '#002957'
  tertiary: '#ffd5aa'
  on-tertiary: '#482900'
  tertiary-container: '#ffb051'
  on-tertiary-container: '#724400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b7eaff'
  primary-fixed-dim: '#4cd6ff'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e60'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#aac7ff'
  on-secondary-fixed: '#001b3e'
  on-secondary-fixed-variant: '#00468d'
  tertiary-fixed: '#ffddbb'
  tertiary-fixed-dim: '#ffb868'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#111418'
  on-background: '#e1e2e8'
  surface-variant: '#323539'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
  code-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 96px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is engineered for a Level Designer's portfolio, prioritizing cinematic spatial storytelling and architectural precision. The brand personality is technical yet premium, evoking the atmosphere of a high-end game engine interface or a modern architectural studio.

The visual style follows a **High-Contrast Minimalism** approach with a **Glassmorphic** twist. It utilizes a deep, monochromatic foundation to allow portfolio imagery and level snapshots to take center stage. Key characteristics include:
- **Atmospheric Depth:** Layered charcoal surfaces with subtle cyan luminescence.
- **Precision:** Mathematical spacing and razor-sharp typography.
- **Impact:** High-energy accents against a void-like background to draw the eye to critical interactive paths and status indicators.

## Colors

The palette is rooted in a "Graphite Void" philosophy. The background layers utilize varying depths of charcoal to create a sense of infinite space.

- **Foundational Neutrals:** Use `#050607` for the primary document background to ensure maximum contrast for imagery. Use `#111418` for persistent navigation elements and `#171A20` for elevated surface cards.
- **Accents:** 
    - **Electric Cyan (#00D1FF):** Primary action color and interactive glow effects.
    - **iOS Blue (#0A84FF):** Secondary links and informational states.
    - **Vibrant Orange (#FF9F0A):** Reserved exclusively for specialized technical labels, "Work in Progress" tags, or critical system alerts.
- **Text Hierarchy:** Pure White for all primary content; Muted Gray for metadata, descriptions, and captions.

## Typography

The typography system balances the expressive, high-end nature of **Hanken Grotesk** for headlines with the utilitarian clarity of **Inter** for long-form reading. **Geist** is introduced for technical labels and metadata to reinforce the level-design aesthetic.

- **Headlines:** Should be set with tight tracking (letter-spacing) to create a dense, "architectural" block of text.
- **Labels:** Always use the `label-caps` style for section headers and technical specs to provide a clear contrast to body text.
- **Body:** Maintain generous line-height to ensure readability against the dark background.

## Layout & Spacing

The layout philosophy is based on a **12-column fixed grid** for desktop and a **fluid single-column** layout for mobile. 

- **Cinematic Margins:** Use a generous `xxl` (96px) vertical rhythm between major sections to mimic the pacing of a film or game level.
- **Grid:** On desktop (1440px), center the container with 64px outer margins. Use 24px gutters to maintain a sense of air between architectural elements.
- **Reflow:** On tablet, reduce outer margins to 32px. On mobile, use 16px margins and switch to a 4-column fluid system.

## Elevation & Depth

Depth is communicated through **Tonal Layering** and **Cyan Glows** rather than traditional heavy shadows.

- **Z-0 (Void):** `#050607` — The infinite base.
- **Z-1 (Base):** `#0B0D10` — The primary page surface.
- **Z-2 (Surface):** `#171A20` — Cards and navigation bars. These should feature a 1px solid border at 10% white opacity.
- **Interactive Elevation:** When an element is hovered or active, apply a subtle `0 0 20px 0` outer glow using the Primary Cyan (`#00D1FF`) at 15% opacity. 
- **Backdrop Blur:** Use a `20px` blur on navigation bars and floating overlays to create a "glassmorphic" feel that maintains the dark aesthetic.

## Shapes

The design system utilizes a **Soft (0.25rem)** rounding strategy. This provides a professional, "industrial" feel that is more approachable than sharp corners but remains more serious than fully rounded systems.

- **Standard Elements (Buttons, Inputs):** 4px (0.25rem).
- **Cards & Hero Containers:** 8px (0.5rem).
- **Technical Tags/Chips:** 2px (0.125rem) to emphasize a "blueprint" or "HUD" look.

## Components

- **Buttons:** 
    - **Primary:** Solid Cyan (`#00D1FF`) with black text. No shadow, but a subtle glow on hover.
    - **Secondary:** Ghost style with a 1px Cyan border and white text.
- **Project Cards:** Deep charcoal background (`#171A20`) with a 1px stroke. Images should occupy the top 60% of the card with no padding (edge-to-edge).
- **Technical Chips:** Small, rectangular tags using `label-caps`. For specialized labels (e.g., "Scripting," "Geometry"), use a subtle Orange (`#FF9F0A`) background at 10% opacity with solid orange text.
- **Input Fields:** Darker than the surface (`#050607`), using a 1px gray border that transitions to Cyan on focus.
- **Lists:** Use thin 1px dividers (`#FFFFFF` at 5% opacity). Each list item should have a hover state that shifts the background slightly to a lighter charcoal.
- **Specialized UI:** Include "Coordinate Labels" (small X/Y/Z indicators) in the corners of featured project sections to lean into the Level Design theme.