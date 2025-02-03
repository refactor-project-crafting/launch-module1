import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@challenge1": path.resolve(__dirname, "src/challenge1"),
      "@challenge2": path.resolve(__dirname, "src/challenge2"),
    },
  },
});
