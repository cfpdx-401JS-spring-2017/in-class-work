const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequiredString = { type: String, required: true };

const schema = new Schema({
    street: RequiredString,
    city: RequiredString,
    state: RequiredString,
    zip: RequiredString
});

module.exports = mongoose.model('Address', schema);