const mongoose = require('mongoose');
mongoose.Promise = Promise;

// eslint-disable-next-line no-console
module.exports = function (dbUri, { log = console.log } = {}) {
    // TODO: handle "already connected" scenarios
    // close existing connection, unsubscribe etc...
    // for now, let's error out...
    if (mongoose.connection.readyState === mongoose.STATES.connected) {
        return Promise.reject('Mongoose already connected');
    }

    const promise = mongoose.connect(dbUri).then(() => mongoose.connection);

    // CONNECTION EVENTS
    mongoose.connection.on('connected', function () {
        log('Mongoose default connection open to ' + dbUri);
    });

    mongoose.connection.on('error', function (err) {
        log('Mongoose default connection error: ' + err);
    });

    mongoose.connection.on('disconnected', function () {
        log('Mongoose default connection disconnected');
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });

    return promise;    
};

