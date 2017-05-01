const assert = require('chai').assert;
const getErrorHandler = require('../../lib/error-handler');

const chooseHandler = getErrorHandler.chooseHandler;
const mongooseError = getErrorHandler.mongooseError;
const customError = getErrorHandler.customError;
const unknownError = getErrorHandler.unknownError;

const MONGOOSE_ERROR = {
    errors: {
        name: { message: 'name is required' },
        count: { message: 'count is required' }
    }
};

const CUSTOM_ERROR = {
    code: 401,
    error: 'Unauthorized'
};

const UNKNOWN_ERROR = new Error('unknown error');

describe('errorHandler', () => {

    describe('choose handler', () => {
        it('mongoose', () => {
            assert.equal(chooseHandler(MONGOOSE_ERROR), mongooseError); 
        });
        
        it('custom', () => {
            assert.equal(chooseHandler(CUSTOM_ERROR), customError); 
        });
        
        it('mongoose', () => {
            assert.equal(chooseHandler(UNKNOWN_ERROR), unknownError); 
        });
    });

    describe('get code and error', () => {
        it('mongoose', () => {
            const { code, error } = mongooseError(MONGOOSE_ERROR);
            assert.equal(code, 400);
            assert.deepEqual(error, [
                MONGOOSE_ERROR.errors.name.message,
                MONGOOSE_ERROR.errors.count.message
            ]);
        });
        
        it('custom', () => {
            const { code, error } = customError(CUSTOM_ERROR);
            assert.equal(code, CUSTOM_ERROR.code);
            assert.equal(error, CUSTOM_ERROR.error);
        });
        
        it('unknown', () => {
            const { code, error } = unknownError(UNKNOWN_ERROR);
            assert.equal(code, 500);
            assert.equal(error, 'Internal Server Error');
        });
    });

    it('sends error response', () => {
        const errorHandler = getErrorHandler();

        const res = {
            status(code) { this.code = code; return this; },
            send(sent) { this.sent = sent; }
        };
        
        errorHandler(CUSTOM_ERROR, null, res, null);

        assert.equal(res.code, CUSTOM_ERROR.code);
        assert.deepEqual(res.sent, { error: CUSTOM_ERROR.error });
    });
});