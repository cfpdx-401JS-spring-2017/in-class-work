const assert = require('chai').assert;
const ensureAuth = require('../../lib/auth/ensure-auth')();

describe('ensure auth middleware', () => {

    it('routes to error handler when no token found in Authorization header', () => {
        const req = {
            get() { return ''; }
        };

        let error;
        const next = (err) => error = err;
        
        ensureAuth(req, null, next);

        assert.deepEqual(error, { code: 401, error: 'No Authorization Provided' });
    });


    it('calls next with valid Authorization header', done => {
        const req = {
            get(header) { return header === 'Authorization' ? 'sekrit' : ''; }
        };

        ensureAuth(req, null, done);
    });
});