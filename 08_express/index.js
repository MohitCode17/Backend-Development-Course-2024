const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

app.get("/about", (req, res) => {
  res.send("hyy, I'm mohit");
});

app.listen(8000, () => console.log("Server running on port 8000"));
