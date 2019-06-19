# AWS Serverless Sapper

Boilerplate template for a universal Sapper app running on top of AWS Lambda and Amazon API Gateway.

## Build/deploy

```sh
npm install
npm run config -- \
  --account-id="<accountId>" \
  --bucket-name="<bucketName>" \
  --hostname="<hostname>" \
  --certificate-id="<certificateId>" \
  [--region="<region>"]
npm run setup
```

## Local sandbox

```sh
API_BASE_URL=<APIG URL> npm run dev
```

or:

```sh
npm run build
API_BASE_URL=<APIG URL> npm run start
```

## Known issues

- 🐛 [invalid client asset URLs](https://github.com/sveltejs/sapper/issues/747)
- 😖 [hack](https://github.com/alexdilley/sapper-serverless-template/blob/master/rollup.config.js#L51): Lambda can only `fetch` from non-local/absolute URLs
- 🤷 refreshing pages under `/blog` in sandbox doesn't return response

## References

- [aws-serverless-express/basic-starter](https://github.com/awslabs/aws-serverless-express/tree/master/examples/basic-starter)
- [sapper-template](https://github.com/sveltejs/sapper-template)
