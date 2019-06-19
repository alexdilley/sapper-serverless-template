#!/usr/bin/env node

'use strict';

const { modifyFiles } = require('./utils');
const packageJson = require('../package.json');

const { config } = packageJson;

modifyFiles(
  [
    './swagger.yaml',
    './package.json',
    './cloudformation.yaml',
    './rollup.config.js',
  ],
  [
    {
      regexp: new RegExp(config.accountId, 'g'),
      replacement: 'YOUR_ACCOUNT_ID',
    },
    {
      regexp: new RegExp(config.region, 'g'),
      replacement: 'YOUR_AWS_REGION',
    },
    {
      regexp: new RegExp(config.hostname, 'g'),
      replacement: 'YOUR_HOSTNAME',
    },
    {
      regexp: new RegExp(config.s3BucketName, 'g'),
      replacement: 'YOUR_UNIQUE_BUCKET_NAME',
    },
    {
      regexp: new RegExp(config.certificateId, 'g'),
      replacement: 'YOUR_SSL_CERTIFICATE_ID',
    },
  ]
);
