/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'hind': ['Hind', 'san-serif'],
        'montserrat': ['Montserrat', 'san-serif']
      }
    }
  },
  plugins: []
};