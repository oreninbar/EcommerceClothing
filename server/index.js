const express = require("express");
const app = express();
const api_categories = require("./route/categories.js");
const api_orders = require("./route/orders.js");
const api_products = require("./route/products.js");
const api_users = require("./route/users.js");
const api_store = require("./route/store.js");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ecommerceDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

app.use("/", api_categories);
app.use("/", api_orders);
app.use("/", api_products);
app.use("/", api_users);
app.use("/", api_store);

app.listen(8080, () => {
  console.log(`Running on port 8080`);
});
