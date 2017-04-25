const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../lib/app');

const request = chai.request(app);

describe('http pop quiz', () => {
    it('returns super cat', () => {
        const superCat = { name: 'super cat', type: 'top secret' };

        return request.get('/cat')
            .then(res => {
                // superagent (chai-http) _if_ content type
                // is `application/json`, will deserialize
                // res.text to res.body
                assert.deepEqual(res.body, superCat);
            });
    });

    it('servers cat html for other GET', () => {
        return request.get('/')
            .then(res => {
                assert.equal(res.text, '<h1>Super Cat FTW!</h1>');
            });
    });

    it('returns 404 for none GET', () => {
        return request.post('/')
            .then(() => {
                throw new Error('should not succeed, 404 expected');
            }, res => {
                assert.equal(res.status, 404);
                // TODO: superagent bug? investigate
                // assert.equal(res.statusMessage, 'why u no cat?');
                assert.equal(res.text, '<h2>please cat</h2>');
            });
    });
});
