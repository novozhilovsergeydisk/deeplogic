/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#1A1A1A',
        accent: {
          blue: '#00F3FF',
          violet: '#6C5CE7',
        },
      },
    },
  },
  plugins: [],
};