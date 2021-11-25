module.exports = {
  purge: [
    './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          c100: '#EBF4FF',
          c600: '#319795',
          c200: '#3182CE',
          c400: '#E6FFFA',
          c500: '#EBF4FF',
        },
        green: {
          c100: '#319795',
          c200: '#319795',
          c300: '#81E6D9',
        }
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
