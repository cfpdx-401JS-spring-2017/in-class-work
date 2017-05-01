const Router = require('express').Router;
const router = Router();
const Vaccine = require('../models/vaccine');

router
    .post('/', (req, res, next) => {
        new Vaccine(req.body)
            .save()
            .then(vaccine => res.send(vaccine))
            .catch(next);
    })
    .get('/', (req, res, next) => {
        Vaccine.find()
            .lean()
            .then(vaccines => res.send(vaccines))
            .catch(next);
    });


module.exports = router;