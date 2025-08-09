import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#14a76c", // Bright Green
        secondary: "#ff652f", // Bright Orange
        accent: "#ffe400", // Bright Yellow
        neutral: "#272727", // Dark Gray
        muted: "#747474", // Medium Gray
        background: "#fafafa", // Light Background
        foreground: "#1a1a1a", // Text Color
      },
      fontFamily: {
        sans: ['Oswald', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customtheme: {
          primary: "#14a76c", // Bright Green
          secondary: "#ff652f", // Bright Orange
          accent: "#ffe400", // Bright Yellow
          neutral: "#272727", // Dark Gray
          "base-100": "#ffffff", // Base white background
          "base-200": "#f7f7f7", // Slightly darker background
          "base-300": "#e5e5e5", // Even darker background
          info: "#3b82f6", // Blue for info
          success: "#10b981", // Green for success
          warning: "#f59e0b", // Amber for warning
          error: "#ef4444", // Red for error
        },
      },
    ],
  },
};
export default config;
