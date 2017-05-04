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
    }],
    vaccinations: [{
        _id: false,
        date: Date,
        dose: Number,
        vaccine: {
            type: Schema.Types.ObjectId,
            ref: 'Vaccine'
        }

    }]
});

schema.static('getDetailById', function (id) {
    return this.findById(id)
        .lean()
        .select('-__v')
        .populate({
            path: 'store',
            select: 'name'
        })
        .populate({
            path: 'toys',
            select: 'name'
        })
        .populate({
            path: 'vaccinations.vaccine',
            select: 'name'
        });
});

module.exports = mongoose.model('Pet', schema);