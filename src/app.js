const express = require("express");
const cors = require("cors");

const { errorHandler } = require("./middlewares/error");
const transactionRoutes = require('./routes/transactions.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use("/api/transactions", transactionRoutes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// golab Error Middleware
app.use(errorHandler);

module.exports = app;
