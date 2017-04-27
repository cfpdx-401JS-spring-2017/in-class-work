const Router = require('express').Router;
const router = Router();
const Store = require('../models/store');

router
    .post('/', (req, res, next) => {
        new Store(req.body)
            .save()
            .then(store => res.send(store))
            .catch(next);
    });


module.exports = router;