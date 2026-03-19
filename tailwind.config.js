/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A227',
          light: '#C9A454',
        },
        mint: {
          DEFAULT: '#3DD68C',
          light: '#5DDBA8',
        },
        dark: {
          DEFAULT: '#0A1018',
          surface: '#1A1A1A',
          alt: '#111111',
          philosophy: '#0D0D0D',
        },
        white: {
          DEFAULT: '#FAFAF8',
          dim: 'rgba(250,250,248, 0.72)',
          muted: 'rgba(250,250,248, 0.45)',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        jost: ['Jost', 'sans-serif'],
        body: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        'eyebrow': '0.38em',
        'nav': '0.22em',
        'btn': '0.28em',
      }
    },
  },
  plugins: [],
}
