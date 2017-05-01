const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// like "Cast"

const schema = new Schema({
    date: Date,
    dose: Number,
    vaccine: {
        type: Schema.Types.ObjectId,
        ref: 'Vaccine'
    }

});

module.exports = mongoose.model('Vaccination', schema);