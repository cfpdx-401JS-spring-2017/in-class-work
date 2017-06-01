const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    address: {
        validate: {
            validator: function () {
                return this.address && Object.keys(this.address).length === 2;
            },
            message: 'address and all fields are required'
        },
        type: {   
            city: String,
            state: String
        }
    }
});

const model = mongoose.model('Model', schema);

it.only('required object', () => {
    return new model({ address: { city: 'Portland', banana: 'OR' } }).validate();
});
