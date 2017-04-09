const parseArgs = require('./parse-args');
const greet = require('./greet');

const options = parseArgs(process.argv.slice(2));
const greeting = greet(options);

/*eslint no-console: off */
console.log(greeting);