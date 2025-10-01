/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Grudge Studio Brand Colors
        'grudge-primary': '#8B5CF6', // Purple
        'grudge-secondary': '#EC4899', // Pink
        'grudge-accent': '#10B981', // Neon Green
        'grudge-dark': '#0F172A', // Dark background
        'grudge-darker': '#020617', // Darker background
        'grudge-text': '#F1F5F9', // Light text
        'grudge-gold': '#FBBF24', // Gold accent
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grudge-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      fontFamily: {
        'grudge': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
