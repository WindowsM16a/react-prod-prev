/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F1EBE4',
        'dark-greenish': '#4E7F69',
        'darker-greenish': '#395c4d',
        'dark-grey-bluee': 'hsl(228, 12%, 48%)',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
      }
    },
  },
  plugins: [],
}
