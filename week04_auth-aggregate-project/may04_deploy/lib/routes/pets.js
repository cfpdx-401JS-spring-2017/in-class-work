const Router = require('express').Router;
const router = Router();
const Pet = require('../models/pet');

router
    .get('/', (req, res, next) => {
        // Pet.find returns a "query"
        Pet.find()
            .lean()    
            .select('name legs store')    
            .then(pets => res.send(pets))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        Pet.getDetailById(id)
            .then(pet => {
                if (!pet) throw { code: 404, error: `${id} not found` };
                else res.send(pet);
            })
            .catch(next);
    })

    .post('/', (req, res, next) => {
        const pet = new Pet(req.body);
        pet.save()
            .then(pet => res.send(pet))
            .catch(next);
    })

    .put('/:id/toys', (req, res, next) => {
        Pet.findById(req.params.id)
            .then(pet => {
                const newToyId = req.body.id;
                const toys = pet.toys;
                const hasToy = toys.some(t => t == newToyId);
                if (hasToy) return pet;

                pet.toys.push(newToyId);
                return pet.save();
            })
            .then(pet => {
                res.send(pet);
            })
            .catch(next);
    })
    
    .put('/:id', (req, res, next) => { 
        delete req.body._id;
        Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(pet => res.send(pet))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => { 
        Pet.findByIdAndRemove(req.params.id)
            .then(response => {
                // inspect response, which will be the deleted
                // documented, OR undefined if no document was 
                // deleted
                res.send({ removed: response ? true : false });
                // another way to write above:
                // res.send({ removed: !!response });
            })
            .catch(next);
    });


module.exports = router;