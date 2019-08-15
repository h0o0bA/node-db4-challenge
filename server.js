const express = require("express");
const helmet = require("helmet");

const RecipesRouter = require("./recipes/recipes-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/recipes", RecipesRouter);

server.get("/", (req, res) => {
  res.send("<h2>Node DB IV Challange!</h2>");
});

module.exports = server;
