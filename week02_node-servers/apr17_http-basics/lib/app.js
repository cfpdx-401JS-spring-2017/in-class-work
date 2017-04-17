function app(req, res) {
    console.log(req.method, req.url);
    res.end('hello world');
}

module.exports = app;
