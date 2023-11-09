// server.js
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

const path = require('path');
let counter = 0
const server = http.createServer((req, res) => {
    counter = counter + 1
  // Check if the request URL is for the root path
  const parsedUrl = url.parse(req.url);
  const query = querystring.parse(parsedUrl.query);
  console.log(query)
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end(`Counter new: ${counter}`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
