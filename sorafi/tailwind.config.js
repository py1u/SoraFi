/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/style/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sorafi: {
          dark: "#16161D",
          light: "#ECF8F8",

          stormGrey: "#696D8E",
          cherrySakura: "#FFB7C5",
          lightTeal: "#96C0B7",
          mangoYellow: "#F3C677",
          brownSugar: "#B56B45",
          nighBlue: "#0C0A3E",
          brightRose: "#D62246",
          sandPeace: "#F7E1D7",

          sakura: {
            50: "#fff1f3",
            100: "#ffe3e8",
            200: "#ffccd6",
            300: "#ffa2b5",
            400: "#fe6e8d",
            500: "#f83b68",
            600: "#e51954",
            700: "#c20e47",
            800: "#a20f42",
            900: "#8b103f",
            950: "#4e031d",
          },

          sky: {
            50: "#eef4ff",
            100: "#e0eaff",
            200: "#c7d8fe",
            300: "#a4bdfd",
            400: "#8098f9",
            500: "#6274f2",
            600: "#454de6",
            700: "#373bcb",
            800: "#2f34a4",
            900: "#2d3382",
            950: "#1b1d4b",
          },

          keppel: {
            50: "#f0fdfa",
            100: "#ccfbf2",
            200: "#98f7e6",
            300: "#5debd9",
            400: "#2cd5c4",
            500: "#13b9ab",
            600: "#0c958c",
            700: "#0e7772",
            800: "#115e5b",
            900: "#134e4b",
            950: "#042f2f",
          },

          molten: {
            50: "#fff7eb",
            100: "#ffe8c6",
            200: "#fed189",
            300: "#feaa39",
            400: "#fe9621",
            500: "#f87108",
            600: "#dc4d03",
            700: "#b63107",
            800: "#94260c",
            900: "#79200e",
            950: "#460d02",
          },
        },
      },
    },
    fontFamily: {
      oxanium: ["var(--font-oxanium)", "sans-serif"],
    },
  },
  plugins: [],
};
