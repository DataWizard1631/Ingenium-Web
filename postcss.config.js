export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },content: ['./src/**/*.{html,js}'], // Adjust paths to your project files
  theme: {
    extend: {
      colors: {
        colBlack: '#080C18',
        colPink: '#C90F5B',
        colPurple: '#C49DD6',
        colGray: '#D9D9D9',
      },
    },
  },
}
