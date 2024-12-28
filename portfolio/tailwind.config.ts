import type { Config } from "tailwindcss";

module.exports = {
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
