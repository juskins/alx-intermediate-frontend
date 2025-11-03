/** @type {import('tailwindcss').Config} */
module.exports = {
  // include project HTML/JS but exclude node_modules to avoid scanning dependencies
  content: ["./**/*.{html,js}", "!./node_modules/**"],
  theme: {
    extend: {},
  },
  plugins: [],
}