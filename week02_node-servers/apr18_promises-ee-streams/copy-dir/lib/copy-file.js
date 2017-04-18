const fsp = require('fs-promise');

function copyFile(sourcePath, destPath) {
    return fsp
        .readFile(sourcePath)
        .then(data => fsp.writeFile(destPath, data));
}

module.exports = copyFile;