const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const request = chai.request(app);

it('returns super cat', done => {

    request.get('/cat')
        .end((err, res) => {
            if (err) return done(err);
            // eslint-disable-next-line
            assert.equal(res.text, `{ name: 'super cat', type: 'top secret' }`);
            // same as above, but objectified
            assert.deepEqual(res.body, superCat);
            done();
        });

});

it('returns super cat', () => {
    const superCat = { name: 'super cat', type: 'top secret' };

    return request.get('/cat')
        .then(res => {
            // eslint-disable-next-line
            assert.equal(res.text, `{ name: 'super cat', type: 'top secret' }`);
        });

});
