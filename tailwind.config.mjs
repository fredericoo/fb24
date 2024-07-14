/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Innovator Grotesk", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    letterSpacing: {
      tight: "-.01em",
      tighter: "-.03em",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      neutral: {
        1: "#FFFFFF",
        2: "#F0F2F5",
        3: "#E9EDEF",
        4: "#D9DBDF",
        5: "#C3C7CB",
        6: "#697680",
        7: "#54656F",
        8: "#131B20",
      },
    },
    extend: {},
  },
  plugins: [],
};
