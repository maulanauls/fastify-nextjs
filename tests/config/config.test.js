import fs from 'fs';
import config from '../../server/config';

describe('Test server config', () => {
  test('Expect a port to be set', (done) => {
    expect(config.port).not.toBe(null);
    expect.hasAssertions();

    done();
  });

  test('Expect database URI to be set', (done) => {
    expect(config.db.uri).not.toBe(null);
    expect.hasAssertions();

    done();
  });

  test('Expect app name to be set', (done) => {
    expect(config.app.appname).not.toBe(null);
    expect.hasAssertions();

    done();
  });

  test('Expect validateJwtSecret to pass', (done) => {
    expect(config.utils.validateJwtSecret(config, true)).toBe(true);
    expect.hasAssertions();

    done();
  });

  test('Expect validateJwtSecret to fail in production environment using default JWT secret', (done) => {
    const originalEnv = process.env.NODE_ENV;
    const originalJwtSecret = process.env.JWT_SECRET;
    process.env.NODE_ENV = 'production';
    config.jwt.secret = 'CHANGE ME IMMEDIATELY!';

    expect(config.utils.validateJwtSecret(config, true)).toBe(false);
    expect.hasAssertions();

    config.jwt.secret = originalJwtSecret;
    process.env.NODE_ENV = originalEnv;

    done();
  });

  test('Expect config to be able to read Docker secrets successfully', (done) => {
    expect(config.db.domain).toBe(
      fs.readFileSync(process.env.DB_DOMAIN).toString(),
    );
    expect(config.db.dbName).toBe(
      fs.readFileSync(process.env.POSTGRES_DB).toString(),
    );
    expect(config.db.options.user).toBe(
      fs.readFileSync(process.env.POSTGRES_USER).toString(),
    );
    expect(config.db.options.pass).toBe(
      fs.readFileSync(process.env.POSTGRES_PASSWORD).toString(),
    );
    expect(config.redis.url).toBe(
      fs.readFileSync(process.env.REDIS_URL).toString(),
    );
    expect.hasAssertions();

    done();
  });
});
