module.exports = {
  purge: {
    mode: "all",
    enabled: process.env.NODE_ENV === "production",
    preserveHtmlElements: false,
    content: [
      "./src/**/*.js",
      "./src/**/*.vue",
      "./src/**/*.ts",
      "./src/**/*.scss",
      "./public/**/*.html",
    ],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        "custom-error": "#dc2626", // Assuming red-600 for your error color
      },
      textColor: {
        "custom-error": "#dc2626", // Assuming red-600 for your error text color
      },
    },
    // colors: {
    //   blue: "#17275c",
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
