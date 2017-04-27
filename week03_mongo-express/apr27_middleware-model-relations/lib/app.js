const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


app.use(morgan('dev'));
app.use(bodyParser.json());

/* pets is a http request event listener
(has signature: request, response, next)
AND is the express Router that will call the subroutes */
const pets = require('./routes/pets');
const stores = require('./routes/stores');

app.use('/api/pets', pets);
app.use('/api/stores', stores);

const Pet = require('./models/pet');

app.get('/foo',
    (req, res, next) => {
        if (req.query.sekrit === 'shhh') {
            next();
        }
        else {
            res.status(401).send('go away!');
        }
    },
    (req, res, next) => { 
        Pet.find().count()
            .then(count => {
                if (count === 3) next();
                else res.status(400).send('must have exactly three pets in your db to access this route');
            })
            .catch(next);
    },
    (req, res, next) => { 
        console.log('thrid middleware');
        res.send('all done');
    }
)

module.exports = app;
