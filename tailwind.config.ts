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
        "blog-preview-card-yellow": 'hsl(47, 88%, 63%)',
        "blog-preview-card-gray": {
          500: 'hsl(0, 0%, 42%)',
          950: 'hsl(0, 0%, 7%)',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
