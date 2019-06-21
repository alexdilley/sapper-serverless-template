const path = require('path');

module.exports = {
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
    'import/no-mutable-exports': 'off', // Svelte props
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.css', '.js', '.svelte'],
        map: [['@', path.resolve(__dirname)]],
      },
    },
    // Avoid pre-processor fisticuffs.
    'svelte3/ignore-styles': true,
  },
};
