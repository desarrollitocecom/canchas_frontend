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
        shake: 'shake 0.3s ease-in-out'
      },
      keyframes: {
        scaleUpDown: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0) rotate(0)' },
          '25%': { transform: 'translateX(-4px) rotate(-1deg)' },
          '50%': { transform: 'translateX(4px) rotate(1deg)' },
          '75%': { transform: 'translateX(-4px) rotate(-1deg)' }
        }
      },
      screens: {
        'md': '769px',
      },
    },
  },
  plugins: [],
}

