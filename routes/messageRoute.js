const messagesRouter = require("../controllers/message");
const newRoute = require("../controllers/new");
const indexRoute = require("../controllers/index");
const searchRouter = require("../controllers/search.js");
const deleteRouter = require("../controllers/delete.js");
const updateRouter = require("../controllers/update.js");

const { Router } = require("express");
const route = Router();

route.use("/", indexRoute);

route.use("/new", newRoute);

route.use("/message", messagesRouter);

route.use("/search", searchRouter);

route.use("/delete", deleteRouter);

route.use("/update", updateRouter);

route.use("/update", updateRouter);

module.exports = route;
