const express = require("express");

router = express.Router();

const User = require("../../model/User");
const Store = require("../../model/Store");
const Product = require("../../model/Product");
const Category = require("../../model/Category");
const Order = require("../../model/Order");

router.post("/initstore", async (req, res) =>{
    try {
        const store=new Store();
        const users=await User.find({});
        const products=await Product.find({});
        const categories=await Category.find({})
        const orders=await Order.find({})
        store.users=users;
        store.products=products;
        store.categories=categories;
        store.orders=orders;
        store.users=users;
        store.save();
        res.send(categories);
      } catch (err) {
        console.error("Error messages: ", err);
        res.status(404).send({ message: "something went wrong" });
      } finally{
        res.end()
      }
});
module.exports = router;
