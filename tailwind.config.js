/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scaleUpDown: 'scaleUpDown .8s ease-in infinite',
      },
      keyframes: {
        scaleUpDown: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      screens: {
        'md': '769px',
      },
    },
  },
  plugins: [],
}

