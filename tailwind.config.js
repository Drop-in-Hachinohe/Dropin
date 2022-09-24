/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': {
          100: '#E9F6F6',
          200: '#D4EEED',
          300: '#BEE5E3',
          400: '#A9DDDA',
          500: '#93D4D1',
          600: '#7ECBC8',
          700: '#69C3BF',
          800: '#53BAB5',
          900: '#3EB2AC',
          DEFAULT: '#28A9A3',
        },
      }
    },
  },
  plugins: [],
}
