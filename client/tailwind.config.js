/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3f4f6',
        secondary: '#f9fafb',
        accent: '#f87171',
        dark: '#1a202c',
        light: '#e2e8f0',
        black: '#000000',
        white: '#ffffff',
      },
      
    },
  },
  plugins: [],
}