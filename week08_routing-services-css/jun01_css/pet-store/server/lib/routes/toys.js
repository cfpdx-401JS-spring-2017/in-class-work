const Router = require('express').Router;
const router = Router();
const Toy = require('../models/toy');

router
    .post('/', (req, res, next) => {
        new Toy(req.body)
            .save()
            .then(toy => res.send(toy))
            .catch(next);
    })
    .get('/', (req, res, next) => {
        Toy.find()
            .lean()
            .then(toys => res.send(toys))
            .catch(next);
    });


module.exports = router;