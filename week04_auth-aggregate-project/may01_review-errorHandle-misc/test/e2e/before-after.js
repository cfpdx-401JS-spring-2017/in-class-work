/* Let's connect to mongo once here */
const connect = require('../../lib/connect');

before(() => {
    return connect('mongodb://localhost:27017/petRkewl-test');
});
