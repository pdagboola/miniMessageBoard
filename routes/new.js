const { Router } = require("express");
const newRoute = Router();

const messages = [
  { text: "Hey there", user: "Peter", added: new Date() },
  { text: "Hello there", user: "Paul", added: new Date() },
  { text: "What's up with you?", user: "Philip", added: new Date() },
  { text: "How are you?", user: "Pius", added: new Date() },
  { text: "Where are you off to?", user: "Philemon", added: new Date() },
];
newRoute.get("/", (req, res, next) => {
  res.render("form");
  next();
});
newRoute.post("/", (req, res, next) => {
  const author = req.body.author;
  const message = req.body.message;
  messages.push({ text: message, user: author, added: new Date() });
  // res.send(`Your name is ${author}, your greeting is ${message}`);
  console.log(messages);
  res.redirect("/");
  next();
});

module.exports = { newRoute, messages };
