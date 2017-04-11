const fs = require('fs');
const path = require('path');

function copyDir(sourceDir, destDir, callback) {

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

                //fs.readFile
                fs.readFile(sourcePath, (err, data) => {
                    if(err) return callback(err);
                    //fs.writeFile
                    fs.writeFile(destPath, data, err => {
                        if(err) return callback(err);
                        // done with this file, but are we done with 
                        // ALL the files?
                        count--;
                        if(count === 0) {
                            callback();
                        }
                    });
                });
            });
        });
    });


}

module.exports = copyDir;