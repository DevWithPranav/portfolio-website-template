/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gap: {
        '11': '4.438rem',
      },
      colors: {
        'nav-bar': '#222222',
        'hero': '#161513',
      },
    },
  },
  plugins: [],
}