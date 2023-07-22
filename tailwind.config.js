const plugin = require("tailwindcss/plugin");
const typography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        light:
          "0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 8px 30px 0 rgba(0, 0, 0, 0.03)",
      },
      fontFamily: {
        "dm-serif": ['"DM Serif Display"', "serif"],
        "dm-sans": ['"DM Sans"', "sans"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: "2.25rem",
            },
            p: {
              fontSize: "1.1rem",
            },
            ol: {
              fontSize: "1.1rem",
            },
            ul: {
              fontSize: "1.1rem",
            },
            li: {
              fontSize: "1.1rem",
            },
            pre: {
              marginTop: theme("spacing.3"),
              marginBottom: theme("spacing.3"),
            },
          },
        },
        xl: {
          css: {
            h1: {
              fontSize: "2.7rem",
            },
            p: {
              fontSize: "1.3rem",
            },
            ol: {
              fontSize: "1.3rem",
            },
            ul: {
              fontSize: "1.3rem",
            },
            li: {
              fontSize: "1.3rem",
            },
            pre: {
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        body: {
          "-webkit-font-smoothing": "subpixel-antialiased",
        },
      });

      /**
       * Typography (with OpenType) Utilities
       */

      const typographyUtils = {
        ".optimize-legibility": {
          "text-rendering": "optimizeLegibility",
        },
        ".ligatures": {
          "font-variant-ligatures": "common-ligatures",
          "font-feature-settings": "'liga' on, 'clig' on",
        },
        ".kerning": {
          "font-kerning": "normal",
          "font-feature-settings": "'kern' on",
        },
        ".small-caps": {
          "font-variant-caps": "small-caps",
          "font-feature-settings": "'smcp' on",
        },
        ".all-small-caps": {
          "font-variant-caps": "all-small-caps",
          "font-feature-settings": "'c2sc' on, 'smcp' on",
        },
        ".lining-nums": {
          "font-variant-numeric": "lining-nums",
          "font-feature-settings": "'lnum' on",
        },
        ".oldstyle-nums": {
          "font-variant-numeric": "oldstyle-nums",
          "font-feature-settings": "'onum' on",
        },
        ".proportional-nums": {
          "font-variant-numeric": "proportional-nums",
          "font-feature-settings": "'pnum' on",
        },
        ".tabular-nums": {
          "font-variant-numeric": "tabular-nums",
          "font-feature-settings": "'tnum' on",
        },
        ".slashed-zero": {
          "font-variant-numeric": "slashed-zero",
          "font-feature-settings": "'zero' on",
        },
        ".super": {
          "font-variant-position": "super",
          "font-feature-settings": "'sups' on",
        },
        ".sub": {
          "font-variant-position": "sub",
          "font-feature-settings": "'sub' on",
        },
        ".ordinal": {
          "font-variant-position": "ordinal",
          "font-feature-settings": "'ordn' on",
        },
        ".fractions": {
          "font-variant-numeric": "diagonal-fractions",
          "font-feature-settings": "'frac' on",
        },
        ".case-sensitive": {
          "text-transform": "uppercase",
          "font-feature-settings": "'case' on",
        },
      };

      addUtilities(typographyUtils, {
        variants: ["responsive"],
      });
    }),
  ],
};
