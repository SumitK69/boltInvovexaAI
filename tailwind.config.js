/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#4D8DFF',
          500: '#3377FF',
          600: '#0062FF',  // Primary blue
          700: '#0045B5',
          800: '#003A99',
          900: '#002E80',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px 0 rgba(0, 98, 255, 0.1)',
      },
    },
  },
  plugins: [],
};