/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '70': '.7',
      },
      colors: {
        'red':'#e50914',
        'red-h': '#c11119'
      }
    },
  },
  plugins: [],
}