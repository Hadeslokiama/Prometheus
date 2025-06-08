/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lexend)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
