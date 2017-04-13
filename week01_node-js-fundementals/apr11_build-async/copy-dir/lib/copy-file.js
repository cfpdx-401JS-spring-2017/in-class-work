const fs = require('fs');

function copyFile(sourcePath, destPath, callback) {
    fs.readFile(sourcePath, (err, data) => {
        if(err) return callback(err);
        
        const callbackForWriteFileToCall = err => {
            if(err) return callback(err);
            callback(null);
        };

        fs.writeFile(destPath, data, callbackForWriteFileToCall);
    });
}

module.exports = copyFile;