import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "docs",
  },
  base: "",
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
  },
});
