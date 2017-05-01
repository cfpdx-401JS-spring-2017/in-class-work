const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// like "Actor"

const schema = new Schema({
    name: String,
    manufacturer: String
});

module.exports = mongoose.model('Vaccine', schema);