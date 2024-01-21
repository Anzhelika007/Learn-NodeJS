// Creating a Hello World application using Node.js.
console.log('Hello World');

// Creating a Hello World application receiving the user input.
//(The first argument is location of the Node.js binary which runs the program and the second argument is location of the file being run.)
console.log(process.argv.slice(2));

// Import required modules
const http = require("http");

// Create server:
http.createServer().listen(8080);

// Read request and return response
// http.createServer(function (request, response) {...}).listen(8080);