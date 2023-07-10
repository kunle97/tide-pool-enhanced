/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto'],
    },
    colors: {
      uiGreen: '#37bd8c',
      uiBtnGreen: '#42dca3',
      dashboardGreen: '#3aaf5c',
      dashboardGrey: '#2c3a4a',
      dashboardLightGrey: '#364658',
      error: '#dc2626',
    },
    extend: {},
  },
  plugins: [],
};
