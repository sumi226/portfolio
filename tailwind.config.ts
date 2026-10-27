import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070a13',
          900: '#0b1120',
          850: '#0f172a',
          800: '#15203b',
          700: '#1e293b',
          600: '#334155',
        },
        primary: {
          DEFAULT: '#38bdf8', // electric blue / sky
          hover: '#0284c7',
          light: '#7dd3fc',
          dark: '#0369a1',
        },
        accent: {
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          emerald: '#10b981',
          rose: '#f43f5e',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.15), transparent 70%)',
        'card-glow': 'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.12), transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'glow-primary': '0 0 35px -5px rgba(56, 189, 248, 0.3)',
        'glow-violet': '0 0 35px -5px rgba(139, 92, 246, 0.3)',
        'card-subtle': '0 8px 30px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
