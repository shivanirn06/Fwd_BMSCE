const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/campusxchange")
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("Connection error:", err));
module.exports = mongoose;