const router = require("express").Router();
const apiController = require("../../controller/apiController");

router
  .route("/")
  .get(apiController.getSchedule)
  .post(apiController.addGame);

router
  .route("/:id")
  .put(apiController.updateGame)
  .delete(apiController.deleteGame);

module.exports = router;