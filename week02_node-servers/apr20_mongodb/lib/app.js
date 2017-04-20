const parsePath = require('./helpers/parsePath');
const notFound = require('./helpers/notFound');
const unicorns = require('./routes/unicorns');

const routes = {
    'unicorns': unicorns
};

function app(req, res) {
    console.log(req.method, req.url);
    const url = parsePath(req.url);
    req.query = url.query;
    req.params = url.params;

    res.setHeader('Content-Type', 'application/json');
    const route = routes[url.route] || notFound;
    route(req, res);
}

module.exports = app;
