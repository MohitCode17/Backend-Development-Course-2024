const path = require("path");

console.log(path.dirname(__dirname)); // Returns the directory name of the directory that contains the current module's directory

console.log(path.dirname(__filename)); // Working directory name
console.log(path.basename(__filename)); // Working directory name with filename
console.log(path.extname(__filename)); // Working directory name with filename extension

console.log(path.parse(__filename)); // Return Object
