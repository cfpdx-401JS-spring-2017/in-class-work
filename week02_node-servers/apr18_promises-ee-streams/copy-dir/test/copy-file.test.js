const rimraf = require('rimraf');
const copyFile = require('../lib/copy-file');
const fs = require('fs');
const assert = require('assert');
const mkdirp = require('mkdirp');

describe('copy file', () => {

    const destDir = './test/destDir';

    before(done => {
        rimraf(destDir, err => {
            if (err) return done(err);
            mkdirp(destDir, err => {
                done(err);
            });
        });
    });

    it('copies', () => {
        const sourceFile = './test/sourceDir/bar.txt';
        const destFile = destDir + '/bar.txt';
        // run the copy file
        return copyFile(sourceFile, destFile)
            .then(() => {
                const sourceContents = fs.readFileSync(sourceFile);
                const destContents = fs.readFileSync(destFile);
                assert.deepEqual(sourceContents, destContents);
            });
    });
});