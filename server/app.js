require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

app.use(cors());

//middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(authJwt());
app.use(errorHandler);

//Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

//Database
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Server
app.listen(5000, () => {
  console.log("server is running http://localhost:5000");
});
