const express = require('express');
const app = express();
const morgan = require('morgan');
const ObjectId = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

const connection = require('./connect');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/unicorns/:id', (req, res) => {
  const _id = new ObjectId(req.params.id);
  connection.db.collection('unicorns')
    .findOne({ _id })
    .then(unicorn => res.send(unicorn));
});

app.post('/unicorns', (req, res) => {
  connection.db.collection('unicorns')
    .insert(req.body)
    .then(response => {
      return response.ops[0];
    })
    .then(savedUnicorn => res.send(savedUnicorn))
    .catch(err => console.log(err));
});

module.exports = app;