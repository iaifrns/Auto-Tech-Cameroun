/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#12397b',
        secondary : '#2fbfc5'
      }
    },
  },
  plugins: [],
}

