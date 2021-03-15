module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {},
    },
    screens: {
      mobileM: "375px",
      // => @media (min-width: 375px) { ... }
      mobile: "425px",
      // => @media (min-width: 425px) { ... }
      tabletM: "640px",
      // => @media (min-width: 640px) { ... }
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
      widescreen: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
