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
        // ===== Light UI base (Cinematic Split) =====
        "background": "#F6F8F9",
        "on-background": "#0E1217",
        "surface": "#FFFFFF",
        "surface-dim": "#ECF0F2",
        "surface-bright": "#FFFFFF",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F2F5F6",
        "surface-container": "#EDF1F3",
        "surface-container-high": "#E5EAEC",
        "surface-container-highest": "#DCE3E5",
        "surface-variant": "#E5EAEC",
        "on-surface": "#0E1217",
        "on-surface-variant": "#586169",
        "outline": "#9AA4AB",
        "outline-variant": "#DCE3E5",
        "inverse-surface": "#0C1116",
        "inverse-on-surface": "#EEF3F4",

        // ===== Primary (ink) =====
        "primary": "#0E1217",
        "on-primary": "#FFFFFF",
        "primary-container": "#ECF0F2",
        "on-primary-container": "#586169",
        "primary-fixed": "#0E1217",
        "primary-fixed-dim": "#1A242B",
        "on-primary-fixed": "#FFFFFF",
        "on-primary-fixed-variant": "#586169",
        "surface-tint": "#0D9488",
        "inverse-primary": "#5EEAD4",

        // ===== Secondary = Teal accent (color-grading) =====
        "secondary": "#0D9488",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#0D9488",
        "on-secondary-container": "#FFFFFF",
        "secondary-fixed": "#CFF6F1",
        "secondary-fixed-dim": "#5EEAD4",
        "on-secondary-fixed": "#04302C",
        "on-secondary-fixed-variant": "#0B6B62",

        // ===== Tertiary = Cyan accent =====
        "tertiary": "#0E7490",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#CFF1FA",
        "on-tertiary-container": "#0E7490",
        "tertiary-fixed": "#CFF1FA",
        "tertiary-fixed-dim": "#67D8F0",
        "on-tertiary-fixed": "#062A36",
        "on-tertiary-fixed-variant": "#0E7490",

        // ===== Error =====
        "error": "#DC2626",
        "on-error": "#FFFFFF",
        "error-container": "#FEE2E2",
        "on-error-container": "#991B1B",

        // ===== Ink (dark cinematic spotlight sections) =====
        "ink": "#0C1116",
        "ink-soft": "#131C22",
        "ink-container": "#1A242B",
        "ink-container-high": "#233038",
        "on-ink": "#EEF3F4",
        "on-ink-variant": "#93A1A8",
        "ink-outline": "#2A363D",
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
