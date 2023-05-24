/* eslint-disable global-require */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'af-main-blue': '#065EA8',
        'af-grd-f-blue': '#4DAEFD',
        'af-sid-f-blue': '#035294',
      },
    },
  },
  plugins: [require('daisyui')],
};
