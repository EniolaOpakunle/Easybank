/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        LimeGreen: 'hsl(136, 65%, 51%)',
        BrightCyan: 'hsl(192, 70%, 51%)'
      }
    },
  },
  plugins: [],
}
