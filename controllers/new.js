const { Router } = require("express");
const newRoute = Router();
// const { messages } = require("./index");
const { insertUserName } = require("../db/queries");

newRoute.get("/", (req, res, next) => {
  res.render("form");
  next();
});
newRoute.post("/", async (req, res) => {
  const author = req.body.author;
  const message = req.body.message;
  await insertUserName(author, message);
  res.redirect("/");
});

module.exports = newRoute;
