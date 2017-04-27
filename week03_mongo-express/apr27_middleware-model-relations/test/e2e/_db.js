/* Let's connect to mongo once here */
process.env.MONGODB_URI = 'mongodb://localhost:27017/petRkewl-test';
require('../../lib/connect');
const connection = require('mongoose').connection;


/* export a small helper for dropping the db*/
module.exports = {
    drop() {
        return connection.dropDatabase();
    }
};