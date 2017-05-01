const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./error-handler');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('./public'));

const pets = require('./routes/pets');
const stores = require('./routes/stores');
const toys = require('./routes/toys');

app.use('/api/pets', pets);
app.use('/api/stores', stores);
app.use('/api/toys', toys);

app.use(errorHandler());

module.exports = app;
