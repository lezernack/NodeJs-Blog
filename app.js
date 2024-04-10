require("dotenv").config();

const express = require("express");
const app = express;
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(prototype, () => console.log(`server is running on port: ${PORT}`));
