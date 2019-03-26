const fp = require('fastify-plugin');

module.exports = fp((app, opts, next) => {
  // Load compression. Use nginx in large scale scenarios for better performance
  app.register(require('fastify-compress'), { global: '*' });

  // Load body parser
  app.register(require('fastify-formbody'));

  // Load and configure CORS
  app.register(require('fastify-cors'), { origin: true, logLevel: 'warn' });

  // Load helmet header settings
  app.register(require('fastify-helmet'), { logLevel: 'warn' });

  next();
});
