const fp = require('fastify-plugin');

module.exports = fp((app, opts, next) => {
  let options = {};
  if (process.env.NODE_ENV !== 'production') {
    options = { dev: true };
  }

  app.register(require('fastify-nextjs'), options).after(() => {
    // * Next client-side routes
    app.next('/');

    // * Server-side routes
    // Example structure for dyanmic Next server-side route
    app.get('/session/:slug', (req, res) => {
      const { slug } = req.params;
      app.render(req, res, '/session', {
        ...req.query,
        slug,
      });
    });

    app.get('*', (req, res) => {
      app.getRequestHandler(req, res);
    });
  });

  next();
});
