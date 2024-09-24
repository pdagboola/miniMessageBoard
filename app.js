const express = require("express");
const asyncHandler = require("express-async-handler");
const path = require("node:path");
const app = express();

const messages = [
  { text: "Hey there", user: "Peter", added: new Date() },
  { text: "Hello there", user: "Paul", added: new Date() },
  { text: "What's up with you?", user: "Philip", added: new Date() },
  { text: "How are you?", user: "Pius", added: new Date() },
  { text: "Where are you off to?", user: "Philemon", added: new Date() },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messagesRouter = require("./routes/message");
const { newRoute } = require("./routes/new");
const indexRoute = require("./routes/index");

app.use("/", indexRoute);

app.use("/new", newRoute);

app.use("/message", messagesRouter);
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
