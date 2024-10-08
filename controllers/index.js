const { Router } = require("express");
const indexRoute = Router();
const { getUserNames } = require("../db/queries");

// const { messages } = require("./new");
// console.log(messages);

indexRoute.get("/", async (req, res) => {
  const messages = await getUserNames();
  console.log(messages);
  const usersNotFound = `There are currently no user greetings in the database, 
  Go on and add a greeting!`;
  if (messages.length === 0) {
    res.render("index", { messages, usersNotFound });
  } else {
    res.render("index", { messages });
    console.log(messages);
  }
});

module.exports = indexRoute;
