const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: String,
    silent: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Toy', schema);