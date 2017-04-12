const fs = require('fs');

function copyFile(sourcePath, destPath, callback) {
    fs.readFile(sourcePath, (err, data) => {
        if(err) return callback(err);
        fs.writeFile(destPath, data, err => {
            if(err) return callback(err);
            callback();
        });
    });
};

module.exports = copyFile;