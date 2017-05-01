const connection = require('mongoose').connection;

/* export a small helper for dropping the db*/
module.exports = {
    drop() {
        return connection.dropDatabase();
    }
};