const express = require("express");

router = express.Router();

const User = require("../../model/User");

router.get("/users", async (req, res) => {
  try {
    let users = await User.find({});
    res.send(users);
  } catch (err) {
    console.error("Error messages :", err);
  } finally {
    res.end();
  }
});

router.delete("/delete_all", async (req, res) => {
  try {
    await User.deleteMany();
    res.send("Delete all the users");
  } catch (error) {
    console.error("Error messages :", err);
  } finally {
    res.end();
  }
});

router.post("/adduser", async (req, res) => {
  let user = new User(req.body);
  try {
    await user.save();
    res.send("made the save to the DB");
  } catch (err) {
    console.error("Error messages: ", err);
  } finally {
    res.end();
  }
});

router.get("/user/:email", async (req, res) => {
  let { email } = req.params;
  try {
    let user = await User.find({ email: `${email}` });
    res.send(user[0]);
  } catch (err) {
    console.error("Error messages: ", err);
  } finally {
    res.end()
  }
});

router.put("/update_user", async (req, res) => {
  let { email, password } = req.body;
  try {
    await User.findOneAndUpdate(
      { email: `${email}` },
      { password: `${password}` }
    );
  } catch (err) {
    console.error("Error messages: ", err);
        res.status(404).send({ message: "something went wrong" });
  } finally{
    res.end()
  }
});

router.delete("/delete_user/:email", async (req, res) => {
  let { email } = req.params;
  console.log(req.params);
  try {
    await User.findOneAndDelete({ email: `${email}` })
  } catch (err) {
    console.error("Error messages: ", err);
    res.status(404).send({ message: "something went wrong" });
  } finally{
    res.end()
  }
});

module.exports = router;
