const net = require('net');

const connectionToOtherServer = net.createConnection({ host: '192.168.0.38', port: 61000})

const server = net.createServer(function(connectedClient) {

    connectedClient.setEncoding('utf-8');
    
    connectedClient.on('data', function(data) {
        connectionToOtherServer.write(data + '|' + 'marty');
    });

});

server.listen(61000);
