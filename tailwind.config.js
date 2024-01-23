/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      ...colors,
      "primary": "#020122",
      "secondary": "#1411A4",
      "tertiary": "#312DF2",
      "fourth": "#7270E4"
      },
      fontFamily: { 
        Montserrat: ["Montserrat", "sans-serif"],
      },
    extend: {},
  },
  plugins: [],
}

