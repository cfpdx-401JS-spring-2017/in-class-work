const express = require('express');
const app = express();

/* middleware */
const morgan = require('morgan');
const redirectHttp = require('./redirect-http')();
const checkDb = require('./check-connection')();
const errorHandler = require('./error-handler')();

app.use(morgan('dev'));
// Redirect http to https in production
if(process.env.NODE_ENV === 'production') {
    app.use(redirectHttp);
}
app.use(express.static('./public'));

/* routes */
const album = require('./routes/albums');
app.use(checkDb);
app.use('/api/albums', album);

app.use(errorHandler);

module.exports = app;