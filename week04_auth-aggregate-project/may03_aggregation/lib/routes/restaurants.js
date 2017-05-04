const Router = require('express').Router;
const router = Router();
const Restaurant = require('../models/restaurant');

router
    .get('/', (req, res, next) => {
        Restaurant.find()
            .lean()
            .limit(100)
            .then(restaurants => res.send(restaurants))
            .catch(next);
    })
    .get('/top', (req, res, next) => {
        Restaurant.getTop()
            .then(top => res.send(top))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        res.send({ id: req.params.id });
    });

module.exports = router;
