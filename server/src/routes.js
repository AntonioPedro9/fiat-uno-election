const express = require("express");

const UnoController = require("./controllers/UnoController");

const routes = express.Router();

routes.get("/unos", UnoController.index);
routes.put("/unos/vote/:id", UnoController.vote);

module.exports = routes;