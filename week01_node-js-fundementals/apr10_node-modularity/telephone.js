const net = require('net');

const client = net.createConnection({ host: '192.168.0.38', port: 61500})

net.createServer(function(c) {
    c.setEncoding('utf-8');
    c.on('data', function(data) {
        client.write(data + '|' + 'marty');
    });
}).listen(61000);


net.createServer(function(c) {
    c.setEncoding('utf-8');
    c.on('data', function(data) {
        console.log(data);
    });
}).listen(61500);