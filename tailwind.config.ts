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
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        brand: {
          deep: '#1a3a4a',
          accent: '#2d7d9a',
          bg: '#f7f9fb',
          dark: '#1a2a32',
          muted: '#8a9aa2',
          light: '#e8edf0',
          gold: '#c5a94e',
        },
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(26, 42, 50, 0.04), 0 1px 2px -1px rgba(26, 42, 50, 0.03)',
        'lifted': '0 4px 12px -2px rgba(26, 42, 50, 0.08), 0 2px 6px -2px rgba(26, 42, 50, 0.04)',
        'elevated': '0 12px 32px -8px rgba(26, 42, 50, 0.12), 0 4px 12px -4px rgba(26, 42, 50, 0.06)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
