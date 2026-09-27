export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        stoneTeal: '#9bb3af',
        stoneBeige: '#e8d3c8',
        ink: '#1a2526',
        paper: '#f4f4f4'
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif']
      }
    }
  },
  plugins: []
};
