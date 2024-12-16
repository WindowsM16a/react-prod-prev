/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFFDD0',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
      }
    },
  },
  plugins: [],
}
