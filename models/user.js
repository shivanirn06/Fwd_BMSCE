const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: { type: String, required: true }
});

const userModel = mongoose.model("User", userSchema);



const inputSchema = new mongoose.Schema({
  itemName: String,
  department: String,
  semester: String,
  description: String,
  price: Number,
  category: String,
  image: Buffer
});
module.exports = userModel, mongoose.model("Input", inputSchema);