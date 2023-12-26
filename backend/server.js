const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/app", (req, res) => {
  res.send("<h1>Hello Gjilan!</h1>");
});

app.listen(port, () => {
  connect();
  console.log(`Server is running at ${port}`);
});