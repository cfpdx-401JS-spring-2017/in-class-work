const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./error-handlers/error-handler');
const ensureAuth = require('./auth/ensure-auth')();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('./public'));

const auth = require('./routes/auth');
const pets = require('./routes/pets');
const stores = require('./routes/stores');
const toys = require('./routes/toys');
const vaccines = require('./routes/vaccines');
const me = require('./routes/me');

app.use('/api/auth', auth);
app.use('/api/me', ensureAuth, me);
app.use('/api/pets', ensureAuth, pets);
app.use('/api/stores', ensureAuth, stores);
app.use('/api/toys', ensureAuth, toys);
app.use('/api/vaccines', ensureAuth, vaccines);

app.use(errorHandler());

module.exports = app;
