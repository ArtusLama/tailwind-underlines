import js from "@eslint/js"
import tseslint from "typescript-eslint"
import stylistic from "@stylistic/eslint-plugin"

export default [
    // Ignore patterns - must come first
    {
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/.vitepress/cache/**",
            "**/.vitepress/dist/**",
            "**/*.json",
            "**/*.jsonc",
            "**/package-lock.json",
        ],
    },

    // Base JavaScript config
    js.configs.recommended,

    // TypeScript config
    ...tseslint.configs.recommended,

    // Stylistic plugin
    stylistic.configs.customize({
        indent: 4,
        semi: false,
        jsx: false,
        quotes: "double",
    }),

    // Global settings
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            // Enforce 4-space indentation
            "@stylistic/indent": ["error", 4],
            "@stylistic/semi": ["error", "never"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/comma-dangle": ["error", "always-multiline"],

            // TypeScript specific
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        },
    },
]
