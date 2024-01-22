// Core Modules: Syntax
// const module = require('module_name');

const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to this page!');
    res.end();
}).listen(3000);

// Core Modules:
/*
http - creates an HTTP server in Node.js.
assert - set of assertion functions useful for testing.
fs - used to handle file system.
path - includes methods to deal with file paths.
process - provides information and control about the current Node.js process.
os - provides information about the operating system.
querystring - utility used for parsing and formatting URL query strings.
url - module provides utilities for URL resolution and parsing.
*/


// Сторонние модули. Сторонние модули — это модули, которые доступны в Интернете с помощью диспетчера пакетов узлов (NPM)
/*
Example:

npm install express
npm install mongoose
npm install -g @angular/cli
*/