const parseUrl = require('url').parse;
const fs = require('fs');
const path = require('path');
const cowsay = require('cowsay');

function hello(req, res) {
    const name = req.query.name || 'world';
    let greeting = `hello ${name}`;
    if(req.query.format === 'cowsay') {
        greeting = '<pre>' + cowsay.say({
            text : greeting,
            e : "oO",
            T : "U "
        }) + '</pre>';
    }
    res.end(greeting);
}

function goodbye(req, res) {
    res.end('<h5>goodbye world</h5>');
}

function getIndex(req, res) {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
        // TODO: deal with err...
        res.end(data);
    });
}

const routes = {
    '/': getIndex,
    '/index.html': getIndex,
    '/hello': hello,
    '/goodbye': goodbye
};

function notFound(req, res) {
    res.statusCode = 404;
    res.statusMessage = `${req.url} not found`;
    res.end();
}

function app(req, res) {
    console.log(req.method, req.url);
    const url = parseUrl(req.url, true);
    req.query = url.query;

    res.setHeader('Content-Type', 'text/html');
    const route = routes[url.pathname] || notFound;
    route(req, res);
}

module.exports = app;
