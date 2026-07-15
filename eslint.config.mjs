import js from "@eslint/js";
import nextConfig from "eslint-config-next";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import * as espree from "espree";

const eslintConfig = [
  js.configs.recommended,
  ...nextConfig,
  eslintPluginPrettierRecommended,
  {
    // eslint-plugin-react's version "detect" calls context.getFilename(), removed in ESLint 10.
    settings: {
      react: {
        version: "19.2.7",
      },
    },
  },
  {
    // eslint-config-next's bundled Babel parser predates ESLint 10's scope-manager API.
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      parser: espree,
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // TypeScript itself checks undefined symbols; no-undef gives false positives on types.
      "no-undef": "off",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-restricted-types": "warn",
      "react/display-name": "off",
    },
  },
  {
    ignores: ["public/**", "build/**", "dist/**", "out/**", ".next/**"],
  },
];

export default eslintConfig;
