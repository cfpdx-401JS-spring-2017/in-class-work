/* eslint no-console: off */
const tokenService = require('./token-service');

module.exports = function getReadAuth() {

    return function readAuth(req, res, next) {
        const token = req.get('Authorization') || req.get('authorization');
        if (!token) return next();
            
        tokenService.verify(token)
            .then(payload => {
                req.user = payload;
                next();
            }, () => {
                next();
            });
    };

};