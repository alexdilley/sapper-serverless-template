#!/usr/bin/env node

'use strict';

const fs = require('fs');
const exec = require('child_process').execSync;
const minimist = require('minimist');
const { modifyFiles } = require('./utils');

let minimistHasBeenInstalled = false;

if (!fs.existsSync('./node_modules/minimist')) {
  exec('npm install minimist --silent');
  minimistHasBeenInstalled = true;
}

const args = minimist(process.argv.slice(2), {
  string: ['account-id', 'bucket-name', 'function-name', 'region'],
  default: {
    region: 'us-east-1',
    'function-name': 'AwsServerlessExpressFunction',
  },
});

if (minimistHasBeenInstalled) {
  exec('npm uninstall minimist --silent');
}

const accountId = args['account-id'];
const bucketName = args['bucket-name'];
const certificateId = args['certificate-id'];
const functionName = args['function-name'];
const { hostname, region } = args;

if (!accountId || accountId.length !== 12) {
  // eslint-disable-next-line no-console
  console.error(
    'You must supply a 12 digit account id as --account-id="<accountId>"'
  );
  process.exit(1);
}

if (!bucketName) {
  // eslint-disable-next-line no-console
  console.error(
    'You must supply a bucket name as --bucket-name="<bucketName>"'
  );
  process.exit(1);
}

modifyFiles(
  ['./swagger.yaml', './package.json', './cloudformation.yaml'],
  [
    {
      regexp: /YOUR_ACCOUNT_ID/g,
      replacement: accountId,
    },
    {
      regexp: /YOUR_AWS_REGION/g,
      replacement: region,
    },
    {
      regexp: /YOUR_UNIQUE_BUCKET_NAME/g,
      replacement: bucketName,
    },
    {
      regexp: /YOUR_HOSTNAME/g,
      replacement: hostname,
    },
    {
      regexp: /YOUR_SSL_CERTIFICATE_ID/g,
      replacement: certificateId,
    },
    {
      regexp: /YOUR_SERVERLESS_EXPRESS_LAMBDA_FUNCTION_NAME/g,
      replacement: functionName,
    },
  ]
);
