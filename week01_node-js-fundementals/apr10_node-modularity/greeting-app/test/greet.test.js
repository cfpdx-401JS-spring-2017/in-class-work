const assert = require('assert');
const greet = require('../greet');


describe('greet', () => {

    it('says hello', () => {
        const greeting = greet('Morgan');
        assert.equal(greeting, 'Hello Morgan');
    });

    it('says hello stranger when no name specified', () => {
        const result = greet();
        assert.equal(result, 'Hello stranger');
    });
});