// vite.config.js
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: "src",
  plugins: [
    react({
      babel: {
        configFile: resolve(__dirname, "./babel.config.js"),
      },
    }),
  ],
  css: {
    postcss: resolve(__dirname, "./postcss.config.js"),
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "../src/components"),
    },
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: resolve(__dirname, "../src/index.html"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: resolve(__dirname, "./setupTests.ts"),
    testTransformMode: {
      web: [".js", ".ts", ".jsx", ".tsx"],
    },
  },
});
