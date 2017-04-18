const fsp = require('fs-promise');
const path = require('path');
const copyFile = require('./copy-file');

function copyDir(sourceDir, destDir) {
    return Promise.all([
        fsp.readdir(sourceDir),
        fsp.mkdir(destDir)
    ])
        .then(result => {
            const files = result[0];
            
            const copyPromises = files.map(file => {
                const sourcePath = path.join(sourceDir, file);
                const destPath = path.join(destDir, file);
                return copyFile(sourcePath, destPath);
            });

            return Promise.all(copyPromises);
        });
}

module.exports = copyDir;