const fs = require('fs');
const path = require('path');
const shortid = require('shortid');
const mkdirp = require('mkdirp');


class SimpleDb {
    constructor(rootDir) {
        this.rootDir = rootDir;
    }

    getDir(table) {
        return path.join(this.rootDir, table);
    }

    getPath(table, id) {
        return path.join(this.getDir(table), `${id}.json`);
    }

    get(table, id, callback) {
        const filePath = this.getPath(table, id);
        fs.readFile(filePath, (err, data) => {
            if(err) return callback(err);
            const objectToGet = JSON.parse(data);
            callback(null, objectToGet);
        });
    }

    getAll(table, callback) {
        const dir = this.getDir(table);
        fs.readdir(dir, (err, files) => {
            if(err && err.code === 'ENOENT') return callback(null, []);
            if(err) return callback(err);
            if(!files.length) return callback(null, []);

            let count = files.length;
            const results = new Array(count);

            files.forEach((f, i) => {
                const id = path.basename(f, '.json');
                this.get(table, id, (err, item) => {
                    results[i] = item;
                    count = count - 1;
                    if(!count) {
                        callback(null, results);
                    }
                });
            });
        });
    }

    save(table, objectToSave, callback) {
        const dir = this.getDir(table);
        mkdirp(dir, err => {
            if(err) return callback(err);
            const id = objectToSave._id = shortid.generate();

            const filePath = path.join(dir, `${id}.json`);
            const serialized = JSON.stringify(objectToSave);
            fs.writeFile(filePath, serialized, err => {
                if(err) return callback(err);
                callback(null, objectToSave);
            });
        });
    }

    remove(table, id, callback) {
        const filePath = this.getPath(table, id);
        fs.unlink(filePath, err => {
            if(err) {
                if(err.code === 'ENOENT') {
                    callback(null, { removed: false });
                }
                else {
                    callback(err);
                }
            } 
            else {
                callback(null, { removed: true });
            }

        });
    }
}

module.exports = SimpleDb;