import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: ["**/*.d.ts", ".eslint*", "*.config.{ts,js}", "src/main.tsx"],
    },
    environment: "jsdom",
    setupFiles: ["./testSetup.ts"],
  },
});
