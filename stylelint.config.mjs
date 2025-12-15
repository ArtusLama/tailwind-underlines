/** @type {import("stylelint").Config} */
export default {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-tailwindcss",
        "stylelint-prettier/recommended",
    ],
    rules: {
        "declaration-block-no-duplicate-custom-properties": null,
    },
};
