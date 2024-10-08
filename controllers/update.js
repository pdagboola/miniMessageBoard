const { Router } = require("express");
const updateRouter = Router();
const { updateUserNames } = require("../db/queries");

updateRouter.get("/", (req, res) => {
  const { id, user, text } = req.query;

  res.render("update", { username: user, greeting: text, id: id });
});
updateRouter.post("/", async (req, res) => {
  console.log(req.body);
  const { id, user, greeting } = req.body;
  await updateUserNames(id, user, greeting);
  res.redirect("/");
});

module.exports = updateRouter;
