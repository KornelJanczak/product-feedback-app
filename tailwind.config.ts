import { withUt } from "uploadthing/tw";

// Font System
// h2 (Create, User Name in account): text-xl sm:text-2xl md:text-3xl
// h3(Section tag): text-lg sm:text-xl md:text-2xl
// basic text: text-sm sm:text-base

// h4 (form labels): text-sm sm:text-base sm:text-lg
export default withUt({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        default: "1400px",
        xs: "500px",
        sm: "720px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "header-mobile":
          "url('/assets/suggestions/mobile/background-header.png')",
        "header-desktop":
          "url('/assets/suggestions/desktop/background-header.png')",
        "header-tablet":
          "url('/assets/suggestions/tablet/background-header.png')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        pink: "#AD1EFA",
        blue: "#4661E6",
        lighterBlue: "#62BCFA",
        dark: "rgb(55, 63, 104)",
        secondDark: "#3A4374",
        skeletonTheme: "#0000002c",
        grey: "#647196",
        lightGrey: "#CDD2EE",
        orange: "#F49F85",
        basicWhite: "#ffffff",
        middleWhite: "#F2F4FF",
        darkWhite: "#F7F8FD",
        red: "#D73737",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
