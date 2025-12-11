// const express = require("express");
// const cors  = require("cors");
// const mongoose = require("mongoose");
// const Post = require("./models/Post"); 

// const PORT = 8000;

// const app = express();
// app.use(cors());

// // MongoDB Database Connection
// mongoose.connect("mongodb://127.0.0.1:27017/crudmongo")
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));


// //listing API 
// app.get("/api/posts", async (req, res) => {
//     const posts = await Post.find({});
//     res.json(posts);
// })
// app.listen(PORT,()=>{
//     console.log(`Server running at http://localhost:${PORT}`)
// })
const express = require("express");
const cors  = require("cors");
const mongoose = require("mongoose");
// const Post = require("./models/Post");  // <-- import Post here

const Post = require("./models/Post");


const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/crudmongo')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error('MongoDB error',err));

// API route
// Listing API
app.get("/api/posts", async (req, res) => {
    try{
       const posts = await Post.find({});
       res.json(posts);
} catch (error) {
    res.status(500).json({message: error.message});
}
})

// Create API
app.post("/api/posts", async (req, res) => {
    try{
       const post = new Post(req.body);
       await post.save();
       res.json(post);
} catch (error) {
    res.status(400).json({message: error.message});
}
})

//Find Api
app.get("/api/posts/:id", async (req, res) => {
    try{
       const post = await Post.findById(req.params.id);
      if(!post) return res.status(404).json({message:"Post not found."})
        res.json(post);
} catch (error) {
    res.status(500).json({message: error.message});
}
})

//Update Api
app.put("/api/posts/:id", async (req, res) => {
    try{
       const post = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true,  runValidators: true}
      );
      if(!post) return res.status(404).json({message:"Post not found."})
        res.json(post);
} catch (error) {
    res.status(400).json({message: error.message});
}
})

//Delete Api
app.delete("/api/posts/:id", async (req, res) => {
    try{
       const post = await Post.findByIdAndDelete(req.params.id);
       if(!post) return res.status(404).json({message:"Post not found."})
      res.json({message:"Post deleted successfully."});
} catch (error) {
    res.status(500).json({message: error.message});
}
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
