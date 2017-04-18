const fs = require('fs');

const stream = fs.createWriteStream('foo.txt');

stream.write('hello');
stream.write('world\n');
stream.write('it is a new day,');
stream.write('so go have fun');
stream.end();