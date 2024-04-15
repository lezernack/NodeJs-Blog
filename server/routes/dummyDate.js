const Post = require("../models/post");

function insertPostDate() {
  Post.insertMany([
    {
      title: "Post One",
      body: "This is the first post we will be adding.",
    },
    {
      title: "Post Two",
      body: "This is another post we will including in our database.",
    },
  ]);
}

// insertPostDate();
