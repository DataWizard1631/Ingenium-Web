/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        colBlack: '#080C18',
        colPink: '#C90F5B',
        colPurple: '#C49DD6',
        colGary: '#D9D9D9',
      },
      fontFamily: {
        primaryFont: ['primaryFont'], 
        secFont1: ['secFont1'],
        secFont2: ['secFont2'],
      },
    },
  },

  plugins: [],
}