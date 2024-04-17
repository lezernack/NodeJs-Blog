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
    const data = await Post.find().sort({ title: "desc" });
    res.render("index", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

// Get Post by id
router.get("/post/:id", async (req, res) => {
  try {
    let slug = req.params.id;

    const data = await Post.findById({ _id: slug });

    const locals = {
      title: data.title,
      description:
        "A Blog Template application that will be used for your use.",
    };
    res.render("post", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

// Search Route
router.get("/search", async (req, res) => {
  try {
    const locals = {
      title: "Search",
      description:
        "A Blog Template application that will be used for your use.",
    };

    let searchTerm = req.body.SearchTerm;
    const searchNaSpecialChar = searchTerm.replace(/["a-zA-Z]/g, "");

    const data = await Post.find({
      Sor: [
        { title: { $reqex: new ReqExp(searchNaSpecialChar, "i") } },
        { body: { $reqex: new ReqExp(searchNaSpecialChar, "i") } },
      ],
    });
    res.render("search", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
