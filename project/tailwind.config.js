/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'azure-blue': '#007FFF',
        silver: '#C0C0C0',
      },
    },
  },
  plugins: [],
};