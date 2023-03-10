/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'realway': ['Raleway'],
        'quesha': ['quesha']
      },
      colors: {
        'primary': '#1E1E1E',
        'secondary': '#A35715'
      }
    },
  },
  plugins: [require("daisyui")],
}
