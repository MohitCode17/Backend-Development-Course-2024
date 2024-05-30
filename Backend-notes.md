# Complete Backend Notes

## What is Node.js?

Node.js is a free, open source, cross-platform JavaScript runtime environment that allow to run JavaScript in the server.

Initially, JavaScript was used in frontend, to make UI interactive and dynamic. While Node.js allows developer to use JavaScript in frontend as well as backend also.

Node.js is built on the top of "The Chrome v8 Engine"

**The Chrome V8 Engine**

The V8 engine is a high performance JavaScript engine, which written in C++ that complies JavaScript code into machine code.

**Parsing of JavaScript code:-**

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20211002235143/workinggfg.png" alt="working of chrome v8 engine" style="width: 500px" />

## Getting started with Node.js

👉 Install Node.js: [https://nodejs.org](https://nodejs.org/en).

👉 Install Code Editor: [https://code.visualstudio.com/](https://code.visualstudio.com/)

👉 Install Postman: [https://www.postman.com/](https://www.postman.com/)

## Prerequisite JavaScript Topics

Before diving into NodeJS, it's important to have a solid understanding of JavaScript fundamentals. Here are some key topics in JavaScript that you should learn before starting with NodeJS:

1. Variables and Data Types
2. Functions
3. Control Flow Statements
4. Objects
5. Arrays methods: push, pop, shift, unshift, slice, splice, map, filter, and reduce.
6. ES6 Features
7. Asynchronous JavaScript: Promises and async-await.
8. Error Handling: try & catch statements
9. Modules and Modularization: import and export statements
10. DOM Manipulation (Optional)

## Write your first Node.js Program

```
let a = 10;
let b = 5;

console.log(a + b);
```

**How to run Node.js Program?**

We can run that above program directly on our local machine by installing Node.js.

To run above code, you can open terminal inside a **vs code** by pressing **ctrl+`**.

Type **node** and press enter, A node.js interactive programming enviroment will be open called **REPL**.

## What is REPL?

REPL stands for "Read-Eval-Print-Loop". It's an interactive programming environment that allows you to enter and execute JavScript codes snippets.

The REPL is useful for experimenting with code, debugging, and testing small snippets of JavaScript.

```
Now let's execute some another code:-

console.log(window);

// Uncaught ReferenceError: window is not defined
```

**Why window cannot be access inside Node environment?**

In NodeJS, the "window" object is not available by default because NodeJS does not have a browser-like environment. NodeJS is a server-side JavaScript runtime environment.

The window object is a part of the Browser Object Model (BOM) and is specific to web browsers.

**Things, which you can't access in Node.js**

- DOM Manipulation
- Browser-specific APIs: Such as window, document, navigator, localStorage, fetch, etc.
- Browser Events: clicks, mouse movements, keyboard inputs, etc.
- CSS Manipulation
- AJAX and Fetch

```
✅Assignment - 1

👉 Problem 1: Conditional Statement

You run a movie theater, and you want to offer discounts based on person's age. Write a JavaScript program that asks the user for their age and then displays a message.

- If the age is less than 18, display "You get a 20% discount!"
- If the age is between 18 and 65(inclusive), display "Normal ticket price applies."
- If the age is 65 or older, display "You get a 30% senior discount!"

👉 Problem 2: Variables

Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length and width of the rectangle and store them in variables. Calculate and display the area using the formula: `area = length * width`.

👉 Problem 3: Objects and Properties

You're creating an online store. Define a JavaScript object named "product" with the following properties.

- name(string)
- price(number)
- inStock(boolean)

Create at least three products using your object template and display their details using console.log.

👉 Problem 4: Arrays

You're organizing a party and want to keep track of the guest list. Create an array called "guestList" and add the names of at least five guests. Then, write a program that checks if a given name is on the guest list. If the name is found, display "Welcome to the party, [name]!"; otherwise, display "Sorry, you're not on the guest list!."
```

```
✅Assignment - 1 Solutions

👉 Solution 1: Conditional Statement

const prompt = require("prompt-sync")();
const age = Number(prompt("Enter your age: "));

age < 18
  ? console.log("You get a 20% discount")
  : age >= 18 && age < 65
  ? console.log("Normal ticket price applies")
  : age >= 65
  ? console.log("You get a 30% senior discount!")
  : console.log("Enter a valid age");

💡 Note:-
I've installing a package called prompt-sync as prompt, alert and confirm are not a part of NodeJS.

You can install this package using `npm install prompt-sync` in node terminal. We'll later see, what is npm packages?

👉 Solution 2: Variables

const prompt = require("prompt-sync")();
const length = Number(prompt("Enter a length of reatangle: "));
const width = Number(prompt("Enter a width of reatangle: "));

const area = length * width;
console.log(`Area of rectangle: ${area}`);

👉 Solution 3: Objects and Properties

const product = [
  {
    name: "Black Hoodie",
    price: 799,
    inStock: true,
  },
  {
    name: "Baggy Trowser",
    price: 1099,
    inStock: false,
  },
  {
    name: "Sparx Chelsa Boot",
    price: 2599,
    inStock: true,
  },
];

console.log(product);

👉 Solution 4: Arrays

const guestList = ["Mohit", "Akash", "John", "Alicia", "Ronak", "Jane karter"];

function checkGuestList(name) {
  if (guestList.includes(name)) {
    console.log(`Welcome to the party, ${name}!`);
  } else {
    console.log("Sorry, you're not on the guest list!");
  }
}

checkGuestList("Mohit");
checkGuestList("Rohan");
```

## Modules in Node.js

Modules are reusable blocks of code that encapsulate related functionality. They allow you to organize your code into smaller, manageable files or directories, making it easier to maintain and reuse.

Node.js by default uses the Common.js module system. Each files is treated as a separate modules, and you can use the require() function to import modules and the module.exports or exports object to export functionality from a module.

**Custom Module**

```
/math.js

function add(a, b) {
    return a + b;
};

function sub(a, b) {
    return a - b;
};

module.exports = {
    add,
    sub
}
```

You can then use this module in another file like this:

```
/index.js

const math = require("./math");

console.log(math.add(18 + 2));
console.log(math.sub(15 - 5));
```

## File System in Node.js

Node.js has a set of built-in modules, One of is file system. The file system module allows you to work with the file system on your computer.

Here're some common uses of fs module:

```
SYNCHRONOUS WAY...

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
```

```
ASYNCHRONOUS WAY...

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
```

In NodeJS, handling the file system can be done synchronously or asynchronously.

1. Synchronous File System Operations:

   - In synchronous operations, the execution of the code waits until the operation completes before moving to the next line.

   - Synchronous file system methods in NodeJS typically have names ending with Sync. For example: fs.readFileSync(), fs.writeFileSync(), etc.

   - While synchronous operations are easier to understand but they can block the execution of other tasks in your program, especially in I/O-bound operations. This blocking behavior can lead to reduced performance and scalability.

2. Asynchronous File System Operations:

   - In asynchronous operations, the code continues to execute without waiting for the operation to complete. A callback function is typically used to handle the result of the operation.

   - Asynchronous file system methods do not block the execution of other tasks. They are more suitable for I/O-bound operations where waiting for the operation to complete would be inefficient.

   - NodeJS provides asynchronous file system methods without the Sync suffix. For example: fs.readFile(), fs.writeFile(), etc.

## Path Module in Node.js

The Path module provides a way of working with directories and file paths.

Here's the basic use of path module:-

```
const path = require("path");

console.log(path.dirname(__dirname)); // Returns the directory name of the directory that contains the current module's directory

console.log(path.dirname(__filename)); // Working directory name
console.log(path.basename(__filename)); // Working directory name with filename
console.log(path.extname(__filename)); // Working directory name with filename extension

console.log(path.parse(__filename)); // Return Object
```

## Building HTTP Server in Node.js

Node.js has built-in module called HTTP, which allows Node.js to transfer data over the HTTP protocol.

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

The **createServer()** method to create an HTTP server.

👉 Here's the basic example of node.js server:-

```
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello from server!");
});

server.listen(8000, () => console.log(`Server running on port 8000`));
```

The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8000.

This callback function typically has two parameters: req and res.

1. `req` stands for "request" and represents the incoming HTTP request made by a client. It contains information about the request, such as the URL, HTTP headers, request method, request body, and other relevant data.

2. `res` stands for "response" and is used to send the HTTP response back to the client. It allows you to set the status code, headers, and the response body that will be sent back to the client.

```
✅Assignment - 2

Create a HTTP node server that logs the requested URL and the time when a user tries to access different routes like home, about, and contact.
```

```
✅Assignment - 2 Solution

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
```

## Node.js Behind the Scene [TODO]

## NPM (Node Package Manager)

NPM is a package manager for Node.js packages, or modules.

We can use NPM packages in our files. Basic difference between Node core module and NPM modules that they created by third parties.

What is Package.Json file?

The package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

Create Package.json file:-

```
- npm init: Initialize a new or existing npm package
- package name: Anything
- version: Default Version
- description: Anything
- entry point: root file (index.js)
- git repository:
- keyword:
- author: Anyone
```

## URL Handling in Node.js

A URL, or Uniform Resource Locator, is a string of characters that provides a reference to a web resource such as a website, a file, an image, or any other resource available on the internet.

```
Example: https://www.example.dev/
```

A typical URL consists of several components:

- Protocol: The protocol used to access the resource. Common protocols include HTTP and HTTPS for web pages.

- Domain name: Identifier or user friendly name of IP Addess of the server. `www.example.dev`

- Path: This specifies the location of the resource on the server's filesystem.

  - `/` specify Root path or Home page,
  - `/about` is path for about page,
  - `/project/1` specify the nested path,

- Query Parameters: These are optional parameters that are appended to the URL to provide additional information to the server. Query parameters are separated from the URL path by a question mark (?) and are in the form of key-value pairs.

  - `/about?userId=1&a=2` after question-mark (?) `?userId=1&a=2` are query parameters.

## HTTP Methods

HTTP is a protocol, or a set of rules, for accessing resources on the web. Resources could mean anything from HTML files to data from a database, photos, text, and so on.

👉 Client Side Architecture:-

In order to understand the HTTP methods, it’s important to cover the concept of client/server architecture. This architecture describes how all web applications work and defines the rules for how they communicate.

A client application is the one that a user is actually interacting with, that's displaying the content.

A server application is the one that sends the content, or resource, to your client application.

The main reason for this separation is to secure sensitive information. Your entire client application gets downloaded into the browser, and all of the data can be accessed by anyone accessing your web page.

This architecture helps protect things like your API keys, personal data, and more.

👉 The Anatomy of an HTTP Request

An HTTP request must have the following:

- An HTTP method (like GET)
- A host URL (like https://api.spotify.com/)
- An endpoint path(like v1/artists/{id}/related-artists)

A request can also optionally have:

- Body
- Headers
- Query strings
- HTTP version

👉 The Anatomy of an HTTP Response

A response must have the following:

- Protocol version (like HTTP/1.1)
- Status code (like 200)
- Status text (OK)
- Headers

👉 HTTP Methods Explain

**POST** request:

We use POST to create a new resource. A POST request requires a body in which you define the data of the entity to be created.

A successful POST request would be a 200 response code.

**GET** request:

We use GET to read or retrieve a resource. A successful GET returns a response containing the information you requested.

**PUT** request:

We use PUT to modify a resource. PUT updates the entire resource with data that is passed in the body payload. If there is no resource that matches the request, it will create a new resource.

**PATCH** request:

We use PATCH to modify a part of a resource. With PATCH, you only need to pass in the data that you want to update.

**DELETE** request:

We use DELETE to delete a resource.

## What are HTTP Headers

HTTP headers are additional pieces of information or metadata of information sent between the client and the server within an HTTP request or response, such as:

1. Content-Type: Indicates the media type of the resource being sent or requested. For example, "application/json" indicates that the data is in JSON format.

2. Authorization: Contains credentials to authenticate the client with the server. This header is crucial for secure APIs that require authentication.

3. Accept: Specifies the media types that the client is willing to accept in the response.

4. User-Agent: Provides information about the client making the request.

5. Cache-Control: Specifies caching directives for both the client and intermediate caches (such as proxy servers) to control how responses are cached.

6. Content-Length: Indicates the size of the message body in bytes.

7. Cookie: Contains stored HTTP cookies previously sent by the server with Set-Cookie.

8. X-Requested-With: Used to identify AJAX requests. It's often included by JavaScript libraries/frameworks.

## HTTP Status Code

HTTP status codes are standardized responses that servers send to clients in response to their HTTP requests. These status codes provide information about the outcome of the request, indicating whether it was successful, encountered an error, or requires further action by the client.

Here are some common categories of HTTP status codes along with their meanings:

- 1xx - Informational: These status codes indicate that the server has received the request and is continuing the process. They are informational and typically not encountered in practice.

- 2xx - Success: These status codes indicate that the request was successfully received, understood, and processed by the server.

  - 200 OK: The request was successful.
  - 201 Created: The request resulted in the creation of a new resource.
  - 204 No Content: The server successfully processed the request, but there is no content to return.

- 3xx - Redirection: These status codes indicate that further action is needed by the client to complete the request.

  - 301 Moved Permanently: The requested resource has been permanently moved to a new URL.
  - 302 Found (or Temporary Redirect): The requested resource resides temporarily at a different URL.
  - 304 Not Modified: The client's cached copy of the resource is still valid, and the server does not need to send a new copy.

- 4xx - Client Error: These status codes indicate that the client has made an error in the request, such as providing invalid data or requesting a resource that does not exist.

  - 400 Bad Request: The server could not understand the request due to invalid syntax.
  - 401 Unauthorized: The request requires authentication, and the client did not provide valid credentials.
  - 404 Not Found: The requested resource could not be found on the server.

- 5xx - Server Error: These status codes indicate that the server encountered an error while processing the request and was unable to fulfill it.

  - 500 Internal Server Error: A generic error message indicating that an unexpected condition was encountered on the server.
  - 503 Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance.

## How versioning works in Node.js

In Node.js, versioning typically refers to managing the version of your application or library, as well as the version of Node.js itself.

```
Example: Version - 4.18.2
```

Semantic versioning is a comman convention used for Node.js. It consists of three numbers separated by dots.

```
Major = 4
Minor = 18
Patch = 2
```

- Increment in major version signifies incompatible changes, such as API changes that could break existing functionality.

- Incrementing the minor version indicates backward-compatible additions, like new features.

- Incrementing the patch version suggests backward-compatible bug fixes.

The most commonly used symbol prefixes in Node versioning are:

- ^ (caret): Denotes that the specified version and any minor or patch updates are allowed, but not major updates.

- ~ (tilde): Denotes that the specified version and any patch updates are allowed, but not minor or major updates.

## Let's Start with Express.js

Express.js is a framework for NodeJS that builds on top of Node's HTTP module, providing a more structured and feature-rich environment for building web applications and APIs.

Here's why Express is often used alongside Node.js:

1. Simplicity: Express simplifies the process of building web applications in Node.js by providing a robust set of features and utilities out of the box.

2. Routing: Express provides a powerful routing system that allows developers to define how the application responds to client requests based on URL paths and HTTP methods.

3. Middleware: Middleware are functions that have access to the request and response objects, and they can perform tasks such as parsing request bodies, authentication, logging, and error handling.

4. Integration: Express integrates seamlessly with other NodeJS modules and third-party libraries, allowing developers to leverage a wide range of tools and resources in their applications.

5. Community and Ecosystem: Express has a large and active community, which means there are plenty of resources, tutorials, and libraries available to help developers build and maintain their applications.

**Here's the basic example of HTTP server in Express:-**

```
const express = require("express");

const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

app.get("/about", (req, res) => {
  res.send("hyy, I'm mohit");
});

// START SERVER
app.listen(8000, () => console.log("Server running on port 8000"));
```

## Let's Build REST API using Express

Before diving into build a Rest API, Let's understand what it is?

REST, which stands for Representational State Transfer, is an architectural style for designing networked applications. REST APIs are a set of rules and conventions that define how communication occurs between clients and servers over HTTP or HTTPS.

Key principles of RESTful APIs include:

- Client-Server Architecture: The client and server are separate concerns and can evolve independently. This separation allows for more flexibility and scalability.

- Stateless Communication: Communication between the client and server must be stateless, meaning each request from a client must contain all the necessary information to be understood by the server. This simplifies server logic and enhances scalability.

- Uniform Interface: RESTful APIs use a uniform interface, which simplifies and decouples the architecture. This includes resources identified by URIs, the use of standard HTTP methods (GET, POST, PUT, DELETE), and representation of resources (typically in JSON or XML format).

So, now let's see how to build Rest API using Express:-

```
✅ TASK:

1. Create a GET request for "/users" that render a HTML document to display all the users name and their email.

2. Create a GET request for "/api/users" that send all users data in JSON.

3. Create a GET request for "/api/users/:id" that send the single user which matches to "id".

4. Create a POST request for "/api/users" that creates a new user.

5. Create a PATCH request for "/api/users/:id" that modify a user details which matches to "id".

6. Create a DELETE request for "/api/users/:id" that delete a user details which matches to "id".
```

As of now, we didn't cover database, so we are creating a fake data and we will treat it like a database. Link to generate a fake data - [https://mockaroo.com/](https://mockaroo.com/)

```
✅ TASK SOLUTION - 1

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
```

```
✅ TASK SOLUTION - 2

// ROUTE FOR RENDER USERS DATA IN JSON
// ROUTE --> /api/users

app.get("/api/users", (req, res) => {
  res.json(users);
});
```

```
✅ TASK SOLUTION - 3

// ROUTE TO RENDER USER WITH ID
// ROUTE --> /api/users/:id

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) return res.status(404).json({ msg: "User not found!" });

  res.status(200).json(user);
});
```

As there is no direct way make a POST, PATCH and DELETE request from browser.

For this we'll use Postman to make it possible.

When you send users data from postman or frontend, the data comes in req.body. If you try to access that body using "console.log", you'll get "undefined" in terminal.

**Reason:**

When req.body comes to server, express doesn't know which types of data comes or how to parse it.

For this, we'll use Middleware, which parse incoming request bodies in different format:

- Express.json Middleware: Parse JSON body
- Express.urlencoded Middleware: Parse form body

Always use middleware before any routes.

```
✅ TASK SOLUTION - 4

// 👉 JSON MIDDLEWARE

app.use(express.json());

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
```

```
✅ TASK SOLUTION - 5

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
```

```
✅ TASK SOLUTION - 6

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
```

## Middlewares in Express

Middleware are funtions that works between the **request** and **response** cycle. Middleware gets executed after the server receives the **request** and before send the **response**.

Middleware has the access to the request object, response object, and next. It can process the request before the server send a response.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

An Express application can use the following types of middleware:

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware(e.g. express.json & express.urlencoded())

**Application-Level Middleware:**

An application level middleware is middleware that is applied globally across all routes or endpoints within a web application.

**Route-Level Middleware:**

Route level middleware is middleware that is applied to specific routes or endpoints within a web application.

Here's the example of Application level middleware:-

```
app.use((req, res, next) => {
  let logs = `${Date.now()} - ${req.method} - ${
    req.path
  } new request received\n`;

  fs.appendFile("./log.txt", logs, (err) => {
    if (err) return res.json({ error: err });

    next();
  });
});
```

This middleware function is designed to log information about incoming HTTP requests to a file named "log.txt".

This middleware will executed every time, when user try to access any of the route within the file.

Here's the example of Route level middleware:-

```
const checkForRole = (req, res, next) => {
  const role = req.query.role;

  if (!role) return res.json({ message: "Please provide a role" });

  if (role === "admin") {
    next();
  } else {
    res.json({ message: "Unauthorized" });
  }
};

// ROUTE FOR RENDER USERS DATA IN JSON
// ROUTE --> /api/users

app.get("/api/users", checkForRole, (req, res) => {
  res.json(users);
});
```

This middleware function named checkForRole checks if the incoming request has a query parameter named "role".

This middleware function ensures that only requests with the "admin" role parameter are allowed to pass through to the next middleware or route handler, otherwise, it returns an "Unauthorized" message.

This will apply only if users try to access "/api/users" route.

## Server Side Rendering with EJS

Server Side Rendering is a technique used in web development where the server generates the full HTML content of a web page and sends it to the client's browser.

SSR has several advantages, including improved performance, better search engine optimization (SEO), and enhanced accessibility. It ensures that the user receives the content more quickly since the initial page load includes all the necessary HTML.

Express supports server-side rendering using various template engines. EJS (Embedded JavaScript) is one such template engine that allows you to embed JavaScript code directly within your HTML markup.

Here's a basic example of how to set up server-side rendering using EJS with Express:

**Install the required dependencies:**

```
npm install ejs
```

**Create an Express application and configure it to use EJS as the template engine:**

```
const express = require("express");

const app = express();
const PORT = 8000;

// SET EJS AS THE VIEW ENGINE
app.set("view engine", "ejs");

// ROUTE THAT RENDER EJS FILE
app.get("/", (req, res) => {
  res.render("home", { title: "Home Page | Server Side Rendering" });
});

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
```

**Create an EJS template file (home.ejs) in a views directory:**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= title %></title>
  </head>
  <body>
    <h1>Home Page</h1>
  </body>
</html>
```

**Render Static Content**

Static content refers to files that are served directly to the client without any processing by the server. These can include HTML files, CSS stylesheets, client-side JavaScript files, images, and other types of files that don't change dynamically.

In Express, you can serve static content using the built-in express.static middleware. Here's how you can do it:

1. First, create a directory in your project to store your static files, called "public".
2. Place all your static files (HTML, CSS, images, etc.) inside this directory.

Now, in your Express application:

```
const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

// RENDER STATIC CONTENT(MIDDLEWARE)
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page | Server Side Rendering" });
});

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
```

## MVC Pattern

The Model-View-Controller (MVC) pattern is a software architectural pattern commonly used for designing user interfaces and organizing the codebase of applications. It divides an application into three interconnected components:

1. Model: The Model represents the application's data and business logic. It is responsible for managing the data, processing user inputs, and responding to queries about its state.

2. View: The View is responsible for presenting the data to the user and receiving user inputs. It represents the user interface components such as screens, forms, buttons, and other visual elements. Views are typically passive and do not contain any business logic.

3. Controller: The Controller acts as an intermediary between the Model and the View. It receives user inputs from the View, processes them (often by interacting with the Model), and determines how to update the View accordingly.

**Key characteristics of the MVC pattern include:**

1. Separation of Concerns: MVC separates the concerns of data management, user interface presentation, and application logic. This allows for better organization of code and easier maintenance and scalability of the application.

2. Modularity: Each component of MVC (Model, View, Controller) can be developed, tested, and modified independently, which promotes code reusability and flexibility.

3. User Interface Flexibility: Since the View and Controller are separate components, it is easier to modify the user interface without affecting the underlying data and logic, and vice versa.

## Introduction to MongoDB

MongoDB is a popular open-source NoSQL database program that uses a document-oriented data model. It's designed for scalability, flexibility, and performance, particularly with large amounts of unstructured or semi-structured data.

**In MongoDB, several key terminologies are essential to understand how data is organized and managed:**

1. Database: A database in MongoDB is a container for collections. It is the highest level of data organization.

2. Collection: A collection is a group of MongoDB documents. It's the equivalent of a table in relational databases.

3. Document: A document is a basic unit of data in MongoDB, similar to a row in a relational database table. It's a JSON-like data structure composed of field-value pairs.

4. Schema: The schema defines the expected structure and types of fields within documents.

**Here are some essential commands and concepts to learn in MongoDB:**

1. Commands related to database and collection management

   - To see all available databases, type `show dbs` in cmd terminal. Make sure to install MongoDB and MongoDB Shell before doing anything.

   - To switch or creating a new database, type `use <database name>`.

   - For creating a collection within a database, use `createCollection()` database method.

     E.g. `db.createCollection("myCollection")`

   - To see all collections which in database, type `show collections`.

   - For deleting a collection use `drop()` method with collection name.

     E.g. `db.myCollection.drop()`

   - For deleting a database use `dropDatabase()` method.

     E.g. `db.dropDatabase()`

2. CRUD Operations: MongoDB supports CRUD operations, which stand for Create, Read, Update, and Delete.

   - Create: insertOne(), insertMany()
   - Read: find(), findOne()
   - Update: updateOne(), updateMany(), replaceOne()
   - Delete: deleteOne(), deleteMany()

3. Query Operators: MongoDB offers a variety of query operators to perform operations like comparison, logical, array, element, etc.

   - $eq: Value are equal
   - $ne: Value are not equal
   - $gt: Value is greater than another value
   - $gte: Value is greater than or equal to another value
   - $lt: Value is less than to another value
   - $lte: Value is less than or equal to another value
   - $in: Value is matched within an array
   - $and: Returns documents where both queries match
   - $or: Returns documents where either queries match
   - $nor: Returns documents where both queries failed to match
   - $not: Returns documents where the query does not match

4. Querying Data: To query or filtering a data inside a collection, we ca passes a query inside a find() or findOne() methods.

**What is Data Modeling?**

Data modeling is the process of designing the structure of a database in order to represent real-world entities, their attributes, and the relationships between them.

In MongoDB, data modeling revolves around the concept of collections and documents. A collection is a group of documents, and each document is a set of key-value pairs.

**Here's how data modeling works in MongoDB:**

1. **Identify entities**: Determine the entities that need to be represented in your database. These could be real-world objects, such as users, products, orders, etc.

2. **Define attributes**: For each entity, identify its attributes or properties. These attributes will become the keys in your MongoDB documents.

3. **Determine relationships**: Analyze the relationships between different entities.

4. **Normalization vs. Denormalization**: Decide whether to normalize your data (separating related data into different collections and referencing them) or denormalize it (embedding related data within a single document).

5. **Schema design**: Design the schema for each collection based on the identified entities, attributes, and relationships.

**Data Modeling using Mongoose:**

Mongoose is an ODM (Object Data Modeling) library for MongoDB and provides a schema-based solution to model your application data.

## Authentication and Authorization

Authentication is the process of verifying the identity of a user or application, typically by requiring a valid username and password.

Authorization is the process of determining what an authenticated user is allowed to do, i.e., their permissions and access levels to resources.

Session-based and token-based authentication are two different approaches for managing user authentication and maintaining user sessions in web applications. Here's a breakdown of the key differences between the two:

**Session-Based Authentication**

How It Works:

1. User Login: The user provides their credentials (e.g., username and password) to the server.

2. Server Validation: The server validates the credentials.

3. Session Creation: If valid, the server creates a session and stores session information in server memory or a database. A unique session ID is generated.

4. Session ID Storage: The session ID is sent back to the client and stored in a cookie.

5. Subsequent Requests: For subsequent requests, the client sends the session ID cookie to the server.

6. Server Verification: The server verifies the session ID against the stored session data to authenticate the user.

Pros:

- Simpler Implementation: Easier to implement and understand.
- Server-Side Control: The server has full control over sessions and can invalidate them at any time.
- Session Expiry: Can easily manage session expiry and cleanup.

Cons:

- Scalability Issues: Storing sessions on the server can lead to scalability problems as the number of users grows.
- Stateful: The server needs to maintain state, which can complicate load balancing and clustering.

**Token-Based Authentication**

How It Works:

1. User Login: The user provides their credentials to the server.

2. Server Validation: The server validates the credentials.

3. Token Creation: If valid, the server generates a token (typically a JWT - JSON Web Token) that encodes user information and possibly other metadata.

4. Token Storage: The token is sent back to the client and typically stored in local storage or a cookie.

5. Subsequent Requests: For subsequent requests, the client sends the token (usually in the HTTP Authorization header).

6. Server Verification: The server verifies the token (typically using a secret key or public key) to authenticate the user.

Pros:

- Scalability: Better suited for scaling as the server does not need to store session data.
- Stateless: The server does not maintain state, which simplifies load balancing and clustering.
- Cross-Domain: Tokens can be easily used across different domains, enabling SSO (Single Sign-On).

Cons:

- Token Management: Handling token expiration, renewal, and invalidation can be complex.
- Security Risks: If a token is stolen, it can be used until it expires. Additional measures (like refresh tokens) are needed for added security.
- Implementation Complexity: More complex to implement correctly, especially regarding token storage and security.

## Data Association in MongoDB

Data association in MongoDB refers to the methods and strategies used to represent and handle relationships between different pieces of data. Unlike relational databases where relationships are defined through foreign keys and join operations, MongoDB, being a NoSQL database, handles data relationships differently due to its schema-less, document-oriented structure. There are mainly two ways to manage associations in MongoDB:

**Embedded Documents (Denormalization)**

In this approach, related data is stored together within a single document. This is useful for "contains" relationships where one entity logically contains another entity. For example, an order document might contain an array of item documents.

Example:

```
{
  "_id": 1,
  "customerName": "John Doe",
  "orderDate": "2024-05-23",
  "items": [
    {
      "productId": 101,
      "productName": "Laptop",
      "quantity": 1,
      "price": 1000
    },
    {
      "productId": 102,
      "productName": "Mouse",
      "quantity": 2,
      "price": 25
    }
  ]
}
```

Pros:

- Improved read performance: All related data is retrieved in a single query.
- Simplicity: Reduces the need for complex queries and joins.
- Atomicity: Updates to the document are atomic, simplifying consistency.

Cons:

- Data duplication: Same data might be repeated across multiple documents.
- Document size limit: MongoDB has a 16MB limit per document.
- Update complexity: Updating the embedded data in multiple documents can be challenging.

**References (Normalization)**

In this approach, related data is stored in separate documents, and relationships are established using references (typically ObjectIDs). This is suitable for "has-a" relationships where entities are related but not contained within each other.

Example:

```
{
  "_id": 1,
  "customerName": "John Doe",
  "orderDate": "2024-05-23",
  "items": [
    { "productId": 101, "quantity": 1 },
    { "productId": 102, "quantity": 2 }
  ]
}
```

Pros:

- Reduced data duplication: Commonly related data is stored once.
- Document size control: Helps to keep individual document sizes manageable.
- Flexibility: Easier to update related data without affecting the parent document.

Cons:

- Increased read complexity: Multiple queries are often required to retrieve related data.
- Consistency: Maintaining consistency across related documents can be more complex.
