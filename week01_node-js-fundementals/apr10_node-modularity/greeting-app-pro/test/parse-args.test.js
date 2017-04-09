const assert = require('assert');
const parseArgs = require('../parse-args');

describe('parseArgs', () => {

    it('finds name', () => {
        const options = parseArgs(['marty']);
        assert.equal(options.name, 'marty');
    });
});