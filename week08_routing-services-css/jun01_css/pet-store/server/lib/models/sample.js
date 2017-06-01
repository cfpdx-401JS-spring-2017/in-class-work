const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cast = new Schema({
    role: {
        type: String,
        required: true
    },
    actor: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

const film = new Schema({

    cast: [cast]
});

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