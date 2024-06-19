/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'own-graphit': '#1D1D28',
        'own-blue': '#355170',
        'own-transparent': 'rgba(0, 0, 0, 0.3)',
        'own-red': '#BE5858',
        'own-gray': '#BEBEBE',
        'own-sky': '#C3D7DB',
        'own-orange': '#FBDABB',
        'own-white': '#EFF5FC',
      },
      fontFamily: {
        // forum: ['Forum', 'serif'],
        sfproregular: ['SFProRegular', 'serif'],
        sfpromedium: ['SFProMedium', 'serif'],
        sfprosemibold: ['SFProSemibold', 'serif'],
        sfprobold: ['SFProBold', 'serif'],
        retrosailing: ['RetroSailing', 'serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
