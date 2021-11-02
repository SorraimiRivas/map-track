const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(authRoutes);

const mongoURI =
  "mongodb+srv://admin:admin@cluster0.hvoum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURI);

mongoose.connection.on("Connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo instance", err);
});

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
