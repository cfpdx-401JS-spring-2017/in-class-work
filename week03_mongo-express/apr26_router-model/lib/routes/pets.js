const Router = require('express').Router;
const router = Router();
const Pet = require('../models/pet');

router
    .get('/', (req, res) => {
        Pet.find()
            .then(pets => res.send(pets));
    })

    .get('/:id', (req, res) => {
        Pet.findById(req.params.id)
            .then(pet => res.send(pet));
    })

    .post('/', (req, res) => {
        new Pet(req.body)
            .save()
            .then(pet => res.send(pet));
    })
    
    .delete('/:id', (req, res) => { 
        Pet.findByIdAndRemove(req.params.id)
            .then(response => {
                // inspect response, which will be the deleted
                // documented, OR undefined if no document was 
                // deleted
                res.send({ removed: response ? true : false });
                // another way to write above:
                // res.send({ removed: !!response });
            });
    });


module.exports = router;