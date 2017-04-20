const connect = require('./connect');
const bodyParser = require('./helpers/bodyParser');

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
        unicorns.find().toArray().then(unicorns => {
            const serialized = JSON.stringify(unicorns);
            res.end(serialized);
        });
    }
}

module.exports = unicorns;
