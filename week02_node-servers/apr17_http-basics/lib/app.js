const parseUrl = require('url').parse;

function hello(req, res) {
    const name = req.query.name || 'world';
    res.end(`<h4>hello ${name}</h4>`);
}

function goodbye(req, res, url) {
    res.end('<h5>goodbye world</h5>');
}

const routes = {
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
