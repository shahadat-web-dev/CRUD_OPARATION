const express = require("express");
const controller = require("./product.controller");

const router = express.Router();

router.post("/create", controller.create);
router.get("/", controller.getAll);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;