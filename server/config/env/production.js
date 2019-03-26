const fs = require('fs');

// Define secrets
// let caBundle = process.env.SSL_CA;
// let privateKey = process.env.SSL_KEY;
// let certificate = process.env.SSL_CERT;
// let dbUri = process.env.DB_URI;
let dbDomain = process.env.DB_DOMAIN;
let dbName = process.env.POSTGRES_DB;
let dbUser = process.env.POSTGRES_USER;
let dbPass = process.env.POSTGRES_PASSWORD;
let redisUrl = process.env.REDIS_URL;
let jwtSecret = process.env.JWT_SECRET;

if (process.env.DOCKER_SECRETS) {
  // caBundle = fs.readFileSync(process.env.SSL_CA);
  // privateKey = fs.readFileSync(process.env.SSL_KEY);
  // certificate = fs.readFileSync(process.env.SSL_CERT);
  // dbUri = fs.readFileSync(process.env.DB_URI).toString();
  dbDomain = fs.readFileSync(process.env.DB_DOMAIN).toString();
  dbName = fs.readFileSync(process.env.POSTGRES_DB).toString();
  dbUser = fs.readFileSync(process.env.POSTGRES_USER).toString();
  dbPass = fs.readFileSync(process.env.POSTGRES_PASSWORD).toString();
  redisUrl = fs.readFileSync(process.env.REDIS_URL).toString();
  jwtSecret = fs.readFileSync(process.env.JWT_SECRET).toString();
}

module.exports = {
  app: {
    title: 'Fastify Auth Microservice',
    appname: 'fastify-auth-micro',
  },
  host: '0.0.0.0',
  port: 5000,
  domain: 'localhost',
  secure: {
    ssl: false,
    // caBundle,
    // privateKey,
    // certificate,
  },
  db: {
    domain: dbDomain || 'localhost',
    dbName,
    uri: `postgres://${dbUser}:${dbPass}@${dbDomain}/${dbName}`,
    debug: true,
    options: {
      user: dbUser,
      pass: dbPass,
    },
  },
  redis: {
    useRedis: false,
    url: redisUrl,
  },
  logger: {
    level: 'info',
    file: `${process.env.LOG_PATH}/app.log`,
    redact: ['req.headers.authorization', 'req.body.password'],
    serializers: {
      req(req) {
        return {
          method: req.method,
          url: req.url,
          headers: req.headers,
          hostname: req.hostname,
          remoteAddress: req.ip,
          remotePort: req.connection.remotePort,
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
        };
      },
    },
  },
  jwt: {
    secret: jwtSecret || 'CHANGE ME IMMEDIATELY!',
    audience: 'localhost',
    issuer: 'localhost',
    algorithm: 'HS256',
    expiresIn: 24 * 60 * 60 * 1000, // Expires in 24 hours
  },
};
