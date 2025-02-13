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
        },
        "social-links-profile-green": 'hsl(75, 94%, 57%)',
        "social-links-profile-white": 'hsl(0, 0%, 100%)',
        "social-links-profile-grey": {
          700: 'hsl(0, 0%, 20%)',
          800: 'hsl(0, 0%, 12%)',
          900: 'hsl(0, 0%, 8%)',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
