import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Specifies the output directory
    assetsDir: "assets", // Directory for assets (JS, CSS)
  },
});
