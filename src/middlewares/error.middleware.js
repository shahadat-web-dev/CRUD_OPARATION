const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  // invalid ObjectId hole
  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid ID" });
  }

  res.status(statusCode).json({
    message: err.message || "Something went wrong",
  });
};

module.exports = errorHandler;