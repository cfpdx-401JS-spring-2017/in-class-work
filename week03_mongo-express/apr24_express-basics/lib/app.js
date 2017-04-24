const express = require('express');
const app = express();
const morgan = require('morgan');
const ObjectId = require('mongodb').ObjectID;

const connection = require('./connect');

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

  // res.send(JSON.stringify({name: 'rainbow unicorn'}));
});

module.exports = app;