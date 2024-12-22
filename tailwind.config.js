/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#5A5FDC", 
        light: {
          bg: "#F8F9FA", 
          text: "#212529", 
          accent: "#E63946", 
          border: "#D3D9DF", 
        },
        dark: {
          bg: "#121212", 
          text: "#E4E4E4", 
          accent: "#FF6B6B", 
          border: "#5A5FDC", 
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
