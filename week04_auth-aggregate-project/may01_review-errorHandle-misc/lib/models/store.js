const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Address = require('./address');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: Address.schema
});

module.exports = mongoose.model('Store', schema);