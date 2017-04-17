
function hello(req, res) {
    res.end('hello world');
}

function goodbye(req, res) {
    res.end('goodbye world');
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
    const route = routes[req.url] || notFound;
    route(req, res);
}

module.exports = app;
