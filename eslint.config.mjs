import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        rules: {
            indent: ["error", 4],
        },
    },
    {},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
