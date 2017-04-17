
function app(req, res) {
    console.log(req.method, req.url);
    if(req.url === '/hello') {
        res.end('hello world');
    }
    else if(req.url === '/goodbye') {
        res.end('goodbye world');
    }
    else {
        res.statusCode = 404;
        res.statusMessage = `${req.url} not found`;
        res.end();
    }
}

module.exports = app;
