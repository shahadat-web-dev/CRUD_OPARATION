// src/server.js
const app = require("./app");
const connectDB = require("./config/db");
const { port } = require("./config/env");

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => console.log(`Server is running on ${port}`));
  } catch (err) {
    console.log("Database Connection Error:", err.message);
    process.exit(1);
  }
};

startServer();