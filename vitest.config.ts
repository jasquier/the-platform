import { defineConfig } from "vitest/config";
import path from "path";

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
        "src/lib/*",
        "src/prepareMd.ts",
        "src/components/ui/*",
        ".storybook/",
        "src/**/*.stories.{ts,tsx}",
      ],
    },
    environment: "jsdom",
    setupFiles: ["./testSetup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
