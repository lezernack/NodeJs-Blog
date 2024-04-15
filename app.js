require("dotenv").config();

const expressLayouts = require("express-ejs-layout");
const express = require("express");
const app = express();
const PORT = 4000;

const connectDB = require("./server/config/db");
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(expressLayouts);
app.use(express.static("public"));
app.set("Layout", "./Layouts/main");
app.set("view enging", "ejs");

app.use("/", require("./server/routes/main"));

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
