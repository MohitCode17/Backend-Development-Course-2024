const express = require("express");
const users = require("./FAKE-DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

// MIDDLEWARE FOR BODY PARSEING
app.use(express.json());

// EXAMPLE OF APPLICATION LEVEL MIDDLEWARE
app.use((req, res, next) => {
  let logs = `${Date.now()} - ${req.method} - ${
    req.path
  } new request received\n`;

  fs.appendFile("./log.txt", logs, (err) => {
    if (err) return res.json({ error: err });

    next();
  });
});

// EXAMPLE OF ROUTE LEVEL MIDDLEWARE
const checkForRole = (req, res, next) => {
  const role = req.query.role;

  if (!role) return res.json({ message: "Please provide a role" });

  if (role === "admin") {
    next();
  } else {
    res.json({ message: "Unauthorized" });
  }
};

// RENDER HTML CONTENT (USERNAME & EMAIL)
// ROUTE --> /users
app.get("/users", (req, res) => {
  const html = `
        <ul>
            ${users
              .map((user) => `<li>${user.first_name} - ${user.email}</li>`)
              .join("")}
        </ul>
    `;
  res.send(html);
});

// ROUTE FOR RENDER USERS DATA IN JSON
// ROUTE --> /api/users
app.get("/api/users", checkForRole, (req, res) => {
  res.json(users);
});

// ROUTE FOR CREATING A NEW USER
// ROUTE --> /api/users
app.post("/api/users", (req, res) => {
  const userData = req.body;
  const isUserExists = users.some((user) => user.email === userData.email);

  if (isUserExists)
    return res.status(409).json({ msg: "User already exists!" });

  users.push({ ...userData, id: users.length + 1 });

  fs.writeFile("./FAKE-DATA.json", JSON.stringify(users), (err) => {
    if (err) return res.status(500).json({ msg: "Something went wrong!" });

    res.status(201).json({ msg: "User created!" });
  });
});

// ROUTE TO RENDER USER WITH ID
// ROUTE --> /api/users/:id
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) return res.status(404).json({ msg: "User not found!" });

  res.status(200).json(user);
});

// ROUTE TO UDATE USER DETAILS
// ROUTE --> /api/users/:id
app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedUserData = req.body;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) return res.status(404).json({ msg: "No user found!" });

  users[userIndex] = { ...users[userIndex], ...updatedUserData };

  fs.writeFile("./FAKE-DATA.json", JSON.stringify(users), (err) => {
    if (err) return res.status(500).json({ msg: "Something went wrong!" });

    res.status(201).json({ msg: "User updated!" });
  });
});

// ROUTE FOR DELETE A USER
// ROUTE --> /api/users/:id
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) return res.status(404).json({ msg: "No user found!" });

  users.splice(userIndex, 1);

  fs.writeFile("./FAKE-DATA.json", JSON.stringify(users), (err) => {
    if (err) return res.status(500).json({ msg: "Something went wrong!" });

    res.status(201).json({ msg: "User removed!" });
  });
});

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
