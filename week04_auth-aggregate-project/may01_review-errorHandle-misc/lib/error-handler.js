//eslint-disable-next-line no-console
function getErrorHandler(log = console.log) {

    // eslint-disable-next-line no-unused-vars    
    function errorHandler(err, req, res, next) { 
        // choose which type of error handler
        const handler = chooseHandler(err);
        // invoke hander to get code and error
        const { code, error } = handler(err);
        // send back code and error data        
        res.status(code).send({ error });
    }

    errorHandler.chooseHandler = chooseHandler;
    errorHandler.mongooseError = mongooseError;
    errorHandler.customError = customError;
    errorHandler.unknownError = getUnknownError(log);

    function chooseHandler(err) { 
        // Mongoose Validation and Cast Errors
        if (err.errors) return errorHandler.mongooseError;
            
        // One of our errors, with "code" property
        else if (err.code) return errorHandler.customError;
        
        // or something unexpected?
        return errorHandler.unknownError;
    }

    return errorHandler;
}


module.exports = getErrorHandler;


function mongooseError(err) {
    const validations = err.errors;
    // create an array of all Mongoose errors
    const error = Object.keys(validations).reduce((messages, key) => {
        messages.push(validations[key].message);
        return messages;
    }, []);

    return { code: 400, error };
}

function customError(err) {
    // just use code and error from custom error
    return err;
}

function getUnknownError(log) {
    return function unknownError(err) {
        log(err);
        return { code: 500, error: 'Internal Server Error' };
    };
}