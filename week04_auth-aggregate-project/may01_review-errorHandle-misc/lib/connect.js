/* eslint no-console: "off" */
const mongoose = require('mongoose');
mongoose.Promise = Promise;

// const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/pets';

module.exports = function (dbUri) {
    // TODO: close existing connection, if already open...
    const promise = mongoose.connect(dbUri).then(() => mongoose.connection);

    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open to ' + dbUri);
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });

    // If the Node process ends, close the Mongoose connection 
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });

    return promise;    
};

