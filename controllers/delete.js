const { Router } = require("express");
const deleteRouter = Router();
const { deleteUserName } = require("../db/queries");
const { initializeDatabase } = require("../db/populatedb");
deleteRouter.post("/", async (req, res) => {
  await deleteUserName();
  initializeDatabase();

  res.redirect("/");
});

module.exports = deleteRouter;
