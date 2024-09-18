import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff652f", // Bright Orange
        secondary: "#14a76c", // Bright Green
        accent: "#ffe400", // Bright Yellow
        neutral: "#272727", // Dark Gray
        muted: "#747474", // Medium Gray
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customtheme: {
          primary: "#ff652f", // Bright Orange
          secondary: "#14a76c", // Bright Green
          accent: "#ffe400", // Bright Yellow
          neutral: "#272727", // Dark Gray
          muted: "#747474", // Medium Gray
          "base-100": "#FFFFFF", // Base white background
        },
      },
    ],
  },
};
export default config;
