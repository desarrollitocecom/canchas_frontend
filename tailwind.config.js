/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scaleUpDown: 'scaleUpDown .8s ease-in infinite',
        shake: 'shake 0.3s ease-in-out',
        fadeDown: 'fadeDown 0.3s ease-out',
        fadeUp: 'fadeUp 0.3s ease-out',
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
        },
        fadeDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        fadeUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(50px)',  // Empieza desde abajo
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',     // Llega a su posición original
          },
        },
      },
      screens: {
        'md': '769px',
      },
    },
  },
  plugins: [],
}

