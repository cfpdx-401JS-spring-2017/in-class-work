const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello world');
});

module.exports = app;