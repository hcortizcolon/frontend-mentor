import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "qr-code": {
          slate: {
            300: "hsl(212, 45%, 89%)",
            500: "hsl(216, 15%, 48%)",
            900: "hsl(218, 44%, 22%)",
          }
        },
        "blog-preview-card": {
          "yellow": 'hsl(47, 88%, 63%)',
          "gray": {
            500: 'hsl(0, 0%, 42%)',
            950: 'hsl(0, 0%, 7%)',
          },
        },
        "social-links-profile": {
          "green": 'hsl(75, 94%, 57%)',
          "white": 'hsl(0, 0%, 100%)',
          "grey": {
            700: 'hsl(0, 0%, 20%)',
            800: 'hsl(0, 0%, 12%)',
            900: 'hsl(0, 0%, 8%)',
          },
        },
        "recipe-page": {
          "stone": {
            100: "hsl(30, 54%, 90%)",
            150: "hsl(30, 18%, 87%)",
            600: "hsl(30, 10%, 34%)",
            900: "hsl(24, 5%, 18%)",
          },
          "brown": {
            800: "hsl(14, 45%, 36%)",
          },
          "rose": {
            800: "hsl(332, 51%, 32%)",
            50: "hsl(330, 100%, 98%)",
          }
        },
        "product-preview-card": {
          green: {
            500: "hsl(158, 36%, 37%)",
            700: "hsl(158, 42%, 18%)",
          },
          black: "hsl(212, 21%, 14%)",
          grey: "hsl(228, 12%, 48%)",
          cream: "hsl(30, 38%, 92%)",
          white: "hsl(0, 0%, 100%)",
        },
        "four-card-feature-section": {
          red: "hsl(0, 78%, 62%)",
          cyan: "hsl(180, 62%, 55%)",
          orange: "hsl(34, 97%, 64%)",
          blue: "hsl(212, 86%, 64%)",
          grey: {
             500: "hsl(234, 12%, 34%)",
             400: "hsl(212, 6%, 44%)",
          },
          white: "hsl(0, 0%, 100%)"
        },
        "testimonial-grid-section": {
          purple: {
            50: "hsl(260, 100%, 95%)",
            300: "hsl(264, 82%, 80%)",
            500: "hsl(263, 55%, 52%)",
          },
          white: "hsl(0, 0%, 100%)",
          grey: {
            100: "hsl(214, 17%, 92%)",
            200: "hsl(0, 0%, 81%)",
            400: "hsl(224, 10%, 45%)",
            500: "hsl(217, 19%, 35%)",
          },
          darkBlue: "hsl(219, 29%, 14%)",
          black: "hsl(0, 0%, 7%)",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
