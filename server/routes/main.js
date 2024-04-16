const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// Home Page
router.get("/", async (req, res) => {
  const locals = {
    title: "NodeJS Blog",
    description: "A Blog Template application that will be used for your use.",
  };

  try {
    const data = await Post.find().sort({ createdAt: "desc" });
    res.render("index", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
