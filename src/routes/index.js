const express = require("express");
const productRoutes = require("../modules/product/product.routes");

const router = express.Router();

router.use("/product", productRoutes);
// notun module hole ekhane add korbe: router.use("/user", userRoutes);

module.exports = router;