const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/api/pets', (req, res) => {
    res.send([]);
});

module.exports = app;
