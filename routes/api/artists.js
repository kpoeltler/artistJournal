const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");

// Matches with "/api/artists"
router.route("/")
  .post(artistsController.create);

// Matches with "/api/artists/:id"
router.route("/:id")
  .get(artistsController.findById)
  .put(artistsController.update)
  .delete(artistsController.remove);

module.exports = router;