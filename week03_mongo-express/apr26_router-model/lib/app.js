const express = require('express');
const app = express();
const morgan = require('morgan');

// example of "logging" type middleware that
// does passive work without being involved in 
// request or response
app.use((req, res, next) => {
    console.log(`${req.method} to path ${req.url}`);
    next();
});

// append additional request information
// to the request object
// (bodyparser, authorization/authentication)
app.use((req, res, next) => {
    req.foo = 'FOO';
    next();
});

app.get('/test', (req, res) => {
    res.send(req.foo);
});

app.get('/api/pets', (req, res) => {
    res.send([]);
});

module.exports = app;
