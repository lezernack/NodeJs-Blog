const mongoose = require("mongoose");

const dbPath = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(dbPath);
    console.log("Mongodb Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
