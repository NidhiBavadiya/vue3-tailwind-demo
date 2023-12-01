module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  mode: 'jit',
  darkMode: false,
  content: [
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'button-color': '#9173D1'
      },
      backgroundImage: {
        'pink-effect': "url('../assets/icons/pink-effect.svg')"
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
