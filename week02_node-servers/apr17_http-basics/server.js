const http = require('http');
const app = require('./lib/app');

const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
    console.log('server running on port', server.address().port);
})