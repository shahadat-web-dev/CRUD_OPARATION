const express = require("express");
const routes = require("./routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Product Crud Api" });
});

app.use("/api/v1", routes);

app.use(errorHandler); // sobar sheshe thakte hobe

module.exports = app;