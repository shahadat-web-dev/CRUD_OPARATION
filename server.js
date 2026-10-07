require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


const mongodb_URI = process.env.DB_URI;
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Product Crud Api",
  });
});

mongoose.connect(mongodb_URI).then(() => {
  console.log("MongoDB Connected.");
}).catch((err) => {
  console.log("Database Connection Error:", err.message);
});


const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    quantity: Number,
  },
  {
    versionKey: false,
  }
);


const Product = mongoose.model("Product", productSchema);


// CREATE
app.post("/api/v1/product/create", async (req, res) => {
  const ProductReq = req.body;

  // console.log(ProductReq);
  
  const product = await Product.create(ProductReq);

  console.log("Product Request to me", ProductReq);

  res.json({
    message: "Create Product",
    data: product
  })

});


// GET ALL ProductS
app.get("/api/v1/product", async (req, res) => {

  const product = await Product.find();

  res.json({
    message: "Get All Product",
    data: product
  })

});


//  UPDATE
// app.patch("/api/v1/product/\:id", async (req, res) => {

//  const product = await Product.findById(req.params.id);

//  product.name = req.body.name;

//  product.price = req.body.price;

//  product.description = req.body.description;

//  product.quantity = req.body.quantity;

//  await product.save();

//  res.json({

//  message: "Update Product",

//  data: product

//  });

// });



// UPDATE
app.patch("/api/v1/product/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (req.body.name !== undefined) {
    product.name = req.body.name;
  }

  if (req.body.price !== undefined) {
    product.price = req.body.price;
  }

  if (req.body.description !== undefined) {
    product.description = req.body.description;
  }

  if (req.body.quantity !== undefined) {
    product.quantity = req.body.quantity;
  }

  await product.save();

  res.json({
    message: "Update Product",
    data: product,
  });
});


// DELETE
app.delete("/api/v1/product/:id", async (req, res) => {

  const product = await Product.findByIdAndDelete(req.params.id);
  console.log(req.params.id);

  res.json({
    message: "Delete Product",
  });

});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});



