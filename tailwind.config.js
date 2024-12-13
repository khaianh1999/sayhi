/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        main: '#ff7675',
        main2: '#f9e2c7',
        hover: '#596275',
        hot: '#FFC312',
      },
    },
  },
  plugins: [],
}