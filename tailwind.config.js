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
      "primary": "#FE3E75",
      "secondary": "#FF6B95",
      "tertiary": "#FF99B6",
      "fourth": "#FFD1DE"
      },
      fontFamily: { 
        //Montserrat: ["Montserrat", "sans-serif"],
        playwriteGBS: ['"Playwrite GB S"', 'sans-serif'],
      },
    extend: {},
  },
  plugins: [],
}

