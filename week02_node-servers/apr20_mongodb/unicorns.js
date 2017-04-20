/* eslint no-console: off */
const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/cinema';

mongo.connect(url)
    .then(db => {
        console.log('connected to mongo!', db.databaseName);
        const unicorns = db.collection('unicorns');
        return unicorns.find({
            loves: 'carrot',
            weight: { $lt: 500 }
        }).toArray()
            .then(unicorns => {
                console.log(unicorns);
            });
    })
    .catch(err => {
        console.log('ERROR!', err.message);
    });
