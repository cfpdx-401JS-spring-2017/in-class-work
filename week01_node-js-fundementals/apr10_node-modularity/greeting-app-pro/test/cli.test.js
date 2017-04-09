const assert = require('assert');
const execFileSync = require('child_process').execFileSync;

describe('cli', () => {

    it('greets', () => {
        const out = execFileSync('node', ['index.js', 'marty']);
        assert.equal(out.toString(), 'hello marty\n');
    });
});