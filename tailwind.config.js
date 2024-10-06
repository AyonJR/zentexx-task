/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        customGradientStart: '#007991',
        customGradientEnd: '#77FED6',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #007991, #77FED6)',
      },
    },
  },
  plugins: [
    require('daisyui'),

  ],
}

