/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#C0772C',
      secondary: '#642C0C',
      thirdary: '#CCC4B4',
      white: '#F3F3F3',
    },
    fontFamily: {
      playfair: ['Playfair Display', 'Open Sans'],
      opsans: ['Open Sans', 'ui-sans-serif'],
    },
    extend: {},
  },
  plugins: ['tailwindcss ,autoprefixer'],
}
