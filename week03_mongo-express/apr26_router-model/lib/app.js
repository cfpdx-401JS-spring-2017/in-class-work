const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

const pets = require('./routes/pets');

app.use(pets);

module.exports = app;
