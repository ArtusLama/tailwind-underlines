/** @type {import("stylelint").Config} */
export default {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-tailwindcss",
    ],
    plugins: [
        "@stylistic/stylelint-plugin",
    ],
    rules: {
        "declaration-block-no-duplicate-custom-properties": null,
        "@stylistic/indentation": 4,
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["global"],
            },
        ],
    },
}
