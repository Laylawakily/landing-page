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
        secondaryOrange: "#f7a94b", 
        deepTeal: "#22393a",
        coralPink: "#E8AA8C", 
        charcoalBlack: "#222327",
        GoldenSun:'#e4ba2d'
      },
      backgroundImage: {
        'gradient-custom': "linear-gradient(45deg, #FEE500, #E8AA8C)",
      },
      fontFamily: {
        spaceGrotesk: ["var(--space)", "sans-serif"],
        brands: ["var(--fa-brands)"],
      },
    },
  },
  plugins: [],
};
