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
      "primary": "#FA1E8A",
      "secondary": "#D10067",
      "tertiary": "#F760AA",
      "fourth": "#F9BEDB"
      },
      fontFamily: { 
        //Montserrat: ["Montserrat", "sans-serif"],
        playwriteGBS: ['"Playwrite GB S"', 'sans-serif'],
      },
    extend: {},
  },
  plugins: [],
}

