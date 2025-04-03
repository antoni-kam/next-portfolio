// eslint.config.mjs
export default {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'next',
      'next/core-web-vitals',
    ],
    rules: {
      // Add custom rules if any
    },
  };
  