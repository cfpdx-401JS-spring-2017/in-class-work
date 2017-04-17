const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const app = require('../lib/app');

chai.use(chaiHttp);

describe('app', () => {

    const request = chai.request(app);

    it('says hello world', done => {
        request.get('/hello')
            .end((err, res) => {
                assert.equal(res.text, 'hello world');
                done();
            });
    });

    it('says hello world', done => {
        request.get('/goodbye')
            .end((err, res) => {
                assert.equal(res.text, 'goodbye world');
                done();
            });
    });
});