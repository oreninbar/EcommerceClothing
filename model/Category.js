const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  id: { type: String, required: true},
  img: {type:String,required: true},  
  title: {type:String,required: true}  
});

const Category = mongoose.model("category", categoriesSchema);
module.exports = Category;
