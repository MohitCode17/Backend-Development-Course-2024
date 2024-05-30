const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${Date.now()} - ${req.url} New request received\n`;

  if (req.url === "/favicon.ico") return;

  fs.appendFile("./log.txt", log, (err) => {
    if (err) return console.log(err);
    switch (req.url) {
      case "/":
        res.end("Welcome to Home Page");
        break;
      case "/about":
        res.end("Hyy there, I'm Mohit");
        break;
      case "/contact":
        res.end("Mail at: mohit@gmail.com");
        break;
      default:
        res.end("404 page not found!!");
    }
  });
});

server.listen(8000, () => console.log("Server running on port 8000"));
