/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pp-50": "#041C3B",
        "pp-100": "#14C93E",
        "pp-150": "#ee240e",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
    themeRoot: ":light",
  },
};
