/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  mode: 'jit',
  darkMode: false,
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        'button-color': '#9173D1'
      },
      
    }
  },
  plugins: []
}
