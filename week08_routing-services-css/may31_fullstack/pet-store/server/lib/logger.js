function logger(log) {
    return (req, res, next) => {
        log(`Hi Ivy, you requested ${req.method} ${req.path}`);
        next();
    };
}

module.exports = logger;