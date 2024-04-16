const Post = require("../models/post");

function insertPostDate() {
  Post.insertMany([
    {
      title: "Entry One",
      body: "This is the first entry into my new blog.",
    },
    {
      title: "Entry Two",
      body: "This is another entry I will including in my blog.",
    },
  ]);
}

insertPostDate();
