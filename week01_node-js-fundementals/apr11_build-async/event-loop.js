const request = require('request');
const fs = require('fs');

request('http://www.google.com', function(err, res, body) {
    console.log('google:', body.slice(0, 10));
});

fs.readFile('package.json', 'utf-8', function(err, file) {
    console.log('file:', file.slice(0, 10))
});

setTimeout(function() {
    console.log('10ms later...');
}, 10);

setTimeout(function() {
    console.log('5s later...');
}, 5000);

console.log('I guess this execution is done for now...');

// console.log(process._getActiveRequests());
// console.log(process._getActiveHandles());