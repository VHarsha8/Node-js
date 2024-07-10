// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit', // Just-in-Time mode for faster development
  purge: [
    './public/**/*.html',
    './views/**/*.ejs',
    // Add any other paths to your templates here
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
        'archivo-black': ['"Archivo Black"', ...defaultTheme.fontFamily.sans],
        'exo-2': ['"Exo 2"', ...defaultTheme.fontFamily.sans],
        'montserrat-alternates': ['"Montserrat Alternates"', ...defaultTheme.fontFamily.sans],
        'montserrat': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        'orbitron': ['"Orbitron"', ...defaultTheme.fontFamily.sans],
        'oswald': ['"Oswald"', ...defaultTheme.fontFamily.sans],
        'poppins': ['"Poppins"', ...defaultTheme.fontFamily.sans],
        'raleway': ['"Raleway"', ...defaultTheme.fontFamily.sans],
        'roboto-condensed': ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
        'russo-one': ['"Russo One"', ...defaultTheme.fontFamily.sans],
        'sora': ['"Sora"', ...defaultTheme.fontFamily.sans],
        'titillium-web': ['"Titillium Web"', ...defaultTheme.fontFamily.sans],
        'ubuntu-condensed': ['"Ubuntu Condensed"', ...defaultTheme.fontFamily.sans],
        'playfair': ['Playfair Display', 'serif'],
        'cedarville-cursive': ['Cedarville Cursive', 'cursive'],
      },
      colors: {
        'cadmium-yellow': '#FDDA0D',
        'Icterine-yellow': '#FCF55F',
        'lightyellow':'#F9E076',
        'rose': '#F33A6A',
      },
    },
  },
  variants: {
    extend: {
      translate: ['hover'], // Enable hover variants for translate utilities
    },
  },
  plugins: [
  ],
};
