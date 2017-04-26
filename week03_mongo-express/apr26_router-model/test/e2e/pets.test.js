const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('pets api', () => {
    
    before(db.drop);

    it('initial /GET returns empty list', () => {
        return request.get('/api.pets')
            .then(req => {
                const pets = req.body;
                assert.deepEqual(pets, []);
            });
    });

});
