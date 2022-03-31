const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((note) => note._id === id);
  if (!note) {
    return res.status(404).send();
  }
  res.send(note);
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
