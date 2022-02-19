require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

const userAuthRoute = require("./routes/user.js");
const categoryRoute = require("./routes/category.js");
const productRoute = require("./routes/product.js");
const orderRoute = require("./routes/order.js");

//Routes
app.use("/user", userAuthRoute);
app.use("/product", productRoute);
app.use("/category", categoryRoute);
app.use("/order", orderRoute);

//Database
const db_url = process.env.DB_URL;
mongoose
  .connect(db_url)
  .then(() => {
    console.log("database connection established successfully");
  })
  .catch((error) => console.log("this is the error", error));

// HOme Route
app.get("/", (req, res) => {
  res.send("this is homepage");
});
app.get("*", () => {
  res.send("PAGE NOT FOUND");
});

const PORT = process.env.PORT || 8080;
//Server
app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
