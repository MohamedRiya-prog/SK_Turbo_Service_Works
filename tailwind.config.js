/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.html'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend Deca', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        mainBlue: "#051C6D",
        mainYellow: "#FBC473",
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
}

