
const mongoose = require("mongoose");
const { dbUri } = require("./env");

const connectDB = async () => {
  await mongoose.connect(dbUri);
  console.log("MongoDB Connected.");
};

module.exports = connectDB;