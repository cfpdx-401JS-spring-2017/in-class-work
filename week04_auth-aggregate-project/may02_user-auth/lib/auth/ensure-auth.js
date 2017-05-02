module.exports = function getEnsureAuth() {

    return function ensureAuth(req, res, next) {
        const token = req.get('Authorization');
        if (token === 'sekrit') next();
        else next({ code: 401, error: 'No Authorization Provided' });
    };

};
