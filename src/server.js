import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
// eslint-disable-next-line import/no-unresolved
import * as sapper from '@sapper/server';
import './styles/index.css';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, err => {
    // eslint-disable-next-line no-console
    if (err) console.log('error', err);
  });
