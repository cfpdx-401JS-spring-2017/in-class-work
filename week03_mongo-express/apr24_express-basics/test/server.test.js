const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');
const connection = require('../lib/connect');

const request = chai.request(app);

describe('GET /', () => {


  it('says hello world', () => {

    return request
      .get('/')
      .then(res => (res.text))
      .then(text => assert.equal(text, 'hello world'));
  });

  it('serves images out of public', () => {
    return request
      .get('/images/panda.jpg')
      .then(res => {
        return assert.equal(res.statusCode, 200);
      });
  });
});

describe('unicorns REST api', () => {

  const DB_URI = 'mongodb://localhost:27017/unicorns-test';
  
  before(() => connection.connect(DB_URI));
  before(() => connection.db.dropDatabase());
  after(() => connection.close());

  function saveUnicorn(unicorn) {
    return request
      .post('/unicorns')
      .send(unicorn);
  }

  const foonicorn = {
    name: 'foonicorn',
    type: 'unicorn',
  };

  it('saves a unicorn', () => {
    return saveUnicorn(foonicorn)
      .then(res => res.body)
      .then(savedUnicorn => {
        assert.isOk(savedUnicorn._id);
        foonicorn._id = savedUnicorn._id;
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
    return request
      .get('/unicorns/doesnotexist')
      .then(
        () => { //resolve
          throw new Error('successful status code not expected');
        },

        res => { //reject
          assert.equal(res.status, 404);
          assert.isOk(res.response.body.error);

        }
      );
  });
});