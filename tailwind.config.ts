import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "afc-brown-100": "#C1C1C1",
        "afc-gray-100": "#475569",
        "afc-gray-200": "#94A3B8",
        "afc-gray-300": "#334155",
        "afc-gray-400": "#E2E8F0",
        "afc-gray-500": "#64748B",
        "afc-white-100": "#FFFFFF",
        "afc-white-200": "#F8FAFC",
      },
    },
  },
  plugins: [],
};

export default config;
