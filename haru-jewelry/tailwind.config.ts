import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-accent' : '#bfdbfe',
        'custom-white': '#f8f2f2',
        'custom-gray': '#f2f2f2',
        'custom-dark-green' : '#15575a',
        'custom-dark-blue': '#0f8fe5',
        'custom-dark-orange': '#eb8f09',
        'custom-pale-red': '#802626',
        'custom-pale-green': '#15ad99'
      },
      screens: {
        'md' : '35em',
        'lg' : '45em'
      },
      fontSize: {
        'fs-900': '6rem',
        'fs-800': '4.5rem',
        'fs-700' : '2.75rem',
        'fs-600' : '2.125rem',
        'fs-500' : '1.5rem',
        'fs-400': '1.2rem',
        'fs-300': '1rem',
        'fs-200': '0.575rem'
      }
    },
  },
  plugins: [],
} satisfies Config;
