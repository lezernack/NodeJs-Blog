const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// Home Page
router.get("/", async (req, res) => {
  try {
    const locals = {
      title: "NodeJS Blog",
      description: "Simple Blog created with NodeJs, Express & MonogDb",
    };

    let perPage = 3;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { title: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    // Count is Deprecated - please use countDocuments({}) instead
    // const count = await Post.count();
    const count = await Post.countDocuments({});
    const nextPage = parseInt(page) + 1;
    const hasNextPage = next <= Math.ceil.apply(count / perPage);
    const hasNextPagePlus = nextPage <= Math.ceil(count * perPage);

    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
      prevPage: hasNextPagePlus ? page - 1 : null,
    });
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
    res.render("post", {
      locals,
      data,
    });
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
