/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{astro,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Clinical Sovereign Palette (AI Studio / Stitch source-of-truth) ───
      colors: {
        // Core brand tokens
        'deep-void':        '#030508',
        'charcoal-surface': '#0A0E14',
        'hazard-green':     '#2E9E3C',
        'alert-orange':     '#E86650',
        'logo-blue':        '#1A5CE6',
        'muted-steel':      '#94A3B8',
        'amber-gold':       '#D4970A', // Sistemas de Gestión — ISO authority color
        'sovereign-white':  '#F8FAFC',

        // Material Design 3 surface scale (AI Studio generated)
        'surface':                    '#101418',
        'surface-dim':                '#101418',
        'surface-bright':             '#36393e',
        'surface-container-lowest':   '#0b0e13',
        'surface-container-low':      '#191c20',
        'surface-container':          '#1d2024',
        'surface-container-high':     '#272a2f',
        'surface-container-highest':  '#32353a',
        'surface-variant':            '#32353a',
        'surface-tint':               '#70de72',
        'on-surface':                 '#e0e2e8',
        'on-surface-variant':         '#becab8',
        'inverse-surface':            '#e0e2e8',
        'inverse-on-surface':         '#2d3135',

        // Primary (Hazard Green scale)
        'primary':                    '#70de72',
        'on-primary':                 '#00390b',
        'primary-container':          '#36a542',
        'on-primary-container':       '#003208',
        'inverse-primary':            '#006e1e',
        'primary-fixed':              '#8cfb8c',
        'primary-fixed-dim':          '#70de72',
        'on-primary-fixed':           '#002204',
        'on-primary-fixed-variant':   '#005314',

        // Secondary (Alert scale)
        'secondary':                  '#ffb4a6',
        'on-secondary':               '#670600',
        'secondary-container':        '#8b2213',
        'on-secondary-container':     '#ff9f8e',
        'secondary-fixed':            '#ffdad4',
        'secondary-fixed-dim':        '#ffb4a6',
        'on-secondary-fixed':         '#400200',
        'on-secondary-fixed-variant': '#872011',

        // Tertiary (Logo Blue scale)
        'tertiary':                   '#b4c5ff',
        'on-tertiary':                '#002979',
        'tertiary-container':         '#628aff',
        'on-tertiary-container':      '#00246a',
        'tertiary-fixed':             '#dbe1ff',
        'tertiary-fixed-dim':         '#b4c5ff',
        'on-tertiary-fixed':          '#00174b',
        'on-tertiary-fixed-variant':  '#003da9',

        // Error
        'error':            '#ffb4ab',
        'on-error':         '#690005',
        'error-container':  '#93000a',
        'on-error-container': '#ffdad6',

        // Background / Outline
        'background':       '#101418',
        'on-background':    '#e0e2e8',
        'outline':          '#889484',
        'outline-variant':  '#3f4a3c',
      },

      // ─── Typography ───
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },

      // ─── Spacing tokens ───
      spacing: {
        'section-gap':        '8rem',
        'container-padding':  '2rem',
        'gutter':             '1.5rem',
        'bento-gap':          '1rem',
      },
    },
  },
  plugins: [],
}
