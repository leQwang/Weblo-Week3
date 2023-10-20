/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // purge: {
  //   enabled: true,
  // },
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '769px', // Change the value to 769px
        'lg': '1024px',
        // ...other breakpoints
      },
      backgroundImage: {
        'cta-mobile': "url('./img/cta-mobile.png')",
        'cta-desktop': "url('./img/cta-desktop.jpg')",
        'frame2': "url(./img/frame2bg.jpg)",
        'selectedBG': "url(./img/selectedBg.jpg)",
        'mobileSelectedBG': "url(./img/mobileSelectBg.png)",
        'cardBG--desktop': "url(./img/cardBg.jpg)",
        'cardBG--mobile': "url(./img/cardBg2.jpg)",
        'footerBg': "url(./img/footerBg.jpg)",
        'vng-logo': "url(./img/vng-logo.png)",
        'warning': "url(./img/warning.png)",

      },
    },
  },
  plugins: [],
}

