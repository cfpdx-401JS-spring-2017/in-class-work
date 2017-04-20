const connect = require('../connect');
const bodyParser = require('../helpers/bodyParser');
const ObjectId = require('mongodb').ObjectId;

function unicorns(req, res) {
    const unicorns = connect.db.collection('unicorns');

    if (req.method === 'POST') {
        bodyParser(req)
            .then(body => JSON.parse(body))
            .then(unicorn => {
                // data validation goes here
                return unicorns.insert(unicorn);
            })
            .then(unicorn => {
                const serialized = JSON.stringify(unicorn.ops[0]);
                res.end(serialized);
            });
    }  
    else {
        if (req.params.id) { 
            unicorns.findOne({ _id: ObjectId(req.params.id) })
                .then(unicorns => {
                    const serialized = JSON.stringify(unicorns);
                    res.end(serialized);
                });
        }
        unicorns.find(req.query).toArray().then(unicorns => {
            const serialized = JSON.stringify(unicorns);
            res.end(serialized);
        });
    }
}

module.exports = unicorns;
