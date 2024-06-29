/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    fontFamily: {
      /* sans: ['Poppins', 'sans-serif'], */
      serif: ['Poppins', 'sans-serif'],
      heading:['Raleway', 'sans-serif'],
      cursive:['Pacifico', 'cursive']
    },
    extend: {
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(to right, #ff7e5f, #feb47b)',
      }),
      screens: {
        'custom-1170': '1170px',
        'custom-1147': '1147px',
        'custom-1131': '1131px',
        'custom-1092': '1092px',
        'custom-817': '817px',
      },
    },
  },
  plugins: [],
}