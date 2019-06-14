module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ['svelte3'],
  rules: {
    'global-require': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'off', // Svelte props
    'import/prefer-default-export': 'off',
  },
};
