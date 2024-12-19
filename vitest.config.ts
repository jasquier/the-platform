import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        "**/*.d.ts",
        ".eslint*",
        "*.config.{ts,js}",
        "./dist/*",
        "src/routeTree.gen.ts",
        "src/routes/*",
        "src/Root.tsx",
        "src/main.tsx",
        "src/**/*.test.{ts,tsx}",
      ],
    },
    environment: "jsdom",
    setupFiles: ["./testSetup.ts"],
  },
});
