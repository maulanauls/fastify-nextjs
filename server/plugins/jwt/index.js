const fp = require('fastify-plugin');
const config = require('../../config');

module.exports = fp((app, opts, next) => {
  // Setup JWT plugin
  app.register(require('fastify-jwt'), {
    secret: config.jwt.secret,
    // Global default decoding method options
    decode: { complete: false },
    // Global default signing method options
    sign: {
      algorithm: config.jwt.algorithm,
      expiresIn: config.jwt.expiresIn,
      issuer: config.jwt.issuer,
    },
  });

  next();
});
