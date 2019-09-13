const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');

const MakesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    models: [],
    created_on: {
        type:Date,
        default: Date.now
    }    
});

mongoose.model('Makes', MakesSchema, 'makes');