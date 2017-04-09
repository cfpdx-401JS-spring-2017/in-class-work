const http = require('http');
const url = require('url');
const greet = require('./greet');

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const greeting = greet(query); 
    res.end(greeting);
});

server.listen(8080, () => {
    /*eslint no-console: off*/
    console.log('http server running at', server.address());
});