import polka from 'polka';
import * as sapper from '@sapper/server';
import './styles/index.css';

const { AWS_EXECUTION_ENV, PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = polka();

if (!AWS_EXECUTION_ENV) { // sandbox
  const compression = require('compression');
  const sirv = require('sirv');

  const assets = sirv('static', { dev });

  app
    .use(
      compression({ threshold: 0 }),
      (req, res, next) => {
        if (req.path.startsWith('/assets/')) {
          req.path = req.path.replace(/^\/assets/, '');
          assets(req, res, next);
        } else {
          next();
        }
      },
      sapper.middleware()
    )
    .listen(PORT, err => {
      // eslint-disable-next-line no-console
      if (err) console.log('error', err);
    });
} else {
  app.use(sapper.middleware());
}

export default app;
