// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        brand: {
          "white": "#fefefe",
          "slate-gray": "#6e7e99",
          "outer-space": "#3E4C45",
          "charcoal": "#2E4653",
          "police-blue": "#414F6B",
        }
      }
    },
  },
  plugins: [],
}
