const fsp = require('fs-promise');

const promise1 = fsp.readFile('README.md', 'utf-8');

const promise2 = promise1.then(contents => {
    console.log(contents.length);
    return 42;
});

promise2.then(data => {
    console.log('promise 2 got', data);
})

