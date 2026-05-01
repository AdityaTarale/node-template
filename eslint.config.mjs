import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        ignores: ["dist", "node_modules"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
    },
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ["**/*.js", "**/*.mjs", "jest.config.js", "eslint.config.mjs"],
        ...tseslint.configs.disableTypeChecked,
    },
    {
        rules: {
            "no-console": "warn",
            "no-unused-vars": "warn",
            "no-undef": "warn",
        },
    },
]);
