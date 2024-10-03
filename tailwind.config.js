/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#f15546',
        secondary : '#1a1a1a'
      },
      fontFamily : {
        montserrat : ["Montserrat", "sans-serif"]
      },
      backgroundImage:{
        "bg-img": 'url("src/assets/pexels-khunkorn-laowisit-1359149-5233258.jpg")'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',  /* Chrome, Safari, and Opera */
          },
        },
      });
    }
  ],
}

