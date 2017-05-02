const db = require('./db');
const request = require('./request');
const assert = require('chai').assert;

describe('pets api', () => {
    
    before(db.drop);

    let store = null;    
    before(() => {
        return request.post('/api/stores')
            .send({ name: 'downtown' })
            .then(res => res.body)
            .then(savedStore => store = savedStore);
    });
    
    it('initial /GET returns empty list', () => {
        return request.get('/api/pets')
            .then(req => {
                const pets = req.body;
                assert.deepEqual(pets, []);
            });
    });

    let tweety = {
        name: 'tweety',
        legs: 2
    };

    let garfield = {
        name: 'garfield',
        legs: 4
    };

    let nagini = {
        name: 'Nagini',
        legs: 0
    };

    function savePet(pet) {
        pet.store = store._id;
        return request
            // post our new pet    
            .post('/api/pets')
            // send the data as the request body
            .send(pet)
            .then(res => res.body);
    }

    it('roundtrips a new pet', () => {
        return savePet(tweety)
            .then(saved => {
                // check that we were assigned id
                assert.ok(saved._id, 'saved has id');
                // reassign saved version to our variable
                tweety = saved;
            })
            // go get this same pet by id
            .then(() => {
                return request.get(`/api/pets/${tweety._id}`);
            })
            // get the data (pet) off they response body
            .then(res => res.body)
            .then(got => {
                // should be same as response from post
                assert.deepEqual(got, Object.assign(tweety, { store }));
            });
    });

    it('GET returns 404 for non-existent id', () => {
        const nonId = '589d04a8b6695bbdfd3106f1';
        return request.get(`/api/pets/${nonId}`)
            .then(
                () => { throw new Error('expected 404'); },
                res => {
                    assert.equal(res.status, 404);
                }  
            );
    });

    it('returns list of all pets', () => {
        return Promise.all([
            savePet(garfield),
            savePet(nagini)
        ])
            .then(savedPets => {
                garfield = savedPets[0];
                nagini = savedPets[1];
            })
            .then(() => request.get('/api/pets'))
            .then(res => res.body)
            .then(pets => {
                assert.equal(pets.length, 3);
                function test(pet) {
                    assert.include(pets, {
                        _id: pet._id,
                        legs: pet.legs,
                        name: pet.name,
                        store: {
                            _id: store._id,
                            name: store.name
                        }
                    });
                }
                test(tweety);
                test(garfield);
                test(nagini);
            });
    });

    it('updates pet', () => {
        // human transform! :)
        nagini.legs = 2;
        return request.put(`/api/pets/${nagini._id}`)
            .send(nagini)
            .then(res => res.body)
            .then(updated => {
                assert.equal(updated.legs, 2);
            });
    });

    it('deletes a pet', () => {
        return request.delete(`/api/pets/${garfield._id}`)
            .then(res => res.body)
            .then(result => {
                assert.isTrue(result.removed);
            })
            .then(() => request.get('/api/pets'))
            .then(res => res.body)
            .then(pets => {
                assert.equal(pets.length, 2);
            });
    });

    it('delete a non-existent pet is removed false', () => {
        return request.delete(`/api/pets/${garfield._id}`)
            .then(res => res.body)
            .then(result => {
                assert.isFalse(result.removed);
            });
    });

    it('errors on validation failure', () => {
        return savePet({})
            .then(
                () => { throw new Error('expected failure'); },
                () => { }  
            );
    });

    describe('vaccinations', () => {

        let vaccine = null;
        before(() => {
            return request.post('/api/vaccines')
                .send({ name: 'okiedokieitis', manufacturer: 'wellpet' })
                .then(res => res.body)
                .then(saved => vaccine = saved);
        });

        it('saves a pet with a vaccinations', () => {
            const date = new Date();
            let pet = {
                name: 'floppy',
                legs: 4,
                store: store._id,
                vaccinations: [{
                    date: date,
                    vaccine: vaccine._id
                }]
            };

            return savePet(pet)
                .then(saved => {
                    pet = saved;
                    assert.equal(pet.vaccinations.length, 1);
                })
                .then(() => request.get(`/api/pets/${pet._id}`))
                .then(res => res.body)
                .then(pet => {
                    delete pet.vaccinations[0]._id;
                    assert.deepEqual(pet.vaccinations, [{
                        vaccine: {
                            _id: vaccine._id,
                            name: vaccine.name
                        },
                        date: date.toISOString()
                    }]);
                });
        });
    });  

});
