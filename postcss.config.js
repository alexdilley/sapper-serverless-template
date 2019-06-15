const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', './src/**/*.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      features: {
        'color-mod-function': true,
      },
    }),
    require('cssnano')({
      preset: 'default',
    }),
    ...(process.env.NODE_ENV !== 'development' ? [purgecss] : []),
  ],
};
