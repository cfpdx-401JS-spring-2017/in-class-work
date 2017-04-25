const http = require('http');
const app = require('./lib/app');

http.createServer(app).listen(3000);