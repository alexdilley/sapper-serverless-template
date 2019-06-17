'use strict';

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./__sapper__/build/server/server');

const server = awsServerlessExpress.createServer(app.handler);

exports.handler = (ev, ctx) => awsServerlessExpress.proxy(server, ev, ctx);
