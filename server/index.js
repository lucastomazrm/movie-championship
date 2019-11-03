const appName = require("./../package").name;
const http = require("http");
const express = require("express");
const log4js = require("log4js");
const localConfig = require("./config/local.json");

const logger = log4js.getLogger(appName);
logger.level = process.env.LOG_LEVEL || "info";

const app = express();
const server = http.createServer(app);

app.use(log4js.connectLogger(logger, { level: logger.level }));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

require("./routers/index")(app, server);

const port = process.env.PORT || localConfig.port;
server.listen(port, function() {
  logger.info(`Server listening on http://localhost:${port}`);
});

module.exports = server;
