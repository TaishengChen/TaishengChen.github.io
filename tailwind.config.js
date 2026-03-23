/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#00ADB5',
        bg:    '#0a1120',
        panel: '#0f1929',
      },
      animation: {
        blink: 'blink 2.4s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
};
