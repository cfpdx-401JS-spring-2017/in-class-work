const fsp = require('fs-promise');

function copy(source, dest) {
    return fsp.readFile(source)
        .then(contents => {
            return fsp.writeFile(dest, contents);
        });
}

copy('bar.txt', 'qux.txt')
    .then(() => {
        console.log('copy file complete');
    });    ;