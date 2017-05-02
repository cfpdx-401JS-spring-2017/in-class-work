//eslint-disable-next-line no-console
function getErrorHandler(log = console.log) {

    // eslint-disable-next-line no-unused-vars    
    return function errorHandler(err, req, res, next) { 
        
        let code, error;

        // Mongoose Validation and Cast Errors
        if (err.errors) {
            const validations = err.errors;
            // create an array of all Mongoose errors
            code = 400;
            error = Object.keys(validations).reduce((messages, key) => {
                messages.push(validations[key].message);
                return messages;
            }, []);
        }
        // One of our errors, with "code" property
        else if(err.code) {
            // by convention, we're passing in an object
            // with a code property === http statusCode
            // and a error property === message to display
            code = err.code;
            error = err.error;
        }
        // or something unexpected?
        else {
            // Default for errors we don't know about
            code = 500;
            error = 'Internal Server Error';
            log(err);
        }

        // send back code and error data        
        res.status(code).send({ error });
    };  
}

module.exports = getErrorHandler;