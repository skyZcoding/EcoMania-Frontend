/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx',],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

