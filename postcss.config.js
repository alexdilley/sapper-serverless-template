'use strict';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', './src/**/*.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      importFrom: ['./src/styles/variables.js'],
      features: {
        'color-mod-function': true,
        'nesting-rules': true,
      },
    }),
    ...(process.env.NODE_ENV !== 'development' ? [purgecss] : []),
  ],
};
