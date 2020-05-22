const config = require('config');
const router = require('./app/router');
const logger = require('./core/logger.core');
const app = require('./core/express.core')(config.get('apiVersionUrl'))(router)(
  logger
);

const pg = require('./core/pg.core');

const startServer = () =>
  new Promise((resolve, reject) => {
    app.listen(config.get('port') || 8000, err => {
      if (err) return reject(err);
      return resolve();
    });
  });

const start = async () => {
  try {
    await startServer();
    await pg.connect(config.get('pgUrl'));

    logger.info(`${'[POSTGRES]'} connecting to ${config.get('pgUrl')}`);
    logger.info(
      `${'[MAIN]'} Server is listening on port ${config.get('port')}`
    );
  } catch (error) {
    logger.info(error);
    process.exit(1);
  }
};

start();

const shutdown = signal => async err => {
  logger.log(`${signal}...`);
  if (err) logger.error(err.stack || err);

  await pg.close();
  logger.info(`${signal} signal received.`);
  process.exit(1);
};

process.on('error', shutdown('err'));

process.on('SIGTERM', shutdown('SIGNTERM'));
