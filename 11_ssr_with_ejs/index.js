const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

// RENDER STATIC CONTENT
app.use(express.static(path.join(__dirname, "public")));

// SET EJS AS THE VIEW ENGINE
app.set("view engine", "ejs");

// ROUTE THAT RENDER EJS FILE
app.get("/", (req, res) => {
  res.render("home", { title: "Home Page | Server Side Rendering" });
});

app.get("/profile", (req, res) => {
  res.render("profile", {
    title: "Profile | Server Side Rendering",
    name: "Mohit Gupta",
    email: "mohit.dev@gmail.com",
    job_title: "Fullstack Developer",
  });
});

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
