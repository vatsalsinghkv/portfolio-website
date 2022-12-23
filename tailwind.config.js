/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ['agustina', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        accent: ['mazius', 'serif'],
      },
    },
  },
  plugins: [],
};
