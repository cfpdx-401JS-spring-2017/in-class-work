const rimraf = require('rimraf');
const copyDir = require('../lib/copy-dir');
const fs = require('fs');
const assert = require('assert');

describe('copy directory', () => {

    const sourceDir = './test/sourceDir';
    const destDir = './test/destDir';

    before(done => {
        rimraf(destDir, err => {
            done(err);
        });
    });

    it('copies', () => {
        return copyDir(sourceDir, destDir)
            .then(() => {
                const sourceFiles = fs.readdirSync(sourceDir);
                const destFiles = fs.readdirSync(destDir);
                assert.deepEqual(sourceFiles, destFiles);
            });
    });
});