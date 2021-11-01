const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  users:[{ type: Schema.Types.ObjectId, ref: "User" }],
  categories:[{ type: Schema.Types.ObjectId, ref: "Category" }],
  products:[{ type: Schema.Types.ObjectId, ref: "Product" }],
  orders:[{ type: Schema.Types.ObjectId, ref: "Order" }]
});

const Store = mongoose.model("store", storeSchema);
module.exports = Store;
