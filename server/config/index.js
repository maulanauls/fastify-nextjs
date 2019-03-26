const log = require('pino')({ level: 'warn' });

// Validate Session Secret parameter is not set to default in production
const validateJwtSecret = (config, testing) => {
  if (
    process.env.NODE_ENV === 'production' &&
    config.jwt.secret === 'CHANGE ME IMMEDIATELY!'
  ) {
    if (!testing) {
      /* istanbul ignore next */
      log.warn(
        'WARNING: It is strongly recommended that you change ' +
          'the default JWT secret in the config while running ' +
          'in production! Please change the JWT secret in ' +
          "'config/env/production.js' to something other than the default",
      );
    }
    return false;
  }
  return true;
};

const initGlobalConfig = () => {
  // eslint-disable-next-line import/no-dynamic-require
  const config =
    process.env.NODE_ENV === 'production'
      ? require('./env/production')
      : require('./env/development');
  config.packageJson = require('../../package.json');

  validateJwtSecret(config);

  // Expose configuration utilities
  config.utils = {
    validateJwtSecret,
  };

  return config;
};

module.exports = initGlobalConfig();
