/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- The important part!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}