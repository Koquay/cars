const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');

const CarsSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    created_on: {
        type:Date,
        default: Date.now
    }    
});

mongoose.model('Cars', CarsSchema, 'cars');