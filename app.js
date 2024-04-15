require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 4000;

const connectDb = require("./server/config/db");
connectDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
