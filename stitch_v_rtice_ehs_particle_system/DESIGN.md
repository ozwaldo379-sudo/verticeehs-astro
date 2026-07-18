---
name: Clinical Sovereign
colors:
  surface: '#101418'
  surface-dim: '#101418'
  surface-bright: '#36393e'
  surface-container-lowest: '#0b0e13'
  surface-container-low: '#191c20'
  surface-container: '#1d2024'
  surface-container-high: '#272a2f'
  surface-container-highest: '#32353a'
  on-surface: '#e0e2e8'
  on-surface-variant: '#becab8'
  inverse-surface: '#e0e2e8'
  inverse-on-surface: '#2d3135'
  outline: '#889484'
  outline-variant: '#3f4a3c'
  surface-tint: '#70de72'
  primary: '#70de72'
  on-primary: '#00390b'
  primary-container: '#36a542'
  on-primary-container: '#003208'
  inverse-primary: '#006e1e'
  secondary: '#ffb4a6'
  on-secondary: '#670600'
  secondary-container: '#8b2213'
  on-secondary-container: '#ff9f8e'
  tertiary: '#b4c5ff'
  on-tertiary: '#002979'
  tertiary-container: '#628aff'
  on-tertiary-container: '#00246a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#8cfb8c'
  primary-fixed-dim: '#70de72'
  on-primary-fixed: '#002204'
  on-primary-fixed-variant: '#005314'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a6'
  on-secondary-fixed: '#400200'
  on-secondary-fixed-variant: '#872011'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003da9'
  background: '#101418'
  on-background: '#e0e2e8'
  surface-variant: '#32353a'
  deep-void: '#030508'
  charcoal-surface: '#0A0E14'
  hazard-green: '#2E9E3C'
  alert-orange: '#E86650'
  logo-blue: '#1A5CE6'
  muted-steel: '#94A3B8'
  sovereign-white: '#F8FAFC'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: 8rem
  container-padding: 2rem
  gutter: 1.5rem
  bento-gap: 1rem
---

## Brand & Style

The visual identity of the design system is defined as **"Clinical Editorial."** It merges the cold precision of a high-end laboratory with the sophisticated density of a professional forensic report. The brand evokes a sense of **sovereign authority, surgical precision, and controlled urgency**, specifically tailored for EHS (Environment, Health, and Safety) professionals who demand reliability in high-stakes environments.

The aesthetic follows a **Dark / Immersive / Technical** style. It is characterized by:
- **No-Line Rule:** Depth and hierarchy are achieved through tonal layering and negative space rather than explicit 1px borders.
- **Bento-Box Layouts:** Asymmetrical grids that organize dense technical information into digestible, high-contrast modules.
- **Physicality:** Use of motion to imply weight and direction, with staggered entrance animations that guide the user's eye through the "Manifiesto" narrative.
- **Ambient Depth:** A global particle system provides a subtle sense of digital atmosphere without distracting from the technical data.

## Colors

The palette is anchored by **Deep Void Base**, a near-absolute black that provides infinite depth. **Hazard Green** serves as the primary action color, signaling safety, compliance, and progress. **Alert Orange** is reserved strictly for high-impact risks and direct warnings.

### Functional Roles
- **Primary (Hazard Green):** Positive actions, progress bars, and security indicators.
- **Secondary (Alert Orange):** Critical status, urgent warnings, and impact borders.
- **Tertiary (Logo Blue):** Used exclusively within the global gradient and particle systems to add technical depth.
- **Surface (Charcoal):** Used for containers to create a "layered" effect against the void background.
- **Typography:** Sovereign White for high-contrast headings; Muted Steel for descriptive body text.

### Gradient Title System
A specific global gradient animation is used for strategic emphasis. It transitions through `Hazard Green → Logo Blue → Sovereign White`. This should be applied only to specific keywords or short phrases within sections to maintain its editorial impact.

## Typography

This design system utilizes a dual-sans-serif pairing to balance editorial authority with technical legibility.

- **Headings (Manrope):** Set with tight letter-spacing (-0.02em) and heavy weights (Bold/ExtraBold). This creates a "compressed" editorial look that feels authoritative and urgent.
- **Body (Inter):** Optimized for technical documentation and legal requirements (NOMs). A generous line-height (1.6) ensures long-form text remains readable against the dark background.
- **Hierarchy:** Use larger headline sizes sparingly for "Manifiesto" statements. Technical data should utilize `body-md` for maximum information density.

## Layout & Spacing

The layout philosophy is **Breathable Density**. While individual components (Bento boxes) may be information-dense, the sections themselves are separated by massive vertical margins (`8rem`) to allow the user to focus on one "declaration" at a time.

### Grid Model
- **Bento Grid:** The primary organization for catalogs and complex data. It uses asymmetrical spans to create visual interest while maintaining a strict underlying alignment.
- **Fluidity:** Layouts should expand to the edges of the safe area but maintain large internal padding within cards to preserve the "clinical" feel.
- **Mobile Reflow:** On mobile, Bento cells stack vertically. Section margins should scale down to `4rem` to maintain momentum.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Glassmorphism**, adhering to the "No-Line Rule."

1.  **Base Layer:** Deep Void (`#030508`).
2.  **Surface Layer:** Charcoal Surface (`#0A0E14`). Used for cards and containers.
3.  **The ADN Glass Effect:** High-end containers utilize a 20px backdrop blur with 75% opacity. This creates a "frosted" technical look where the background particles remain faintly visible.
4.  **Shadows:** Shadows are not used for borders, but for "Safety Glows." Primary buttons emit a Hazard Green glow, and elevated cards use a soft, wide-dispersion black shadow (`0 4px 30px`) to simulate floating above the void.

## Shapes

The shape language combines technical precision with organic softness to make the interface feel modern and "human-centric" despite its dark theme.

- **Cards/Containers:** Use `rounded-2xl` (1rem) for a generous, sophisticated curve.
- **Buttons:** Use `rounded-full` (Pill-shaped) to represent "Safety Capsules" or tactile controls.
- **Interactive States:** Upon hover, containers should transition physically (Y-axis translation) rather than just changing color.

## Components

### Buttons
- **Primary:** Pill-shaped, Hazard Green background. They must feature a subtle inner safety glow (Shadow) of the same color.
- **Secondary/Risk:** Outlined or solid Alert Orange, used only for critical interactions.

### ADN Glass Cards
The signature component. These must have a `20px` backdrop blur and no solid borders. On hover, the card should lift `-4px` on the Y-axis.

### Particle System (Global)
A background layer of circular particles (0.8px to 2.2px) in Green, Blue, and White. They must move at ultra-low speeds (±0.18px/frame) with a "breathing" alpha pulse. All UI content must be placed on a higher z-index (`z-index: 1+`) to ensure legibility over the canvas.

### Animated Borders (The Spell)
For direct alerts or key featured items, use a conical gradient border that rotates slowly. This is the only exception to the "No-Line Rule" and should be used sparingly for maximum impact.

### Bento Modules
Use varying aspect ratios for modules within a grid to display technical specs, NOM certifications, and visual catalog items in a single cohesive view.