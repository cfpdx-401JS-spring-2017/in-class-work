const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

/* connect to the test database */
process.env.MONGODB_URI = 'mongodb://localhost:27017/pets-test';
// run the actual connect to db
require('../lib/connect');
// get a reference to the global connection,
// because we need to drop the database prior to
// running our tests
const connection = require('mongoose').connection;

/* Run our app */
// require our app
const app = require('../lib/app');
// let chaiHttp (via chai.request, which was because of chai.use(chaiHttp))
// start the server for us
const request = chai.request(app);

describe('unicorns REST api', () => {
    
    // start with a clean slate, empty db
    // for mongoose, use special dropDatabase directly on connection
    before(() => connection.dropDatabase());

    function saveUnicorn(unicorn) {
        return request.post('/unicorns').send(unicorn);
    }

    const foonicorn = {
        name: 'foonicorn',
        color: 'gold'
    };

    const hornie = {
        name: 'hornie',
        color: 'rainbow'
    };

    it('saves a unicorn', () => {
        return saveUnicorn(foonicorn)
            .then(res => res.body)
            .then(savedUnicorn => {
                assert.isOk(savedUnicorn._id);
                foonicorn._id = savedUnicorn._id;
                foonicorn.__v = 0;
                assert.deepEqual(savedUnicorn, foonicorn);
            });
    });

    it('GETs unicorn if it exists', () => {
        return request
            .get(`/unicorns/${foonicorn._id}`)
            .then(res => res.body)
            .then(unicorn => assert.deepEqual(unicorn, foonicorn));
    });

    it('returns 404 if unicorn does not exist', () => {
        return request.get('/unicorns/58ff9f496aafd447254c29b5').then(
            () => {
                //resolve
                throw new Error('successful status code not expected');
            },
            res => {
                //reject
                assert.equal(res.status, 404);
                assert.isOk(res.response.body.error);
            }
        );
    });

    it('GET all unicorns', () => {
        return saveUnicorn(hornie)
            .then(() => {
                return request.get('/unicorns');
            })
            .then(res => {
                const unicorns = res.body;
                assert.equal(unicorns.length, 2);
            });
    });
});
