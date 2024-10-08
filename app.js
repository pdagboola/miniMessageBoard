const express = require("express");
const path = require("node:path");
const app = express();

const messagesRoute = require("./routes/messageRoute");
const { initializeDatabase } = require("./db/populatedb");
initializeDatabase();

app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", messagesRoute);
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
