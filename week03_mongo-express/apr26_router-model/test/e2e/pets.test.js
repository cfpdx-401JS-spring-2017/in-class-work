const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('pets api', () => {
    
    before(db.drop);

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

    function savePet(pet) {
        
    }

    it('roundtrips a new pet', () => {
        return request
            // post our new pet    
            .post('/api/pets')
            // send the data as the request body
            .send(tweety)
            // get the response body
            .then(res => res.body)
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
                assert.deepEqual(got, tweety);
            });
    });

    it('deletes a pet', () => {

    });

});
