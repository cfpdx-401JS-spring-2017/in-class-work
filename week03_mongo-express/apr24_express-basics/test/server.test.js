const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../server');

describe('GET /', () => {

  const request = chai.request(app);

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