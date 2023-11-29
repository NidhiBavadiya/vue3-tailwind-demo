module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  mode: 'jit',
  darkMode: false,
  content: [ "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundColor: {
        'button-color': '#9173D1'
      },
      backgroundImage: {
        'pink-effect': "url('../assets/icons/pink-effect.svg')",
       
       }
      
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
