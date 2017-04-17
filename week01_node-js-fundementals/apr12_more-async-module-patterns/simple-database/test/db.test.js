const assert = require('assert');
const rimraf = require('rimraf');
const SimpleDb = require('../lib/simple-db');

const TEST_DIR = './test/testDir';

const db = new SimpleDb(TEST_DIR);

describe('simple database', () => {

    before(done => {
        rimraf(TEST_DIR, err => {
            done(err);
        });
    });

    it('returns empty array on no data', done => {
        db.getAll('cats', (err, cats) => {
            if(err) return done(err);
            assert.deepEqual(cats, []);
            done();
        });
    });

    const tom = { name: 'Tom', type: 'grey tabby' };
    const garfield = { name: 'Garfield', type: 'orange tabby' };
    const felix = { name: 'Felix', type: 'tuxedo' };

    function saveCat(catToSave, callback) {
        db.save('cats', catToSave, (err, cat) => {
            if(err) return callback(err);
            assert.ok(cat._id);
            catToSave._id = cat._id;
            callback(null, cat);
        });       
    }

    it('saves', done => {
        saveCat(tom, (err, cat) => {
            db.get('cats', cat._id, (err, gotCat) => {
                if(err) return done(err);
                assert.deepEqual(gotCat, tom);
                done();
            });
        });
    });

    it('gets all with three cats', done => {
        saveCat(felix, (err, cat) => {
            if(err) return done(err);

            saveCat(garfield, (err, cat) => {
                if(err) return done(err);
                
                db.getAll('cats', (err, cats) => {
                    assert.equal(cats.length, 3);
                    // check for each cat
                    done();
                });
            });
        });
    });

    it('remove cat', done => {
        db.remove('cats', garfield._id, (err, result) => {
            if(err) return done(err);
            assert.deepEqual(result, { removed: true });
            done();
        });
    });

    it('remove returns false if object does not exist', done => {
        db.remove('cats', garfield._id, (err, result) => {
            if(err) return done(err);
            assert.deepEqual(result, { removed: false });
            done();
        });
    });

    it('get all return 2 cats', done => {
        db.getAll('cats', (err, cats) => {
            assert.equal(cats.length, 2);
            // check for each cat
            done();
        });
    });



});