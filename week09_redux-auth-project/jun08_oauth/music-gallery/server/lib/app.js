const express = require('express');
const app = express();

/* middleware */
const morgan = require('morgan');
const redirectHttp = require('./redirect-http')();
const checkDb = require('./check-connection')();
const errorHandler = require('./error-handler')();
const ensureAuth = require('./auth/ensure-auth')();

app.use(morgan('dev'));
// Redirect http to https in production
if(process.env.NODE_ENV === 'production') {
    app.use(redirectHttp);
}
app.use(express.static('./public'));

/* routes */
const auth = require('./routes/auth/auth');
const me = require('./routes/me');
const album = require('./routes/albums');
const music = require('./routes/music');

if(process.env.NODE_ENV !== 'production') {
    app.use(checkDb);
}
app.get('/api/special', (req, res) => {
    console.log('hitting special route');
    res.send('<h1>hello</h1>');
});

app.use('/api/auth', auth);
app.use('/api/me', ensureAuth, me);
app.use('/api/albums', ensureAuth, album);
app.use('/api/music', ensureAuth, music);
app.use('/api/me', me);

// TODO: add handler for server request with path, like: /albums


app.use(errorHandler);

module.exports = app;