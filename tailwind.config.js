/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  safelist: [
    "bg-green-900",
    "bg-green-100",
    "bg-blue-900",
    "bg-blue-100",
    "text-green-900",
    "text-green-50",
    "text-blue-900",
    "text-blue-50"
  ]
};
