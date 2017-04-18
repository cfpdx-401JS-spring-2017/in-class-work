const fs = require('fs');

const filename = 'big.pdf'; //'README.md'
// O(n)
function readFile(filename) {
    fs.readFile(filename, (err, contents) => {
        if (err) return console.log(err);
        console.log('readFile', contents.length);
    });
}

readFile(filename);

// O(1)
function streamFile(filename) {
    const stream = fs.createReadStream(filename);
    
    stream.on('data', chunk => {
        console.log('stream file', chunk.length);
    });

    stream.on('end', () => {
        console.log('done reading stream');
    });
}

streamFile(filename)

