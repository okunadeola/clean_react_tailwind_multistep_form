
const defaultTheme = require('tailwindcss/defaultTheme')



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'step-bg-image': "url('./src/assets/images/bg-sidebar-desktop.svg')",

      'step-image-sm': "url('./src/assets/images/bg-sidebar-mobile.svg')",
    },


    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"]
    },

    screens: {
      'xlg': '800px',
      'xs': '350px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        "color-primary-marine-blue": "hsl(213, 96%, 18%)",
        "color-primary-purple-blue": "hsl(243, 100%, 62%)",
        "color-primary-pastel-blue": "hsl(228, 100%, 84%)",
        "color-primary-light-blue": "hsl(206, 94%, 87%)",
        "color-berry-red": "hsl(354, 84%, 57%)",
        "color-cool-gray": "hsl(231, 11%, 63%)",
        "color-light-gray": "hsl(229, 24%, 87%)",
        "color-Magnolia": "hsl(217, 100%, 97%)",
        "color-Alabaster": "hsl(231, 100%, 99%)",
        "color-whiten": "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}

