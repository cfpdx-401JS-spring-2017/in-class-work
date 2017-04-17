
function hello(req, res) {
    res.end('<h4>hello world</h4>');
}

function goodbye(req, res) {
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
    res.setHeader('Content-Type', 'text/html');
    const route = routes[req.url] || notFound;
    route(req, res);
}

module.exports = app;
