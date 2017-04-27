const assert = require('chai').assert;
const createLogger = require('../../lib/logger');

it('logs', done => {
    let logged = '';
    const log = (message) => logged = message; 
    
    const req = {
        method: 'GET',
        path: '/api/pet'
    };
    
    const logger = createLogger(log);
    
    logger(req, null, done);

    assert.equal(logged, 'Hi Ivy, you requested GET /api/pet');
});
