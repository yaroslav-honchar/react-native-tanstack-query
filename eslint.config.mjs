import path from "node:path"
import { fileURLToPath } from "node:url"
import { fixupConfigRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import tsParser from "@typescript-eslint/parser"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ["**/*.config.js", ".eslintrc.js"],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "plugin:import/warnings",
    ),
  ),
  {
    languageOptions: {
      parser: tsParser,
    },

    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "react/display-name": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-empty-function": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-unused-vars": "off",
      "no-dupe-keys": "warn",
      "no-dupe-args": "warn",
      semi: ["warn", "never"],
      quotes: ["warn", "double"],

      "@typescript-eslint/no-empty-interface": [
        "warn",
        {
          allowSingleExtends: true,
        },
      ],
    },
  },
]
