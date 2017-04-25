const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    color: {
        type: String,
        enum: ['gold', 'silver', 'rainbow']
    },
    weight: {
        type: Number,
        min: 10
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    catchPhrases: [String]
});

module.exports = mongoose.model('Unicorn', schema);