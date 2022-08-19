const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        transparent: 'transparent',
        current: 'currentColor',
        primary : "#5A33E4",
        purple : "#554B86",
        gray : '#CAC6E7'
      }
    },
  },
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],
};
