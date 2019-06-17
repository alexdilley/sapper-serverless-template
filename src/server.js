import polka from 'polka';
import * as sapper from '@sapper/server';
import './styles/index.css';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = polka();

if (dev) {
  const compression = require('compression');
  const sirv = require('sirv');

  app
    .use(
      compression({ threshold: 0 }),
      sirv('static', { dev }),
      sapper.middleware(),
    )
    .listen(PORT, err => {
      // eslint-disable-next-line no-console
      if (err) console.log('error', err);
    });
} else {
  app.use(sapper.middleware());
}

export default app;
