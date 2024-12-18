import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: ["**/*.d.ts", ".eslint*", "src/main.tsx"],
    },
    environment: "jsdom",
    setupFiles: ["./testSetup.ts"],
  },
});
