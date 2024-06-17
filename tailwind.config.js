/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        graphit: '#1D1D28',
        vstrecha: '#355170',
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
  plugins: [],
}
