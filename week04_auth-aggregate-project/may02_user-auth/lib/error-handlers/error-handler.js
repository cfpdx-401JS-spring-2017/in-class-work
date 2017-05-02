//eslint-disable-next-line no-console
function getErrorHandler(log = console.log) {

    // eslint-disable-next-line no-unused-vars    
    function errorHandler(err, req, res, next) { 
        const handler = chooseHandler(err);
        const { code, error } = handler(err);
        res.status(code).send({ error });
    }

    errorHandler.chooseHandler = chooseHandler;
    errorHandler.mongooseError = mongooseError;
    errorHandler.customError = customError;
    errorHandler.unknownError = unknownError;

    return errorHandler;

    function chooseHandler(err) { 
        if (err.errors) return errorHandler.mongooseError;
        else if (err.code) return errorHandler.customError;
        return errorHandler.unknownError;
    }

    function mongooseError(err) {
        const validations = err.errors;
        
        const error = Object.keys(validations).reduce((messages, key) => {
            messages.push(validations[key].message);
            return messages;
        }, []);

        return { code: 400, error };
    }

    function customError(err) {
        return err;
    }

    function unknownError(err) {
        log(err);
        return { code: 500, error: 'Internal Server Error' };
    }
    
}

module.exports = getErrorHandler;
