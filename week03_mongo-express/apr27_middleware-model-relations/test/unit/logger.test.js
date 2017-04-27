const assert = require('chai').assert;

function createLogger(log) {
    return (req, res, next) => {
        log(`Hi Ivy, you requested ${req.method} ${req.path}`);
        next();
    };
}

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
