const fs = require('fs');
const path = require('path');
const copyFile = require('./copy-file');

function copyDir(sourceDir, destDir, callback) {

    // TODO: make mkdir and readdir parallel

    //fs.mkdir
    fs.mkdir(destDir, err => {
        if(err) return callback(err);

        //fs.readdir
        fs.readdir(sourceDir, (err, files) => {
            if(err) return callback(err);
            let count = files.length;
            
            files.forEach(file => {
                const sourcePath = path.join(sourceDir, file);
                const destPath = path.join(destDir, file);

                //copies file
                copyFile(sourcePath, destPath, err => {
                    if (err) return callback(err);
                    count--;
                    if (count === 0) {
                        callback();
                    }
                });
            });
        });
    });


}

module.exports = copyDir;