module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        teal: {
          700: '#0F766E',
          800: '#115E59',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}