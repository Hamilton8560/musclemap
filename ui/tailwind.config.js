/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",

  ],
  theme: {
    extend: {
      maxWidth: {
        '110': '110px',
        '120': '120px',
      },
      maxHeight: {
        '110': '110px',
        '120': '120px',
      },
      colors: {
        'custom-green': '#AFEA0D',
      }
    },
  },
  plugins: [],
}

