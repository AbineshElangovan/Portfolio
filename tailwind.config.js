/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00e5ff',
        'accent-hover': '#00b3cc',
        'card-dark': '#222222',
        'card-hover': '#303030',
        'section-dark': '#111111',
      },
    },
  },
  plugins: [],
}
