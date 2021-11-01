const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  category:{type:String,required: true},  
  name: {type:String,required: true}, 
  description: {type:String,required: true}, 
  img: {type:String,required: true},  
  productId: {type:String,required: true},  
  color: [{type:String,required: true}],  
  sizes: [String],
  price: {type:String,required: true}
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
