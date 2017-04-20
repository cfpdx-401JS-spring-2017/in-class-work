const parseUrl = require('url').parse;
const fs = require('fs');
const path = require('path');
const notFound = require('./notFound');

const indexFile = path.join(__dirname, 'index.html');

function getIndex(req, res) {
    fs.createReadStream(indexFile).pipe(res);
}

function hello(req, res) {
    res.end('hello world');
}

const routes = {
    '/': getIndex,
    '/index.html': getIndex,
    '/hello': hello
};

function app(req, res) {
    console.log(req.method, req.url);
    const url = parseUrl(req.url, true);
    req.query = url.query;

    res.setHeader('Content-Type', 'text/html');
    const route = routes[url.pathname] || notFound;
    route(req, res);
}

module.exports = app;
