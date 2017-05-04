const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const assert = require('chai').assert;

const schema = new Schema({
    count: {
        type: Number,
        min: 1,
        max: 5,
        require: true
    },
    name: {
        type: String,
        required: true
    }
});

const model = mongoose.model('Model', schema);

const throwOnSuccess = () => { throw new Error('expected validation failure'); };

it('has name "ValidationError"', () => {
    const data = {
        count: 'string',
        name: 'name'
    };
    return new model(data)
        .validate()
        .then(throwOnSuccess, err => {
            assert.equal(err.name, 'ValidationError');
        });
});
