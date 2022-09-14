module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-/,
    },
  ],
  theme: {
    fontFamily: {
      spaceGro: ["Space Grotesk", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    screens: {
      mobile: "640px",
      tablet: "768px",
      smallLaptop: "1024px",
      desktop: "1280px",
      bigLaptop: "1440px",
      television: "1536px",
    },
    extend: {
      fontSize: {
        10: ["0.625rem", "0.938rem"],
        12: ["0.75rem", "1rem"],
        13: ["0.813rem", "1.125rem"],
        14: ["0.875rem", "1.438rem"],
        16: ["1rem", "1.438rem"],
        18: ["1.125rem", "2rem"],
        20: ["1.25rem", "1.688rem"],
        24: ["1.5rem", "2.063rem"],
        30: ["2rem", "2.813rem"],
        37: ["2.313rem", "2.688rem"],
        40: ["2.5rem", "3.375rem"],
        47: ["2.938rem", "3.438rem"],
        64: ["4rem", "4.375rem"],
      },
      colors: {
        crypGray: {
          100: "#FAFBFC",
          200: "#C5C9CD",
        },
        glass: {
          100: "rgba(255, 255, 255, 0.2)",
          200: "rgba(167, 237, 234, 0.3)",
          300: "rgba(255, 255, 255, 1)",
          400: "rgba(0, 0, 0, 0.2)",
          450: "rgba(0, 0, 0, 0.5)",
          500: "rgba(246, 246, 246, 0.2);",
        },
        crypGreen: {
          50: "#E7FFFE",
          100: "#AFEE6E4",
          500: "#6ED7D3",
          600: "#5ABFBC",
          700: "#114443",
          800: "#388F88",
        },
        crypYellow: {
          200: "#F4CA64",
          300: "#80631C",
        },
        crypMix: {
          200: "#A7EDEA",
        },
      },
      width: {
        600: "600px",
        500: "500px",
      },
      backgroundImage: {
        learn1: "url('/images/learn/learn1.png')",
        learn2: "url('/images/learn/learn2.png')",
        learn3: "url('/images/learn/learn3.png')",
        authDoodles: "url('/images/auth/auth-screen-doodles.png')",
        authDoodlesMobile: "url('/images/auth/doodles-mobile.png')",
      },
      boxShadow: {
        acceptPayment: "0px 20px 40px rgba(156, 197, 195, 0.3)",
        auth: "0px 20px 40px rgba(199, 199, 199, 0.3)",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [require("@tailwindcss/forms")],
};
