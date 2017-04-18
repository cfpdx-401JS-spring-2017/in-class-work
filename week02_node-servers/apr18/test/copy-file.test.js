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

    it('copies', done => {
        const sourceFile = './test/sourceDir/bar.txt';
        const destFile = destDir + '/bar.txt';
        // run the copy file
        copyFile(sourceFile, destFile, err => {
            if (err) return done(err);
            const sourceContents = fs.readFileSync(sourceFile);
            const destContents = fs.readFileSync(destFile);
            assert.deepEqual(sourceContents, destContents);
            done();
        });
    });
});