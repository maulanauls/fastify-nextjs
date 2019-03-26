const Fastify = require('fastify');
const loaders = require('./loaders');
const config = require('../config');

const appOptions = () => ({
  pluginTimeout: 10000,
  trustProxy: true,
  logger: config.logger,
});

const buildApp = () => {
  const app = Fastify(appOptions());

  app.register(loaders);

  return app;
};

module.exports = buildApp();
