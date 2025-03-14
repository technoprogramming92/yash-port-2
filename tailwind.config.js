/** @type {import('tailwindcss').Config} */

export const content = [
  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      mont: ["var(--font-mont)"],
      mono: ["var(--font-roboto-mono)"],
    },
    colors: {
      dark: "#1b1b1b",
      light: "#000000",
      primary: "#B63E96", // 240,86,199
      primaryDark: "#58E6D9", // 80,230,217
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
    animation: {
      "spin-slow": "spin 8s linear infinite",
    },
    backgroundImage: {
      circularLight:
        "repeating-radial-gradient(#f5f5f5 2px, #000000 5px, #000000 100px)",
      circularLightLg:
        "repeating-radial-gradient(#f5f5f5 2px, #000000 5px, #000000 80px)",

      circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",

      circularDarkSm:
        "repeating-radial-gradient(circle, rgba(255, 255, 255) 2px, #000000 6px, #000000 35px)",
    },
  },
};
export const plugins = [];
