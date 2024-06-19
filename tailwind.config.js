/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        DS: {
          charcoal: "#2D3E4A",
          davysgray: "#5F5957",
          beige: "#FBF9F1",
          celeste: "#A1EEE9",
          verdigris: "#24B2B4",
          "verdigris-700": "#18686D",
          orangecarrot: "#F0972E",
        },
      },
      screens: {
        '2sm': { 'max': '400px'},
        'sm': { 'max': '640px' },
        'md': { 'max': '768px' },
        'lg': { 'max': '1024px' },
        '2lg': { 'max': '1023px' },
        'xl': { 'max': '1280px' },
        '2xl': { 'max': '1536px'},
        'ism': { 'min': '640px' },
        'imd': { 'min': '768px' },
        'ilg': { 'min': '1024px' },
        'ixl': { 'min': '1280px' },
        'i2xl': { 'min': '1536px'},
        'mdx': { 'max': '767px' },
        'imdx': { 'min': '767px' },
      },

    },
  },
  plugins: [require("flowbite/plugin")],
});
