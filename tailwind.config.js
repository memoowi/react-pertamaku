/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins' : ['Poppins', 'sans-serif'],
      'teko' : ['Teko', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

