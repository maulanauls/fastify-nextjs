const app = require('./lib/app');
const config = require('./config');

app.listen(config.port, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
    throw err;
  }
});
