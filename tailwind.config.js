/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dae7ff',
          500: '#4f7cff',
          600: '#3b63e6',
          700: '#2f4fbf',
          900: '#1a2a66',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(31, 41, 55, 0.15)',
      },
    },
  },
  plugins: [],
};
