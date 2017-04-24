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

  const foonicorn = {
    name: 'foonicorn',
    type: 'unicorn',
  };

  it.only('saves a unicorn', () => {
    return request
      .post('/unicorns')
      .send(foonicorn)
      .then(res => res.body)
      .then(savedUnicorn => {
        assert.isOk(savedUnicorn._id);
      });
  });

  it('GETs unicorn if it exists', () => {
    return request
      .get('/unicorns');
  });

  it('returns 404 if unicorn does not exist', () => {

  });
});