/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0F1E',
        surface: '#111A2E',
        surface2: '#16213A',
        line: '#26324A',
        mint: '#5EEAD4',
        mintDim: '#2DD4BF',
        amber: '#FBBF24',
        coral: '#FB7185',
        textHi: '#E7ECF5',
        textLo: '#8C99B3',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(94,234,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
