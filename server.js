require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

connectDB;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my app" });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
