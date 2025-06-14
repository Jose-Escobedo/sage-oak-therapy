/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,mdx}",       
    "./pages/**/*.{js,jsx,mdx}",     
    "./components/**/*.{js,jsx,mdx}",
    "./**/*.{js,jsx,mdx}",           
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
