const path = require('path');
const AutoLoad = require('fastify-autoload');

module.exports = (app, opts, next) => {
  // Load plugins
  app.register(AutoLoad, {
    dir: path.join(__dirname, '../plugins'),
    options: Object.assign({}, opts),
  });

  next();
};
