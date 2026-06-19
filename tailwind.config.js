/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        techBlue: "#0066FF",
        techDarkBlue: "#071B3A",
        techGreen: "#00FF88",
        techGray: "#F5F7FA",
        techBlack: "#050B18",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 102, 255, 0.2), 0 0 10px rgba(0, 102, 255, 0.2)' },
          '100%': { boxShadow: '0 0 15px rgba(0, 102, 255, 0.6), 0 0 30px rgba(0, 255, 136, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
