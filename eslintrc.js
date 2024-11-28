// .eslintrc.js
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: [
        'react',
        'react-hooks',
        'jsx-a11y',
        '@typescript-eslint',
        'import',
        'prettier',
    ],
    rules: {
        // React Specific Rules
        'react/prop-types': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-unused-prop-types': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-key': ['error', { checkFragmentShorthand: true }],
        'react/jsx-no-undef': 'error',
        'react/no-array-index-key': 'warn',
        'react/no-direct-mutation-state': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-no-useless-fragment': 'warn',
        'react/self-closing-comp': 'warn',

        // React Hooks Rules
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // Import Rules
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'import/order': ['error', {
            'groups': [
                'builtin',
                'external',
                'internal',
                ['parent', 'sibling'],
                'index',
            ],
            'newlines-between': 'always',
            'alphabetize': {
                'order': 'asc',
                'caseInsensitive': true
            }
        }],
        'import/no-duplicates': 'error',
        'import/no-cycle': 'error',
        'import/no-unused-modules': 'error',

        // JavaScript Best Practices
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-debugger': 'warn',
        'no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_'
        }],
        'prefer-const': 'error',
        'no-var': 'error',
        'eqeqeq': ['error', 'always'],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        'no-trailing-spaces': 'error',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],

        // Accessibility Rules
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-has-content': 'error',
        'jsx-a11y/click-events-have-key-events': 'error',
        'jsx-a11y/no-static-element-interactions': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',

        // TypeScript Specific Rules (if using TypeScript)
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_'
        }],

        // Performance Rules
        'react/jsx-no-bind': ['warn', {
            ignoreDOMComponents: true,
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: false,
        }],
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    overrides: [
        {
            files: ['**/*.test.js', '**/*.test.jsx'],
            env: {
                jest: true
            },
            rules: {
                // Relaxed rules for test files
                'no-unused-expressions': 'off'
            }
        }
    ]
};