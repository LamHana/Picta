module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '@': './src',
        },
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-eval': 'warn',
    'no-proto': 2,
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/named': 0,
    'import/export': 0,
    'import/default': 0,
    'import/namespace': 0,
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
  },
};
