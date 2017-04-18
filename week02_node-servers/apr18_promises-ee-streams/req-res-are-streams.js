const http = require('http');
const parseUrl = require('url').parse;
const fs = require('fs');

const greetings = [];

const server = http.createServer((req, res) => {

    const url = parseUrl(req.url, true);
    
    if (url.pathname === '/' || url.pathname === '/index.html' ) {
        const stream = fs.createReadStream('index.html');
        res.setHeader('Content-Type', 'text/html');

        stream.pipe(res);

        return;
    }
    
    if (url.pathname !== '/greetings') {
        res.statusCode = 404;
        res.statusMessage = 'PATH NOT FOUND';
        res.end();
        return;
    }

    res.setHeader('Content-Type', 'application/json');
    
    if (req.method === 'POST') {
        let body = '';
        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            const greeting = JSON.parse(body);
            greetings.push(greeting);
            res.end(JSON.stringify(greeting));
        });
    }

    else if (req.method === 'GET') {
        res.end(JSON.stringify(greetings));
    }
    
});

server.listen(3000);