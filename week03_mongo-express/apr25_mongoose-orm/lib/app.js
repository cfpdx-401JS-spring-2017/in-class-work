const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Unicorn = require('./models/unicorn');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/unicorns/:id', (req, res) => {
    Unicorn.findById(req.params.id)
        .then(unicorn => {
            if (!unicorn) {
                return res.status(404).send({ error: 'resource not found' });
            }
            res.send(unicorn);
        })
        .catch(err => {
            console.log(err);
            res.status(500).statusMessage('Internal Server Error');
        });
});

app.post('/unicorns', (req, res) => {
    new Unicorn(req.body)
        .save()
        .then(unicorn => {
            res.send(unicorn);
        })
        .catch(err => {
            console.log(err);
            res.status(500).statusMessage('Internal Server Error');
        });
});

module.exports = app;
