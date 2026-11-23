/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#0C2B4E',
          secondary: '#0F2840',
          dark: '#081D35',
        },
        'light-blue': '#EBF3F8',
        'ice-blue': '#EBF3F8',
        'accent-teal': '#1F8A9B',
        'body-text': '#5A6A7E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
