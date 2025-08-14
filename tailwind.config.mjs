/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#F8F7F2",
        "text-color": "#2C3E50",
        "primary-color": "#3A5A40",
        "accent-color": "#A37E2C",
      },
      fontFamily: {
        sans: ['"Nunito Sans"', "sans-serif"],
        serif: ["Lora", "serif"],
      },
      animation: {
        "slow-pan":
          "slow-pan 25s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate",
      },
      keyframes: {
        "slow-pan": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.1) translate(-2%, 2%)" },
        },
      },
    },
  },
  plugins: [],
};
