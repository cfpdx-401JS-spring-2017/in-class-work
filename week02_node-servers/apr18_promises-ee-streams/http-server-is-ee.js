const http = require('http');

// const Server = http.Server;
// const server = new Server();
// server.on('request', (req, res) => {
//     res.end('hello world');
// });


// this is short-hand way to write the above:
const server = http.createServer((req, res) => {
    res.end('hello world');
});

server.listen(3000);

   