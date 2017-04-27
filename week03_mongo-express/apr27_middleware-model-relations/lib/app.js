const express = require('express');
const app = express();
// const morgan = require('morgan');
const logger = require('./logger');
const bodyParser = require('body-parser');


// app.use(morgan('dev'));
app.use(logger(console.log));
app.use(bodyParser.json());

/* pets is a http request event listener
(has signature: request, response, next)
AND is the express Router that will call the subroutes */
const pets = require('./routes/pets');
const stores = require('./routes/stores');

app.use('/api/pets', pets);
app.use('/api/stores', stores);

module.exports = app;
