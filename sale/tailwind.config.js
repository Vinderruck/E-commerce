/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'run':{min:'575px', max:'999px'}
      },
  
    },
  },
  plugins: [],
}