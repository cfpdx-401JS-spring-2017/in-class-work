const Router = require('express').Router;
const router = Router();
const Store = require('../models/store');
const Pet = require('../models/pet');

router
    .post('/', (req, res, next) => {
        console.log(req.body);
        new Store(req.body)
            .save()
            .then(store => res.send(store))
            .catch(err => next(JSON.stringify(err.errors, true, 2)));

    })

    .get('/', (req, res, next) => {
        Store.find()
            .lean()
            .then(store => res.send(store))
            .catch(next);
    })
    
    .get('/:id', (req, res, next) => {
        const storeId = req.params.id;
        Promise.all([
            Store.findById(storeId).lean(),
            Pet.find({ store: storeId }).lean()
        ])
            .then(result => {
                const store = result[0];
                const pets = result[1];
                store.pets = pets;
                res.send(store);
            })
            .catch(next);
            
    });


module.exports = router;