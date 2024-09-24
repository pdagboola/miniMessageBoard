const { Router } = require("express");
const indexRoute = Router();

const { messages } = require("./new");
console.log(messages);

indexRoute.get("/", (req, res) => {
  res.render("index", { messages });
  console.log(messages);
});

module.exports = indexRoute;
