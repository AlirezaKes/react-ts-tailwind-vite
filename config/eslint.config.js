import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    ignores: ["dist"],
    files: ["**/*.{ts,tsx,js,jsx}"], // Adjusted path
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: parser,
      sourceType: "module",
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint,
      prettier: prettier,
      react: react,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Prettier formatting
      "prettier/prettier": "error",

      // React and Hooks
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TypeScript rules
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      // General code quality rules
      "no-console": "warn",
      "no-debugger": "warn",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-implicit-coercion": "error",
      "no-undef": "error",
      "no-unused-vars": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-unused-expressions": "warn",

      // React Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Accessibility
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // Test-specific configuration
  {
    files: ["**/*.test.{ts,tsx,js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Vitest runs in a Node environment
        test: "readonly", // Add `test` as a global for testing
        expect: "readonly", // Add `expect` as a global for testing
        describe: "readonly", // Add `describe` for testing suite
      },
    },
    rules: {
      // Prevent accidentally committed focused tests
      "no-restricted-globals": ["error", "fdescribe", "fit"],
    },
  },
];
