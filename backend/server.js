const express = require("express");
const notes = require("./data/notes");
const dotenv =require("dotenv");

const app = express();


app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  console.log(req.params);
});

const PORT= process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
