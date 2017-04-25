const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const request = chai.request(app);

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
