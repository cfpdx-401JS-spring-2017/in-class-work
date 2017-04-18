const fsp = require('fs-promise');

// Promise.resolve(42)
//     .then(value => {
//         console.log('value is', value);
//     });

const readdirPromise = fsp.readdir(__dirname);
const mkdirPromise = fsp.mkdir('copy');

const allPromises = Promise.all([
    mkdirPromise,
    readdirPromise
]);

allPromises
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err));
