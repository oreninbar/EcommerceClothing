const express = require("express");

router = express.Router();

const Category = require("../../model/Category");

router.post("/add_category", async (req, res) => {
  let category = new Category(req.body);
  try {
    await category.save();
    res.send("made the save to the DB");
  } catch (err) {
    console.error("Error messages: ", err);
  } finally {
    res.end();
  }
});

router.get("/get_categories", async (req, res) => {
  try {
    let categories = await Category.find({});
    res.send(categories);
  } catch (err) {
    console.error("Error messages :", err);
  } finally {
    res.end();
  }
});

router.delete("/remove_categories", async (req, res) => {
  try {
    await User.deleteMany();
    res.send("Delete all the users");
  } catch (error) {
    console.error("Error messages :", err);
  } finally {
    res.end();
  }
});

router.delete("/delete_category/:name", async (req, res) => {
  let { name } = req.params;
  console.log(req.params);
  try {
    await User.findOneAndDelete({ title: `${name}` })
  } catch (err) {
    console.error("Error messages: ", err);
    res.status(404).send({ message: "something went wrong" });
  } finally{
    res.end()
  }
});

module.exports = router;
