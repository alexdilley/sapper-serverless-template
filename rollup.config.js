import path from 'path';
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup';
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const extensions = ['.mjs', '.js', '.svelte', '.css'];
const aliases = alias({
  resolve: extensions.reduce((acc, ext) => [...acc, ext, `/index${ext}`], []),
  '@': path.resolve(__dirname, 'src'),
});
const preprocess = sveltePreprocess({ postcss: true });

// eslint-disable-next-line no-shadow
const onwarn = (warning, onwarn) =>
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    warning.message.includes('/@sapper/')) ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      aliases,
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        dev,
        hydratable: true,
        preprocess,
        emitCss: true,
      }),
      resolve({ browser: true, extensions }),
      commonjs(),
      !dev && terser({ module: true }),
    ],

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      aliases,
      replace({
        ...(!dev ? { 'http://127.0.0.1': 'https://YOUR_HOSTNAME' } : {}),
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        generate: 'ssr',
        dev,
        preprocess,
      }),
      postcss({
        minimize: true,
        extract: path.resolve(__dirname, './static/index.css'),
      }),
      resolve({ extensions }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives'))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      aliases,
      resolve({ extensions }),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    onwarn,
  },
};
