import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
};
export default config;
