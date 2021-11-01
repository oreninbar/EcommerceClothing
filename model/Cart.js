const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  cart: [{ type: Schema.Types.ObjectId, ref: "Cart", amount: String }],
});

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
