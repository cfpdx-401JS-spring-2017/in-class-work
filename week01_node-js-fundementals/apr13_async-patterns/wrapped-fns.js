const fs = require('fs');

// this example:
function someAsyncFunction1(path, cb) {
    fs.readFile(path, (err, data) => {
        if(err) cb(err);
        else cb(null, data);
    });
}

// can be written as:
function someAsyncFunction2(path, cb) {
    fs.readFile(path, cb);
}


someAsyncFunction2('READE.md', (err, data) => {
    console.log('file length', data.length);
});