const parsePath = require('./helpers/parsePath');
const notFound = require('./helpers/notFound');
const unicorns = require('./unicorns');

const routes = {
    'unicorns': unicorns
};

function app(req, res) {
    console.log(req.method, req.url);
    const url = parsePath(req.url);

    res.setHeader('Content-Type', 'application/json');
    const route = routes[url.route] || notFound;
    route(req, res);
}

module.exports = app;
