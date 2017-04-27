const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        city: String
    }
});

module.exports = mongoose.model('Store', schema);