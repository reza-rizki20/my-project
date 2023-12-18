const express = require("express");
const app = express();
const path = require("path");
// const dataWeb = require("./data/json");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/search", (req, res) => {
  res.render("search");
  // console.log("HI");
});

app.get("/guessNumber", (req, res) => {
  res.render("guessNumber");
  // console.log("HI");
});

app.get("/scoreBoard", (req, res) => {
  res.render("scoreBoard");
  // console.log("HI");
});

app.get("/dadJokes", (req, res) => {
  res.render("dadJokes");
  // console.log("HI");
});

app.listen(3000, () => {
  console.log(`Listen On Port 3000`);
});

app.get("*", (req, res) => {
  res.render("notFound");
  // console.log("HI");
});
