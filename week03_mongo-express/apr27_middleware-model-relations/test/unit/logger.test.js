const assert = require('chai').assert;
const createLogger = require('../../lib/logger');

it('logs', () => {
    let logged = '';
    const log = (message) => logged = message; 
    
    const req = {
        method: 'GET',
        path: '/api/pet'
    };

    let nextCalled = false;
    const next = () => nextCalled = true;
    
    const logger = createLogger(log);
    
    logger(req, null, next);

    assert.equal(logged, 'Hi Ivy, you requested GET /api/pet');
    assert.equal(nextCalled, true);
});
