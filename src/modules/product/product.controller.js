const catchAsync = require("../../utils/catchAsync");
const productService = require("./product.service");

const create = catchAsync(async (req, res) => {
  const data = await productService.createProduct(req.body);
  res.status(201).json({ message: "Create Product", data });
});

const getAll = catchAsync(async (req, res) => {
  const data = await productService.getAllProducts();
  res.json({ message: "Get All Product", data });
});

const update = catchAsync(async (req, res) => {
  const data = await productService.updateProduct(req.params.id, req.body);
  res.json({ message: "Update Product", data });
});

const remove = catchAsync(async (req, res) => {
  await productService.deleteProduct(req.params.id);
  res.json({ message: "Delete Product" });
});

module.exports = { create, getAll, update, remove };