const net = require('net');

const server = net.createServer(function(client) {
    client.setEncoding('utf-8');
    client.on('data', function(data) {
        console.log(data);
    });
})

server.listen(61500);