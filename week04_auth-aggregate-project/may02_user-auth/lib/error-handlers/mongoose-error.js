module.exports = function getHandler() {
    return mongooseError;
};

function mongooseError(err, req, res, next) {
    if (err.name !== 'ValidationError') return next(err);

    const validations = err.errors;

    const error = Object.keys(validations).reduce((messages, key) => {
        messages.push(validations[key].message);
        return messages;
    }, []);

    res.status(400).send(error);
}
