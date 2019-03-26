const fp = require('fastify-plugin');

module.exports = fp((app, opts, next) => {
  const options = {};
  if (process.env.NODE_ENV !== 'production') {
    options.dev = true;
  }
  app.register(require('fastify-nextjs'), options).after(() => {
    app.next('/');
  });

  next();
});
