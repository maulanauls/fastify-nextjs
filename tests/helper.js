// This file contains code that we reuse
// between our tests.

import Fastify from 'fastify';
import fp from 'fastify-plugin';
import App from '../server/lib/loaders';

// Fill in this config with all the configurations
// needed for testing the application
const config = () => ({
  logger: {
    level: 'warn',
    prettyPrint: {
      colorize: true,
      translateTime: 'HH:MM:ss',
    },
  },
  pluginTimeout: 10000,
});

// Automatically build and tear down our instance
const build = () => {
  jest.setTimeout(5 * 60 * 1000);

  // eslint-disable-next-line new-cap
  const app = Fastify();

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  app.register(fp(App), config());

  return app;
};

export { config, build };
