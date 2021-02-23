import express from "express";

import config from "./config";
import logger from "./loaders/logger";

const server = async () => {
  const app = express();

  await require("./loaders/express").default(app);

  app
    .listen(config.port, () => {
      logger.info(`
        ############################
          🔥  Server  Starting  🔥
           http://localhost:${config.port}
        ############################
        `);
    })
    .on("error", (err) => {
      logger.error(err);
      process.exit(1);
    });
};

server();
