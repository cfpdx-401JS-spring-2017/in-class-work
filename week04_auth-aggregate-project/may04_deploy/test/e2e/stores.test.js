const db = require('./db');
const request = require('./request');
const assert = require('chai').assert;

describe('stores api', () => {
    
    before(db.drop);

    it('initial /GET returns empty list', () => {
        return request.get('/api/stores')
            .then(req => {
                const stores = req.body;
                assert.deepEqual(stores, []);
            });
    });

});
