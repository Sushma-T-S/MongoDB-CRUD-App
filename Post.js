// const mongoose = require("mongoose");

// const postSchema =  new mongoose.Schema({
//     title: String,
//     body: String
// },{timestamps:true});

// module.exports = mongoose.model("Post",postSchema);
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    username: String,
    phone: String,
    address: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
