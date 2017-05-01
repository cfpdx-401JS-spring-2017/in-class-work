//eslint-disable-next-line no-console
function getErrorHandler() {

    // eslint-disable-next-line no-unused-vars    
    return function errorHandler(err, req, res, next) { 
        // choose which type of error handler
        const handler = chooseHandler(err);
        // invoke hander to get code and error
        const { code, error } = handler(err);
        // send back code and error data        
        res.status(code).send({ error });
    };  
}

getErrorHandler.chooseHandler = chooseHandler;
getErrorHandler.mongooseError = mongooseError;
getErrorHandler.customError = customError;
getErrorHandler.unknownError = unknownError;

module.exports = getErrorHandler;

function chooseHandler(err) { 
    // Mongoose Validation and Cast Errors
    if (err.errors) return mongooseError;
        
    // One of our errors, with "code" property
    else if (err.code) return customError;
    
    // or something unexpected?
    return unknownError;
}

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

function unknownError(err) {
    //eslint-disable-next-line no-console
    console.log(err);
    return { code: 500, error: 'Internal Server Error' };
}