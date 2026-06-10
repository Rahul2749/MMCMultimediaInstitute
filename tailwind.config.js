/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // ===== Light UI base (Expressive Studio — warm cream) =====
        "background": "#FBF5EC",
        "on-background": "#1A1611",
        "surface": "#FFFFFF",
        "surface-dim": "#F2E9DA",
        "surface-bright": "#FFFFFF",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#FBF5EC",
        "surface-container": "#F5ECDD",
        "surface-container-high": "#EEE3D2",
        "surface-container-highest": "#E7DBC8",
        "surface-variant": "#EEE3D2",
        "on-surface": "#1A1611",
        "on-surface-variant": "#6E6357",
        "outline": "#B8AB99",
        "outline-variant": "#E2D6C3",
        "inverse-surface": "#16130F",
        "inverse-on-surface": "#F7F1E8",

        // ===== Primary (ink charcoal) =====
        "primary": "#1A1611",
        "on-primary": "#FFFFFF",
        "primary-container": "#F5ECDD",
        "on-primary-container": "#6E6357",
        "primary-fixed": "#1A1611",
        "primary-fixed-dim": "#2A241D",
        "on-primary-fixed": "#FFFFFF",
        "on-primary-fixed-variant": "#6E6357",
        "surface-tint": "#E11D74",
        "inverse-primary": "#F7A8CC",

        // ===== Secondary = Magenta / pink (primary expressive accent) =====
        "secondary": "#E11D74",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#E11D74",
        "on-secondary-container": "#FFFFFF",
        "secondary-fixed": "#FBD0E4",
        "secondary-fixed-dim": "#F7A8CC",
        "on-secondary-fixed": "#4A0625",
        "on-secondary-fixed-variant": "#B01259",

        // ===== Tertiary = Cobalt / electric blue accent =====
        "tertiary": "#2563EB",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#DBEAFE",
        "on-tertiary-container": "#1D4ED8",
        "tertiary-fixed": "#DBEAFE",
        "tertiary-fixed-dim": "#93C5FD",
        "on-tertiary-fixed": "#0A1A3F",
        "on-tertiary-fixed-variant": "#1D4ED8",

        // ===== Error =====
        "error": "#DC2626",
        "on-error": "#FFFFFF",
        "error-container": "#FEE2E2",
        "on-error-container": "#991B1B",

        // ===== Ink (dark cinematic spotlight — warm charcoal) =====
        "ink": "#16130F",
        "ink-soft": "#1E1A14",
        "ink-container": "#26211A",
        "ink-container-high": "#312A20",
        "on-ink": "#F7F1E8",
        "on-ink-variant": "#A99E8D",
        "ink-outline": "#3A3327",
      },
      "boxShadow": {
        "hard": "5px 5px 0 0 #16130F",
        "hard-sm": "3px 3px 0 0 #16130F",
        "hard-lg": "8px 8px 0 0 #16130F",
        "hard-coral": "5px 5px 0 0 #E11D74",
        "hard-amber": "5px 5px 0 0 #2563EB",
        "hard-cream": "5px 5px 0 0 #FBF5EC",
      },
      "borderRadius": {
        "DEFAULT": "0.375rem",
        "lg": "0.625rem",
        "xl": "0.875rem",
        "2xl": "1.25rem",
        "full": "9999px"
      },
      "spacing": {
        "unit": "4px",
        "margin-desktop": "80px",
        "margin-mobile": "20px",
        "gutter": "24px",
        "panel-gap": "1px"
      },
      "fontFamily": {
        "display-xl": ["Bricolage Grotesque", "sans-serif"],
        "headline-lg": ["Bricolage Grotesque", "sans-serif"],
        "headline-lg-mobile": ["Bricolage Grotesque", "sans-serif"],
        "title-md": ["Bricolage Grotesque", "sans-serif"],
        "label-technical": ["DM Sans", "sans-serif"],
        "body-lg": ["DM Sans", "sans-serif"],
        "body-md": ["DM Sans", "sans-serif"]
      },
      "fontSize": {
        "display-xl": ["76px", { "lineHeight": "1.05", "letterSpacing": "-0.03em", "fontWeight": "700" }],
        "label-technical": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.08em", "fontWeight": "500" }],
        "title-md": ["24px", { "lineHeight": "1.35", "fontWeight": "600" }],
        "headline-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-lg-mobile": ["34px", { "lineHeight": "1.15", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "1.65", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.65", "fontWeight": "400" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
