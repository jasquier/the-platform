import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import tailwind from "eslint-plugin-tailwindcss";
import js from "@eslint/js";
import pluginRouter from "@tanstack/eslint-plugin-router";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import testingLibrary from "eslint-plugin-testing-library";

const eslintrcCompat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  jsxA11y.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  ...tailwind.configs["flat/recommended"],
  { ignores: ["dist", "coverage", ".storybook", "src/vite-env.d.ts"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...pluginRouter.configs["flat/recommended"],
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "import/order": "error",
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "testing-library/no-debugging-utils": "error",
    },
    settings: {
      react: {
        version: "18.3.1",
      },
    },
    ...testingLibrary.configs["flat/react"],
  },
  ...eslintrcCompat.config({
    plugins: ["no-only-tests"],
    rules: {
      "no-only-tests/no-only-tests": "error",
    },
  }),
);
