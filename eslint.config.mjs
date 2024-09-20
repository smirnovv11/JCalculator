import globals from 'globals'
import pluginJs from '@eslint/js'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2024,
            },
        },
        plugins: {
            prettier: prettierPlugin,
        },
    },
    {
        ignores: ['node_modules', 'dist'],
    },
    pluginJs.configs.recommended,
    {
        files: ['**/*.{js}'],
        rules: {
            ...eslintConfigPrettier.rules,
            'prefer-const': 'error',
        },
    },
]
