const { Router } = require("express");
const { searchUserNames } = require("../db/queries");
const searchRouter = Router();

searchRouter.get("/", (req, res) => {
  res.render("search");
});

searchRouter.post("/", async (req, res) => {
  const { search } = req.body;
  const users = await searchUserNames(search);
  console.log("Search results:", users);

  const userNotFound =
    "No users with this name exists in our database, try again";
  if (users.length === 0) {
    res.render("searchResults", { users, userNotFound });
  } else {
    console.log(users);
    res.render("searchResults", { users });
  }
});

module.exports = searchRouter;
