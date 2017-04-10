// require exported module from greet.js
const greet = require('./greet');

// process command line arguements
const name = process.argv[2];

// make greeting hello and the name
const greeting = greet(name);

// write response back to the console
console.log(greeting);