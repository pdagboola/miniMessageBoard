const { Router } = require("express");
const { getUserNames } = require("../db/queries");
// const { messages } = require("./new");

const messagesRouter = Router();

messagesRouter.get("/", (req, res) => {
  const { user, text, added } = req.query;

  res.render("message", { user, text, added });
});

module.exports = messagesRouter;
