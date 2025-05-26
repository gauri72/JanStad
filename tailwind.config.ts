import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B5E20', // Dark Green
        'primary-dark': '#0D2E10',
        'primary-light': '#2E7D32',
        secondary: '#81C784', // Light Green
        'secondary-dark': '#4CAF50',
        'secondary-light': '#A5D6A7',
        accent: '#E67E22', // Warm Amber/Orange
        'accent-dark': '#D35400',
        'accent-light': '#F39C12',
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config 