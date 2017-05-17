/* eslint no-console: "off" */
const app = require('./lib/app');
const http = require('http');

const connect = require('./lib/connect');
const dbUri = process.env.MONGODB_URI || 'mongodb://admin:admin@ds137267.mlab.com:37267/eateries';
connect(dbUri);

const server = http.createServer(app);

const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log('server running on', server.address());
});
