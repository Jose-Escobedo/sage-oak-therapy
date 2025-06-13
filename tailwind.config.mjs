
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./**/*.{js,jsx,mdx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
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
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;