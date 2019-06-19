'use strict';

const posts = require('/opt/data/posts');

exports.handler = async () => ({
  statusCode: 200,
  body: JSON.stringify(
    posts.map(post => ({ title: post.title, slug: post.slug }))
  ),
});
