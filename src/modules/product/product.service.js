const Product = require("./product.model");
const ApiError = require("../../utils/ApiError");

const createProduct = (payload) => Product.create(payload);

const getAllProducts = () => Product.find();

const updateProduct = async (id, payload) => {
  const product = await Product.findById(id);
  if (!product) throw new ApiError(404, "Product not found");

  const allowed = ["name", "price", "description", "quantity"];
  allowed.forEach((key) => {
    if (payload[key] !== undefined) product[key] = payload[key];
  });

  return product.save();
};

const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) throw new ApiError(404, "Product not found");
  return product;
};

module.exports = { createProduct, getAllProducts, updateProduct, deleteProduct };