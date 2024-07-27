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
      "primary": "#FF5988",
      "secondary": "#FF85A8",
      "tertiary": "#FFB8CC",
      "fourth": "#FFFFF"
      },
      fontFamily: { 
        //Montserrat: ["Montserrat", "sans-serif"],
        playwriteGBS: ['"Playwrite GB S"', 'sans-serif'],
      },
    extend: {},
  },
  plugins: [],
}

