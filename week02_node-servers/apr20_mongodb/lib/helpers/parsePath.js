const parseUrl = require('url').parse;

module.exports = function parsePath(path) {
    const parsed = parseUrl(path, true);
    const parts = parsed.pathname.slice(1).split('/');
    return {
        route: parts[0],
        query: parsed.query,
        name: parts[1]
    };
};
