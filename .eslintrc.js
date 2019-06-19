module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    sourceType: 'script',
  },
  env: {
    node: true,
  },
  rules: {
    'global-require': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['rollup.config.js'],
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      files: ['functions/**/*'],
      rules: {
        // `console` is used for logging in Lambda functions.
        'no-console': 'off',
        // Lambda Layers are extracted to `/opt`.
        'import/no-absolute-path': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
};
