import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        blood: {
          DEFAULT: '#FF0033', // The Neon Red
          light: '#FF3355',
          dark: '#CC0022',
        },
        void: {
          DEFAULT: '#000000', // Pure Black
          light: '#0a0a0a',   // Card background
          lighter: '#111111', // Hover states
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #FF0033' },
          '100%': { boxShadow: '0 0 20px #FF0033, 0 0 10px #FF0033' },
        }
      }
    },
  },
  plugins: [],
};
export default config;