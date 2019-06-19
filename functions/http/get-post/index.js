'use strict';

const posts = require('/opt/data/posts');

const lookup = new Map();
posts.forEach(post => {
  lookup.set(post.slug, JSON.stringify(post));
});

exports.handler = async req => {
  const { slug } = req.pathParameters;

  if (lookup.has(slug)) {
    return { statusCode: 200, body: lookup.get(slug) };
  }
  return { statusCode: 404, body: JSON.stringify({ message: 'Not found' }) };
};
