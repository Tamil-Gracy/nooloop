/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#102f83', navy: '#12398f', pink: '#ed1685', orange: '#ff783e', purple: '#8d16c9', leaf: '#58b52b', mist: '#f5f7fc', pale: '#fff7fb'
      },
      fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] },
      boxShadow: { soft: '0 18px 55px rgba(16,47,131,.10)' }
    }
  },
  plugins: []
}
