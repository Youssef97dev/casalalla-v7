/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        casa_1: "var(--casa-1)",
        casa_2: "var(--casa-2)",
        casa_3: "var(--casa-3)",
        casa_4: "var(--casa-4)",
        casa_5: "var(--casa-5)",
        casa_6: "var(--casa-6)",
        casa_7: "var(--casa-7)",
        casa_8: "var(--casa-8)",
        casa_9: "var(--daypass)",
        casa_10: "var(--daypass-1)",
      },
      fontFamily: {
        corporate: ["BillCorporateNarrow", "serif"],
      },
      animation: {
        "slide-left": "slideLeft 2s ease-in-out forwards",
        "slide-right": "slideRight 2s ease-in-out forwards",
        "scale-3d": "scale3D 1.8s ease-in-out forwards",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        scale3D: {
          "0%": { transform: "scale(1) rotateX(0deg)" },
          "100%": { transform: "scale(1.8) rotateX(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
