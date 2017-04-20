const cowsay = require('cowsay');

module.exports = function notFound(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    const message = res.statusMessage = `${req.url} not found`;
    const cowsaid = cowsay.say({
        text: message,
        e: 'oO',
        T: 'U '
    });

    res.end(`<pre>${cowsaid}</pre>`);
};