const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Address = require('./address');

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'Yo, no forgetzy za {PATH}!']
    },
    address: Address.schema,
    yearFounded: Number
});

module.exports = mongoose.model('Store', schema);