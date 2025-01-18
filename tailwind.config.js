const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        colBlack: '#080C18',
        colPink: '#C90F5B',
        colPurple: '#C49DD6',
        colGray: '#D9D9D9',
      },
      fontFamily: {
        primaryFont: ['primaryFont'], 
        secFont1: ['secFont1'],
        secFont2: ['secFont2'],
      },
    },
  },

  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}