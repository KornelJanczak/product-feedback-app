// <reference types="vite/client" />
// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./__test__/setup.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"), // ścieżka do katalogu źródłowego
    },
  },
});


