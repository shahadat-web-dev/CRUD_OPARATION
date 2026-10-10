const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    quantity: Number,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);