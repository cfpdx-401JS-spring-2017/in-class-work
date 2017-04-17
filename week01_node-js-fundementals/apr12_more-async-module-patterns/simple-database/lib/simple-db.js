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

    get(table, id, callback) {
        const filePath = path.join(this.getDir(table), `${id}.json`);
        fs.readFile(filePath, (err, data) => {
            if(err) return callback(err);
            const objectToGet = JSON.parse(data);
            callback(null, objectToGet);
        });
    }

    getAll(table, callback) {
        const dir = this.getDir(table);
        fs.readdir(dir, (err, files) => {
            if(err.code === 'ENOENT') return callback(null, []);
            if(err) return callback(err);
            if(!files.length) return callback(null, []);
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
}

module.exports = SimpleDb;