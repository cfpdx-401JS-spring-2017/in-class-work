const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    legs: {
        type: Number,
        required: true,
        min: 0,
        max: 8
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    toys: [{
        type: Schema.Types.ObjectId,
        ref: 'Toy'
    }]
});

module.exports = mongoose.model('Pet', schema);