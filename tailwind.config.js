/** @type {import('tailwindcss').Config} */
export default {
  experimental: { oxideParser: true, optimizeUniversalDefaults: true },
  future: { hoverOnlyWhenSupported: true },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
