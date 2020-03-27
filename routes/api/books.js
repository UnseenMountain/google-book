const router = require("express").Router();
const booksController = require("../../controllers/booksControllers");

// Matches with "/api/books"

router.route("/")
    .get(booksController.findById)
    .post(booksController.create);

    router.route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

    module.exports = router;