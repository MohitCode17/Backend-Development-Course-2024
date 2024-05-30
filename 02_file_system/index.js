const fs = require("fs");

// 👉 WRITE A FILE
fs.writeFileSync("./testSync.txt", "This file is created by fs module.");

// 👉 READ A FILE
const result = fs.readFileSync("./testSync.txt", "utf-8");
console.log(result);

// 👉 APPEND A DATA TO A FILE
fs.appendFileSync(
  "./testSync.txt",
  "\nThis line added by append method using fs module."
);

// 👉 COPY A FILE
fs.copyFileSync("./testSync.txt", "./test-copy.txt");

// 👉 CREATE A FOLDER
fs.mkdirSync("./temp");
fs.writeFileSync("./temp/temp.txt", "Temparary data");

// 👉 DELETE AN EXISTING FILE
fs.unlinkSync("./temp/temp.txt");

// 👉 DELETE AN EXISTING FOLDER
fs.rmdirSync("./temp");
