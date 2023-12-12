/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: '#EDF4F6',
          200: '#DBE9EE',
          300: '#C9DEE5',
          400: '#B6D2DC',
          500: '#A4C7D4',
          600: '#92BCCB',
          700: '#80B1C3',
          800: '#6EA6BA'
        },
        contrast: {
          100: '#77939D',
          200: '#798E95',
          300: '#7B898E',
          400: '#3b444c',
          500: '#323940',
          600: '#848A8F'
        },
        darkbg: {
          100: '#b6c2cf'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

