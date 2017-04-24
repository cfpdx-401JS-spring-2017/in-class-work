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
      .then(res => res.text)
      .then(text => assert.equal(text, 'hello world'));
  });
});