/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        sage: '#A8BBA1',
        oak: '#6B4F3B',
        stone: '#D8D8D8',
        forest: '#2F4033',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'], 
      },
    },
  },
  plugins: [],
};

