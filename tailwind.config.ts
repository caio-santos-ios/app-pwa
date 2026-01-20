import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Adicione esta linha
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ... resto da config
};
export default config;