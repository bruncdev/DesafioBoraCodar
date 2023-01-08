/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      height: {
        '498': '31.125rem',
      },
      width: {
        '266': '16.655rem',
        '480': '30rem'
      }
    },
    colors: {
      edenColor: '#57312a',
      bgCard: '#b38253',
    },
  },
  plugins: [],
}
