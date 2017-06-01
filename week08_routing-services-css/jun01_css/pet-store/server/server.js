/* eslint no-console: "off" */
const app = require('./lib/app');
const http = require('http');
require('./lib/connect');

const server = http.createServer(app);

server.listen(3001, () => {
    console.log('server running on', server.address());
});
