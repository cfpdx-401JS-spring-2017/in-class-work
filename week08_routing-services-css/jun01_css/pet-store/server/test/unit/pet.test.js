const assert = require('chai').assert;
const Pet = require('../../lib/models/pet');
const Store = require('../../lib/models/store');

const expectedValidation = () => { throw new Error('expected validation errors'); };

describe('pets model', () => {

    it('validates good model', () => {
        const store = new Store({ name: 'Downtown' });
        const pet = new Pet({
            name: 'Nagini',
            legs: 0,
            store: store._id
        });
        return pet.validate();
    });
    
    describe('validation failures', () => {

        it('name and legs are required', () => {
            const pet = new Pet();
            return pet.validate()
                .then(expectedValidation,
                err => {
                    const errors = err.errors;
                    assert.ok(errors.legs && errors.legs.kind === 'required');
                    assert.ok(errors.name && errors.name.kind === 'required');
                    assert.ok(errors.store && errors.store.kind === 'required');
                });
        });

        it('has at least 0 legs', () => {
            const pet = new Pet({
                name: 'pet',
                legs: -1
            });

            return pet.validate()
                .then(expectedValidation,
                err => {
                    const errors = err.errors;
                    assert.ok(errors.legs && errors.legs.kind === 'min');
                }
                );
        });

        it('has at no more than 8 legs', () => {
            const pet = new Pet({
                name: 'pet',
                legs: 9
            });

            return pet.validate()
                .then(expectedValidation,
                err => {
                    const errors = err.errors;
                    assert.ok(errors.legs && errors.legs.kind === 'max');
                }
                );
        });
    });    
});

