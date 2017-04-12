const assert = require('assert');
const rimraf = require('rimraf');
const dbFactory = require('../lib/db-factory');
const SimpleDb = require('../lib/simple-db');

const TEST_DIR = './test/testDir';

const db = dbFactory(TEST_DIR);

const simpleDb = new SimpleDb(TEST_DIR);

describe('simple database', () => {

    before(done => {
        rimraf(TEST_DIR, err => {
            done(err);
        });
    });

    it('get cat by id', done => {
        const id = '123';
        db.get('cats', id, (err, cat) => {
            if(err) return done(err);
            assert.equal(cat._id, id);
            assert.equal(cat.name, 'garfield');
            done();
        });
    });

    it('get cat by id', done => {
        const id = '123';
        simpleDb.get('cats', id, (err, cat) => {
            if(err) return done(err);
            assert.equal(cat._id, id);
            assert.equal(cat.name, 'garfield');
            done();
        });
    });

    it('saves', done => {
        const cat = {
            name: 'Tom',
            type: 'grey tabby'
        };

        db.save('cats', cat, (err, cat) => {
            if(err) return done(err);
            assert.ok(cat._id);
        });
    });

});