const express = require("express");

router = express.Router();

const Product = require("../../model/Product");

router.get("/products", async (req, res) => {
  try {
    let products = await Product.find({});
    res.status(200).send(products);
  } catch (err) {
    console.error("Error messages :", err);
  } finally {
    res.end();
  }
});

router.delete("/delete_all", async (req, res) => {
  try {
    await Product.deleteMany();
    res.status(200).send("Delete all the users");
  } catch (error) {
    console.error("Error messages :", err);
  } finally {
    res.end();
  }
});

router.post("/add_product", async (req, res) => {
  let product = new Product(req.body);
  try {
    await product.save();
    res.status(200).send("made the save to the DB");
  } catch (err) {
    console.error("Error messages: ", err);
  } finally {
    res.end();
  }
});

router.get("/product/:productId", async (req, res) => {
  let { productId } = req.params;
  try {
    let product = await User.find({ productId: `${productId}` });
    res.send(product[0]);
  } catch (err) {
    console.error("Error messages: ", err);
  } finally {
    res.end()
  }
});

router.put("/update_sizes", async (req, res) => {
  let  {productId,sizes}  = req.body;
  try {
    await Product.findOneAndUpdate(
      { productId: `${productId}` },
      { sizes: `${sizes}` }
    );
  } catch (err) {
    console.error("Error messages: ", err);
        res.status(404).send({ message: "something went wrong" });
  } finally{
    res.end()
  }
});


router.delete("/delete_product/:productId", async (req, res) => {
  let { productId } = req.params;
  console.log(req.params);
  try {
    await User.findOneAndDelete({ productId: `${productId}` })
  } catch (err) {
    console.error("Error messages: ", err);
    res.status(404).send({ message: "something went wrong" });
  } finally{
    res.end()
  }
});

module.exports = router;
