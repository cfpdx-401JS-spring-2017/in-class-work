function getErrorHandler() {

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
            //eslint-disable-next-line no-console
            console.log(err);
        }

        // send back code and error data        
        res.status(code).send({ error });
    };  
}

module.exports = getErrorHandler;


// function getErrorHandler() {
//     // eslint-disable-next-line no-unused-vars    
//     return function errorHandler(err, req, res, next) { 
//         let handler = null;

//         // Mongoose Validation and Cast Errors
//         if (err.errors) {
//             handler = mongooseError;
//         }
//         // One of our errors, with "code" property
//         else if (err.code) {
//             handler = customError;
//         }
//         // or something unexpected?
//         else {
//             handler = unknownError;
//         }

//         const { code, error } = handler(err);

//         // send back code and error data        
//         res.status(code).send({ error });
//     };  
// }

// module.exports = getErrorHandler;

// function mongooseError(err) {
//     const validations = err.errors;
//     // create an array of all Mongoose errors
//     const error = Object.keys(validations).reduce((messages, key) => {
//         messages.push(validations[key].message);
//         return messages;
//     }, []);

//     return { code: 400, error };
// }

// function customError(err) {
//     return err;
// }

// function unknownError(err) {
//     //eslint-disable-next-line no-console
//     console.log(err);
//     return { code: 500, error: 'Internal Server Error' };
// }