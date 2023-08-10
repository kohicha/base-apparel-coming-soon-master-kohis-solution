/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      JosefinSans: 'JosefinSans'
    },
    extend: {
      colors:{
       DesaturatedRed: 'hsl(0, 36%, 70%)',
       SoftRed: 'hsl(0, 93%, 68%)',
       DarkGrayishRed: 'hsl(0, 6%, 24%)'
      }

    },
  },
  plugins: [],
}

