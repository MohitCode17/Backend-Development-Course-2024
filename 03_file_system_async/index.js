const fs = require("fs");

// 👉 CREATE A FILE
fs.writeFile(
  "./test.txt",
  "This file is created by using fs module.\n",
  (err) => {
    if (err) console.log(err);
    else console.log("Done!");
  }
);

// 👉 READ A FILE
fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

// 👉 APPEND DATA INTO EXISTING FILE
fs.appendFile(
  "./test.txt",
  "This line is added by append method in fs module.\n",
  (err) => {
    if (err) console.log(err);
    else console.log("Done!");
  }
);

// 👉 COPY FILE
fs.copyFile("./test.txt", "./test-copy.txt", (err) => {
  if (err) console.log(err);
  else console.log("Done!");
});

// 👉 CREATE A FOLDER
fs.mkdir("./temp", { recursive: true }, (err) => {
  if (err) console.log(err);
  else console.log("Done!");
});

// 👉 DELETE A FILE
fs.unlink("./test-copy.txt", (err) => {
  if (err) console.log(err);
  else console.log("Deleted!");
});

// 👉 DELETE A FOLDER
fs.rmdir("./temp", (err) => {
  if (err) console.log(err);
  else console.log("Deleted!");
});
