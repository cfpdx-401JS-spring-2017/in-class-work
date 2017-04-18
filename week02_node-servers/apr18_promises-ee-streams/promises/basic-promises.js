const fsp = require('fs-promise');

fsp.readFile('foo.txt', 'utf-8')
    .then(contents => {
        console.log('first promise file contents', contents);
        return fsp.readFile(contents, 'utf-8');
    })
    .then(contents => {
        console.log('second promise file contents', contents);
    });