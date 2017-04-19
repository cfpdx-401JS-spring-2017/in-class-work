const fs = require('fs');

fs.readFile('test-bitmap.bmp', (err, buffer) => {
    const pixelStart = buffer.readUInt32LE(10);    
});