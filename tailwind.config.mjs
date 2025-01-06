/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        naranja: "#ff760f",
        negro: "#000000",
        blanco: "#ffffff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '4k': '2560px',  // Quiebre para pantallas 4K
      },
    },
  },
  plugins: [],
};
