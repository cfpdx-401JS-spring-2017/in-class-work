const assert = require('assert');
const greet = require('../greet');

describe('greet', () => {

    it('by name', () => {
        assert.equal(greet({ name: 'marty' }), 'hello marty');
    });

    it('defaults to "stranger" when no name', () => {
        assert.equal(greet(), 'hello stranger');
    });
});